
/**
 * prettier.check(source [, options])
 * checks to see if the file has been formatted with Prettier given those options and returns a Boolean. 
 * This is similar to the --check or --list-different parameter in the CLI and is useful for running Prettier in CI scenarios.
 * CLI  prettier --check .
 * @param {*} source 
 * @returns boolean
 */

const prettier = require('prettier')
const preConfig = require("../.prettierrc.json")
const checkFile = function(source ,options = {}){
    if(source && options.parser != -1){
       return prettier.check( source , Object.assign( preConfig , options )) 
    }else{
        return false  
    }
};

module.exports = checkFile;