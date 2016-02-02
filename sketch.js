var car = {
    x: 100,
    y: 385,
    bodyLength: 400,
    bodyHeight: 100,
    hoodLength: 115,
    cabinLength: 200,
    cabinHeight: 75,
    carCorners:20,
    frontWheelOffset: 65,
    backWheelOffset: 65,
    wheelBase: 270,
    wheelWidth: 65,
    wheelHeight: 65,

    draw: function() {
      this.drawBody();
      this.drawCabin();
      this.drawFrontWheel();
      this.drawBackWheel();
    },
    drawBody: function() {
      fill(color(0, 0, 255)); // Blue.
      rect(this.x, this.y, this.bodyLength, this.bodyHeight, this.carCorners);
    },

    drawCabin: function() {
      fill(color(0, 0, 255)); // Blue.
      rect(this.x + this.hoodLength, this.y - this.cabinHeight, this.cabinLength, this.cabinHeight + this.carCorners, this.carCorners);
    },

    drawFrontWheel: function() {
      fill(0);
      ellipse(this.frontWheelOffset + this.x, this.y + this.bodyHeight, this.wheelWidth, this.wheelHeight);
    },

    drawBackWheel: function() {
      fill(0);
      ellipse(this.x + this.frontWheelOffset + this.wheelBase, this.y + this.bodyHeight, this.wheelWidth, this.wheelHeight);
    }
};

var setup = function setup() {
  createCanvas(600, 600); // The canvas.
  background(100); // It is a cloudy day.
  noStroke(); // Draw shapes without an outline.
  fill(0); // Black road.
  rect(0, 500, 600, 100); // The pavement

  car.draw();

}

var draw = function () {

}
