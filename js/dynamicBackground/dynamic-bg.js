import {morning, afternoon, evening} from '../dynamicBackground/bgList.js';

// Get military hours
let currentTime = new Date();
let hours = currentTime.getHours();

let bg = document.body;


// Set a random background image from external arrays depending of the time of the day.
if(hours < 12 ) {
    let randomMorning = Math.floor(Math.random() * morning.length);
    bg.style.background= "url('./assets/backgrounds/" + morning[randomMorning] +"') no-repeat center center";
    bg.style.backgroundSize = "cover";
    bg.style.height = "100%";

}
else if (hours >= 12 && hours < 17 ) {
    let randomAfternoon = Math.floor(Math.random() * afternoon.length);
    bg.style.background = "url('./assets/backgrounds/" + afternoon[randomAfternoon] + "') no-repeat center center";
    bg.style.backgroundSize = "cover";
    bg.style.height = "100%";

}
else {
    let randomEvening = Math.floor(Math.random() * evening.length);
    console.log(randomEvening);
    bg.style.background = "url('./assets/backgrounds/" + evening[randomEvening] + "') no-repeat center center";
    bg.style.backgroundSize = "cover";
    bg.style.height = "100%";

}