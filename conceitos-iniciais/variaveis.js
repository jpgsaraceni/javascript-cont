let difLet = 1; // escopo do bloco
var difVar = 2; // escopo global ou função
const DIFCONST = 3; // escopo bloco

difLet = 10;
difVar = 20;
// DIFCONST não pode ser alterado.

// hoistVar é inicializada como undefined.
// hoistLet não é inicializada.
// HOISTCONST não é inicializada.

var hoistVar = "A";
let hoistLet = "B";
const HOISTCONST = "C";

function escopoFun (){ // todas as três estão no escopo dessa função.
    difVar ++;
    // difLet ++; não pode ser acessada, pois agora está no escopo desse bloco e entrou no TDZ
    //console.log(difVar); // pode alterar somente se não existir na função, pois nesse caso ocorre hoisting.
    var difVar = 100;
    let difLet = 200;
    const DIFCONST = 300;
    //console.log(difVar, difLet, DIFCONST); 
}

//console.log(difVar, difLet, DIFCONST);

escopoFun();

//console.log(difVar, difLet, DIFCONST);

var varBloco = 1;
let letBloco = 2;
const CONSTBLOCO = 3;

function loga(){
    console.log(varBloco, letBloco, CONSTBLOCO);
}

loga();

{
    varBloco ++; // acessa de fora do bloco, pois o escopo é global
    console.log(varBloco)
    //varLet ++; ReferenceError, pois o escopo é do bloco e está na TDZ
    var varBloco = 10;
    let letBloco = 20;
    const CONSTBLOCO = 30;
    loga(); // todas são redefinidas no bloco. 
}

loga();
console.log(varBloco); // letBloco2, CONSTBLOCO2 not defined