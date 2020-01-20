let divs = document.querySelectorAll("div");
var arrayOfDivs = Array.from(divs);
var existaRosu = false;

for (i=0; i < arrayOfDivs.length; i++) {
    var div = arrayOfDivs[i];
    var currentStyle = window.getComputedStyle(div).getPropertyValue("background-color");
    if (currentStyle == "rgb(255, 0, 0)") {
     console.log("In pagina web exista div de culoare rosie!");
     existaRosu = true;
    }
}
if (existaRosu === false) {
    console.log("In pagina web NU exista div de culoare rosie!");
}

// arrayOfDivs.some((div) => {
//     var currentStyle = window.getComputedStyle(div).getPropertyValue("background-color");
//     return (currentStyle == "rgb(255, 0, 0)");
// })
