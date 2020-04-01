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
                // strengthBar.style.color ='orange';
                break
        case 1: strengthBar.value = 20;
                spanColor.innerText = 'weak';
                spanColor.style.color = 'blue';
                // strengthBar.style.color ='violet';
                break
        case 2: strengthBar.value = 60;
                spanColor.innerText = 'good';
                spanColor.style.color = 'brown';
                // strengthBar.style.color ='lightblue';
                break
        case 3: strengthBar.value = 100;
                spanColor.innerText = 'strong!';
                break
            }
}