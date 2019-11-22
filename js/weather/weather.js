import { config } from './apikey.js';


function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }else{
    console.log('Geolocation not available');
  }
}


async function showPosition(position){
  console.log(position.coords);

  let {latitude, longitude} = position.coords;
  const weather_url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=imperial&cnt=7&appid=${config.apiKey}`;
  console.log(weather_url)
  const response = await fetch(weather_url);
  console.log(response)
  const json = await response.json();
  console.log(json)

}

getLocation()

// url
//const weather_url = `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=xml&units=metric&cnt=7&appid=${config.apiKey}`;
/*

function geoFindMe() {

    let weather_url;
  
    //successful callback
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      weather_url = `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=xml&units=metric&cnt=7&appid=${config.apiKey}`;

      
     console.log(weather_url);
     console.log(latitude);

    }
  
    function error() {
      console.log('Unable to retrieve your location');
    }
  
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
      console.log(success)
    }
  
  }
  
*/


