const { parse , hasPragma , locStart , locEnd , preprocess }  = require('prettier')
module.exports =  { 
    "prettier-pug":{
        parse , 
        astFormat: '@prettier/plugin-pug',
        hasPragma , locStart , locEnd , preprocess
    }

}