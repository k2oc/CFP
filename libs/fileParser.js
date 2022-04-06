/**
 * 
 * @param { string } path 
 * 
 */

const fs = require("fs");
const prettier = require('prettier')
const supportedFiles = require('./supportedFiles')
const { getExtension }  = require('./utils')
function fileParser( path = "" ){
    const fileInfo = prettier.getFileInfo.sync( path ) ;
    // supported 
    if( fileInfo &&  fileInfo.inferredParser){
        return fileInfo 
    }else{ 
        // unsupported
        /**
         * 
         * linguist-languages/data 
         * 
         */
        const extension = getExtension( path )
        const parserObject = supportedFiles( extension )
        return parserObject

    }
    // if(getExtension(path)){
    //     result = supportedFiles(getExtension(path))
    //     if(result)
    //         return { parser : result, suffix : getExtension(path) ,   filePath : path }
    //     else 
    //         return { parser : -1 , suffix : getExtension(path) ,   filePath : path }
    // }else{
    //     console.log("当前文件路径不是标准文件 ， 例如 1.txt " +  path ) 
    //     return { parser : -1 , suffix : getExtension(path)  , filePath : path}
    // } 
};


module.exports = fileParser