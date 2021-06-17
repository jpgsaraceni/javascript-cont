function Timer(){
    let time = 10*1000; 
    let currentTime; 
    let timerInterval = 100;
    let callbackTimeout;
    // let callbackTimerInterval;
    let internalTimeout;
    let internalTimer;
    let hours;
    let minutes;
    let seconds;
    let cseconds;

    function setTimer(_hours, _minutes, _seconds, _cseconds){
        time = _hours*60*60*1000 + _minutes*60*1000 + _seconds*1000 + _cseconds*10;
    };

    function setTimerInterval(_timerInterval){
        timerInterval = _timerInterval;
    };

    function setCallbackTimeout(_callbackTimeout){
        callbackTimeout = _callbackTimeout;          
    };

    /* function setCallbackTimerInterval(_callbackTimerInterval){
         callbackTimerInterval = _callbackTimerInterval;
    }; */

    function getCurrentTime(){
        return currentTime;
    };

    function reduceTimer(){
        currentTime -= timerInterval;
    };

    function startTimer(i){
        currentTime = time;

        internalTimer = setInterval(
            function () {
                reduceTimer();
                currentTimeString(i);
            },
            timerInterval);

        internalTimeout = setTimeout(
            function () {
                callbackTimeout();
                stopTimer();
            },
            time);
    };

    function stopTimer(){
        time = currentTime;
        clearInterval(internalTimer);
        clearTimeout(internalTimeout);
    };

    function resetTimer(i){
        time = 0;
        currentTime = 0;
        clearTimeout(internalTimeout);
        clearInterval(internalTimer);
        currentTimeString(i);
    };

    function currentTimeString(i){
  
        let rest = currentTime;
        hours = Math.floor(rest/(60*60*1000));
        rest -= hours*60*60*1000;
        minutes = Math.floor(rest/(60*1000));
        rest -= minutes*60*1000;
        seconds = Math.floor(rest/1000);
        rest -= seconds*1000;
        cseconds = Math.floor(rest/10);

        if (hours < 10){
            hours = "0"+hours;
        }

        if (minutes < 10){
            minutes = "0"+minutes;
        }

        if (seconds < 10){
            seconds = "0"+seconds;
        }

        if (cseconds < 10){
            cseconds = "0"+cseconds;
        }

        document.getElementById("hours"+i).value = hours;
        document.getElementById("minutes"+i).value = minutes;
        document.getElementById("seconds"+i).value = seconds;
        document.getElementById("cseconds"+i).value = cseconds;
    };

    return {
        setTimer,
        setTimerInterval,
        setCallbackTimeout,
        // setCallbackTimerInterval,
        getCurrentTime,
        startTimer,
        stopTimer,
        resetTimer,
        currentTimeString,
    }
}

/* ******** END OF CLASS ********** */

let timer = []; // array that will recieve instances of Timer class

for (let i=0; i<4; i++){ // create 4 timers; change 4 to n to create n timers
    timer.push(new Timer);
}

function runTimer(i){
    // bringing inputs to timer
    let hoursId = document.getElementById("hours"+i).value;
    let minutesId = document.getElementById("minutes"+i).value;
    let secondsId = document.getElementById("seconds"+i).value;
    let csecondsId = document.getElementById("cseconds"+i).value;

    // hiding past messages when starting new timer
    let mensagens = document.getElementsByClassName('mensagem');
    for (let i = 0; i < mensagens.length; i++) {
        mensagens[i].style.display = 'none';
    }

    // calling Timer methods
    timer[i].setTimer(hoursId, minutesId, secondsId, csecondsId);
    timer[i].setCallbackTimeout(function () {
        let audioObj = new Audio("audio/acabou.mp3");
        audioObj.load();
        audioObj.play();
        document.getElementById("mensagem"+i).style.display = "inline";
    });
    timer[i].startTimer(i);
}