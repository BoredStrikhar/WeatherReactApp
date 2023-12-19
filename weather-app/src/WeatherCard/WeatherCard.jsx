import "./WeatherCard.css";
import React, { useState, useEffect } from "react";
import { ReactComponent as TemperatureLogo } from "../assets/temperature.svg";
import { ReactComponent as WindLogo } from "../assets/wind.svg";
import { ReactComponent as HumidityLogo } from "../assets/humidity.svg";
import cloudsImg from "../assets/clouds.jpg"
import rainImg from "../assets/rain.jpg";
import snowImg from "../assets/snow.jpg";
import defaultImg from "../assets/default.jpg";


const WEATHER_TO_BACKGROUND = {
  Rain: rainImg,
  Snow: snowImg,
  Clouds: cloudsImg,
};

function WeatherCard({ weatherInCity }) {
  const { temperature, main, description, humidity, wind } = weatherInCity;
  return (
    <div
      className="weather-card-wrapper"
      style={{ backgroundImage: `url(${WEATHER_TO_BACKGROUND[main] || defaultImg})` }}
    >
      <div className="weather-content-wrapper">
        <span>{description}</span>
        <div className="temperature-wrapper">
          <TemperatureLogo
            fill="white"
            style={{ height: 64, width: 64, color: "white" }}
          />
          <span>{temperature}</span>
        </div>
        <div className="additional-wrapper">
          <div className="humidity-wrapper">
            <HumidityLogo
              fill="white"
              style={{ height: 64, width: 64, color: "white" }}
            />
            <span>{humidity}</span>
          </div>
          <div className="wind-wrapper">
            <WindLogo
              fill="white"
              style={{ height: 64, width: 64, color: "white" }}
            />
            <span>{wind}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
