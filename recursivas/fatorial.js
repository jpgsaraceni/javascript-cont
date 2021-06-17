function fatorial(num){
    if (num == 1 || num ==0){
        return 1;
    } else {
        num = num * fatorial(num-1);
    }
    return num;
}

console.log(fatorial(3));