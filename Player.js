class Player {
    constructor(x = 200, y = 380) {
      this.playerPosition = createVector(x, y);
      this.velocityY = 0;
      
      this.jumpStrength = 10;
      this.isJumping = false;
      this.gravity = 0.92;
      
      this.onGround = true;;
      this.groundLevel = 380;
      
      this.movingLeft = false;
      this.movingRight = false;
    }
  
    show() {
      push();
      rect(this.playerPosition.x, this.playerPosition.y, 20, 20);
      console.log("x = " + this.playerPosition.x + " y = " + this.playerPosition.y)
      pop();
    }
  
    jump() {
      if (!this.isJumping) {
        this.velocityY = -this.jumpStrength;
        this.isJumping = true;
        this.onGround = false;
        console.log("jumping")
      }
    }
  
    applyGravity() {
      if (this.playerPosition.y < this.groundLevel || this.isJumping) {
        if (!this.onGround) {
            this.velocityY += this.gravity;
            this.isJumping = false;
        } else {
            this.isJumping = false;
            this.velocityY = 0;
            console.log("gyat")
        }
      } else {
        this.velocityY = 0;
        this.playerPosition.y = this.groundLevel;
        this.isJumping = false;
        this.onGround = false;
      }
    }
  
    movement() {
      if (this.movingLeft) {
        this.playerPosition.x -= 5;
      }
  
      if (this.movingRight) {
        this.playerPosition.x += 5;
      }
  
      this.applyGravity();
      this.playerPosition.y += this.velocityY;
    }
  }