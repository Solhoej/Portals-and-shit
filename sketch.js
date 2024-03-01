let groundLevel = 400;
let plr;

function setup() {
  createCanvas(400, 400);
  plr = new Player()
}

function draw() {
  background(220);
  plr.show();
  plr.movement();
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    plr.movingRight = true;
  }

  if (keyCode == LEFT_ARROW) {
    plr.movingLeft = true;
  }

  if (keyCode == UP_ARROW) {
    plr.jump();
  }
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW) {
    plr.movingRight = false;
  }

  if (keyCode == LEFT_ARROW) {
    plr.movingLeft = false;
  }
}