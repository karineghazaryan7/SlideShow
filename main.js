let slideStatus = 1;
let slideTime = 2000;

function slideLoop(){

	if(slideStatus === 1){
		setTimeout(function(){
			document.getElementById("spring").style.opacity = "0";

			document.getElementById('spring').style.right = "0px";
			document.getElementById('spring').style.zIndex = "1000";
			document.getElementById('autumn').style.right = "-1200px";
			document.getElementById('autumn').style.zIndex = "1500";
			document.getElementById('winter').style.right = "1200px";
			document.getElementById('winter').style.zIndex = "500";
		} , 500);
		
		setTimeout (function(){
			document.getElementById("spring").style.opacity = "1";
		},1000);

		slideStatus = 2;
		body.style.background = "pink";

	}


	else if(slideStatus === 2){
		setTimeout(function(){
			document.getElementById("winter").style.opacity = "0";

  			document.getElementById('winter').style.right = "0px";
			document.getElementById('winter').style.zIndex = "1000";
			document.getElementById('spring').style.right = "-1200px";
			document.getElementById('spring').style.zndex = "1500";
			document.getElementById('autumn').style.right = "1200px";
			document.getElementById('autumn').style.zndex = "500";
		} , 500);
		
		setTimeout (function(){
			document.getElementById("winter").style.opacity = "1";
		},1000);

		slideStatus = 3;

	}
	else if(slideStatus === 3){
		setTimeout(function(){
			document.getElementById("autumn").style.opacity = "0";

  			document.getElementById('autumn').style.right = "0px";
			document.getElementById('autumn').style.zIndex = "1000";
			document.getElementById('winter').style.right = "-1200px";
			document.getElementById('winter').style.zIndex = "1500";
			document.getElementById('spring').style.right = "1200px";
			document.getElementById('spring').style.zIndex = "500";
		} , 500);
		
		setTimeout (function(){
			document.getElementById("autumn").style.opacity = "1";
		},1000);

		slideStatus = 1;

	}
}

window.onload = function(){
	slideLoop();
}

let StartSlide = setInterval(function()
	{slideLoop()}, slideTime );


document.getElementById("slideshow-container").onmouseenter = function(){
	clearInterval(StartSlide);
}

document.getElementById("slideshow-container").onmouseleave=function(){
	StartSlide = setInterval(function()
	{slideLoop()}, slideTime );

}

document.getElementById("prev").onclick=function(){
	if(slideStatus ===1)
	{
		slideStatus = 2
	}
		else if(slideStatus ===2)
	{
		slideStatus = 3
	}
		else if(slideStatus ===3)
	{
		slideStatus = 4
	}
		 else if(slideStatus ===4)
	{
		slideStatus = 1
	}
    slideLoop();
}

document.getElementById("next").onclick=function(){
	slideLoop();
	
}



