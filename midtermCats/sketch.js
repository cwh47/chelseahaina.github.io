var img;
var img2;
var img3;
var img4;
var img5;
var meow;
var meow2;
var meowmix;

var playedSound = false;
var imgShown = false;
//var playedMeowMix = false;

var currentKey = 0;
var slider;
var button;

function preload() {
  meow = loadSound('sounds/meow4.mp3');
  meowmix = loadSound('sounds/meowmix.mp3');
  img = loadImage("images/cat5.png");
  img2 = loadImage("images/cat1.png");
  img3 = loadImage("images/cat2.png");
  img4 = loadImage("images/cat6.png");
  img5 = loadImage("images/cat3.png");
}


function setup() {
  createCanvas(650, 650);
  textFont("Montserrat");
  meow.setVolume(1);
  slider = createSlider(0, 255, 100);
  slider.position(400, 20);
  button = createButton("Meow?");
  button.position(550, 20);
  button.mousePressed(meowMix);

}

function meowMix() {
  /*meowmix.play();
  playedMeowMix = true;
  if (button.mousePressed && playedMeowMix) {
    meow.stop();*/
}

function draw() {
  background(255);

  var gray = slider.value();
  background(gray);

  //cat meows
  if (keyIsPressed && !playedSound) {
    currentKey = int(map(keyCode, 97, 111, 0, 25));
    console.log(currentKey);
    playedSound = true;
    meow.play();
  }

  if (keyIsPressed) {
    currentKey = int(map(keyCode, 97, 111, 0, 25));
    console.log(currentKey);
    image(img, 0, 0);
    image(img2, 30, 50, width / 6, height / 6);
    image(img3, 300, 110, width / 2, height / 2);
    image(img4, 100, 400, width / 2, height / 2);
    image(img5, 110, 375, width / 4, height / 4);


  }
  if (!keyIsPressed) {
    playedSound = false;
  }
}