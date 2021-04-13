/**
 * 
 * @param { string } path 
 * 
 */

const fs = require("fs");
const allBabel = require('./allBabel')
function fileType( path = "" ){
    let result = ""
    if(splitFile(path)){
        result = allBabel(splitFile(path))
        if(result)
            return { parser : result }
        else 
            return { parser : -1 , suffix : splitFile(path) , path}
    }else{
        console.log("当前文件路径不是标准文件 ， 例如 1.txt " +  path ) 
        return { parser : -1 , suffix : splitFile(path) , path}
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