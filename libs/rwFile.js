// 1.读取文件
// 2.格式化
// 3.写入文件
const fs =  require('fs')
const prettier  = require('prettier')
const _  = require('lodash')
const preConfig = require("../.prettierrc.json")

const rwFile = function(filePath = "", config = {}){
    const text = fs.readFileSync(filePath, "utf8");
    prettier.resolveConfig(filePath).then((options) => {
      const formatted = prettier.format(text, _.merge(preConfig,options) );
      fs.writeFileSync(filePath, formatted )  
    });
}
module.exports = rwFile