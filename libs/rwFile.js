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
const fileType = require("./fileType")
const runLog = require('./runLog')
const rwFile = async  function(filePath = "", config ={}) {
    const text = fs.readFileSync(filePath, {encoding : 'utf-8' , flag :'r+'} );
    let $file = fileType(filePath) 
    prettier.resolveConfig( filePath ).then ( async function(){
      const $options = Object.assign( preConfig ,$file , config )
      if( $file ){
        if( checkFile( text ,  Object.assign ($options , $file ) )){
          runLog(  "Completed "+filePath , "success" )
        }else{
          const fileParse = prettier.getFileInfo.sync(filePath ) ;
          console.log( fileParse , filePath )
          if( fileParse && fileParse.inferredParser){
            try {
              // const res  = prettier.format( text , Object.assign ($options , $file ) ) 
              const res =  await handleFormat( text , Object.assign ($options , $file )  )
              fs.writeFileSync(filePath,res) 
              runLog( filePath , "success" )
            } catch (error) {
              runLog( error )
            }
          }else{
            runLog( "该文件类型暂未支持，功能开发中...  "  + filePath  )  
          }
        }
      }else{
        runLog("非法路径");
      }
   }).catch( error =>{ 
    runLog( error )
  }) 
}

function handleFormat( text , options ){
  return new Promise( (resolve , reject ) => {
    try {
      resolve( prettier.format( text , options ))      
    } catch (error) {
      reject( error )
    }
  }).catch( e => console.log("Error ", e) )
}

module.exports = rwFile