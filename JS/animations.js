// window.transitionToPage = function (href) {
//   document.querySelector("body").style.opacity = 0;
//   setTimeout(function () {
//     window.location.href = href;
//   }, 500);
// };
// document.addEventListener("DOMContentLoaded", function (event) {
//   document.querySelector("body").style.opacity = 1;
// });
// Name Animation
// const name = document.getElementById("TEMI");
document.addEventListener("DOMContentLoaded", (event) => {
  // const test = document.getElementById("test");
  // console.log(test);
  const welcomePageIcon = document.getElementById("welcomePageIconClick");
  welcomePageIcon.addEventListener("click", transitionToDeskPage);

  function transitionToDeskPage(event) {
    const slideUpDiv = document.getElementsByClassName("slideUpDiv")[0];
    slideUpDiv.classList.add("slideUpTransition");
    setTimeout(function () {
      window.location.href = "desk_page.html";
    }, 1000);
  }
});
