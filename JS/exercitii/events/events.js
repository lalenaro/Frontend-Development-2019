var button = document.querySelector("input");
var element = document.getElementById("time");

var showTime = function() {
    element.innerText = Date();
};

function changeStyle() {
    element.className = "newStyle";
}

// showTime();
// button.onclick = showTime;
// button.onclick = changeStyle;

button.addEventListener("click", showTime);
button.addEventListener("click", changeStyle);

// button.removeEventListener("click", changeStyle);
