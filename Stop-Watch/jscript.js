let display_time=document.getElementById("display_time");
let timer=null;
let [seconds,minutes,hours]=[0,0,0];

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds=0;
        minutes++;
        if(minutes == 60)
        {
            minutes=0;
            hours++;
        }
    }
    let h=hours < 10 ? "0" + hours:hours;
    let m=minutes < 10 ? "0" + minutes:minutes;
    let s=seconds < 10 ? "0" + seconds:seconds;
    display_time.innerHTML=h+":"+m+":"+s;

}

function start(){
    if(timer!==null)
    {
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}

function stop(){
    clearInterval(timer);

}

function reset(){
    clearInterval(timer);
    let [seconds,minutes,hours]=[0,0,0];
    display_time.innerHTML="00:00:00";
    
}