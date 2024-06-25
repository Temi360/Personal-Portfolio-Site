gsap.registerPlugin(MotionPathPlugin);

// set the element to rotate from it's center
gsap.set(["#handOnMouse", "#handOnMouse--self"], {
  xPercent: -50,
  yPercent: -50,
  transformOrigin: "50% 50%",
});

// animate the rocket along the path
gsap.to("#handOnMouse", {
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
  },
  duration: 5,
  delay: 1,
  repeat: 1,
  ease: "power1.inOut",
});
