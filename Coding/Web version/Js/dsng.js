const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;


var key;
var key_run;

var fundo = new Image();
fundo.src = "../img/fundo.jpg";

window.addEventListener('keydown', function(event) {
    key = event.key;
})

window.addEventListener( 'keydown', function( eventrun ) {
	key_run = eventrun.getModifierState( 'Shift' );
	console.log( key_run );
  });

var mapa1;
var mapa2;

window.addEventListener('keydown', function(event) {
    mapa1 = event.key;
})

window.addEventListener('keydown', function(event) {
    mapa2 = event.key;
})

class Player {
	constructor(x,y, v,vr){
		this.x = x;
        this.y = y;
        this.v = v;
	    this.vr = vr;

		var spriteWidth = 858;
		var spriteHeight = 250;
		var rows = 2;
		var cols = 6;
		var width = spriteWidth/cols;
		var height = spriteHeight/rows;

		var curFrame = 0;
		var frameCount = 6;
		var srcX = 0;
		var srcY = 0;
		var character = new Image();
		character.src = "../img/img.png";

		this.draw = function(){

			ctx.drawImage(fundo, 0, 0,canvas.width, canvas.height);
			ctx.drawImage(character,srcX,srcY,width,height,this.x,this.y,300,300);
		}

		this.update = function () {

			if((key=='d') || (key=='D')) {
				if(key_run  ==  1){
					if(this.x - width >= 0) {
						this.x = this.x + this.vr;
						
					}
				}
				if((this.x + width) < canvas.width){
					this.x = this.x + this.v;
					curFrame = ++curFrame % frameCount;
					srcX = curFrame * width; 
				}

				key = '';
			}

			if((key=='A') || (key=='a')) {
				if(key_run  ==  1){
					if(this.x - width >=0) {
						this.x = this.x - this.vr;
					}
				}
				if((this.x - width) < canvas.width){
					this.x = this.x - this.v;
					curFrame = ++curFrame % frameCount;
					srcX = curFrame * width; 
				}

				key = '';
			}

			if((key=='w') || (key=='W')) {
				if(key_run  ==  1){
					if(this.y - width >=0) {
						this.y = this.y - this.vr;
					}
				}
				if(this.y - width >=0) {
					this.y = this.y - this.v;
					curFrame = ++curFrame % frameCount;
					srcX = curFrame * width; 
				}

				key = '';
			}

			if((key=='s') || (key=='S')) {
				if(key_run  ==  1){
					if(this.y- width >= 0) {
						this.y = this.y + this.vr;
					}
				}
				if((this.y + width) < canvas.height){
					this.y = this.y + this.v;
					curFrame = ++curFrame % frameCount;
					srcX = curFrame * width; 
				}

				key = '';
			}

			if(this.x >= 3600){
				if(mapa1 =='1'){
					this.x = 50;
					this.y = 400;
				}
			}
			
			if(this.x >= 3600){
				if(mapa1 =='2'){
					this.x = 50;
					this.y = 1400;
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
}

//X, Y, Radius, v, vr, color
var bola = new Player(50, 400, 40, 20, 15, 'red');
animate();