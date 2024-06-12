function lightOn(){
    var light = document.getElementById("light");
    light.classList.toggle("displayBlock");
}

function fanOn(){
//  alert("function call");
    var blades = document.getElementById("blades");
    blades.classList.toggle("blades-rotate");
    var hair = document.getElementById("hair-bottom");
    hair.classList.toggle("hair-blows");
    var postIt = document.getElementById("postIt");
    postIt.classList.toggle("postIt-blows");

}