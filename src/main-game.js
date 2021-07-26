import Player from "./player.js";
import InputHandler from "./input.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');
canvas.style.top = "16px";
canvas.style.left = "16px";

console.log("Hello World!");

let lastTime = 0;
let player = new Player(50, 50);
new InputHandler(player);


function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, window.GAME_WIDTH, window.GAME_HEIGHT);
    player.update(deltaTime);
    player.draw(ctx);
    requestAnimationFrame(gameLoop);
}

gameLoop();