#!/usr/bin/env node
"use strict";
const program = require("commander");
const path = require("path");
const _ = require("lodash");
const fs = require("fs");
const {exec} = require("../libs/utils")
const rwFile = require("../libs/rwFile")
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

let $1 = path.resolve ( process.cwd("./") )
let $2 = minimist(process.argv.slice(2))
const options = program.opts();
let $path = '' , $config = {};

if(options.directory){
    $path =  path.join( path.resolve($1) ,$2["d"])
}
if(options.path){
    $config = Object.assign($2["p"])
}

(async ()=>{
   if(options.cli){
        let $cli = path.resolve("./" , 'node_modules/CFP/node_modules/prettier/bin-prettier.js') ;
        let isSupport =  process.versions.node  > '10.13.0' 
        if(!isSupport){
            console.log(chalk.red("Node Error : prettier requires at least version 10.13.0 of Node, please upgrade"))
            console.log(chalk.red("Node Current Version : " + process.versions.node  ))
            return ; 
        }
        if (fs.existsSync($cli)){
            let _s =  $2['d'] || '.'
            console.log(chalk.green('start fomart code'))
            await exec(`node ${$cli} --check ${_s} --write ${_s}`)
            console.log(chalk.green('end fomart code'))
        }else{
            console.log(chalk.red("CFP error"))
        }
    
    }else{
    
        if($path){
            if(loop($path).length == 0 ){
                console.log(chalk.red("path error"+ $path))
                return
            }
            _.forEach( loop($path) ,async function(file) {
                try {
                    await rwFile(file , $config )
                } catch (error) {
                    // runLog(error);
                    console.log(chalk.red(error))
        
                }
            })
        }else{
         
            console.log(chalk.red("path error"+ $path))
        }
    
    }
})()




