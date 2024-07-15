
gsap.registerPlugin(MotionPathPlugin, Draggable);


export const initializeAnimations = () => {

  const pupils = document.getElementById("pupils");
  const lamp = document.getElementById("lampHead");
  const lampButton = document.getElementById("lampButton");

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
    const light = document.getElementById("light");
    light.classList.toggle("displayBlock");
  }

  const fan = document.getElementById("fanBottom");
  const fanButtons = document.getElementById("fanButtons");

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
    const blades = document.getElementById("blades");
    blades.classList.toggle("blades-rotate");
    const hair = document.getElementById("hair-bottom");
    hair.classList.toggle("hair-blows");
    const postIt = document.getElementById("postIt");
    postIt.classList.toggle("postIt-blows");
  }

  const headphones = document.getElementById("headphones");
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
    const head = document.getElementById("head");
    const hair = document.getElementById("hair");
    const audio = document.getElementById("click-sound");
    if (audio.paused) {
      audio.play();
      head.classList.add("moveHead");
      hair.classList.add("moveHead");
    } else {
      audio.pause();
      head.classList.remove("moveHead");
      hair.classList.remove("moveHead");
    }
  }

  const head = document.getElementById("head");
  const eyes = document.getElementById("eyes");
  const closedEyes = document.getElementById("closed-eyes");

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

  const mouse = document.getElementById("handOnMouse");
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

  const computer = document.getElementById("computer");
  computer.addEventListener("click", computerPageTransition);
  function computerPageTransition(event) {
    const deskBackground = document.getElementById("deskBackground");
    // deskBackground.classList.toggle(".opacity");
  }

};
