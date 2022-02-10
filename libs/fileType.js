/**
 * 
 * @param { string } path 
 * 
 */

const fs = require("fs");
const supportedFiles = require('./supportedFiles')
function fileType( path = "" ){
    let result = ""
    if(splitFile(path)){
        result = supportedFiles(splitFile(path))
        if(result)
            return { parser : result, suffix : splitFile(path) ,   filePath : path }
        else 
            return { parser : -1 , suffix : splitFile(path) ,   filePath : path }
    }else{
        console.log("当前文件路径不是标准文件 ， 例如 1.txt " +  path ) 
        return { parser : -1 , suffix : splitFile(path)  , filePath : path}
    } 
};

function splitFile( path = ""){
    if ( fs.existsSync( path ) ){
        let result = path.split(".");
        if(result.length > 0 ){
            if( result[result.length - 1] )
                return result[result.length - 1]
            else 
                return ""     
        }else{
            return ""  
        }
    }else{
        return "" ;
    }
    
}
module.exports = fileType