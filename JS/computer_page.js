document.addEventListener("DOMContentLoaded", function (event) {
  // pen movement
  gsap.registerPlugin(MotionPathPlugin, Draggable);

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
    document.querySelector("body").style.opacity = 0;
    setTimeout(function () {
      window.location.replace("portfolio_page.php");
    }, 500);
  }

  Draggable.create("#singularPen");
});
