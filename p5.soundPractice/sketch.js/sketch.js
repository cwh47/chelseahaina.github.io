var sine;

var freq = 400;

function setup() {
  createCanvas(440, 440);
  //create and start sine oscillator
  sine = new p5.SinOsc();
  sine.start;
}

function draw() {
  background(255, 0, 255);
  //map mouseX value from 20Hz to 440Hz for nu
  var hertz = map(mouseX, 0, width, 20.0, 440.0);
  sine.freq(hertz);
  //draw wave to visualize nu of sound
  stroke(0, 255, 255);
  for (var x = 0; x < width; x++) {
    var angle = map(x, 0, width, 0, TWO_PI * hertz);
    var sinValue = sin(angle) * 120;
    line(x, 0, x, height / 2 + sinValue);
  }
}