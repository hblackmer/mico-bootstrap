const text = 'MICO';
let idx = 1;

function writeText() {
    document.getElementById('header-name').innerText = text.slice(0, idx)
    idx++

    setTimeout(writeText, 300)
}

writeText();