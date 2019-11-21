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

//get geolocation
function getLocation(){
    if(navigator.geolocation){
        console.log(navigator.geolocation)
        //navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        console.log("Geolocation is not supported")
    }
}

//api fetch

//api url
const weather_url = `api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7&appid=${config.apiKey}`