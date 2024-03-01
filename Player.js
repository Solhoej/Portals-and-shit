class Player {
    constructor(x = width / 2, y = height - 20) {
        this.playerPosition = createVector(x, y);
        this.velocityY = 0;
        this.velocityX = 4;

        this.jumpStrength = 10;
        this.isJumping = false;
        this.gravity = 0.92;

        this.onGround = true;;
        this.groundLevel = height - 20;

        this.movingLeft = false;
        this.movingRight = false;

        this.jumpCount = 0;
    }

    show() {
        push();
        rect(this.playerPosition.x, this.playerPosition.y, 20, 20);
        console.log("x = " + this.playerPosition.x + " y = " + this.playerPosition.y)
        pop();
    }

    jump() {
        if (!this.isJumping && this.jumpCount < 1) {
            this.velocityY = -this.jumpStrength;
            this.isJumping = true;
            this.onGround = false;
            this.jumpCount++
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
            this.jumpCount = 0;
        }
    }

    movement() {
        if (this.movingLeft) {
            this.playerPosition.x = constrain(this.playerPosition.x - this.velocityX, 0, width - 20)
        }

        if (this.movingRight) {
            this.playerPosition.x = constrain(this.playerPosition.x + this.velocityX, 0, width - 20)
        }

        this.applyGravity();
        this.playerPosition.y = constrain(this.playerPosition.y + this.velocityY, 0, width - 20);
    }
}