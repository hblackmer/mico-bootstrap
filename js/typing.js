const textEl = document.getElementById('header-name');
const text = 'MICO';
let idx = 1;
let speed = 300;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    setTimeout(writeText, speed)
}