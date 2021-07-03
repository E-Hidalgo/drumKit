//- VARIABLES-

var darkMode = document.getElementById("checkbox");
darkMode.addEventListener("change", switchMode);
var display = document.getElementById("display");
var keys = document.getElementsByClassName("key");

//------- DARK MODE------------
function switchMode() {
document.getElementById("maschine").classList.toggle("dark");
}

// -------- SOUNDS ------
document.addEventListener("keydown", pressKey); //EVENT FOR KEYDOWN


//----THIS FUNCTION CALLS AUDIO FROM DATA-KEYS-----
function pressKey(key) {
 const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
 if(!audio) return;
 audio.currentTime = 0; // THIS MAKES IT BEING ABLE TO PRESS MULTIPLE TIMES
 audio.play()
}

