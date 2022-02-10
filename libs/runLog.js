/**
 * @description Record the operation log
 * @param {*} type ? : error | success
 */
/**
 * @description
 * 1. Write Logs 
 * 2. Console Logs 
 */

const fs = require('fs')
const path = require('path')
const errorLog = "./prettier.error.log"
const outLog = "./prettier.access.log"
const process = require('process')
const chalk = require('chalk')
const dayjs = require('dayjs')

const runLog = function( logs = "", type = 'error'){
    let $type = type == 'error' ? errorLog : outLog 
    let $path = path.join(path.resolve ( process.cwd("../../")) , $type ) 
  
    if( type == 'error'){
        console.log( 
            chalk.redBright(  dayjs().format("YYYY-MM-DD HH:mm:ss") +  
            " Error :  \n " + logs  + " \n" )
        )
    }else{
        console.log(
            chalk.greenBright( dayjs().format("YYYY-MM-DD HH:mm:ss") + 
            " Success  :  \n "+ logs + " \n")
        )
    }

    writeLog($path , logs )
}

function writeLog(path , logs){ 
    var out =   '\n' + dayjs().format("YYYY-MM-DD HH:mm:ss") + ' >>> ' + logs ; 
    if(logs) fs.appendFileSync( path , out );
    else fs.writeFileSync(path , out , {encoding:'utf8',flag:'w'})
}

module.exports = runLog ;