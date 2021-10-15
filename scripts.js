const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand ');

function tick() {
const now = new Date


const seconds = now.getSeconds();
const secondsDegree = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondsDegree}deg)`;
console.log(seconds);


const minutes = now.getMinutes();
const minDegree = ((minutes/60) * 360) + 90;
minHand.style.transform = `rotate(${minDegree}deg)`


const hour = now.getHours();
const hourDegree = ((hour/12) * 360) + 90;
hourHand.style.transform = `rotate(${hourDegree}deg)`


}


setInterval(tick, 1000)
