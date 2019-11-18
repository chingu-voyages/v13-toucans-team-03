let greet = document.getElementsByClassName("greeting__text")[0];

$.getJSON("./js/greeting/greetTypes.json", function(json) {///v13-toucans-team-03/
    let random_num = Math.floor(Math.random()*4)
    console.log(json); // this will show the info it in firebug console
    console.log(json[random_num].Greet)
    greet.innerHTML = json[random_num].Greet;

});



