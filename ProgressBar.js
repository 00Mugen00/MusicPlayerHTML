var myMusic,play,bar,progress,max;
max=400;
function initialize(){
	myMusic=document.getElementById("myMusic");
	play=document.getElementById("play");
	bar=document.getElementById("bar");
	progress=document.getElementById("progress");
	play.addEventListener("click",clicking,false);
	bar.addEventListener("click",forwarding,false);
}

function clicking(){
	if(myMusic.paused==false){
		myMusic.pause();
		play.innerHTML="Play";
	}else{
		play.innerHTML="Pause";
		myMusic.play();
		bucle=setInterval(state,20);
	}
}

function state(){
	var total=parseInt(myMusic.currentTime*max/myMusic.duration);
	progress.style.width=total+"px";
}

function forwarding(position){
	if((myMusic.paused==false)&&(myMusic.ended==false)){
		var mouseX=position.pageX-bar.offsetLeft;
		var newTime=(mouseX*myMusic.duration)/max;
		myMusic.currentTime=newTime;
		progress.style.width=mouseX+"px";
	}
}

window.addEventListener("load",initialize,false);
