document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(MotionPathPlugin, Draggable);
  var pupils = document.getElementById("pupils");
  var lamp = document.getElementById("lampHead");
  var lampButton = document.getElementById("lampButton");

  lamp.addEventListener("mouseover", lookLamp);
  lamp.addEventListener("mouseout", resetLamp);
  lampButton.addEventListener("click", lightOn);

  function lookLamp(event) {
    pupils.classList.add("eyesToLamp");
  }

  function resetLamp(event) {
    pupils.classList.remove("eyesToLamp");
  }

  function lightOn(evt) {
    evt.preventDefault();
    var light = document.getElementById("light");
    light.classList.toggle("displayBlock");
  }

  var fan = document.getElementById("fanBottom");
  var fanButtons = document.getElementById("fanButtons");

  fan.addEventListener("mouseover", lookFan);
  fan.addEventListener("mouseout", resetFan);
  fanButtons.addEventListener("click", fanOn);

  function lookFan(event) {
    pupils.classList.add("eyesToFan");
  }

  function resetFan(event) {
    pupils.classList.remove("eyesToFan");
  }

  function fanOn() {
    //  alert("function call");
    var blades = document.getElementById("blades");
    blades.classList.toggle("blades-rotate");
    var hair = document.getElementById("hair-bottom");
    hair.classList.toggle("hair-blows");
    var postIt = document.getElementById("postIt");
    postIt.classList.toggle("postIt-blows");
  }

  var headphones = document.getElementById("headphones");
  headphones.addEventListener("mouseover", lookHeadphones);
  headphones.addEventListener("mouseout", resetHeadphones);
  headphones.addEventListener("click", playMusic);
  function lookHeadphones(event) {
    pupils.classList.add("eyesToHeadphones");
  }

  function resetHeadphones(event) {
    pupils.classList.remove("eyesToHeadphones");
  }

  function playMusic(event) {
    var head = document.getElementById("head");
    var audio = document.getElementById("click-sound");
    if (audio.paused) {
      audio.play();
      head.classList.add("moveHead");
    } else {
      audio.pause();
      head.classList.remove("moveHead");
    }
  }

  var head = document.getElementById("head");
  var eyes = document.getElementById("eyes");
  var closedEyes = document.getElementById("closed-eyes");

  function blink(event) {
    eyes.classList.add("eyes-closed");
    closedEyes.classList.add("eyelids-closed");
  }

  function stopBlink(event) {
    eyes.classList.remove("eyes-closed");
    closedEyes.classList.remove("eyelids-closed");
  }

  setInterval(blink, 3000);
  setInterval(stopBlink, 6000);

  var mouse = document.getElementById("handOnMouse");
  mouse.addEventListener("mouseover", lookMouse);
  mouse.addEventListener("mouseout", resetMouse);
  function lookMouse(event) {
    pupils.classList.add("eyesToMouse");
  }
  function resetMouse(event) {
    pupils.classList.remove("eyesToMouse");
  }

  Draggable.create("#handOnMouse", {
    bounds: { minX: 10, minY: 0, maxX: 40, maxY: 8 },
  });
});
