gsap.registerPlugin(MotionPathPlugin, Draggable);

// TO DO: fix bug that makes animations stop working when reloading the page
export const initializeComputerAnimations= () => {

  const resume = document.getElementById("resumeBorder");
  const portfolio = document.getElementById("portfolioBorder");

  const rightButton = document.getElementById("rightArrowButtonAndText");
  rightButton.addEventListener("click", clickedRight);

  function clickedRight() {
    rightButton.classList.add("buttonClicked");
    resume.classList.toggle("borderColorChange");
    portfolio.classList.toggle("borderColorChange");
    setTimeout(function () {
      rightButton.classList.remove("buttonClicked");
    }, 100);
  }

  const leftButton = document.getElementById("leftArrowButtonAndText");
  leftButton.addEventListener("click", clickedLeft);

  function clickedLeft() {
    leftButton.classList.add("buttonClicked");
    resume.classList.toggle("borderColorChange");
    portfolio.classList.toggle("borderColorChange");
    setTimeout(function () {
      leftButton.classList.remove("buttonClicked");
    }, 100);
  }

  const enterButton = document.getElementById("enterButtonAndText");
  enterButton.addEventListener("click", clickedEnter);

  function clickedEnter() {
    const enterButton = document.getElementById("enterButtonAndText");
    enterButton.classList.add("buttonClicked");
    setTimeout(function () {
      enterButton.classList.remove("buttonClicked");
    }, 100);
  }
  Draggable.create("#mouse", {
    bounds: { minX: 10, minY: 0, maxX: -100, maxY: 15 },
  });
  Draggable.create("#singularPen");
};
