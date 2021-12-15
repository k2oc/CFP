/**
 * prettier.resolveConfig(filePath [, options])
 * can be used to resolve configuration for a given source file, passing its path as the first argument.
 * error: The promise will be rejected if there was an error parsing the configuration file.
 */
const fs =  require('fs')
const prettier   = require('prettier')
const _  = require('lodash')
const preConfig = require("../.prettierrc.json")
const checkFile = require("./checkFile")
const chalk = require("chalk")
const fileType = require("./fileType")
const runLog = require('./runLog')

const rwFile = function(filePath = "", config ={}){
    const text = fs.readFileSync(filePath, "utf8");
    prettier.resolveConfig( filePath ).then ( async function(options){
      const $options = Object.assign( preConfig , fileType(filePath) , config )
      let $file = fileType(filePath) 
      if( $file ){
        if( checkFile( text ,  Object.assign ($options , $file ) )){
          var completeInfo =  "已格式化 "+filePath
          console.log(chalk.green( completeInfo ))
          runLog( completeInfo , "success" )
        }else{
          const fileParse = prettier.getFileInfo.sync(filePath ) ;
          if( fileParse && fileParse.inferredParser){
            try {
              var info = "格式化完成 " + filePath ;
              // const res  = prettier.format( text , Object.assign ($options , $file ) ) 
              const res =  await handleFormat( text , Object.assign ($options , $file )  )
              fs.writeFileSync(filePath,res) 
              console.log( chalk.greenBright (info ))
              runLog( info , "success" )
            } catch (error) {
              console.log( chalk.red( " error => " + error ))
              runLog( error )
            }
          }else{
            const error = "该文件类型暂未支持，功能开发中...  "  + filePath 
            console.log(chalk.redBright(error))
            runLog( error )
          }
        }
      }else{
        console.log( chalk.red("非法路径"))
      }
  })

}

function handleFormat( text , options ){
  return new Promise( (resolve , reject ) => {
    try {
      resolve( prettier.format( text , options ))      
    } catch (error) {
      reject( error )
    }
  }).catch( e => console.log("error ", e) )
}

module.exports = rwFile