// Enemies our player must avoid

var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y + 55;
    this.speed = speed;
    this.distanceX = 101;
    this.sprite = 'images/enemy-bug.png';
    this.boundary = this.distanceX * 5;
    this.resetPosition = -this.distanceX;
};

/* Update the enemy's position, required method for game
 Parameter: dt, a time delta between ticks */

Enemy.prototype.update = function(dt) {

    // Multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < this.boundary) {
        this.x += this.speed * dt;
    }
    else {
        this.x = this.resetPosition;
    }
};

// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

class Hero {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.distanceX = 101;
        this.distanceY = 83;
        this.startX = this.distanceX * 2;
        this.startY = (this.distanceY * 4) + 55;
        this.x = this.startX;
        this.y = this.startY;
        this.winner = false;
    }

    // Draw the hero sprite based on current X and Y coordinate position

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // Reset the hero to starting position
    reset() {
        this.x = this.startX;
        this.y = this.startY;
    }

    update () {
        for (let enemy of allEnemies) {
            if (this.y === enemy.y && (enemy.x + enemy.distanceX/2 > this.x && enemy.x < this.x + this.distanceX/2)) {
            this.reset();
            }
        }

        if (this.y === 55) {
            this.winner = true;
        }
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

// Instantiate objects
const player = new Hero();

const enemy1 = new Enemy(0, 0, 200);
const enemy2 = new Enemy(0, 83, 250);
const enemy3 = new Enemy(0, 166, 300);

const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);


/* This listens for key presses and sends the keys to your
Player.handleInput() method. */

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
