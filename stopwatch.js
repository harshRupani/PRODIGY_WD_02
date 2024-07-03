function myfunc(){
	var x=document.getElementById("mytopnav");
	if(x.className === "topnav"){
		x.className += " responsive";
	}
	else{
		x.className= "topnav";
	}
}

window.onload = function(){
    var min = 0;
    var sec = 0;
    var milisec = 0;
    var appendMin = document.getElementById('min');
    var appendSec = document.getElementById('sec');
    var appendMilisec = document.getElementById('milisec');
    var laps= document.getElementById('laps');

    var startbtn = document.getElementById('start');
    var stoptbtn = document.getElementById('pause');
    var resetbtn = document.getElementById('reset');
    var lapbtn = document.getElementById('lap');
    var interval;

    function timer(){
        milisec++;
        if (milisec <= 9){
            appendMilisec.innerHTML = '0' + milisec;
        }
        if (milisec > 9){
            appendMilisec.innerHTML = milisec;
        }
        if (milisec > 99){
            sec++;
            appendSec.innerHTML = '0' + sec;
            milisec = 0;
            appendMilisec.innerHTML = '0' + 0;
        }
        if (sec > 9){
            appendSec.innerHTML = sec;
        }
        if (sec > 59){ 
            min++;
            appendMin.innerHTML = '0' + min;
            sec = 0;
            appendSec.innerHTML = '0' + 0;
        }
    }

    startbtn.onclick = function(){
        clearInterval(interval);
        interval = setInterval(timer, 10);
    }

    stoptbtn.onclick = function(){
        clearInterval(interval);
    }

    resetbtn.onclick = function(){
        clearInterval(interval);
        milisec = 0; 
        sec = 0; 
        min = 0; 
        appendMilisec.innerHTML = '00';
        appendSec.innerHTML = '00';
        appendMin.innerHTML = '00';
        laps.innerHTML= '';
        container.style.height = 'auto';
    }
    lapbtn.onclick = function() {
        var lapTime = min + ":" + (sec <= 9 ? "0" + sec : sec) + ":" + (milisec <= 9 ? "0" + milisec : milisec);
        var lapElement = document.createElement('p');
        lapElement.innerText = lapTime;
        laps.appendChild(lapElement);
        container.style.height = container.scrollHeight + "px";

    }
}
