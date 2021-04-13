/**
 * prettier.resolveConfig(filePath [, options])
 * can be used to resolve configuration for a given source file, passing its path as the first argument.
 * error: The promise will be rejected if there was an error parsing the configuration file.
 */
const fs =  require('fs')
const prettier   = require('prettier')
const  { parse , hasPragma , locEnd , locStart , preprocess , Plugin}  = require("prettier")
const _  = require('lodash')
const preConfig = require("../.prettierrc.json")
const checkFile = require("./checkFile")
const chalk = require("chalk")
const fileType = require("../plugin/fileType")
// const pugPlugin = require("@prettier/plugin-pug")
const process =  require('process')

const rwFile = function(filePath = "", config ={}){
    const text = fs.readFileSync(filePath, "utf8");
    prettier.resolveConfig( filePath ).then ( function(options){
      const $options = Object.assign( preConfig , fileType(filePath))

      // prettier.format("code", {
      //   parser: "foo",
      //   pluginSearchDirs: ["./dir-with-plugins"],
      //   plugins: ["./foo-plugin"],
      // });

      // const txt = prettier.format("lodash ( )", {
      //   parser(text, { babel }) {
      //     const ast = babel(text);
      //     ast.program.body[0].expression.callee.name = "_";
      //     return ast;
      //   },
      // });

      // console.log(txt)
      let $file = fileType(filePath) 
      if( $file ){
        if($file.parser == -1 ){
          let suffix = $file.suffix ;
          $options.parser = 'babel'
          if(suffix == "pug"){
            // const res = prettier.format( text , {
            //   plugins: [ pugPlugin ]
            // })
            // console.log("pug ---- ",res)
            // fs.writeFileSync(filePath,res) 
          }
          console.log("suffix" , suffix)
          if(suffix == "styl"){
            $options.parser = 'css'
            const res = prettier.format( text , $options )
            // fs.writeFileSync(filePath,res) 
          }
          
        }else{
          const res = prettier.format( text , Object.assign ($options , options ))
          fs.writeFileSync(filePath,res) 
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