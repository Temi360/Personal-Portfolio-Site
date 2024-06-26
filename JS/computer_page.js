document.addEventListener("DOMContentLoaded", function (event) {
  // pen movement
  gsap.registerPlugin(MotionPathPlugin, Draggable);
  Draggable.create("#singularPen");
});
