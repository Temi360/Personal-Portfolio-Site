document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("deskElements").addEventListener("load", function () {
    gsap.registerPlugin(MotionPathPlugin, Draggable);

    var svgDoc = this.contentDocument;

    var pupils = svgDoc.getElementById("pupils");
    var lamp = svgDoc.getElementById("lampHead");
    var lampButton = svgDoc.getElementById("lampButton");

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
      var light = svgDoc.getElementById("light");
      var button = svgDoc.getElementById("lampButton");
      light.classList.toggle("displayBlock");
    }

    var fan = svgDoc.getElementById("fanBottom");
    var fanButtons = svgDoc.getElementById("fanButtons");

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
      var blades = svgDoc.getElementById("blades");
      blades.classList.toggle("blades-rotate");
      var hair = svgDoc.getElementById("hair-bottom");
      hair.classList.toggle("hair-blows");
      var postIt = svgDoc.getElementById("postIt");
      postIt.classList.toggle("postIt-blows");
    }

    var headphones = svgDoc.getElementById("headphones");
    headphones.addEventListener("mouseover", lookHeadphones);
    headphones.addEventListener("mouseout", resetHeadphones);

    function lookHeadphones(event) {
      pupils.classList.add("eyesToHeadphones");
    }

    function resetHeadphones(event) {
      pupils.classList.remove("eyesToHeadphones");
    }

    var head = svgDoc.getElementById("head");
    var eyes = svgDoc.getElementById("eyes");
    var closedEyes = svgDoc.getElementById("closed-eyes");

    function blink(event) {
      eyes.classList.add("eyes-closed");
      closedEyes.classList.add("eyelids-closed");
    }

    function stopBlink(event) {
      var eyes = svgDoc.getElementById("eyes");
      var closedEyes = svgDoc.getElementById("closed-eyes");
      eyes.classList.remove("eyes-closed");
      closedEyes.classList.remove("eyelids-closed");
    }

    setInterval(blink, 3000);
    setInterval(stopBlink, 6000);

    var mouse = svgDoc.getElementById("handOnMouse");
    mouse.addEventListener("mouseover", lookMouse);
    mouse.addEventListener("mouseout", resetMouse);
    function lookMouse(event) {
      pupils.classList.add("eyesToMouse");
    }
    function resetMouse(event) {
      pupils.classList.remove("eyesToMouse");
    }

    var handOnMouse = svgDoc.getElementById("handOnMouse");
    console.log(handOnMouse.id);
    Draggable.create(handOnMouse, {
      bounds: { minX: 10, minY: 0, maxX: 40, maxY: 8 },
    });
  });
});
