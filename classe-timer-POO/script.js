function Timer(){
    let time; 
    let currentTime; 
    let timerInterval;
    let callbackTimeout;
    let callbackTimerInterval;
    let internalTimer;
    let internalTimeout;
    let internalReduce;
    let internalStop;

    function setTimer(_time){
        time = _time;
    };

    function setTimerInterval(_timerInterval = 100){
        timerInterval = _timerInterval;
    };

    function setCallbackTimeout(_callbackTimeout){
        callbackTimeout = _callbackTimeout;          
    };

    function setCallbackTimerInterval( _callbackTimerInterval){
        callbackTimerInterval = _callbackTimerInterval;
    };

    function getCurrentTime(){
        return currentTime;
    };

    function reduceTimer(){
        currentTime -= timerInterval;
    };

    function startTimer(){
        currentTime = time;

        internalTimer = setInterval(callbackTimerInterval, timerInterval);
        internalReduce = setInterval(reduceTimer, timerInterval);

        internalTimeout = setTimeout(callbackTimeout, time);
        internalStop = setTimeout(stopTimer, time);
    };

    function stopTimer(){
        time = currentTime;
        clearTimeout(internalTimeout);
        clearInterval(internalTimer);
        clearInterval(internalReduce);
    };

    function resetTimer(){
        time = 0;
        currentTime = 0;
        timerInterval = 0;
        clearTimeout(internalTimeout);
        clearInterval(internalTimer);
    };

    return {
        setTimer,
        setTimerInterval,
        setCallbackTimeout,
        setCallbackTimerInterval,
        getCurrentTime,
        startTimer,
        stopTimer,
        resetTimer,
    }
}

let stopwatch = new Timer();

/* *************** RUN ON CONSOLE ************************** */

stopwatch.setTimer(20*1000);
stopwatch.setTimerInterval(1000);
stopwatch.setCallbackTimeout( () => console.log('Over!'));
stopwatch.setCallbackTimerInterval( () => console.log('Tic Tac'));
stopwatch.startTimer();