const canvas = document.
	querySelector('canvas');
const ctx = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;


const startBtn = document.querySelector('#startBtn')
const start = document.querySelector('#start')

var tecla;

window.addEventListener('keydown', function(event) {
    tecla = event.key;
})

class Player {
	
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

function Principal (x, y, radius, dx, dy, color){

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;

    this.draw = function(){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        ctx.stroke();
        ctx.fill();
    }

    this.update = function () {
        if((tecla=='d') || (tecla=='D')) {
            if(this.x >= 0){
                this.x = this.x + this.dx;
            }
            tecla = '';
        }

        if((tecla=='a') || (tecla=='A')) {
            if(this.x <= 800) {
                this.x = this.x - this.dx;
            }

            tecla = '';
        }

        if((tecla=='w') || (tecla=='W')) {
            if(this.y>=0) {
                this.y = this.y - this.dy;
            }

            tecla = '';
        }

        if((tecla=='s') || (tecla=='S')) {
            if(this.y <= 800) {
                this.y = this.y + this.dy;
            }

            tecla = '';
        }

        this.draw();
    }
}

function animate() {
	animationId = requestAnimationFrame(animate)

	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

	bola.update();
}

var bola = new Principal(10, 10, 10, 10, 10, 'blue');

startBtn.addEventListener('click', () => {
	start.style.display = 'none'
	animate();
})