// Enemies our player must avoid

// TODO: Define Enemy
var Enemy = function() {
    this.x = 0;
    this.y = 0;
    this.distanceX = 101;
    this.sprite = 'images/enemy-bug.png';
    this.boundary = this.distanceX * 5;
    this.resetPosition = -this.distanceX;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // TODO: Automate enemy movement
    if (this.x < this.boundary) {
        this.x += 250 * dt;
    }
    else {
        this.x = this.resetPosition;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// TODO: Hero Class
class Hero {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.distanceX = 101;
        this.distanceY = 83;
        this.startX = this.distanceX * 2;
        this.startY = this.distanceY * 5;
        this.x = this.startX;
        this.y = this.startY;
    }

    // Draw the hero sprite based on current X and Y coordinate position
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // Update player's location according to keyboard input
    handleInput(input) {
        switch (input) {
            case "left":
                if (this.x > 0) {
                    this.x -= this.distanceX;
                }
                break;
            case "right":
                if (this.x < this.distanceX * 4) {
                    this.x += this.distanceX;
                }
                break;
            case "up":
                if (this.y > 0) {
                    this.y -= this.distanceY;
                }

                break;
            case "down":
                if (this.y < this.distanceY * 5) {
                    this.y += this.distanceY;
                }
                break;
        }
    }
}

// Hero Class
    // Constructor
        // Properties
            // X position
            // Y position
            // Sprite
        // Methods
            // Update position
                // Check for collision
                        // Did Player collide with enemy?
                // Check for win
                    // Did player reach final tile?
            // Render
                // Draw player sprite on current X and Y coordinate
            // Handle keyboard input
                // Update player's X and Y coordinates according to keyboard input
            // Reset Hero (win game or collision)
                // Set X and Y coordinates to starting X and Y coordinates


// Now instantiate your objects.
const player = new Hero();

const enemy1 = new Enemy();
const allEnemies = [];
allEnemies.push(enemy1);

// TODO: Place all enemy objects in an array called allEnemies

// TODO: Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
