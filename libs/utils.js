
const child_process = require('child_process')
const fs = require('fs')
const exec =  function( command ){
    return new Promise( (resolve , reject )=>{
        const comm = child_process.exec(command , { maxBuffer: 50000 * 1024 },  (error , stdout , stderr)=>{
            if( stderr ){
                reject(stderr)
            }else{
                resolve(stdout)
            }
        })
        //  stdin: Writable | null;
        // stdout: Readable | null;
        // stderr: Readable | null;
        comm.stdout.pipe(process.stdout)
        comm.stderr.pipe(process.stderr)
    })
}
const getExtension = function ( path = ""){
    if ( fs.existsSync( path ) ){
        let last =  path.replace(/^.*[/\\]/, '').toLowerCase(); 
        let extension = last.replace(/^.*\./, '').toLowerCase();
        return extension 
    }else{
        return "" ;
    }
    
}
module.exports = utils = {
    exec , 
    getExtension,
}