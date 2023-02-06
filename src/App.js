import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import sun from "./assets/sun.png";
import { Profile } from "./Profile";

function App() {
  const inputValue = useRef();
  const [input, setInput] = useState("Delhi");
  const [weatherData,setWeatherData]=useState()
  
  useEffect(()=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=03718c205b1a7c568d376cd2f07c2305`;
      fetch(url)
      .then((res)=> res.json())
      .then(data=> setWeatherData(data))
  },[input])

  function handleSubmit(e) {
    e.preventDefault();
    setInput(inputValue.current.value)
  }

//Converting Sec into hours

const getTimeInHours=(timeInSec)=>{
  return `${new Date(timeInSec * 1000).getHours()} : ${new Date(timeInSec *1000).getMinutes()}`
}

  return (
    <div className="App">
      <header>
        
        <div className="title">V Weather</div>
        <form className="search-box" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="City..."
            ref={inputValue}
          />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </header>
    
    {weatherData && weatherData.message &&
      <div className="err-message">Sorry, can not find this place.</div>
    }

    {weatherData && weatherData.name &&<>
      <div className="weather-info">
        <div>
          <div className="weather-icon">
            <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt='weather'
                />
          </div>
          <div className="weather-mood">{weatherData.weather[0].main}</div>
        </div>

        <div className="weather-status">
          <div className="city">{weatherData.name}, {weatherData.sys.country}</div>
          <div className="small">{new Date().toLocaleString()}</div>
          <div className="temp-info">
            <div className="deg">{weatherData.main.temp}&deg;C</div>
            <div>
              <div className="small">Feels Like : {weatherData.main.feels_like}&deg;C</div>
              <div className="small">H: {weatherData.main.temp_max}&deg;C &nbsp; L: {weatherData.main.temp_min}&deg;C</div>
            </div>
          </div>
        </div>
      </div>

      <div className="weather-info-extra">
        <div className="sun-rise-set">
          <span>
            Sunrise <br /> {getTimeInHours(weatherData.sys.sunrise)} AM
          </span>
          <img src={sun} alt="sun" />
          <span>
            Sunset <br /> {getTimeInHours(weatherData.sys.sunset)} PM
          </span>
        </div>
        <div className="weather-info-extra-extra">
          <div className="weather-info-extra-box">
            <i className="fa-solid fa-wind"></i>{" "}
            <span>
              {weatherData.wind.speed} m/s<span>Wind Speed</span>
            </span>
          </div>
          <div className="weather-info-extra-box">
            <i className="fa-solid fa-angles-down"></i>{" "}
            <span>
              {weatherData.main.pressure} hPa<span>Pressure</span>
            </span>
          </div>
          <div className="weather-info-extra-box">
            <i className="fa-regular fa-eye"></i>{" "}
            <span>
              {weatherData.visibility/1000} KM<span>Visiblity</span>
            </span>
          </div>
          <div className="weather-info-extra-box">
            <i className="fa-solid fa-droplet"></i>{" "}
            <span>
              {weatherData.main.humidity} %<span>Humidity</span>
            </span>
          </div>
        </div>
      </div>
      </>}
      <Profile/>
    </div>
  );
}

export default App;
