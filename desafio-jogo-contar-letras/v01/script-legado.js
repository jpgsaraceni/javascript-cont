const numeroJogadores = 2; // entrada
const numeroPaginas = 100; // entrada
const palpites = [14, 3, 20, 0]; // entrada

// função para criar array dos palpites (usando recursiva?)

function sortearPag(total){
	return Math.floor(Math.random() * total) + 1
}

const paginaSorteada = sortearPag(numeroPaginas);
const textoPagina = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."; // entrada (conteúdo da pagina sorteada)
// ^ entrada 

function sortearLetra(){
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  return alfabeto[Math.floor(Math.random() * 26)]
}

const letraSorteada = sortearLetra();

function contarLetra(texto, letra){ // jogar função sortearLetra dentro usando closure
	let contador = 0;
	for (let i=0; i<texto.length;i++){
  	if (texto[i].toLowerCase() == letra){
    	contador++;
    }
  }
  return contador
}

function aproximar(resposta, palpites){ // ajustar para empate; usar função recursiva
	let palpiteVencedor = palpites[0];
  let vencedor = 1;
  for (let i=0; i<palpites.length; i++){
  	if (Math.abs(palpites[i]-resposta) < Math.abs(palpiteVencedor - resposta)){
    palpiteVencedor = palpites[i];
    vencedor = i+1;
    }
  }
  return vencedor
}

const vencedor = aproximar(contarLetra(textoPagina, letraSorteada), palpites);


console.log(palpites, contarLetra(textoPagina, letraSorteada), letraSorteada);
console.log("O vencedor foi o jogador "+vencedor+" com o palpite "+palpites[vencedor-1]);

// função para pegar número de jogadores, criar o html com essa quantidade de inputs, jogar esses valores numa array
