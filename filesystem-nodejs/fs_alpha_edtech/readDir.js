const fs = require('fs');

////////////////////////
//    ASSYNCHRONOUS   //
////////////////////////

fs.readdir('./', (err, files) =>{
  if (err) throw err;
  
  console.log(files);
})

////////////////////////
//    SYNCHRONOUS     //
////////////////////////

console.log(fs.readdirSync('./'))