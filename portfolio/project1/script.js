var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
count = 0;
function random(number) {
  return Math.floor(Math.random() * (number+1));
}
box.addEventListener('click', function(){
	count++;
	
	console.log(count);
	clickCount.innerText = count + " ";
	const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	box.style.backgroundColor = rndCol;
});