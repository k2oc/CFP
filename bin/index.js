#!/usr/bin/env node
"use strict";
const program = require("commander");
const path = require("path");
const _ = require("lodash");
const fs = require("fs");
const {exec} = require("../libs/utils")
const main = require("../libs/main")
const loop = require("../libs/loop")
const minimist = require('minimist')
const chalk = require('chalk')
const runLog = require('../libs/runLog')
/**
 * @param -d 需要格式化文件路径 
 * @param -c cli执行
 * @param -p  prettier配置文件 暂支持 json  https://prettier.io/docs/en/configuration.html  
 * 
 */
program
.option("-d , --directory")  //  default: . 
.option("-p , --path")   // --find-config-path and --config 
.option('-c , --cli')  // 执行 CLI  default: false 
// .option("-ig , --ingore")
.parse(process.argv);

let rootPath = path.resolve ( process.cwd("./") )
let argv = minimist(process.argv.slice(2))
const options = program.opts();
let filePath = '' , config = {};

if(options.directory){
    // filePath =  path.join( path.resolve(rootPath) ,argv["d"])
    filePath  = argv['d'];
}
if(options.path){
    config = Object.assign(argv["p"])
}

(async ()=>{
   if(options.cli){
        let prettierCLI = path.resolve("./" , 'node_modules/ksr-cfp/node_modules/prettier/bin-prettier.js') ;
        if (fs.existsSync(prettierCLI)){
            let directory =  argv['d'] || '.'
            console.log(chalk.green('start fomart code'))
            await exec(`node ${prettierCLI} --check ${directory} --write ${directory}`)
            console.log(chalk.green('end fomart code'))
        }else{
            console.log(chalk.red("CFP error"))
        }
    }else{
        if(filePath){
            if(loop(filePath).length == 0 ){
                console.log(chalk.red("path error"+ filePath))
                return
            }
            _.forEach( loop(filePath) ,async function(file) {
                try {
                     await main(file , config )
                } catch (error) {
                    console.log(chalk.red(error))
                }
            })
        }else{
            console.log(chalk.red("path error"+ filePath))
        }
    
    }
})()




