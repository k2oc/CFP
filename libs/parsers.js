/**
 * 
 * @param { string } path 
 * 
 */

const fs = require("fs");
const prettier = require('prettier')
const { getExtension }  = require('./utils')
const mime = require('mime')
const supportInfo = prettier.getSupportInfo();
function fileParser( path = "" ){
    const fileInfo = prettier.getFileInfo.sync( path ) ;
    const extension = getExtension( path )    
    const type = mime.getType( extension )
    type 

    // supported 
    if( fileInfo &&  fileInfo.inferredParser){
        return Object.assign( fileInfo , { parser : fileInfo.inferredParser})
    }else{ 
        /**
         * unsupported
         * linguistLanguagesId  : linguist-languages/data 
         * 
         */
        // let parserMap = new Map( ); 
        // let parser = {
        //     'sass' : 'scss'
        // }

        // return {

        //     parser : parser[extension]
        // }
        return ;
    }
   
};


module.exports = fileParser