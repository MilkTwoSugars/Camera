var video;

var vScale = 24;

var osc;
var osc2;

var totalBright = 0;
var highestBright = 0;
var lowestBright = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width / vScale, height / vScale);
    video.hide();
    //filter('INVERT');
    // osc = new p5.Oscillator();
    // osc2 = new p5.Oscillator();
    // osc.setType('triangle');
    // osc2.setType('triangle');
    // osc.amp(0);
    // osc2.amp(0);
    // osc.start();
    // osc2.start();
}

function draw() {
    background(15);

    video.loadPixels();
    loadPixels();
    for (var y = 0; y < video.height; y++) {
        for (var x = 0; x < video.width; x++) {
            var index = (video.width - x + 1 + (y * video.width)) * 4;
            var r = video.pixels[index + 0];
            var g = video.pixels[index + 1];
            var b = video.pixels[index + 2];

            var bright = (r + g + b) / 3;

            //totalBright += bright ? bright : 0;
            //noStroke();

            if (bright > 50) {
                noFill();
                stroke(255);
                strokeWeight(0.3)
                var w = map(bright, 0, 255, 0, vScale);
                ellipse(x * vScale, y * vScale, w * (w / 2));
            }

        }
    }

    // if (totalBright < lowestBright && totalBright != 0) {
    //     lowestBright = totalBright;
    // }

    // if (totalBright > highestBright) {
    //     highestBright = totalBright;
    // }

    // var v = map(totalBright, lowestBright, highestBright, 0, 1);
    // var f = map(totalBright, lowestBright, highestBright, 100, 250);

    // v = v ? v : 0;
    // f = f ? f : 0;

    // osc.amp(v)
    // osc2.amp(v);

    // osc.freq(f)
    // osc2.freq(f + 10)

    fill(150);

    totalBright = 0;

}