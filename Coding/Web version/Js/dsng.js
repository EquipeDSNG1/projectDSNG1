const canvas = document.
	querySelector('canvas');
const ctx = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = 500;


const startBtn = document.querySelector('#startBtn')
const start = document.querySelector('#start')

var tecla;

window.addEventListener('keydown', function(event) {
    tecla = event.key;
})

class Player {
	constructor(x, y, radius, color, dx, dy, gravity, jump){
	this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.dx = dx;
    this.dy = dy;
    this.gravity = gravity;
    this.jump = jump;

    var maxjump = 3;
    var qntJump = 0;

    this.draw = function(){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        ctx.stroke();
        ctx.fill();
    }

    this.update = function () {

        this.dy += this.gravity;
        this.y += this.dy;

        if ((this.y + this.radius) > canvas.height){
            this.y = canvas.height - this.radius;
            //this.dy *= -0.9;
            qntJump = 0;
        }
        
    }
    
    this.movement = function () {

        if((tecla =='d') || (tecla =='D')) {
            if(this.x >= 0){
                this.x = this.x + this.dx;
            }
            tecla = '';
        }

        if((tecla =='a') || (tecla =='A')) {
            if(this.x <= canvas.width) {
                this.x = this.x - this.dx;
            }

            tecla = '';
        }

        if((tecla =='w') || (tecla =='W')) {
            if (qntJump < maxjump){
                if(this.y>=0) {
                    this.dy = -this.jump;
                    qntJump++;
                }
                tecla = '';
            }
        }

        this.draw();
    }
	}
}

class Projectile {
	constructor(x, y, radius, color, velocity) {
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
		this.velocity = velocity
	}
}

class Enemy {
    
}
class Particle {
	constructor(x, y, radius, color, velocity) {
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
		this.velocity = velocity
		this.alpha = 1
	}
}

function animate() {
	animationId = requestAnimationFrame(animate)

	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

	bola.update();
    bola.movement();
}

var bola = new Player(100, 300, 20, 'red', 10, 10, 0.3, 5);

startBtn.addEventListener('click', () => {
	start.style.display = 'none'
	animate();
})