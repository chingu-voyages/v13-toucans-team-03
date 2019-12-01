//Get openweathermap api key from file api keys

import { config } from './config.js';


function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }else{
    alert('Geolocation not available');
  }
}


async function showPosition(position){

  //get the coordinates from browser
  console.log(position.coords);
  let {latitude, longitude} = position.coords;

  //create api url from browser coordinates
  const weather_url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=imperial&cnt=5&appid=${config.apiKey}`;
  console.log(weather_url);

  //response
  const response = await fetch(weather_url);
  console.log(response)

  //body of the response
  const myjson = await response.json();
  console.log(myjson)

  weatherData(myjson);

}

//function will extract key information from openweather API call

function weatherData(jsonData){
  //name of city
  let cityName = jsonData.city.name;
  console.log(cityName);

  //loop through 7 days of weather data 
  for(let index in jsonData.list){

    //one weather data object
    console.log(jsonData.list[index])
    let weatherObj = jsonData.list[index];

    //epoch date of weather 
    console.log(weatherObj.dt);

    //human readable date for weather object
    let weatherDate =new Date(parseInt(weatherObj.dt)*1000);
    console.log(weatherDate)

    //maxium tempature for that day
    let weatherTemp = weatherObj.temp.max;
    console.log(weatherObj.temp.max);

    //weather description from that day
    let weatherDescription = weatherObj.weather[0].main;
    console.log(weatherObj.weather[0].main);

    //weather icon
    let weatherIcon = weatherObj.weather[0].icon;
    console.log(weatherIcon,"weatherIcon");

    let weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    console.log(weatherIconUrl,"weather icon link")

  
  }
}


getLocation();



