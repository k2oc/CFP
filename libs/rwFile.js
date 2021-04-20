/**
 * prettier.resolveConfig(filePath [, options])
 * can be used to resolve configuration for a given source file, passing its path as the first argument.
 * error: The promise will be rejected if there was an error parsing the configuration file.
 */
const fs =  require('fs')
const prettier   = require('prettier')
const  { parse , hasPragma , locEnd , locStart , preprocess }  = require("prettier")
const _  = require('lodash')
const preConfig = require("../.prettierrc.json")
const checkFile = require("./checkFile")
const chalk = require("chalk")
const fileType = require("../plugin/fileType")
const _plugin = require("../plugin/index") ;
const pugPlugin = require("@prettier/plugin-pug")
const { pull } = require('lodash')
const rwFile = function(filePath = "", config ={}){
    const text = fs.readFileSync(filePath, "utf8");
    prettier.resolveConfig( filePath ).then ( function(options){
      const $options = Object.assign( preConfig , fileType(filePath))

      // prettier.format("code", {
      //   parser: "foo",
      //   pluginSearchDirs: ["./dir-with-plugins"],
      //   plugins: ["./foo-plugin"],
      // });

      // console.log(txt)
      let $file = fileType(filePath) 
      if( $file ){
        let suffix = $file.suffix ;
        if(suffix  == 'pug')
          $options.parser = 'pug'
        console.log($options)  
        const res = prettier.format( text , $options )
       
          
        fs.writeFileSync(filePath,res) 
        if($file.parser == -1 ){
          // $options.parser = 'babel'

          // if( suffix === 'styl'){
          //   // console.log("********************")
          //   // $options.parser = 'postcss-styl'
          //   // console.log( path.resolve("./node_modules/CFP/node_modules/postcss-styl"))
          //   // $options.plugins  = ["./node_modules/CFP/node_modules/postcss-styl"]

          // }else if( suffix === 'pug'){
          //   console.log("pugPlugin.parsers",pugPlugin.parsers.pug)
          //   const res = prettier.format( text , {
          //     parser: pugPlugin.plugin.astFormat
          //   })
          //   fs.writeFileSync(filePath,res) 
          // }


          // const res = prettier.format( text , Object.assign ($options , options ))
          // fs.writeFileSync(filePath,res) 
        }else{


        
          // console.log( " Object.assign ($options , options )-------", Object.assign ($options , options ) )
        
        }
       
      }else{

        
      }
      
  })

    // if(checkFile(text)){
    //   console.log(chalk.bgGray(filePath + " format complete "))
    // }else{
    //   console.log(chalk.bgGreen(filePath + " start format  "))
    //   prettier.resolveConfig(filePath).then((options) => {
    //     // options -> prettier 默认自动读取 .prettierrc.json  .prettierrc.xml ...  
    //     // 强制接入，读取用户自定义信息 
    //     // 若不需要, config 替换为 options 
    //     // const formatted = prettier.format(text, _.merge(preConfig,options) );
    //     const formatted = prettier.format(text, _.merge(preConfig,config) );
    //     fs.writeFileSync(filePath, formatted )  
    //   });
    // }

    
}
module.exports = rwFile


const languages = [
  {
    name :  "plugin-pug",
    parsers: ["./CFP/node_modules/@prettier/plugin-pug"]
  }
]

const parsers  = {
  "plugin-pug" : {
    parse ,
    astFormat: "./CFP/node_modules/@prettier/plugin-pug",
    hasPragma,
    locStart,
    locEnd,
    preprocess,
  }
}