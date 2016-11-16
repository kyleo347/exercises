var playerstartx = 200;
var playerstarty = 400;
var blockWidth = 100,
        blockHeight = 120,
        numRows = 6,
        numCols = 5,
        width = blockWidth * numCols,
        height = blockHeight * numRows;

// Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.direction  = Math.random() * 30;
    this.direction -= 15
    //this.direction = ((Math.random() * 30) - 15)

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += dt * this.direction;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    Enemy.call(this);
    this.x = playerstartx;
    this.y = playerstarty;
    this.sprite = 'images/char-boy.png';
}

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;
Player.prototype.update = function(dt) {
    
}
Player.prototype.handleInput = function (key) {
    switch (key) {
        case 'left':
            if (this.x > 0) {
                this.x -= 5;
            }
            break;
        case 'right':
            if (this.x < ctx.canvas.width) {
                this.x += 5;
            }
            break;
        case 'up':
            if (this.y > 0) {
                this.y -= 5;
            }
            break;
        case 'down':
            if (this.y < ctx.canvas.height) {
                this.y += 5;
            }
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(), new Enemy(), new Enemy(),new Enemy(),new Enemy()];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
