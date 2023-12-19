import "./SearchLine.css";
import React, { useState } from "react";

function SearchLine({ setWeatherInCity, setRequestStatus }) {
  const [city, setCity] = useState("");

  const handleChange = async (e) => {
    setCity(e.target.value);
  };

  const handleClick = async (e) => {
    const APIkey = "5e50b334165fc490d52528ffef2187e5";
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}&lang=ru&units=metric`
    )
      .then((data) => data.json())
      .then((data) => {
        const lat = data[0].lat;
        const lon = data[0].lon;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&lang=ru&units=metric
        `
        )
          .then((data) => data.json())
          .then((data) => {
            setWeatherInCity({
              temperature: data.main.temp.toFixed(0),
              main: data.weather[0].main,
              description:
                data.weather[0].description.slice(0, 1).toUpperCase() +
                data.weather[0].description.slice(1),
              humidity: data.main.humidity,
              wind: parseFloat((data.wind.speed * 0.44704).toFixed(1)),
            });
            setRequestStatus("fulfilled")
          });
      });
  };
  return (
    <div className="search-wrapper">
      <input id="search" onChange={handleChange}></input>
      <div id="search-button-wrapper">
        <button id="search-button" onClick={handleClick}>
          Найти
        </button>
      </div>
    </div>
  );
}

export default SearchLine;
