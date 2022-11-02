var img;
var x = 0;
var y = 0;
var easing = 0.05;

function preload() {
  img = loadImage("Images/Project_2_Logo.png");
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  var targetX = mouseX;
  x += (targetX - x) * easing;
  var targetY = mouseY;
  y += (targetY - y) * easing;
  image(img, x, y, targetX * 2, targetY * 2);
  if (mouseIsPressed === true) {
    filter(INVERT);
    tint(targetX, targetY, random(0, 255));
  }
  else {
    tint(targetX, targetY, random(0, 255));
  }

}
