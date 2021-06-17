function fibn (n){
	if (n == 0 || n == 1){
  return 1;
  } else {
  return fibn(n-1)+fibn(n-2);
  }
}

const result = fibn(5);
console.log(result);