//////////////////////
//        1         //
//////////////////////

// const logError = () => {
//     return new Promise((resolve, reject) => {
//         reject(setTimeout(() => {
//             console.log("first promisse failed succesfully!");
//         }, 2000));
//     });
// }

// console.log("about to call first promise");

// logError().then((success)=>{success}).catch((failure)=>{failure});

// console.log("just called first promise");

////////////////////////
//         2          //
////////////////////////

// const logSuccess = () => {
//     return new Promise((resolve, reject) =>{
//         resolve(setTimeout(() => {
//             console.log("second promisse successfully succeeded!");
//         }, 2000));
//     })
// }

// console.log("about to call second promise");

// logSuccess().then((success)=>{success}).catch((failure)=>{failure});

// console.log("just called second promise");

//////////////////////
//        3         //
//////////////////////

isPrime = (num) => {
    for (let i=1; i<num+1; i++){
        if (num % i == 0 && (i != 1 && i != num)){
            return false;
        }
    }
    return true;
}

checkPrimeOrEven = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0 || isPrime(num)){
            resolve("success");
        } else {
            reject("error");
        }
    })
} 

console.log("about to call success/error promise");

checkPrimeOrEven(7).then((success)=>{console.log(success)}).catch((err)=>{console.log(err)});
checkPrimeOrEven(8).then((success)=>{console.log(success)}).catch((err)=>{console.log(err)});
checkPrimeOrEven(9).then((success)=>{console.log(success)}).catch((err)=>{console.log(err)});

console.log("just called success/error promise");

/////////////////////////
//     MEGA-SENA       //
/////////////////////////

// const megaSena = () => {
//     let sequence = [];
//     return new Promise((resolve, reject) => {
//         resolve(() => {
//             while(sequence.length < 6){
//                     // setTimeout(() => {
//                         const sorted = Math.floor(Math.random()*60+1);
//                         if (sequence.filter(num => sequence[num]) != sorted){
//                             sequence.push(sorted);
//                             console.log(sequence);
//                         }
//                 // },1000*sequence.length);
//             }
//         })
//     })
// }

// megaSena().then((success)=>{success()});