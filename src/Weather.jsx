import React, { useEffect, useRef, useState } from 'react';
import search_1 from ".//assets/Search.png"
import sun_1 from ".//assets/sun.png"
import air1 from ".//assets/air.png"
import w2 from ".//assets/weather.png"
import clouds1 from ".//assets/clouds.png"
import drizzle1 from ".//assets/drizzle.png"
import rain1 from ".//assets/rain.png"
import snow1 from ".//assets/snow.png"

const Weather = () => {
  const inputRef=useRef();
  const [weatherData, setweatherData]= useState(false);
  const allIcons ={
    "01d": clouds1,
    "01n": drizzle1,
    "02d": rain1,
    "02n": snow1,
    "03d": clouds1,
    "03n": drizzle1,
    "04d": rain1,
    "04n": snow1,
    "09d": clouds1,
    "09n": drizzle1,
    "10d": rain1,
    "10n": snow1,
    "13d": clouds1,
    "13n": drizzle1,

  }
  const search = async (city) => {
    if(city===""){
      alert("Enter City Name");
      return;
    }
    const apiKey = import.meta.env.VITE_APP_ID || "700ce640af40cd50ee863f6520196224";
    console.log("API Key:", apiKey); // Debug log

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      console.log("Fetch URL:", url); // Log full URL for debugging
      const response = await fetch(url);
      const data = await response.json();
      if(!response.ok){
        alert(data.message);
        return;
      }
      console.log("Weather Data:", data); // Log API response
      const icon= allIcons[data.weather[0].icon] || clouds1
      setweatherData({
        humidity: data.main.humidity,
        windSpeed : data.wind.speed,
        temperature : Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      })
    } catch (error) {
      setweatherData(false)
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("Mumbai");
  }, []);

  return (
  
   <div className='rounded-lg bg-customgradient p-custom-1 place-self-center flex flex-col items-center'>
    <div className='flex gap-5 items-center'>
     <input ref={inputRef}className=' border-none outline-none h-height-2 pl-custom2 rounded-border-2 bg-colors8 text-colors4 ' type='text' placeholder='Search'/>
     <img className='h-10 w-10' src={search_1} onClick={()=>search(inputRef.current.value)}/>
     </div>
     <div className='place-self-center '>
      <img className="h-20 w-20 mt-8 place-self-center"src={weatherData.icon}/>
      <p className='place-self-center mt-3 font-font1 text-white text-size2 '>{weatherData.temperature}&deg;C
      </p>
      <p className='place-self-center text-2xl font-font1 text-gray-400 '>{weatherData.location}</p>
      <div className='flex gap-8 mt-4'>
      <div className='place-self-center flex gap-4 mt-3' >
        <div >          
         <img className="h-10 w-10 mt-5"src={air1}/>
        </div>
        <div>
          <p className='text-white font-font1 mt-3'>{weatherData.humidity}%</p>
          <span className='text-white font-font1 mb-2'>Humidity</span>
        </div>
      </div>
      <div className='place-self-center flex gap-4 mt-3'>
        <div>
          <img className='h-10 w-10 mt-5' src={w2}/>
        </div>
        <div>
          <p className='text-white font-font1 mt-3'>{weatherData.windSpeed} km/h</p>
          <span className='text-white font-font1 mb-2'>Wind Speed</span>
        </div>
      </div>
     </div>
     </div>
     </div>
  );
}

export default Weather;
