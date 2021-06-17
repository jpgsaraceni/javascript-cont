function adicionar() {
    var novo = {};
    novo["nome"] = document.getElementById("adicionarNome").value;
    novo["endereco"] = document.getElementById("adicionarEndereco").value;
    novo["complemento"] = document.getElementById("adicionarComplemento").value;
    novo["cep"] = document.getElementById("adicionarCep").value;
    novo["cidade"] = document.getElementById("adicionarCidade").value;
    novo["telefone"] = document.getElementById("adicionarTelefone").value;
    novo["email"] = document.getElementById("adicionarEmail").value;
    var clientes = JSON.stringify(novo);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", `http://8.9.5.215`, true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.onload = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200){
            document.getElementById("mensagemCadastro").innerHTML = "CADASTRO EFETUADO";
            document.getElementById("idSaida").innerHTML = "ID: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].id;
            document.getElementById("nomeSaida").innerHTML = "Nome: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].nome;
            document.getElementById("enderecoSaida").innerHTML = "Endereço: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].endereco;
            document.getElementById("complementoSaida").innerHTML = "Complemento: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].complemento;
            document.getElementById("cepSaida").innerHTML = "CEP: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].cep;
            document.getElementById("cidadeSaida").innerHTML = "Cidade: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].cidade;
            document.getElementById("telefoneSaida").innerHTML = "Telefone: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].telefone;
            document.getElementById("emailSaida").innerHTML = "Email: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].email;
        }
    }
    xhttp.send(clientes);
};

function remover() {
    var id = document.getElementById("idExistente").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", `http://8.9.5.215/clientes/${id}`, true);
    xhttp.onload = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200){
            document.getElementById("mensagemCadastro").innerHTML = "CLIENTE REMOVIDO";
            document.getElementById("resposta").innerHTML = " "}
    }
    xhttp.send(null);
};

function consultar() {
    var xhttp = new XMLHttpRequest();
    var idInfo = document.getElementById("idExistente").value;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("mensagemCadastro").innerHTML = "RESULTADO CONSULTA";
            document.getElementById("idSaida").innerHTML = "ID: "+JSON.parse(this.responseText)[0].id;
            document.getElementById("nomeSaida").innerHTML = "Nome: "+JSON.parse(this.responseText)[0].nome;
            document.getElementById("enderecoSaida").innerHTML = "Endereço: "+JSON.parse(this.responseText)[0].endereco;
            document.getElementById("complementoSaida").innerHTML = "Complemento: "+JSON.parse(this.responseText)[0].complemento;
            document.getElementById("cepSaida").innerHTML = "CEP: "+JSON.parse(this.responseText)[0].cep;
            document.getElementById("cidadeSaida").innerHTML = "Cidade: "+JSON.parse(this.responseText)[0].cidade;
            document.getElementById("telefoneSaida").innerHTML = "Telefone: "+JSON.parse(this.responseText)[0].telefone;
            document.getElementById("emailSaida").innerHTML = "Email: "+JSON.parse(this.responseText)[0].email;
        }
    };
    xhttp.open("GET", `http://8.9.5.215/clientes/${idInfo}`, true);
    xhttp.send();  
};

function editar(){
    const id = document.getElementById("idExistente").value;
    var novo = {};
    novo["id"] = document.getElementById("idExistente").value;
    novo["nome"] = document.getElementById("adicionarNome").value;
    novo["endereco"] = document.getElementById("adicionarEndereco").value;
    novo["complemento"] = document.getElementById("adicionarComplemento").value;
    novo["cep"] = document.getElementById("adicionarCep").value;
    novo["cidade"] = document.getElementById("adicionarCidade").value;
    novo["telefone"] = document.getElementById("adicionarTelefone").value;
    novo["email"] = document.getElementById("adicionarEmail").value;
    var clientes = JSON.stringify(novo);
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", `http://8.9.5.215/clientes/${id}`, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhttp.onload = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200){
                document.getElementById("mensagemCadastro").innerHTML = "CADASTRO ALTERADO";
                document.getElementById("idSaida").innerHTML = "ID: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].id;
                document.getElementById("nomeSaida").innerHTML = "Nome: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].nome;
                document.getElementById("enderecoSaida").innerHTML = "Endereço: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].endereco;
                document.getElementById("complementoSaida").innerHTML = "Complemento: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].complemento;
                document.getElementById("cepSaida").innerHTML = "CEP: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].cep;
                document.getElementById("cidadeSaida").innerHTML = "Cidade: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].cidade;
                document.getElementById("telefoneSaida").innerHTML = "Telefone: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].telefone;
                document.getElementById("emailSaida").innerHTML = "Email: "+JSON.parse(this.responseText)[JSON.parse(this.responseText).length-1].email;
            }
        }
        xhttp.send(clientes);
        console.log(clientes)
};
