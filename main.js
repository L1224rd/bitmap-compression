function drawPixel(x, y, color, pixelSize) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(x, y, pixelSize, pixelSize);
}

function drawCode(text) {
    let pixelSize = 1;
    let y = 0;
    let n = 0;
    for (let i = 0; i < text.length/3; i++) {
        if (n >= 999) {
            y += pixelSize;
            n = -1;
        }
        
        let rgb = 'rgb('
        + getCharCode(text.substr(i * 3, 1)) + ','
        + getCharCode(text.substr(i * 3 + 1, 1)) + ','
        + getCharCode(text.substr(i * 3 + 2, 1)) + ')';

        /* let rgb = 'rgb('
        + text.substr(i * 9, 3)%255 + ','
        + text.substr(i * 9 + 3, 3)%255 + ','
        + text.substr(i * 9 + 6, 3)%255 + ')'; */

        console.log(rgb);

        drawPixel(n * pixelSize, y, rgb, pixelSize);
        n++;
    }
}

drawCode(genRandom(1800000));
// drawCode('Eder Marques');

function genRandom(n) {
    let res = '';
    for (let i = 0; i < n; i++) {
        res += Math.floor((Math.random() * 10));
    }
    return res;
}

function getCharCode(c) {
    return c.charCodeAt(0);
}

