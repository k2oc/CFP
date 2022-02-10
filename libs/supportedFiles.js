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
        graphql:"graphql",  // mjs
        md:"markdown",
        html:"html",
        vue:"vue", // parse as html   tmScope: 'text.html.vue',
        yaml:"yaml",
        jade: 'pug',
        pug:'pug',
        js: 'babel',
        sass: 'scss',
        styl: 'stylus'
    };
    return parser[type] || type
}
//   "styl":"prettier-style"

