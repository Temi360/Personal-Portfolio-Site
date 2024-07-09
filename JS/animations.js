window.transitionToPage = function (href) {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  }, 500);
};
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("body").style.opacity = 1;
});
// Name Animation
// const name = document.getElementById("TEMI");

const welcomePageIcon = document.getElementById("clickMeGroup");
console.log(welcomePageIcon);
welcomePageIcon.addEventListener(
  "click",
  transitionToDeskPage(event, "desk_page.html")
);

function transitionToDeskPage(event) {
  document.getClassName("slideUpDiv");
  welcomePageIcon.classList.add("slideUpTransition");
  setTimeout(function () {
    window.location.href = "desk_page.html";
  }, 500);
}
