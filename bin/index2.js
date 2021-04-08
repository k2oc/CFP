#!/usr/bin/env node
"use strict";
const program = require("commander");
const path = require("path");
const _ = require("lodash");
const fs = require("fs");
const globby = require("globby");
const reqModule = require("../libs/reqModule");
const filePath = "../.prettierrc.json"
const {exec} = require("child_process")
const prettier = require('prettier')
program
.option("-p ,--prettierrc")
// .option("-ig , --ingore")
.parse(process.argv);

const options = program.opts();
console.log(program.args);



// let result = {}
// _.forEach(program.args, (arg) => {
// 	let obj = reqModule(arg);
// 	result = _.defaultsDeep(obj, require(filePath));
// });

// let pa = '/Users/chenli/kingsoft/chenli7/ksc-waf-cfp/index.html'
// const text = fs.readFileSync(pa, "utf-8");
// prettier.resolveConfig(pa).then((options) => {

//   const formatted = prettier.format(text, options);

// });



const fd = fs.openSync(filePath , 'w');
const buffer = Buffer.from(JSON.stringify(result));
// fs.write(fd, buffer, 0, 10, 0, (err, bytesWritten, buffer) => {
//   if (err) throw err;
// //   console.log(bytesWritten);
// //   console.log(buffer.toString());
//   fs.writeFileSync(filePath , buffer)
// //   console.log(fs.readFileSync(filePath, 'utf8'));
// });
// console.log(buffer.toString())
// fs.writeFileSync(filePath , buffer.toString())
// const pathConvert = (file) => {
//     return !path.isAbsolute(file) ? path.resolve(process.cwd(), file) : file;
// };
// try {
//     fs.writeFileSync(pathConvert(program.args[0]) , buffer, err=>{
//         console.log(err)
//     })
    

// } catch (error) {
//     console.error(error)
// }



// //  require.cach
// //  缓存机制

// _.forEach( program.args , path =>{
//     console.log ( pathConvert(path) )
//     // let p = uncached(pathConvert(path))
//     // console.log(p)
//     // console.log(fs.readFileSync(pathConvert(path), 'utf8'))
//     // console.log(JSON.parse( JSON.stringify( fs.readFileSync(pathConvert(path), 'utf8'))))

//     // globby.sync( pathConvert(path) )
// })
// const  p =  uncached('/Users/chenli/kingsoft/chenli7/ksc-waf-cfp/.prettierrc.json')
// const k = uncached("/Users/chenli/kingsoft/chenli7/CFP/.prettierrc.json")
// console.log (k )

// console.log(_.merge(  p , k ))
// function uncached(module){
//     delete require.cache[require.resolve(module)]
//     return require(module)
// };

// function read(file, ...args) {
//     let result = {};
//     try {
//         result = uncached(pathConvert(file));
//         if (_.isFunction(result)) {
//             result = result(...args)
//         }
//     } catch (error) {
//         throw error;
//     }
//     return result;
// }
