/**
 * https://prettier.io/docs/en/options.html#parser
 * @param {*} type 
 */
const prettier = require('prettier');
const supportInfo = prettier.getSupportInfo() ;
const _  = require('lodash')
// extensions  [string]


 module.exports = function( type = ""){
    console.log( type )
    supportInfo

    /**
     * supportInfo[].linguistLanguageId  base on linguist-languages/data 
     * https://www.npmjs.com/package/linguist-languages
     * 
     */
    // styl : css  50 
    let custom = {
        styl : 50 
    }

    const parseCurstom = _.find( supportInfo.languages , lang => lang.linguistLanguageId === custom[type]) ;
    if( parseCurstom ){
        return  {
            ignored: false,
            inferredParser: 'css'
        } 
    }else{
        return ;
    }


    let parser = {
        // ts:"typescript",
        // css:"css",
        // scss:"scss",
        // less:"less" ,
        // json:"json" ,
        // json5:"json5",
        // graphql:"graphql",  // mjs
        // md:"markdown",
        // html:"html",
        // vue:"vue", // parse as html   tmScope: 'text.html.vue',
        // yaml:"yaml",
        // jade: 'pug',
        // pug:'pug',
        // js: 'babel',
        // sass: 'scss',
        // styl: 'stylus'
    };
    // return parser[type] || type
}
//   "styl":"prettier-style"

