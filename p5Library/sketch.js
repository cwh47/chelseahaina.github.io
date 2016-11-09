var dog;
var animation;

function preload() {
  dog = loadAnimation('images/dog1.png', 'images/dog2.png');
}
//load animation from a sequence of images
//dog = loadAnimation('images/dog1.png', 'images/dog2.png');

function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(101, 184, 88);

  //animation instance x,y position
  animation(dog, 300, 150);
}