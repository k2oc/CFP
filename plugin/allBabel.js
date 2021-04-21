/**
 * https://prettier.io/docs/en/options.html#parser
 * @param {*} type 
 */

module.exports = function( type = ""){
    let parser = {
        ts:"typescript",
        css:"css",
        scss:"scss",
        less:"less" ,
        json:"json" ,
        json5:"json5",
        graphql:"graphql",
        md:"markdown",
        html:"html",
        vue:"vue", // parse as html 
        yaml:"yaml",
        jade: 'html',
        styl: "css",
        sass:'css',
        pug:'pug'
        
    };
    return parser[type] || ''
}

function parseTemplate(type){

}

