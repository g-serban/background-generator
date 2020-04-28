var color0 = document.querySelector(".color0");
var color1 = document.querySelector(".color1");
var body = document.getElementById("gradient");

// color0.addEventListener("input", function() {
//     body.style.background = "linear-gradient(to right, " + color0.value + ", " + color1.value + ")";
// });
// color1.addEventListener("input", function() {
//     body.style.background = "linear-gradient(to right, " + color0.value + ", " + color1.value + ")";
// });
// refactoring the code:

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color0.value + ", " + color1.value + ")";
 }

color0.addEventListener("input", setGradient);
color1.addEventListener("input", setGradient);



