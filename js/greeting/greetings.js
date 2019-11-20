
//variables
let greet = document.getElementsByClassName("greeting__text")[0];
let greet_input = document.getElementById("greeting__input");

//methods

//if local storage is not empty
//display hello message

if(localStorage.getItem('userName')){
    greet.innerHTML = "Hello " + localStorage.getItem('userName');
}

/*
 The hello function takes in an event. In this case the event is a keypress.
 If the user presses the key enter( also known as the keycode 13) then setup the greeting and add the users name into localstorage.
 

*/
function hello(e){
    if(e.keyCode === 13){
        greet.innerHTML = "Hello " + greet_input.value;
        localStorage.setItem('userName',greet_input.value);
        greet_input.value = '';
    }
}


//add event listeners
greet_input.addEventListener('keyup',hello);






