const timer = document.querySelector('#time');
const start_btn = document.querySelector('#start_btn');
const pause_btn = document.querySelector('#pause_btn');
//const reset_btn = document.querySelector('#reset_btn');
const answer = document.querySelector('#answer-textarea');

let time = 0,
    interval;

document.querySelector('#start_btn').addEventListener("click", start);

function showTime() {
    time += 1;
    timer.innerHTML = toHHMMSS(time);
}

function start() {
    interval = setInterval(showTime, 1000);
    hideBtn([start_btn]);
    //showBtn([pause_btn, reset_btn]);
    timer.style.display = 'inline-block';
    answer.style.display = 'block';
}

function pause() {
    if (interval) {
        clearInterval(interval);
        interval = null;
        pause_btn.innerHTML = 'RESUME';
    } else {
        interval = setInterval(showTime, 1000);
        pause_btn.innerHTML = 'PAUSE';
    }
}

function reset() {
    clearInterval(interval);
    interval = null;
    pause_btn.innerHTML = 'PAUSE';
    time = 0;
    timer.innerHTML = toHHMMSS(time);
    hideBtn([pause_btn/*, reset_btn*/]);
    showBtn([start_btn]);
}

function toHHMMSS(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;

    hours = `<i class="fas fa-stopwatch"></i> ${hours}`.padStart(2, '0');
    minutes = `${minutes}`.padStart(2, '0');
    seconds = `${seconds}`.padStart(2, '0');

    return hours + ':' + minutes + ':' + seconds;
}

function showBtn(btnArr) {
    btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideBtn(btnArr) {
    btnArr.forEach((btn) => (btn.style.display = 'none'));
}