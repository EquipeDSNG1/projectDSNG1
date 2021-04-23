const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2D')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const startBtn = document.querySelector('#startBtn')
const start = document.querySelector('#start')

var c = canvas.getContext('2d');

function Principal (){
    
}

function Inimigo () {
    
}

function animate (){
    requestAnimationFrame(animate);
}

startBtn.addEventListener('click', () => {
    start.style.display = 'none'
})