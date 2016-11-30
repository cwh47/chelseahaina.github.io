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
  //map mouseY value from 5Hz to 200Hz for nu
  var hertz2 = map(0, mouseY, height, 5.0, 200.0);
  sine.freq(hertz2);
  //draw wave to visualize nu of sound2
  stroke(255, 255, 0);
  for (var y = 0; y < height; y++);{
  var angle2 = map(0, y, 0, height, TWO_PI * hertz2);
  line(0, y, width / 2 + sinValue);
  }
}