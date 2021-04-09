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
    console.log ($path) 
    if(fs.existsSync($path)){
        writeLog($path ,logs )
    }else{
        fs.writeFileSync($path , logs ,function(err){
            if(err){ console.log( chalk.red("write file error")) ; throw err }
        })
    }

    // if(logs){
    //     logs += Date.now(Date())
    //     // fs.writeFileSync($path , logs );
    // }
}

function writeLog(path , logs){
    if(logs) fs.writeFileSync(path , logs );
}

module.exports = runLog ;