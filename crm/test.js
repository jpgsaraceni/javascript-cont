const fs = require('fs')
let dataDir = "testDir"
let dataFile = "users.json"

fs.readFile(`${dataDir}/${dataFile}`, (err, data) =>{
    if (err) throw err;

    let receivedJSON = JSON.parse(data);
    console.log(typeof receivedJSON);
    console.log(receivedJSON);
});