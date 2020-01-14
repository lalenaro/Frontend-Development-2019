function caesar(){
    var alphabet1 = ["A", "B", "C", "D", "E", "F",
                    "G", "H", "I","J", "K", "L", "M",
                    "N", "O", "P", "Q", "R", "S",
                    "T", "U", "V", "W", "X", "Y", "Z"]
    var alphabet2 = alphabet1.slice();
    var cod = 6;
    var cifru = [];
    var word = document.getElementById("text").value.split("");

    for (i=0; i < cod; i++) {
        var shiftNumber = alphabet2.shift();
        alphabet2.push(shiftNumber);
    }
    for (i=0; i < word.length; i++) {
        var x = alphabet1.indexOf(word[i]);
        var y = alphabet2[x];
        cifru.push(y);
    }
    document.getElementById("total").innerHTML="Codul Caesar este "+ cifru.join("");
}