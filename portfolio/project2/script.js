var ch = document.getElementById("changeshape");
var v1 = document.getElementById("a1");
function changeshape()
{
	let s_ch=Math.floor(Math.random() * 10);
	let a="a";
	let res=a.concat(s_ch+1);
	v1.id=res;
}
