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
const outLog = "./access.log"
const process = require('process')
const chalk = require('chalk')
const dayjs = require('dayjs')
const runLog = function( logs = "", type = 'error'){
    let $type = type == 'error' ? errorLog : outLog 
    let $path = path.join(path.resolve ( process.cwd("../../")) , $type ) 
    writeLog($path , logs )

}

function writeLog(path , logs){ 
    var out =   '\n' + dayjs().format("YYYY-MM-DD HH:mm:ss") + ' ==> ' + logs ; 
    if(logs) fs.appendFileSync( path , out );
    else fs.writeFileSync(path , out , {encoding:'utf8',flag:'w'})
}

module.exports = runLog ;