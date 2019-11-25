export function displayTime() {
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var meridiem =  "AM";
    
    //convert from military time to AM PM
    if (currentHours> 12) {
      currentHours = currentHours - 12; 
      meridiem = "PM";
    }
    if (currentHours === 0) {
      currentHours = 12;
    }

	// format minutes
	if (currentMinutes < 10) {
		currentMinutes = "0" + currentMinutes;
	}

	document.getElementsByClassName("time")[0].innerHTML = currentHours + ":" + currentMinutes + meridiem;

	let time_obj ={
		"hour": currentHours,
		"meridiem":meridiem
	}
	return time_obj;
}

displayTime();