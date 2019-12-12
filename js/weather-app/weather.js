//Get openweathermap api key from file api keys

import { config } from './config.js.secret';


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
  //console.log(response)

  //body of the response
  const myjson = await response.json();


  //array of weather objects
  let weatherDataInfo = weatherData(myjson);
  console.log(weatherDataInfo);

  //how to access an indiviual weather object and get the weather icon
  console.log(weatherDataInfo[0].weatherIconUrl);

}

//function will extract key information from openweather API call

function weatherData(jsonData){

  //weatherData for 5 days
  let weatherData5 = [];

  //loop through 7 days of weather data 
  for(let index in jsonData.list){
    //weather object respones from the api
    let weatherObj = jsonData.list[index];
    
    //response data from weather api
    let resData ={
      city :jsonData.city.name,
      weatherDescription : weatherObj.weather[0].main,
      weatherDate : new Date(parseInt(weatherObj.dt)*1000),
      weatherTemp : weatherObj.temp.max,
      weatherIcon : weatherObj.weather[0].icon,
      weatherIconUrl : `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`

    };
    weatherData5.push(resData);
  
  } //end of for loop

  return weatherData5;

}


getLocation();



//  OLD CODE PLEASE DONT DELETE YET!

//Get openweathermap api key from file api keys

// import { config } from './config.js';


// function getLocation(){
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showPosition);
//   }else{
//     alert('Geolocation not available');
//   }
// }


// async function showPosition(position){

//   //get the coordinates from browser
//   console.log(position.coords);
//   let {latitude, longitude} = position.coords;

//   //create api url from browser coordinates
//   const weather_url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=imperial&cnt=7&appid=${config.apiKey}`;
//   console.log(weather_url);

//   //response
//   const response = await fetch(weather_url);
//   console.log(response)

//   //body of the response
//   const myjson = await response.json();
//   console.log(myjson)

//   weatherData(myjson);

// }

// //function will extract key information from openweather API call

// function weatherData(jsonData){
//   //name of city
//   let cityName = jsonData.city.name;
//   console.log(cityName);

//   //loop through 7 days of weather data 
//   for(let index in jsonData.list){

//     //one weather data object
//     console.log(jsonData.list[index])
//     let weatherObj = jsonData.list[index];

//     //epoch date of weather 
//     console.log(weatherObj.dt);

//     //human readable date for weather object
//     let weatherDate =new Date(parseInt(weatherObj.dt)*1000);
//     console.log(weatherDate)

//     //maxium tempature for that day
//     console.log(weatherObj.temp.max);

//     //weather description from that day
//     console.log(weatherObj.weather[0].main);
  
//   }
// }


// getLocation();



