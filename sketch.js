var setup = function setup () {
  createCanvas(600, 600); // The canvas.
  background(100); // It is a cloudy day.
  noStroke(); // Draw shapes without an outline.
  fill(0); // Black road.
  rect(0, 500, 600, 100); // The pavement

  // The body of the car.
  fill(color(0, 0, 255)); // Blue.
  rect(100, 385, 400, 100, 20); // The main body.
  rect(215, 325, 200, 100, 20); // The hood/windows part of the body.

  // The wheels.
  fill(0);
  ellipse(165, 475, 65, 65); // The front tire on the left.
  ellipse(435, 475, 65, 65); // The back tire on the right.

}

var draw = function () {

}
