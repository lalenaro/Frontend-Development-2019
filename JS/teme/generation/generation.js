var inputAge = document.getElementById('age');
document.getElementById('age').addEventListener('keypress', function calculate(e) {
    var key=e.wich||e.keyCode;
    if (key == 13) {
        if (inputAge.value >= 70) {
            var output="BUILDERS";
        } else if (inputAge.value >= 51 && inputAge.value <=69) {
            output="Baby Boomers";
        } else if(inputAge.value >= 36 && inputAge.value <=50) {
            output="Generation X";
        } else if(inputAge.value >= 21 && inputAge.value <=35) {
            output="Generation Y";
        } else if(inputAge.value >= 6 && inputAge.value <=20) {
            output="Generation Z";
        } else if(inputAge.value <= 6) {
            output="Generation Alpha";
        }
        document.getElementById('outputG').innerHTML = output;
    }

});

