/**
 * @description Record the operation log
 * @param {*} type ? : error | success
 */
/**
 * ToDo 
 * 创建文件夹  fs.mkdirSync
 */

const fs = require('fs')
const path = require('path')
const errorLog = "./error.log"
const outLog = "./out.log"
const process = require('process')
const chalk = require('chalk')
const runLog = function( logs = "", type = 'error'){
    let $type = type == 'error' ? errorLog : outLog 
    let $path = path.join(path.resolve ( process.cwd("../../")) , $type ) 
    if(fs.existsSync($path)){
        writeLog($path , logs )
    }else{
        // TODO ...
        writeLog($path , logs )
    }
}

function writeLog(path , logs){
    if(logs) fs.appendFileSync(path ,  '\n' + Date() + "=======================\n" + logs + '\n' );
}

module.exports = runLog ;