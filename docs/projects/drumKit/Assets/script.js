let sounds = {
  o : "Assets/sounds/crash.mp3",
  w : "Assets/sounds/kick-bass.mp3",
  l : "Assets/sounds/snare.mp3",
  b : "Assets/sounds/tom-1.mp3",
  u : "Assets/sounds/tom-2.mp3",
  n : "Assets/sounds/tom-3.mp3",
  t : "Assets/sounds/tom-4.mp3"
};

let buttons = document.querySelectorAll(".drum");
let i = 0 ; 

// For Buttons
while ( i < buttons.length ){
  let button =  buttons[i];
  button.addEventListener("click" , function(){
    let sound = sounds[button.innerHTML];
    playAudio(sound);
    let keyValue = [this.innerHTML];
    buttonAnimation(keyValue);
  });
  i ++ ;
}

// For Keyboard
document.addEventListener("keydown", function(event){
  let key = event.key;
  if(key in sounds){
    let sound = sounds[key];
    playAudio(sound);
    let keyValue = event.key;
    buttonAnimation(keyValue)
  }
});

function playAudio(sound){
  let audio = new Audio(sound);
  audio.play();
}

// Button Animation
function buttonAnimation(keyValue){
  let currentBtn = document.querySelector("." + keyValue);
  currentBtn.classList.add("pressed");
  setTimeout(function(){
    currentBtn.classList.remove("pressed");
  }, 200)
}