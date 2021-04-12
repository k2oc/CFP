/**
 * prettier.resolveConfig(filePath [, options])
 * can be used to resolve configuration for a given source file, passing its path as the first argument.
 * error: The promise will be rejected if there was an error parsing the configuration file.
 */
const fs =  require('fs')
const prettier  = require('prettier')
const _  = require('lodash')
const preConfig = require("../.prettierrc.json")
const checkFile = require("./checkFile")
const chalk = require("chalk")

const rwFile = function(filePath = "", config ={}){
    const text = fs.readFileSync(filePath, "utf8");
    if(checkFile(text)){
      console.log(chalk.bgGray(filePath + " format complete "))
    }else{
      console.log(chalk.bgGreen(filePath + " start format  "))
      prettier.resolveConfig(filePath).then((options) => {
        // options -> prettier 默认自动读取 .prettierrc.json  .prettierrc.xml ...  
        // 强制接入，读取用户自定义信息 
        // 若不需要, config 替换为 options 
        // const formatted = prettier.format(text, _.merge(preConfig,options) );
        const formatted = prettier.format(text, _.merge(preConfig,config) );
        fs.writeFileSync(filePath, formatted )  
      });
    }

    
}
module.exports = rwFile