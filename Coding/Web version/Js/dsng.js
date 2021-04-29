const canvas = document.
	querySelector('canvas');
const ctx = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;


const startBtn = document.querySelector('#startBtn')
const start = document.querySelector('#start')

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

function animate() {
	animationId = requestAnimationFrame(animate)
}

startBtn.addEventListener('click', () => {
	start.style.display = 'none'
})