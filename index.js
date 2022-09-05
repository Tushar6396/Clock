const hourhand = document.querySelector('[data-hour-hand]')
const minutehand = document.querySelector('[data-minute-hand]')
const secondhand = document.querySelector('[data-second-hand]')

function setclock(){
    const currentDate = new Date() 
    const secondRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
    setRotation(secondhand, secondRatio)
    setRotation(minutehand, minutesRatio)
    setRotation(hourhand, hoursRatio)

}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation' , rotationRatio * 360)
}

setclock()

setInterval(setclock,1000)
