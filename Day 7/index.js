const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
let audio = new Audio("bells.mp3");

playBtn.addEventListener("click", plays);
pauseBtn.addEventListener("click", pauses);
stopBtn.addEventListener("click", stops);


// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.

function plays() {
    console.log("audio playing");
    audio.play();
}

function pauses() {
    console.log("audio paused");
    audio.pause();
}

function stops() {
    console.log("audio stopped");
    audio.pause();
    audio.currentTime = 0;
}
