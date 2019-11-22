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
  //console.log(myjson.list[0])

  for(let index in myjson.list){
    console.log(myjson.list[index])
    let x = myjson.list[index];
    console.log(x.dt)
    var y =new Date(parseInt(x.dt)*1000);
    console.log(y)
    console.log(x.temp.max)
    console.log(x.weather[0].main)
  
  }


}
// ! convert date time
// ! https://stackoverflow.com/questions/37979198/convert-datetime-from-server-to-string-javascript

/*
function weatherData(jsonData){
  for(let data in myjson.list){
    myjson.list[data];
  }
   data.temp.max
   data.dt
   weather.main
}
*/

getLocation();



