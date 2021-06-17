const fs = require('fs');

let dirName = 'dirA'

function readRecursive(dir){
  fs.readdir(dir, (err, files) =>{
    if (err) throw err;
    
    files.forEach(element => {
      let currentFile = dirName.concat('/', element);
      fs.stat((currentFile), (err, stats) =>{
        if (err) throw err;

        if (stats.isDirectory()){
         dirName = currentFile;
         readRecursive(currentFile)}
      })  
    });
    console.log(files);
  })
}

readRecursive(dirName);

// só está funcionando com um subdiretório em casa diretório.