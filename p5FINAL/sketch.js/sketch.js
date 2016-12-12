var song;
var fft;

function preload() {
  song = loadSound('sounds/intro.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  text("Intro by The XX      (click to pause)", 70, 20);
  textSize(15);
  
  //sound
  var spectrum = fft.analyze();
  console.log(spectrum);
  fft.getEnergy("mid");
  //rectangles
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 100);
    rect(i * h, y, h, width - y, 20, 20);
    stroke(211, 255, 206);
}
//waveform
  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(211, 255, 206);
  strokeWeight(1);
  for (var i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, 0, height);
    var y = map(waveform[i], -1, 1, 500, width);
    vertex(y, x);
  }
  endShape();
  }