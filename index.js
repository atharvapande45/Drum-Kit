for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    playAudio(this.innerHTML);
    animation(this.innerHTML);
  });
}

document.addEventListener("keydown", function(keydown) {
  playAudio(keydown.key);
  animation(keydown.key);
});

function playAudio(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      return;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      return;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      return;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      return;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      return;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      return;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      return;
    default:
      return;
  }
}

function animation(key) {

  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
