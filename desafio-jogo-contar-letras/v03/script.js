const palpites = [];
const alfabeto = "abcdefghijklmnopqrstuvwxyz";
let letraSorteada;
let numeroJogadores;
let textoPagina;
let resposta;

function trocaPagina(atual, proxima){
    const sair = document.getElementById(atual);
    sair.style.display = "none";
    const entrar = document.getElementById(proxima);
    entrar.style.display = "flex";
}

function iniciar(){
    numeroJogadores = document.getElementById("numeroJogadores").value;
    const numeroPaginas = document.getElementById("numeroPaginas").value;
    const paginaSorteada = Math.floor(Math.random() * numeroPaginas) + 1;
    letraSorteada = alfabeto[Math.floor(Math.random() * 26)];   
    trocaPagina("tela1", "tela2");
    document.getElementById("paginaSorteada").innerHTML = paginaSorteada;
}

function continuarParaPalpites(){
    textoPagina = document.getElementById("textoPagina").value;
    trocaPagina("tela2", "tela3");
    document.getElementById("letraSorteada").innerHTML = letraSorteada;

    let contador = 0;
	for (let i=0; i<textoPagina.length;i++){
  	if (textoPagina[i].toLowerCase() == letraSorteada){
    	contador++;
        }
    }
    resposta = contador;

    const container = document.getElementById("entradasPalpites");

    for (let i=0;i<numeroJogadores;i++){
        let input = document.createElement("input");
        input.type = "number";
        input.id = "palpite" + i;
        input.placeholder = "Jogador " + (i+1);
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }
}

function calcularVencedor(){
    for (let i=0;i<numeroJogadores;i++){
        palpites[i] = document.getElementById("palpite"+i).value;
    }

	let palpiteVencedor = palpites[0];
    let vencedor = 1;
    for (let i=0; i<palpites.length; i++){
        if (Math.abs(palpites[i]-resposta) < Math.abs(palpiteVencedor - resposta)){
        palpiteVencedor = palpites[i];
        vencedor = i+1;
        }
    }

    trocaPagina("tela3", "tela4");

    document.getElementById("letraSorteada2").innerHTML = letraSorteada;
    document.getElementById("resposta").innerHTML = resposta;
    document.getElementById("vencedor").innerHTML = vencedor;
}