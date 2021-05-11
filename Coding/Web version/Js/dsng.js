const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

var key;
var key_run;
var key_inte;



window.addEventListener('keydown', function(event) {
	key = event.key;
})


window.addEventListener( 'keydown', function( eventrun ) {
	key_run = eventrun.getModifierState( 'Shift' );
});

window.addEventListener( 'keydown', function( eventint ) {
	key_inte = eventint.getModifierState( 'Alt' );
	console.log( key_inte );
});



class Player {
	constructor(x,y,radius, vr, vl, vd, vu, vrr, vrl, vrd, vru, color){
		this.x = x;
        this.y = y;
        this.radius = radius;
		
		this.key_int = key_inte
		this.cd;
		this.cu;
		this.cl;
		this.cr;

		this.vr = vr;
		this.vl = vl;
		this.vd = vd;
		this.vu = vu;
        this.vrr = vrr;
	    this.vrl = vrl;
		this.vrd = vrd;
		this.vru = vru;
		this.stamina = 500;

        this.color = color;

   	 	this.draw = function(){
        	ctx.beginPath();
        	ctx.strokeStyle = this.color;
        	ctx.fillStyle = this.color;
        	ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        	ctx.stroke();
        	ctx.fill();
    	}
		
		if(key_run=0){this.stamina= this.stamina+1}

    	this.mov = function () {
        	if((key=='d') || (key=='D')) {
				if((this.x + this.radius) < canvas.width){
      	        	this.x = this.x + this.vr;
					if((key_run  ==  1)&&(this.stamina>0)){
						this.x = this.x + this.vrr;
						this.stamina=this.stamina-1
					} 
				}
       	     key = '';
    		}

        	if((key=='A') || (key=='a')) {
				if((this.x - this.radius) > 0){
            	    this.x = this.x - this.vl;
					if((key_run  ==  1)&&(this.stamina>0)){
						this.x = this.x - this.vrl;
						this.stamina=this.stamina-1
					}
           	 	}
    	      	key = '';
   	     	}

       	 	if((key=='w') || (key=='W')) {
				if(this.y-this.radius>0) {
                	this.y = this.y - this.vu;
					if((key_run  ==  1)&&(this.stamina>0)){
						this.y = this.y - this.vru;
						this.stamina=this.stamina-1
					}
            	}	
            	key = '';
       		}

       		if((key=='s') || (key=='S')) {
				if((this.y+this.radius<canvas.height)){
        	        this.y = this.y + this.vd;
					if((key_run  ==  1)&&(this.stamina>0)){
						this.y = this.y + this.vrd;
						this.stamina=this.stamina-1
					}

         	   }
        	    key = '';
        	}
			if((key_run=0)&&(this.stamina<500)){
				this.stamina = this.stamina + 1
			}
        	this.draw();
    	}

		this.collision = function(){
			if((this.x	<= block.posx)&&(this.x+this.radius>= block.posx)){
				if((this.y+this.radius >= block.posy) && (this.y+this.radius <= (block.posy + block.height)||(this.y-this.radius <= (block.posy + block.height)))){
					this.vr = 0;
					this.vrr = 0;
					this.cr = 1;
				}
				else{
					this.vr = vr;
					this.vrr = vrr;
					this.cr = 0;
				}
			}	
			else{
				this.vr = vr;
				this.vrr = vrr;
				this.cr = 0;
			}

			if(((this.x-this.radius*1.3 <= block.posx+block.height))&&(this.x+this.radius>= block.posx+block.height)){
				if((this.y+this.radius >= block.posy) && (this.y+this.radius <= (block.posy + block.height)||(this.y-this.radius <= (block.posy + block.height)))){
					this.vl = 0;
					this.vrl = 0;
					this.cl = 1;
				}
				else{
					this.vl = vl;
					this.vrl = vrl
					this.cl = 0;
				}
			}	
			else{
				this.vl = vl;
				this.vrl = vrl;
				this.cl = 0;
			}

			if(((this.y-this.radius*1.3 <= block.posy+block.height))&&(this.y+this.radius>= block.posy+block.height)){
				if((this.x+this.radius >= block.posx) && (this.x+this.radius <= (block.posx + block.height)||(this.x-this.radius <= (block.posx + block.height)))){
					this.vu = 0;
					this.vru = 0;
					this.cu = 1;
					console.log(this.cu);
				}
				else{
					this.vu = vu;
					this.vru = vru;
					this.cu = 0;
				}
			}	
			else{
				this.vu = vu;
				this.vru = vru;
				this.cu = 0;
			}


			if((this.y	<= block.posy)&&(this.y+this.radius>= block.posy)){
				if((this.x+this.radius >= block.posx) && (this.x+this.radius <= (block.posx + block.height)||(this.x-this.radius <= (block.posx + block.height)))){
					this.vd = 0;
					this.vrd = 0;
					this.cd = 1;
					console.log(this.cd);
				}
				else{
					this.vd = vd;
					this.vrd = vrd
					this.cd = 0;
				}
			}	
			else{
				this.vd = vd;
				this.vrd = vrd
				this.cd = 0;
			}
		}

		this.update = function(){
			this.mov();
			this.collision();

		}
		
	}
}

class Box{
	constructor(posX, posY, height, colorbox,mov){
		this.posy = posY;
		this.posx = posX;
		this.height = height;
		this.colorbox = colorbox;


		this.mov

		this.drawbox = function(){
			ctx.fillStyle = this.colorbox;
        	ctx.fillRect(this.posx , this.posy, this.height, this.height);
		
		}

	}
}


class Enemy {
    constructor(x, y, radius, color, velocity) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.velocity = velocity;
		this.alpha = 1;
		this.spawn;


		this.draw = function(){
			ctx.beginPath();
    	    ctx.strokeStyle = this.color;
    	   	ctx.fillStyle = this.color;
    		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
     	   	ctx.stroke();
   	     	ctx.fill();

   	 	}

		this.update = function(){

			if((this.y-100 <= player.y)&&(this.y >= player.y)){
			if((this.x-100 <= player.x)&&(this.x >= player.x)){
				this.x = this.x - this.velocity;
				if((this.y-100 <= player.y)&&(this.y >= player.y)){
					this.y = this.y - this.velocity;
				}
	
				if((this.y+100 >= player.y)&&(this.y <= player.y)){
					this.y = this.y + this.velocity;
				}
			}
			}	
			if((this.y+100 >= player.y)&&(this.y <= player.y)){
			if((this.x-100 <= player.x)&&(this.x >= player.x)){
				this.x = this.x - this.velocity;
				if((this.y-100 <= player.y)&&(this.y >= player.y)){
					this.y = this.y - this.velocity;
				}
	
				if((this.y+100 >= player.y)&&(this.y <= player.y)){
					this.y = this.y + this.velocity;
				}
			}
			}

			if((this.y+100 >= player.y)&&(this.y <= player.y)){
			if((this.x+100 >= player.x)&&(this.x <= player.x)){
				if((this.y-100 <= player.y)&&(this.y >= player.y)){
					this.y = this.y - this.velocity;
				}
	
				if((this.y+100 >= player.y)&&(this.y <= player.y)){
					this.y = this.y + this.velocity;
				}
				this.x = this.x + this.velocity;
			}
			}

			if((this.y-100 <= player.y)&&(this.y >= player.y)){
			if((this.x+100 >= player.x)&&(this.x <= player.x)){
				if((this.y-100 <= player.y)&&(this.y >= player.y)){
					this.y = this.y - this.velocity;
				}
	
				if((this.y+100 >= player.y)&&(this.y <= player.y)){
					this.y = this.y + this.velocity;
				}
				this.x = this.x + this.velocity;
			}
			}
			this.draw();
		}
		
		
	}

}

function hud(){
	ctx.font='20px arial';
	ctx.lineWidth=4;
	ctx.fillStyle='black';
	ctx.strokeStyle='black';
	ctx.fillText("stamina:"+player.stamina, 10, 20);
}

interactions = function(){
	if((player.x>=buttom.posx)&&(player.x+player.radius<=buttom.posx+buttom.height)){
		if((player.y>=buttom.posy)&&(player.y+player.radius<=buttom.posy+buttom.height)){
			block2.drawbox();
		}
	}

}


var delay;

function frame() {
  delay = setInterval(animate, 8);
}

function animate() {
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	block.drawbox();
	buttom.drawbox();
	player.update();
	for(j=0; j<=9;j++){
	enemy[j].update();
	}
	interactions();
	hud();

}




var enemy = []
for(j=0; j<=9;j++){
 enemy[j] = new Enemy((canvas.width*Math.random()), 100, 10, 'green', 1);
}
var player = new Player((canvas.width/2), (canvas.height/2), 10, 6, 6, 6, 6, 9, 9, 9, 9, 'red');
var buttom = new Box(100,100,50,'black')
var block = new Box(200,200,30,'purple')
var block2 = new Box(500,300,30,'purple')

frame();
newContent();
