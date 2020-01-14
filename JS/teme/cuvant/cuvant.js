function count() {
    var word = document.getElementById("text").value;
    if (word===""){
        document.getElementById("total").innerHTML="Total Characters:0";
    }
    var wordArray = word.split("");
    var counter = [];
    for (i = 0; i < wordArray.length; i++) {
        if (!counter.includes(wordArray[i])) {
            counter.push(wordArray[i]);
        }
        document.getElementById("total").innerHTML="Total Characters:"+ counter.length;
    }
}
