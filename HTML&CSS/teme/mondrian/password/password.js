var pass = document.getElementById('password');
pass.addEventListener('keyup', function(){
    checkPassWord(pass.value);
});
var spanColor = document.querySelector('span');

function checkPassWord(password) {
    var strengthBar = document.getElementById('strength');
    var strength = 0;

    if(password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)){
        strength += 1;
    };
    if(password.match(/[@!#$%^&*()]+/)){
        strength += 1;
    };
    if(password.length >= 8){
        strength += 1;
    };
    
    switch(strength) {
        case 0: strengthBar.value = 0;
                spanColor.style.color = 'red';
                break
        case 1: strengthBar.value = 40;
                spanColor.style.color = 'yellow';
                document.querySelector('progress').style.color ='yellow';
                break
        case 2: strengthBar.value = 80;
                break
        case 3: strengthBar.value = 100;
                break
            }
}