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
const fileParser = require("./fileParser")
const runLog = require('./runLog')
const rwFile = async function(filePath = "", config ={}) {
    const textString = fs.readFileSync(filePath, {encoding : 'utf-8' , flag :'r+'} );
    let getFileParser = fileParser(filePath) 
    prettier.resolveConfig( filePath ).then ( async function(){
      const mergeOptions = Object.assign( preConfig ,getFileParser , config )
      if( getFileParser ){
        if( checkFile( textString ,  Object.assign (mergeOptions , getFileParser ) )){
          runLog("Completed "+ filePath , "success" )
        }else{
          try {
              const res =  await handleFormat( textString , Object.assign (mergeOptions , getFileParser )  )
              fs.writeFileSync(filePath,res) 
              runLog( filePath , "success" )
            } catch (error) {
              runLog( error )
            }
          }
      }else{
        runLog( "该文件类型暂未支持，功能开发中...  "  + filePath  )  
      }
   }).catch( error =>{ 
    runLog( error )
  }) 
}

function handleFormat( textString , options ){
  return new Promise( (resolve , reject ) => {
    try {
      const customParse = {
        // parser(text , {label}){
          
        // }
      }
      resolve( prettier.format( textString , options ))      
    } catch (error) {
      reject( error )
    }
  }).catch( e => console.log("Error ", e) )
}

module.exports = rwFile