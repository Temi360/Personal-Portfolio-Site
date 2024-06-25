gsap.registerPlugin(MotionPathPlugin);

document.addEventListener("DOMContentLoaded", (event) => {
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
    var button = document.getElementById("lampButton");
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

  function lookHeadphones(event) {
    pupils.classList.add("eyesToHeadphones");
  }

  function resetHeadphones(event) {
    pupils.classList.remove("eyesToHeadphones");
  }

  var head = document.getElementById("head");
  var eyes = document.getElementById("eyes");
  var closedEyes = document.getElementById("closed-eyes");

  function blink(event) {
    eyes.classList.add("eyes-closed");
    closedEyes.classList.add("eyelids-closed");
  }

  function stopBlink(event) {
    var eyes = document.getElementById("eyes");
    var closedEyes = document.getElementById("closed-eyes");
    eyes.classList.remove("eyes-closed");
    closedEyes.classList.remove("eyelids-closed");
  }

  setInterval(blink, 3000);
  setInterval(stopBlink, 6000);
});
