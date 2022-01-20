var sec = 00;
var min = 00;
var hour = 00;
var interval

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    }
    else return (digit)
}

function start() {
    watch()
    interval = setInterval(watch, 1000)
}

function pause() {
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    sec = 00
    min = 00
    document.getElementById('stop-watch').innerText = '00:00:00';
}



function watch() {
    sec++
    if (sec === 60) {
        min++
        sec = 00
        if (min === 60) {
            min = 0
            hour++
        }
    }
    document.getElementById('stop-watch').innerText = twoDigits(hour) + ':' + twoDigits(min) + ':' + twoDigits(sec);
}