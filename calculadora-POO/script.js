let primeiroOperando = true;
let calc = new calculadora();

function calculadora(){
    let operand1;
    let operand2;
    let operation;
    
    function setOperand1(_operand1){
        operand1 = _operand1;
        console.log(operand1+" setado.")
    };

    function setOperand2(_operand2){
        operand2 = _operand2;
        console.log(operand2+" setado.")
    };

    function setOperation(_operation){
        operation = _operation;
    };

    function getResult(){
        if (operand1 === undefined){
            return "Insira o primeiro valor."
        } else if (operation == ''){
            return "Insira a operação."
        } else if (operand2 === undefined){
            return "Insira a operação."
        } else if (operation == "soma"){
            return operand1 + operand2;
        } else if (operation == "subtracao"){
            return operand1 - operand2;
        } else if (operation == "multiplicacao"){
            return operand1 * operand2;
        } else if (operation == "divisao"){
            if (operand1 == 0){
                console.log("Não é possível divisão por zero.")
                return "Erro"
            } else {
                return operand1 / operand2;    
            }   
        }
    };

    function clearCalculator(){
        operand1 = 0;
        operand2 = 0;
        operation = "";
    };
    return {
        setOperand1,
        setOperand2,
        setOperation,
        getResult,
        clearCalculator,
    }
}

function recebeNumero(num){
    if (primeiroOperando){
        calc.setOperand1(num);
    } else {
        calc.setOperand2(num);
    }
    primeiroOperando = !primeiroOperando;    
}

function recebeOperador(operador){
    calc.setOperation(operador))
}

