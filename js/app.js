// Enemies our player must avoid

// TODO: Define Enemy
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // X Position
    // Y Position

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // TODO: Automate enemy movement
    // If enemy isn't past bounds of screen's edge
        // Move forward
        // Increment x by speed * dt
    // else
        // Reset to start position
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
        this.x = 0;
        this.y = 0;
        this.sprite = 'images/char-boy.png';
    }

    // Draw the hero sprite based on current X and Y coordinate position
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // Update player's location according to keyboard input
    handleInput(input) {
        switch (input) {
            case "left":
                this.x -= 25;
                break;
            case "right":
                this.x += 25;
            case "up":
                this.y -= 25;
            case "down":
                this.y += 25;
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
