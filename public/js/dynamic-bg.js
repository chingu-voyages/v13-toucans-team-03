import {displayTime} from './time.js';

let hour = displayTime().hour;
let time_of_day = displayTime().meridiem;

let bg = document.body;

if(time_of_day === 'AM') {
    bg.style.backgroundImage= "url('../assets/backgrounds/white-ceramic-teacup-in-white-ceramic-saucer-on-railings-.jpg')";
    bg.style.backgroundRepeat = "no-repeat";
    bg.style.backgroundSize = "cover";
    bg.style.position = "bottom";
    bg.style.height = "100%";
}
else if (time_of_day === 'PM' && hour < 6 ) {
    document.body.style.background = "url('../assets/backgrounds/afternoon-ancient-architecture-bell.jpg')";
    bg.style.backgroundRepeat = "no-repeat";
    bg.style.backgroundSize = "cover";
    bg.style.position = "bottom";
    bg.style.height = "100%";
}
else {
    document.body.style.background = "url('../assets/backgrounds/agriculture-clouds-corn.jpg')";
    bg.style.backgroundRepeat = "no-repeat";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "bottom";
    bg.style.height = "100%";
}