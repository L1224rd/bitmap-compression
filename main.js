function drawPixel(x, y, color, pixelSize) {
    var c = document.getElementById("canvas"); // canvas where the pixel will be set
    var ctx = c.getContext('2d');
    ctx.fillStyle = color; // pixel color
    ctx.fillRect(x, y, pixelSize, pixelSize); // pixel position and size
}

function drawCode(text) { // transforms the text into rgb numbers and pass to the getPixel function
    let pixelSize = 1;
    let y = 0; // n and y are used to make the bitmap like a rectangle
    let n = 0;
    for (let i = 0; i < text.length / 3; i++) { // each rgb pixel gets 3 numbers
        if (n >= 555) {
            y += pixelSize; // when n gets to a certain point, y gets one line down
            n = -1; // n is reset to start from the begining of the line
        }

        let rgb = 'rgb(' // rgb transforms 3 letters into a pixel using their ascii codes
            + getCharCode(text.substr(i * 3, 1)) + ','
            + getCharCode(text.substr(i * 3 + 1, 1)) + ','
            + getCharCode(text.substr(i * 3 + 2, 1)) + ')';

        drawPixel(n * pixelSize, y, rgb, pixelSize);
        n++;
    }
}

//drawCode(genRandom(1800000)); //passing a string with length of 1000*600*3 for testing purposes
drawCode(text);

function genRandom(n) { // returns a random string with length of n
    let res = '';
    for (let i = 0; i < n; i++) {
        res += Math.floor((Math.random() * 10));
    }
    return res;
}

function getCharCode(c) { // returns the ascii code of the char c
    return c.charCodeAt(0);
}

function cleanText(){
    document.getElementById('txtArea').innerHTML += document.getElementById('text').value.trim();
}

