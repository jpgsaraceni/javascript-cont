const palpites = [];
const alfabeto = "abcdefghijklmnopqrstuvwxyz";
const letraSorteada = alfabeto[Math.floor(Math.random() * 26)];
let numeroJogadores;
let textoPagina;
let resposta;

function iniciar(){
    numeroJogadores = document.getElementById("numeroJogadores").value;
    const numeroPaginas = document.getElementById("numeroPaginas").value;
    const paginaSorteada = Math.floor(Math.random() * numeroPaginas) + 1;   

    let tela1 = document.getElementById("tela1");
    tela1.style.display = "none";
    let tela2 = document.getElementById("tela2");
    tela2.style.display = "flex";

    document.getElementById("paginaSorteada").innerHTML = paginaSorteada;

    console.log("Total páginas: "+numeroPaginas+". Total jogadores: "+numeroJogadores+
    ". Página sorteada: "+paginaSorteada);
}

function continuarParaPalpites(){
    textoPagina = document.getElementById("textoPagina").value;

    let tela1 = document.getElementById("tela2");
    tela1.style.display = "none";
    let tela2 = document.getElementById("tela3");
    tela2.style.display = "flex";

    document.getElementById("letraSorteada").innerHTML = letraSorteada;

    console.log("Texto da página: "+textoPagina+". Letra sorteada: "+letraSorteada);

    let contador = 0;
	for (let i=0; i<textoPagina.length;i++){
  	if (textoPagina[i].toLowerCase() == letraSorteada){
    	contador++;
        }
    }
    resposta = contador;

    console.log("A resposta correta é: "+resposta);

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

// const palpites = [1, 20, 3, 13];

function calcularVencedor(){

    // capturar inputs
    for (let i=0;i<numeroJogadores;i++){
        palpites[i] = document.getElementById("palpite"+i).value;
    }

    console.log(palpites);

	let palpiteVencedor = palpites[0];
    let vencedor = 1;
    for (let i=0; i<palpites.length; i++){
        if (Math.abs(palpites[i]-resposta) < Math.abs(palpiteVencedor - resposta)){
        palpiteVencedor = palpites[i];
        vencedor = i+1;
        }
    }

    let tela1 = document.getElementById("tela3");
    tela1.style.display = "none";
    let tela2 = document.getElementById("tela4");
    tela2.style.display = "flex";

    document.getElementById("letraSorteada2").innerHTML = letraSorteada;
    document.getElementById("resposta").innerHTML = resposta;
    document.getElementById("vencedor").innerHTML = vencedor;
    
    console.log("Os palpites foram: "+palpites+". O palpite vencedor foi: "+palpites[vencedor-1]+", do jogador: "+vencedor);
}
