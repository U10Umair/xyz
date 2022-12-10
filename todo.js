// var  pera=document.getElementById("pera")

// pera.setAttribute("class","red")

miliSec=0;
sec=0;
min=0;

var displayMS=document.getElementById('displayMiliSec')
var displayS=document.getElementById('displaySec')
var displayM=document.getElementById('displayMin')




function timer(){
    miliSec++;
    if(miliSec == 10){
        miliSec = 0;
        sec++
    }
    if(sec==60){
        sec = 0;
        min++
    }

    displayMS.innerHTML=miliSec
    displayS.innerHTML=sec
    displayM.innerHTML=min



}






var interval;

function startTimer(){
    interval=setInterval(function(){
      timer() 
    },100)


}


function pauseTimer(){
    clearInterval(interval)
}


function resetTimer(){
    pauseTimer();
    min="00";
    sec="00";
    miliSec="00";
    displayMS.innerHTML=miliSec
    displayS.innerHTML=sec
    displayM.innerHTML=min
}