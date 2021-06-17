/////////////////
//  USER CLASS // OK!
/////////////////

function User(){
    let id;
    let name;
    let email;
    let phoneNumber;
    let password;

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

    function setName(_name){
        if (typeof(_name) == 'string' && _name.length < 30){ // check for symbols
            name = _name;
            return true;
        } else {
            // error.log
            return false;
        }
    };

    function getName(){
        return name;
    };

    function setEmail(_email){
        if (typeof(_email) == 'string' && _email.length < 30){ // check for @ and . and symbols
            email = _email;
            return true;
        } else {
            // error.log
            return false;
        }
    };

    function getEmail(){
        return email;
    };

    function setPhoneNumber(_phoneNumber){
        if (typeof(_phoneNumber) == 'string' && _phoneNumber.length > 7 && _phoneNumber.length < 15 ){
            phoneNumber = _phoneNumber;
            return true;
        } else {
            // error.log
            return false;
        }
    };

    function getPhoneNumber(){
        return phoneNumber;
    };

    function setPassword(_password){
        if(_password == "") {
            // 'enter password' message  
            // error.log
            return false;
        } else if(_password.length < 6 || _password.length > 20){
            // 'password must be 6 to 20 characters long' message
            // error.log
            return false;
        } else {
            password = _password;
        }
    };

    function checkPassword(_inputPassword){
        if (_inputPassword == password){
            return true;
        } else {
            // incorrect password message
            // error.log
            return false;
        }
    };

    return{
        setId,
        getId,
        setName,
        getName,
        setEmail,
        getEmail,
        setPhoneNumber,
        getPhoneNumber,
        setPassword,
        checkPassword,
    }
};

////////////////////////////////
//  EXPENSE CATEGORIES CLASS  // OK!
////////////////////////////////

function ExpenseCategories(){
    let ids = [];
    let categoryNames = [];

    function setId(_id){
        if (typeof(_id) == 'number' && _id % 1 == 0 && _id > 0){
            ids.push(_id);
            return true;
        } else {
            // error.log
            return false;
        }
    };

    function getIds(){
        return ids;
    };

    function setCategoryName(_categoryName){
        if (typeof(_categoryName) == 'string' && _categoryName.length < 30){ // check for symbols
            categoryNames.push(_categoryName);
            return true;
        } else {
            // error.log
            return false;
        }
    };

    function getCategoryNames(){
        return categoryNames;
    };

    return{
        setId,
        getIds,
        setCategoryName,
        getCategoryNames,
    }
};

//////////////////////////
//  INSTANCING CLASSES  //
//////////////////////////

const newUser = new User();
const loggedUser = new User();
const categories = new ExpenseCategories();

/////////////////////////////////
//  SETTING PAGE DOM ELEMENTS  //
/////////////////////////////////

const loginPage = document.getElementById("loginPage");
const signUpPage = document.getElementById("signUpPage");
const landingPage = document.getElementById("landingPage");
const expensesPage = document.getElementById("expensesPage");
const addExpensePage = document.getElementById("addExpensePage");
const addExpenseCategoryPage = document.getElementById("addExpenseCategoryPage");
const signUpErrorMessage = document.getElementById("signUpErrorMessage");

const ipAdress = 'http://140.82.45.132';

function closeModal(page){
    page.style.display = 'none';
}

function openModal(page){
    page.style.display = 'flex';
}

//////////////
//  LOG IN  // OK! (lacking password encryption. doesn't use class to check password.)
//////////////

function login(){
    const typedUser = document.getElementById("loginUser").value;
    const typedPassword = document.getElementById("loginPassword").value;
    const typedLogin = {id: typedUser, password: typedPassword};
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText === 'ok'){
                closeModal(loginPage);
                openModal(landingPage);
                document.getElementById("logOut").style.display = 'block';
            } else {
                loginErrorMessage.innerHTML = this.responseText;
                loginErrorMessage.style.display = 'flex'; 
            }
        }
    };
    xhttp.open("GET", `${ipAdress}/users/${JSON.stringify(typedLogin)}`, true);
    xhttp.send();  

    monthlyTotal();

    loggedUser.setName(typedUser);
    console.log(loggedUser.getName());
    document.getElementById("userNameLanding").innerHTML = loggedUser.getName();
};

function monthlyTotal(){ // needs to filter by id
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let monthlyTotal = 0;
            let receivedJSON = JSON.parse(this.responseText);
            receivedJSON.forEach(element => {
                monthlyTotal += element.total;
            });
            document.getElementById("monthlyTotal").innerHTML = `R$${monthlyTotal},00`
        }
    };
    xhttp.open("GET", `${ipAdress}/monthlyTotal`, true);
    xhttp.send();  
}

///////////////
//  SIGN UP  // OK! (lacking password encryption)
///////////////

function openSignUp(){
    closeModal(loginPage);
    openModal(signUpPage);
}

function signUp(){
    const newUser = {
        id:'',
        name:'',
        email:'',
        phoneNumber:'',
        password:'' 
    };
    const typedUser = document.getElementById("signUpUser").value;
    const typedPassword = document.getElementById("signUpPassword").value;
    const confirmPassword = document.getElementById("signUpConfirmPassword").value;
    newUser.email = document.getElementById("signUpEmail").value;
    newUser.phoneNumber = document.getElementById("signUpPhoneNumber").value;
    const exists = false;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText === 'exists'){
                loginErrorMessage.innerHTML = 'Já existe um usuário cadastrado com esse nome.';
                loginErrorMessage.style.display = 'flex'; 
                exists = true;
            }
        }
    };
    xhttp.open("GET", `${ipAdress}/userNames/${typedUser}`, true);
    xhttp.send();
    
    if (exists == false){
        if (typedUser != '' && typedUser.length <= 20 && typedUser.length >= 4){
            newUser.name = typedUser;
            if (typedPassword == confirmPassword){
                if (typedPassword != ''){
                    if(typedPassword.length >= 6 && typedPassword.length <= 20){
                        newUser.password = typedPassword;
                        const sendUser = JSON.stringify(newUser);
                        console.log(sendUser);

                        const xhttp = new XMLHttpRequest();
                        xhttp.open("POST", ipAdress, true);
                        xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                        xhttp.onload = function () {
                            if (xhttp.readyState == 4 && xhttp.status == 200){
                            console.log("user registered.");
                            }
                        }
                        xhttp.send(sendUser);
                        closeModal(signUpPage);
                        openModal(landingPage);
                        document.getElementById("logOut").style.display = 'block';

                    } else {
                        signUpErrorMessage.innerHTML = "Sua senha deve conter de 6 a 20 caracteres.";
                        signUpErrorMessage.style.display = 'flex'; 
                    }
                } else {
                    signUpErrorMessage.innerHTML = "Digite sua senha.";
                    signUpErrorMessage.style.display = 'flex'; 
                }
            } else {
                signUpErrorMessage.innerHTML = "Senhas não conferem!";
                signUpErrorMessage.style.display = 'flex';
            }
        } else if (typedUser == ''){
            signUpErrorMessage.innerHTML = "Digite seu nome de usuário";
            signUpErrorMessage.style.display = 'flex'; 
        } else if (typedUser.length > 20 || typedUser.length < 4){
            signUpErrorMessage.innerHTML = "Nome de usuário deve conter de 4 a 20 caracteres.";
            signUpErrorMessage.style.display = 'flex';
        }
    }
    loggedUser.name = newUser.name;
    document.getElementById("userNameLanding").innerHTML = loggedUser.getName();
}

//////////////
// LOG OUT  // OK! (improve dom manipulation)
//////////////

function logOut(){
    loginPage.style.display = 'none';
    signUpPage.style.display = 'none';
    landingPage.style.display = 'none';
    expensesPage.style.display = 'none';
    addExpensePage.style.display = 'none';
    addExpenseCategoryPage.style.display = 'none';
    signUpErrorMessage.style.display = 'none';
    loginErrorMessage.style.display = 'none'; 
    loginPage.style.display = 'flex';
    document.getElementById("loginUser").value = ''
    document.getElementById("loginPassword").value = ''
}

////////////////////
//  LANDING PAGE  //
////////////////////

function viewAll(){
    openModal(expensesPage);
}

function addExpense(){
    openModal(addExpensePage);
    getCategories();
}

///////////////////
//  ADD EXPENSE  // Getting categories, lacking register new expense.
///////////////////

function getCategories(){ // OK!
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const parent = document.getElementById("category");
            let receivedCategories = JSON.parse(this.responseText);
            receivedCategories.forEach(element => {
                categories.setCategoryName(element);
                let child = document.createElement("option");
                child.value = element.category;
                child.innerHTML = element.category;
                parent.appendChild(child);
            })
        }
    };
    xhttp.open("GET", `${ipAdress}/categories`, true);
    xhttp.send();
}