function paramsParaArray (...vars){ // item d
    return vars;
}

const A = 1;
const B = 2;
const C = 3;

const vetor = paramsParaArray(A, B, C);

console.log(vetor);

function recebeArray(x, y, z){ // item e
    console.log(x, y, z);
}

recebeArray(...vetor);

const vetorF = [10, 20, 30];

function recebeSemRef(arr){ // item f
    let vetorNovo = [...vetorF] // se manipular arr diretamente, altera vetorF.
    vetorNovo.push(40);
    console.log(arr);
    console.log(vetorNovo);
    return vetorNovo;
} 

let vetorNovo = recebeSemRef(vetorF);
console.log(vetorF);
console.log(vetorNovo);






function potenciacao(num, pot = 2){ // item g
    return num ** pot;
}

console.log(potenciacao(2, 3));
console.log(potenciacao(2));