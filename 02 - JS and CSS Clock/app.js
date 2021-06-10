/* let date = new Date();

let hour = document.querySelector('.hour-hand')
hour.innerHTML = date.getHours();
hour.nextElementSibling.innerHTML =  date.getMinutes()  //`${date.getMonth()+1}`
hour.nextElementSibling.nextElementSibling.innerHTML = date.getSeconds();


let am = document.querySelector('.am-pm')
if(date.getHours() < 12) {
    am.innerHTML = 'AM'
} else {
    am.innerHTML = 'PM'
} */

const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    const secondDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes/60)*360)+90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

    const hours = now.getHours();
    const hourDegrees = ((hours/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}



setInterval(setDate, 1000)
