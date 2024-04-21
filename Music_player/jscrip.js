let progess=document.getElementById("progess");
let song=document.getElementById("song");
let ctrlIcon=document.getElementById("ctrlIcon");

song.onloadedmetadata=function(){
    progess.max=song.duration;
    progess.value=song.currentTime;

}

function playpause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progess.value=song.currentTime;
    },500);
}

progess.onchange=function(){
    song.play();
    song.currentTime=progess.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}