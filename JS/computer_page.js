document.addEventListener("DOMContentLoaded", function (event) {
  document
    .getElementById("computerElements")
    .addEventListener("load", function () {
      gsap.registerPlugin(MotionPathPlugin, Draggable);

      var svgDoc = this.contentDocument;

      var portfolio = svgDoc.getElementById("portfolioBorder");
      var resume = svgDoc.getElementById("resumeBorder");

      var rightButton = svgDoc.getElementById("rightArrowButtonAndText");
      rightButton.addEventListener("click", clickedRight);

      function clickedRight() {
        rightButton.classList.add("buttonClicked");
        resume.classList.remove("borderRemoveColor");
        resume.classList.add("borderColorChange");
        portfolio.classList.add("borderRemoveColor");
        setTimeout(function () {
          rightButton.classList.remove("buttonClicked");
        }, 100);
      }

      var leftButton = svgDoc.getElementById("leftArrowButtonAndText");
      leftButton.addEventListener("click", clickedLeft);

      function clickedLeft() {
        leftButton.classList.add("buttonClicked");
        resume.classList.add("borderRemoveColor");
        portfolio.classList.remove("borderRemoveColor");
        portfolio.classList.add("borderColorChange");
        setTimeout(function () {
          leftButton.classList.remove("buttonClicked");
        }, 100);
      }

      var enterButton = svgDoc.getElementById("enterButtonAndText");
      enterButton.addEventListener("click", clickedEnter);

      function clickedEnter() {
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
});
