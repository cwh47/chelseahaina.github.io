var bubbles = [];
var pusheens = [];

function preload() {
  for (var i = 0; i < 4; i++) {
    pusheens[i] = loadImage("images/pusheen" + i + ".png");
  }
  meow = loadSound('sounds/meow3.mp3');
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
}

function keyPressed() {
  var r = floor(random(0, pusheens.length));
  var b = new Bubble(random(width), random(height), pusheens[r]);
  bubbles.push(b);
  meow.play();
}

function draw() {
  background(240, 248, 255);
  text("type anything to conjure cats!", 50, 200);
  textFont("Press Start 2P");

  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].display();
  }
}