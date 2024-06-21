window.transitionToPage = function (href) {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  }, 500);
};
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("body").style.opacity = 1;
});

function lightOn(evt) {
  evt.preventDefault();
  var light = document.getElementById("light");
  var button = document.getElementById("lampButton");
  light.classList.toggle("displayBlock");
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

//TO DO: Make this code less stinky!!! PU (Think if else statements? )
function clickedRight() {
  var rightButton = document.getElementById("rightArrowButtonAndText");
  rightButton.classList.add("buttonClicked");
  var resume = document.getElementById("resumeBorder");
  resume.classList.remove("borderRemoveColor");
  resume.classList.add("borderColorChange");
  var portfolio = document.getElementById("portfolioBorder");
  portfolio.classList.add("borderRemoveColor");
  setTimeout(function () {
    rightButton.classList.remove("buttonClicked");
  }, 100);
}

function clickedLeft() {
  var leftButton = document.getElementById("leftArrowButtonAndText");
  leftButton.classList.add("buttonClicked");
  var resume = document.getElementById("resumeBorder");
  resume.classList.add("borderRemoveColor");
  var portfolio = document.getElementById("portfolioBorder");
  portfolio.classList.remove("borderRemoveColor");
  portfolio.classList.add("borderColorChange");
  setTimeout(function () {
    leftButton.classList.remove("buttonClicked");
  }, 100);
}

function clickedEnter() {
  var enterButton = document.getElementById("enterButtonAndText");
  enterButton.classList.add("buttonClicked");
  setTimeout(function () {
    enterButton.classList.remove("buttonClicked");
  }, 100);
  document.querySelector("body").style.opacity = 0;
  setTimeout(function () {
    window.location.replace("portfolio_page.php");
  }, 500);
}
document.addEventListener('DOMContentLoaded', () => {
document.getElementById("computerBackgroundAndKeyboard").addEventListener("click", function (event) {
  if (event.target.classList.contains("clickable")) {
    alert("rightButtonClicked");
    if (event.target.id === "rightArrowButtonAndText") {
      alert("rightButtonClicked");
      // rightButton.classList.add("buttonClicked");
      // setTimeout(function () {
      //     rightButton.classList.remove("buttonClicked");
      //   }, 100);
    } else if (event.target.id === "leftArrowButtonAndText") {
      alert("leftButtonClicked");
    } else if (event.target.id === "enterButtonAndText") {
      alert("enterButtonClicked");
    }
  }
});
});

function Click(event){
    //makes sure event.targeting is selecting the right element in the DOM
    while (target && target !== document && target.tagName !== 'g') {
        event.target = target.parentNode;
    }
    if (target && target.tagName === 'g') {
    var clickedElement = event.target;
    var clickedButton = document.getElementById(clickedElement.id)
    console.log(clickedElement.Id);
    clickedButton.classList.add("buttonClicked");
    setTimeout(function () {
        clickedButton.classList.remove("buttonClicked");
        }, 100);
}
}

