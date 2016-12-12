var song;
var fft;
var button;
var w;
var volhistory = [];

/*function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}*/

function preload() {
  song = loadSound('sounds/intro.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  //button = createButton('toggle');
  //button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(.9, 32);
  w = width / 32;
  h = height / 32;
  textFont("Bungee Hairline");

}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function draw() {
  background(51);
  text("click to pause", 70, 20);
  textSize(12);
  //sound
  var spectrum = fft.analyze();
  console.log(spectrum);

  var energy = fft.getEnergy("mid");
  energyhistory.push(energy);
beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var r = map(energyhistory[i], 0, 1, 10, 100)
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x,y);
    endShape();
    
    stroke(211, 255, 206);
    fill(192, 214, 228);
  }

}