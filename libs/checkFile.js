
/**
 * prettier.check(source [, options])
 * checks to see if the file has been formatted with Prettier given those options and returns a Boolean. 
 * This is similar to the --check or --list-different parameter in the CLI and is useful for running Prettier in CI scenarios.
 * CLI  prettier --check .
 * @param {*} source 
 * @returns boolean
 */

const prettier = require('prettier')
const checkFile = function(source ,options = {}){
    if(source){
       return prettier.check( source ,options)
    }else{
        console.log("file error")
        return false  
    }
};

module.exports = checkFile;