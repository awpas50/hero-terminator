export default class InputHandler {
    constructor(player) {
        document.addEventListener("keydown", event => {
            switch(event.keyCode) {
                case 65: //left
                    player.move(-player.moveSpeed);
                    break;
                case 68: //right
                    player.move(player.moveSpeed);
                    break;
                case 32: // Space
                    player.jump(player.jumpHeight);
                    break;
            }
        } );
        document.addEventListener("keyup", event => {
            switch(event.keyCode) {
                case 65: //left
                    if(player.velocityX < 0) {
                        player.move(0); //stop
                    }
                    
                    break;
                case 68: //right
                    if(player.velocityX > 0) {
                        player.move(0);
                    }
                    break;
            }
        });
    }
}