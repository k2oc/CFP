#!/usr/bin/env node
"use strict";
const program = require("commander");
const path = require("path");
const _ = require("lodash");
const fs = require("fs");
const globby = require("globby");
const reqModule = require("../libs/reqModule");
const {exec} = require("child_process")
const prettier = require('prettier')
const stat = require("../libs/stat")
const rwFile = require("../libs/rwFile")
const loop = require("../libs/loop")
const minimist = require('minimist')
const chalk = require('chalk')
/**
 * @param -s 需要格式化文件路径 
 * @param -p  prettier配置文件 暂支持 json
 */
program
.option("-s")
.option("-p")
// .option("-ig , --ingore")
.parse(process.argv);

let $1 = path.resolve ( process.cwd("./") )
let $2 = minimist(process.argv.slice(2))
const options = program.opts();
let $path = '';
if(options.s){
    $path =  path.join( path.resolve($1) ,$2["s"])
}
if($path){
    if(loop($path).length == 0 ){
        console.log(chalk.red("path error"+ $path))
        return
    }
    _.forEach( loop($path) ,async function(file) {
        try {
            await rwFile(file)
        } catch (error) {
            console.log(chalk.red(error))
        }
    })
}else{
    console.log(chalk.red("path error"+ $path))
}

if(options.p){

}


console.log(chalk.green("Complete..."))

// console.log(a)


// rwFile('/Users/chenli/kingsoft/chenli7/ksc-security-cfp/develop/mixins/dialog.js')
