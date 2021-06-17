const sequencia = [0];
const n = 5;

function fibn(n){
  if (n == 0 || n == 1){
   	return 1;
  } else {
  	return fibn(n-1)+fibn(n-2);
  }
}

for (let i=0; i<n-1; i++){
	sequencia.push(fibn(i));
}
