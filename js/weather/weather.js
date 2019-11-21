import { config } from './apikey.js';

// url
//const weather_url = `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=xml&units=metric&cnt=7&appid=${config.apiKey}`;


function geoFindMe() {

    let weather_url;
  
    //successful callback
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      weather_url = `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=xml&units=metric&cnt=7&appid=${config.apiKey}`;

      
     console.log(weather_url);
     console.log(latitude);

     return weather_url;

     

    }
  
    function error() {
      console.log('Unable to retrieve your location');
    }
  
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
console.log(geoFindMe())

