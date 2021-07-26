export default class Player {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.moveSpeed = 5;
        this.jumpHeight = 10;
        this.velocityX = 0;
        this.velocityY = 0;
        this.gravity = 0.3;
        this.isGrounded = true;
        this.position = {
            x: 60,
            y: window.GAME_HEIGHT - this.height
        }
    }
    move(speed) {
        this.velocityX = speed;
    }
    jump(height) {
        if(this.isGrounded) {
            this.velocityY = -this.jumpHeight;
            this.isGrounded = false;
        }
    }
    draw(ctx) {
        ctx.fillStyle = "#65587f";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.fillStyle = "#af634c";
        ctx.fillRect(this.position.x, this.position.y + this.height, this.width, 15);
    }

    update(deltaTime) {
        
        console.log(this.isGrounded);
        this.position.x += this.velocityX;
        this.position.y += this.velocityY;

        // Reached left / right border
        if(this.position.x < 0) {
            this.position.x = 0;
        }
        if(this.position.x + this.width > window.GAME_WIDTH ) {
            this.position.x = window.GAME_WIDTH - this.width;
        }
        if(this.position.y < 0) {
            this.position.y = 0;
        }
        
        // Jump when off the ground for a short distance
        if(this.position.y + this.height + 15 >= window.GAME_HEIGHT && this.velocityY > 0.1) {
            this.isGrounded = true;
            this.velocityY += this.gravity;
        } 
        // Reached bottom
        else if(this.position.y + this.height < window.GAME_HEIGHT) 
        {
            this.isGrounded = false;
            this.velocityY += this.gravity;
        }
        if(this.position.y + this.height >= window.GAME_HEIGHT) {
            this.isGrounded = true;
            this.position.y = window.GAME_HEIGHT - this.height;
            this.velocityY = 0;
        } 
    }
}