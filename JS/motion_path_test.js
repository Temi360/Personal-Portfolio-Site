// // set the element to rotate from it's center
//register the plugin
document.addEventListener("DOMContentLoaded", function (event) {
  gsap.registerPlugin(MotionPathPlugin, Draggable);
  //   gsap.set([".handOnMouse", ".handOnMouse--self"], {
  //     xPercent: -50,
  //     yPercent: -50,
  //     transformOrigin: "50% 50%",
  //   });
  //   gsap.to(".handOnMouse", {
  //     motionPath: {
  //       path: "#path",
  //       align: "#path",
  //       autoRotate: false,
  //       start: 0,
  //       end: 0.75,
  //     },
  //     duration: 1,
  //     delay: 0.5,
  //     repeat: 1,
  //     yoyo: true,
  //     ease: "power1.inOut",
  //     immediateRender: true,
  //   });

  //dragganle
  Draggable.create(".handOnMouse", {
    type: "x",
    bounds: document.getElementById("container"),
    onClick: function () {
      console.log("clicked");
    },
    onDragEnd: function () {
      console.log("drag ended");
    },
  });
});
