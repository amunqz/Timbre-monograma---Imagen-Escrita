let img;
let imgSize = 100;
let images = [];

function preload() {
  img = loadImage('monograma.png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < images.length; i++) {
    image(images[i].img, images[i].x, images[i].y, imgSize, imgSize);
  }
}

function mouseClicked() {
  if (mouseButton === LEFT) {
    images.push({ img: img, x: mouseX, y: mouseY });
  }
}

function keyPressed() {
  if (key === ' ' && images.length > 0) {
    images.pop();
  }
}
