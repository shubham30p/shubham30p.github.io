function gameOver(){
    if(game.leftScore === game.topScore){
        console.log('Left Wins')
		window.alert("Left Side Wins")
        sessionStorage.setItem("winner", "Left");
        window.location.href = "index.html";
		resetGame()
    }else if(game.rightScore === game.topScore){
        console.log('Right Wins')
        window.alert("Right Side Wins")
		sessionStorage.setItem("winner", "Right");
        window.location.href = "index.html";
        resetGame()
    }
}