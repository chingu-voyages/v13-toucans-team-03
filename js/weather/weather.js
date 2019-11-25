//Get openweathermap api key from file api keys

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
  const myjson = await response.json();
  weatherData(myjson);

}


function weatherData(jsonData){
  
  for(let index in jsonData.list){
    console.log(jsonData.list[index])
    let x = jsonData.list[index];
    console.log(x.dt)
    var y =new Date(parseInt(x.dt)*1000);
    console.log(y)
    console.log(x.temp.max)
    console.log(x.weather[0].main)
  
  }
}


getLocation();



