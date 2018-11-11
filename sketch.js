var video;

var vScale = 24;

var renderIndex = 0;

function setup() {
    background(0);
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width / vScale, height / vScale);
    video.hide();
}

function draw() {
   background(0);

    video.loadPixels();
    loadPixels();
    for (var y = 0; y < video.height; y++) {
        for (var x = 0; x < video.width; x++) {
            var index = (video.width - x + 1 + (y * video.width)) * 4;
            var r = video.pixels[index + 0];
            var g = video.pixels[index + 1];
            var b = video.pixels[index + 2];
            render(x, y, r, g, b)
        }
    }
}

function render(x, y, r, g, b) {
    if (renderIndex == 0) {
        glitch(x, y, r, g, b)
    }
    if (renderIndex == 1) {
        blood(x, y, r, g, b)
    }
    if (renderIndex == 2) {
        blob(x, y, r, g, b)
    }
    if (renderIndex == 3) {
        lines(x, y, r, g, b)
    }
}

function glitch(x, y, r, g, b) {

    var bright = (r + g + b) / 3;
    var w = map(bright, 0, 255, 0, vScale);

    noFill();     
    strokeWeight(1)

    stroke(0, random(150, 255), 0);
    rectMode(CENTER);
    push();
    translate(x * vScale, y * vScale)
    //rotate(w / 10);
    rect(0, 0, random(w / 2, w), random(w / 2, w));
    pop();
}

function blood(x, y, r, g, b) {

    var bright = (r + g + b) / 3;
    var w = map(bright, 0, 255, 0, vScale);

    noFill();     
    strokeWeight(0.3)

    stroke(255);
    ellipse(x * vScale, y * vScale, w * w / 2);

    fill(r, 0, 0, 50)
    ellipse(x * vScale, y * vScale, w);
}

function blob(x, y, r, g, b) {

    var bright = (r + g + b) / 3;
    var w = map(bright, 0, 255, 0, vScale);

    noStroke();     
    strokeWeight(0.3)

    fill(r, g, b)
    ellipse(x * vScale, y * vScale, w * (w / 2));
}

function lines(x, y, r, g, b) {

    var bright = (r + g + b) / 3;
    var w = map(bright, 0, 255, 0, 15);

    stroke(255)     
    strokeWeight(.3)
    rectMode(CENTER);

    noFill();
    //fill(w)
    push()
    translate(x * vScale, y * vScale)
    rotate(w)
    rect(0, 0, vScale, 1);
    pop()
}

function mouseClicked() {
    renderIndex++

    if (renderIndex == 4) {
        renderIndex = 0;
    }
}

