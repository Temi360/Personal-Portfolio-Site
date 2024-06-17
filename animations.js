function lightOn(evt){
    evt.preventDefault();
    var light = document.getElementById("light");
    var button = document.getElementById("lampButton");
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
// //eyes move to computer
// var computer = document.getElementById("test");
// computer.addEventListener("mouseover", function (){

//     var pupils = document.getElementById("pupils");
//     pupils.classList.toggle("pupils-right");
// });
// // computer.addEventListener("mouseout", function (){
// //     var pupils = document.getElementById("pupils");
// //     pupils.classList.toggle("")
function makeDraggable(evt){
    var svg = evt.target;
    svg.addEventListener("mousedown", startDrag);
    svg.addEventListener("mousemove", drag);
    svg.addEventListener("mouseup", endDrag);
    svg.addEventListener("mouseleave", endDrag);


    var selectedElement = false;

    function startDrag(evt){
        if (evt.target.classList.contains("draggable")) {
            selectedElement = evt.target;

        }
    }

    function drag(evt){
        if (selectedElement){
            evt.preventDefault();
            var x = parseFloat(selectedElement.getAttributeNS(null, "x"));
            selectedElement.setAttributeNS(null, "x", x + 0.1);
        }
    }
    function endDrag(evt) {
        evt.preventDefault();
        selectedElement = null;
      }

}
// temp drag function
function onDrag(){
  var handOnMouse =  document.getElementById("handOnMouse");
  handOnMouse.classList.toggle("handDragged");
}