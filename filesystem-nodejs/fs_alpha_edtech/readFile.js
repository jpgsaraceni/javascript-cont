const fs = require('fs');

////////////////////////
//    ASSYNCHRONOUS   //
////////////////////////
let text;
fs.readFile('dirA/textoB.txt', (err, data) =>{
    if (err) throw err;

    text = data
})
const dataSync = new Uint8Array(Buffer.from('text'));
console.log(text);  
////////////////////////
//    SYNCHRONOUS     //
////////////////////////
  
