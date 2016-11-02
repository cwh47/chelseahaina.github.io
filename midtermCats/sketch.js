var bubbles = [];
var pusheens = [];

function preload() {
  for (var i = 0; i < 4; i++) {
    pusheens[i] = loadImage("images/pusheen" + i + ".png");
  }
  meow = loadSound('sounds/meow3.mp3');
}

function setup() {
  cnv = createCanvas(800, 800);
}

function keyPressed() {
  var r = floor(random(0, pusheens.length));
  var b = new Bubble(mouseX, mouseY, pusheens[r]);
  bubbles.push(b);
  meow.play();
}

function draw() {
  background(240, 248, 255);

  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].display();
  }
}