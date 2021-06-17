// trabalhando com PROMISE e operações ASSÍNCRONAS
/* PROMISE
Executa duas partes do script ao mesmo tempo */

// exemplo vídeo:

// let p = new Promise((resolve, reject) =>{
//     let a = 1+1;
//     if (a == 2){
//         resolve('success'); // esse é o retorno do p.then
//     } else {
//         reject('falied'); // esse é o retorno do p.catch
//     }
// })

// p.then((message) => {
//     console.log('This is the then '+message);
// }).catch((err) => {
//     console.log('This is the catch '+message);
// })

// exemplo 2
// função SEM promise:

// const betterDeveloper = 'vanessa';

// function whoIsBetterCallback (callback, errorCallback){ // parâmetros são objetos criados dentro da função
//     if (betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel'){
//         errorCallback({
//             name: 'This is wrong',
//             message: betterDeveloper + '? Really'
//         })
//     } else {
//         callback({
//             name: betterDeveloper,
//             message: 'CDFs are the best!'
//         })
//     }
// }

// whoIsBetterCallback((result) => { // result será o objeto criado em callback if false
//     console.log(result.name + ' Yeah! ' + result.message); // será o retorno com os atributos do objeto result (callback)
// }, (error) => { // error será o objeto criado if true 
//     console.log(result.name + ' ' + error.message);
// })

// transformada em promise:

function whoIsBetterCallback (callback, errorCallback){
    
    return new Promise((resolve, reject) => { // resolve é o callback do then e reject o do catch
        if (betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel'){
            reject({
                name: 'This is wrong',
                message: betterDeveloper + '? Really'
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: 'CDFs are the best!'
            })
        }
    })
}

whoIsBetterCallback() // chama a função sem o parâmetro e coloca .then((result) => {}).catch((error) => {}) para os callbacks
    .then((result) => { 
        console.log(result.name + ' Yeah! ' + result.message)
    }).catch((error) => { 
        console.log(error.name + ' ' + error.message)
    })

// parei em 10min do vídeo. resumo:

////////////////////////////////////
//          SYNTAX                //
////////////////////////////////////

// let p = new Promise((resolve, reject) => {}) // resolve(<valor>) e reject(<valor>) definidos dentro da promise
// p().then((result) => {}).catch((error) => {}) // define os callbacks da promise