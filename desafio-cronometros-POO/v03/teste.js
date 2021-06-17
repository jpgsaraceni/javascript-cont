function Hello(){
    let message;
    
    function setMessage(_message){
        message = _message;
    };

    function getMessage(){
        console.log(message)
    };

    return {
        setMessage,
        getMessage
    }
}

instance = new Hello();

export {instance}