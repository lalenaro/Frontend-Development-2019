
alert = function(){
var planet = document.querySelector("#redplanet");
planet.innerHTML = "Aliens approaching!";
planet.style.color = "red";
}

document.querySelector("#redplanet").onclick = alert;

