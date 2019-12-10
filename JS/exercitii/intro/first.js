var name="Lena";
var message="Hello " + name + "!";
var timeout=3000;
var isNight=false;
var isMorning=false;
var nothing;

var date = new Date();
var hour = date.getHours();

if(hour >= 20 || hour <= 6) {
    alert("Noapte buna!");
    alert("Somn Usor!");
} else if(hour <= 11){
    alert("Buna dimineata!");
} else if(hour <= 17) {
    alert("Buna ziua");
}else {
    alert("Buna seara");
}

setTimeout(sayHello, timeout);
    function sayHello() {
    console.log(message);
            // alert(message);
     }

