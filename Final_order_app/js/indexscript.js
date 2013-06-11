onload=init;

function init(){
	document.getElementById('start').onmousedown=function(){btnDwn();};
	document.getElementById('start').onmouseup=function(){btnUp();};
}

function btnDwn(){
	document.getElementById('start').style.background="url(img/button_pressed.png)";
}

function btnUp(){
	document.getElementById('start').style.background="";
}