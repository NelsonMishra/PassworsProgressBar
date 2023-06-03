const password = document.getElementById("password")
const progressBar = document.getElementById("progressBar")

//check a number in the password 

const hasNumber = /\d/;

//check the UpperCase

const hasUpperCase = /[A-Z]/;

// check the lowerCase

const hasLowerCase = /[a-z]/;

//check special chaarecter

const hasSpecialCase = /[!@#$%^&*()_+[]{}|\<>,.:;"'?`]/;

//progressBar increasses as the user put some input in the box

password.addEventListener('input', function(){
    //whatever the user put , we get the input.
    const value = password.value;

    //for the strength
    let strength = Math.min(6, Math.floor(value.length/3))

    // strength = strength + condition
    strength += value.length > 3 
        ? hasNumber.test(value) +hasUpperCase.test(value)
            + hasLowerCase.test(value) +hasSpecialCase.test(value)
        : 0
        updateBar(strength)
});

function updateBar(strength){

    progressBar.style.width = strength * 10 + '%';

    //change the color of the progressbar by strength

    if(strength > 8){
        progressBar.style.backgroundColor = 'green'
    }else if(strength > 5){
        progressBar.style.backgroundColor = 'orange'
    }else{
        progressBar.style.backgroundColor = 'red'
    }
}
