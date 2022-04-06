
var fs = require('fs');
var join = require('path').join;
 
function loop(jsonPath){
    let jsonFiles = [];
    function resolveFile(path){
        let files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            let fPath = join(path,item);
            let stat = fs.statSync(fPath);
            if(stat.isDirectory() === true) {
                resolveFile(fPath);
            }
            if (stat.isFile() === true) { 
              jsonFiles.push(fPath);
            }
        });
    }
    resolveFile(jsonPath);
    return jsonFiles
}
module.exports = loop