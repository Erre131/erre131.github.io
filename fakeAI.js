window.onload = function(){
    localStorage.clear();
}

//Funzione per andare nella pagina indicata nell'url dopo aver "usato l'AI per individuare qualcosa" 
//(quindi dopo che l'AI simulata ha finito di parlare dopo tot msec)
function infoFound(url,msec){
    setTimeout(
        ()=>{window.location=url},
        msec
    );
}

function startAI(audiofile, url, msec){
    var audio= new Audio(audiofile);
    audio.play();
    var playbutton = document.getElementById("play-AI");
    playbutton.disabled=true;
    setTimeout(
        ()=>{window.location=url},
        msec
    );
}

