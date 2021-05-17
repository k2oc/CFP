const { parse , hasPragma , locStart , locEnd , preprocess }  = require('prettier')
module.exports =  { 
    "prettier-pug":{
        parse , 
        astFormat: 'stylelint-prettier',
        hasPragma , locStart , locEnd , preprocess
    }

}