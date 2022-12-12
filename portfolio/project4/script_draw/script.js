/**
 * Update and Draw
 */
function drawLeftPlayer() {
    context.beginPath();
    context.fillStyle = leftPlayer.color;
    context.rect(leftPlayer.positionX, leftPlayer.positionY, leftPlayer.width, leftPlayer.height);
    context.fill();
    context.closePath();
}

function drawRightPlayer() {
    context.beginPath();
    context.fillStyle = rightPlayer.color;
    context.rect(rightPlayer.positionX, rightPlayer.positionY, rightPlayer.width, rightPlayer.height);
    context.fill();
    context.closePath();
}


function drawBall() {
    context.beginPath();
    context.fillStyle = ball.color;
    context.arc(ball.positionX, ball.positionY, ball.radius, 0, Math.PI * 2);
    context.fill();
    context.closePath();
}


function drawAll() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawLeftPlayer()
    drawRightPlayer()
    drawBall()
}