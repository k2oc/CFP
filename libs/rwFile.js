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

const rwFile = function(filePath = "", config ={}){
    const text = fs.readFileSync(filePath, "utf8");
    prettier.resolveConfig( filePath ).then ( function(options){
      const $options = Object.assign( preConfig , fileType(filePath) , config )
      let $file = fileType(filePath) 
      if( $file ){
        if( checkFile( text ,  Object.assign ($options , $file ) )){
          console.log(chalk.green( "已格式化"+filePath))
        }else{
          const fileParse = prettier.getFileInfo.sync(filePath ) ;
          if( fileParse && fileParse.inferredParser){
            console.log(chalk.green("开始格式化" + filePath ))
            
            const res  = prettier.format( text , Object.assign ($options , $file ) )  
            fs.writeFileSync(filePath,res) 

            console.log(chalk.green("完成格式化" + filePath ))
          }else{
            console.log(chalk.redBright("该文件类型暂未支持，功能开发中..."  + filePath ))
          }
        }
      }else{}
  })

}
module.exports = rwFile