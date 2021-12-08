const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const audio = new Audio('bells.mp3');
playBtn.addEventListener("click", play)
pauseBtn.addEventListener("click", pause)
stopBtn.addEventListener("click", stop)
const bell = document.getElementById("bell")

function play() {
    audio.play()
    bell.classList.add("animate")
}
 
 function pause() {
    audio.pause()
    bell.classList.remove("animate")
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
    bell.classList.remove("animate")
}
