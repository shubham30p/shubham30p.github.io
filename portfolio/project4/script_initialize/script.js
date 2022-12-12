/**
 * Canvas and Context
 */
const canvas = document.getElementById('container')
const context = canvas.getContext("2d")
sessionStorage.setItem("winner", "None");


/**
 * Objects
 */
const ball = {
    radius: 8,
    positionX: canvas.width / 2 + 8,
    positionY: canvas.height / 2 + 8,
    velocityX: 2,
    velocityY: 2,
    color: 'white'
}

const leftPlayer = {
    height: 100,
    width: 10,
    positionX: 10,
    positionY: canvas.height / 2 - 100 / 2,
    color: 'white',
    player: 'left',
    speed: 2
}

const rightPlayer = {
    height: 100,
    width: 10,
    positionX: canvas.width - 20,
    positionY: canvas.height / 2 - 100 / 2,
    color: 'white',
    player: 'right',
    speed: 2
}