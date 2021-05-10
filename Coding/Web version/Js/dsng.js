const canvas = document.
	querySelector('canvas');
const ctx = canvas.getContext('2d')

//width = 3749;
//height = 1904;
canvas.width = innerWidth;
canvas.height = innerHeight;


var key;
var key_run;



window.addEventListener('keydown', function(event) {
    key = event.key;
})

window.addEventListener( 'keydown', function( eventrun ) {
	key_run = eventrun.getModifierState( 'Shift' );
	console.log( key_run );
  });

class Player {
	constructor(x,y,v,vr){
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
		character.src ="img.png";


		this.draw = function(){

			//ctx.drawImage(character,srcX,srcY,width,height,this.x,this.y,300,300);

		}

		this.update = function () {

			if((key=='d') || (key=='D')) {
				if(key_run  ==  1){
					if(this.x-this.radius>=0) {
						this.x = this.x + this.vr;
						
					}
				}
				if((this.x + this.radius) < canvas.height){
					this.x = this.x + this.v;
					curFrame = ++curFrame % frameCount;
					srcX = curFrame * width; 
				}

				key = '';
			}

			if((key=='A') || (key=='a')) {
				if(key_run  ==  1){
					if(this.x-this.radius>=0) {
						this.x = this.x - this.vr;
					}
				}
				if((this.x - this.radius) < canvas.height){
					this.x = this.x - this.v;
					curFrame = ++curFrame % frameCount;
					srcX = curFrame * width; 
				}

				key = '';
			}

			if((key=='w') || (key=='W')) {
				if(key_run  ==  1){
					if(this.y-this.radius>=0) {
						this.y = this.y - this.vr;
					}
				}
				if(this.y-this.radius>=0) {
					this.y = this.y - this.v;
					curFrame = ++curFrame % frameCount;
					srcX = curFrame * width; 
				}

				key = '';
			}

			if((key=='s') || (key=='S')) {
				if(key_run  ==  1){
					if(this.y-this.radius>=0) {
						this.y = this.y + this.vr;
					}
				}
				if((this.y + this.radius) < canvas.height){
					this.y = this.y + this.v;
					curFrame = ++curFrame % frameCount;
					srcX = curFrame * width; 
				}

				key = '';
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


var bola = new Player(50, 400, 10, 9);
animate();

