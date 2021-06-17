const express = require('express');
const bp = require('body-parser')
const app = express();

/////////////////////////
//  FILE SYSTEM CLASS  //
/////////////////////////

function FileManagement(){
    const fs = require('fs');
    let dataDir;
    let dataFile;

    function setDataDir(_dataDir){
        if(typeof _dataDir == 'string'){
            dataDir = _dataDir;

            fs.readdir('./', (err, files) =>{
                if (err) throw err;
                
                if (files.filter(file => file == _dataDir).length == 0){
                    fs.mkdir(_dataDir, (err) =>{
                        if (err) throw err;
                    })
                }          
            })
        }
    };

    function setDataFile(_dataFile){
        if(typeof _dataFile == 'string'){
            dataFile = _dataFile;
        }
    };

    function setData(_content){
        if (typeof _content == 'object'){
            fs.readFile(`${dataDir}/${dataFile}`, (err, data) =>{
                if (err) throw err;
            
                let receivedJSON = JSON.parse(data);
                receivedJSON.push(_content);
            
                let updatedJSON = JSON.stringify(receivedJSON);
            
                const stringJSON = new Uint8Array(Buffer.from(updatedJSON));
            
                fs.writeFile(`${dataDir}/${dataFile}`, stringJSON, (err) => {
                    if (err) throw err;
                });         
            })
        } // error log
    };

    function getData(_callback){
        fs.readFile(`${dataDir}/${dataFile}`, (err, data) =>{
            if (err) throw err;
        
            let receivedJSON = JSON.parse(data);
            _callback(receivedJSON);
        })
    };

    return{
        setDataDir,
        setDataFile,
        setData,
        getData,
    }
};

///////////////////////////////
//  PERSONAL EXPENSES CLASS  // (not implemented)
///////////////////////////////

function PersonalExpenses(){
    let id;
    let category;
    let expDate;
    let postDate;
    let total;
    let linkedUser;

    function setId(_id){
        if (typeof(_id) == 'number' && _id % 1 == 0 && _id > 0){
            id = _id;
            return true;
        } else {
            // error.log
            return false;
        }
    };

    function getId(){
        return id;
    };

    function setCategory(_category){
        if (typeof(_category) == 'string' && _category.length < 30){ // check for symbols
            category = _category;
            return true;
        } else {
            // error.log
            return false;
        }
    };

    function getCategory(){
        return category;
    };

    function setExpDate(_expDate){
        if(_expDate instanceof HTMLElement){
            if(_expDate.valueAsNumber > 1262304000000 && _expDate.valueAsNumber < 2240524800000){ // from 2010/01/01 to 2040/12/31
                expDate = _expDate;
                return true;
            }
        } else if (Date.parse(_expDate) > 1262304000000 && Date.parse(_expDate) < 2240524800000){ // if value is passed directly
            expDate = _expDate;
            return true;
        } else {
            // error.log
            return false;
        }
    };

    function getExpDate(){
        return expDate;
    };

    function setPostDate(_postDate){
        if(_expDate instanceof HTMLElement){
            if(_postDate.valueAsNumber > 1262304000000 && _postDate.valueAsNumber < 2240524800000){ // from 2010/01/01 to 2040/12/31
                postDate = _postDate;
                return true;
            }
        } else if (Date.parse(_postDate) > 1262304000000 && Date.parse(_postDate) < 2240524800000){ // if value is passed directly
            postDate = _postDate;
            return true;
        } else {
            // error.log
            return false;
        }
    };

    function getPostDate(){
        return postDate;
    };

    function setTotal(_total){
        if (typeof(_total) == 'number' && _total > 0 && _total < 1000000000){
            total = _total;
            return true;
        } else {
            // error.log
            return false;
        }
    };

    function getTotal(){
        return total;
    };

    function setLinkedUser(_linkedUser){ // wtf is this
        if (true){
            linkedUser = _linkedUser;
            return true;
        } else {
            return false;
        }
    };

    function getLinkedUser(){
        return linkedUser;
    }

    return{
        setId,
        getId,
        setCategory,
        getCategory,
        setExpDate,
        getExpDate,
        setPostDate,
        getPostDate,
        setTotal,
        getTotal,
        setLinkedUser,
        getLinkedUser,
    };
};

let logedIn = false;
const userFileSystem = new FileManagement();
const categoryFileSystem = new FileManagement();
const expensesFileSystem = new FileManagement();
// const newExpense = new PersonalExpenses();

userFileSystem.setDataDir('testDir');
userFileSystem.setDataFile('users.json');

categoryFileSystem.setDataDir('testDir');
categoryFileSystem.setDataFile('categories.json');

expensesFileSystem.setDataDir('testDir');
expensesFileSystem.setDataFile('expenses.json');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.static('client-side'));

app.get('/users/:login', function(req, res){ // login
    const login = JSON.parse(req.params.login);
    userFileSystem.getData((arr) =>{
        let match = arr.filter(chosen => chosen.id == login.id);
        if (match.length == 1){
            if (match[0].password == login.password){
                logedIn = true;
                res.send('ok');
            } else{
                res.send('Senha incorreta.')
            }
        } else {
            res.send('Usuário não existe.');
        }
    });    
});

app.get('/userNames/:login', function(req, res){ // check if user exists
    const login = req.params.login;
    userFileSystem.getData((arr) =>{
        let match = arr.filter(chosen => chosen.id == login.id);
        if (match.length == 1){
            res.send('exists');
        } else {
            res.send('free');
        }
    })
});

app.get('/categories', function(req, res){ // get categories
    let receivedJSON = categoryFileSystem.getData((_receivedJSON)=>{
        receivedJSON = _receivedJSON;
        res.send(receivedJSON);
    })
})

app.post('/', function(req, res){ // register new user
    userFileSystem.setData(req.body);
    logedIn = true;
    res.json();
});

app.get('/monthlyTotal', function(req, res){ // get monthly total (needs to filter by id)
    let receivedJSON = expensesFileSystem.getData((_receivedJSON)=>{
        receivedJSON = _receivedJSON;
        res.send(receivedJSON);
    })
});

app.listen(80);