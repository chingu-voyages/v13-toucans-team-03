let greet = document.getElementsByClassName("greeting__text")[0];

$.getJSON("/v13-toucans-team-03/js/greeting/greetTypes.json", function(json) {
    let random_num = Math.floor(Math.random()*4);
    greet.innerHTML = json[random_num].Greet;

});

