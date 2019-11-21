//! TO Read https://scotch.io/courses/10-need-to-know-javascript-concepts/callbacks-promises-and-async
//https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp
//https://www.youtube.com/watch?v=ZtLVbJk7KcM&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&t=0s


import { config } from './apikey.js';
//console.log(config.apiKey)

//get location from user

//create url api

//fetch data from api

// then manipulate the data to get what I want

//https://openweathermap.org/forecast16

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

//https://www.w3schools.com/html/html5_geolocation.asp

//separate information

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




//api fetch

//api url
