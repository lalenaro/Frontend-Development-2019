var scores = [67, 45, 98, 34, 97, 23, 56, 49, 100, 104];
var fruits = ["mandarine", "mere", "portocale", "banane", 
              "nuci", "kiwi"];

var max = 0;
var position;

for(i=0; i<scores.length; i++){
    if (scores[i] > max) {
        max = scores[i];
        position = i;
    }
}
document.write(max + " bule pe pozitia " + position);

max = fruits[0];
for(i=0; i<fruits.length; i++){
    if (fruits[i] > max) {
        max = fruits[i];
        position = i;
    }
}
document.write(max + " sunt cele mai mari fructe ");
document.write("<br>");
fruits.sort();
document.write(fruits);



