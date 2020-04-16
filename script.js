setInterval(setClock, 1000) //every 1,000 milisecs we call this function//
//LINES 3-5 SELECTS ELEMENTS TO BE SET//
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() { //calling js time//
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() /60 //60secs in a min//
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60 
    const hoursRatio = (minutesRatio + currentDate.getHours()) /12
//BELOW LINES ARE calls related to function on line 15//
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}
//BELOW SETS STYLE OF ROT AND ELEMENTS TO BE ROTATED//
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
//BELOW CALL ELIMINATES DELAY OF REAL-TIME//
setClock()