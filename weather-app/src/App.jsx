import "./App.css";
import SearchLine from "./SearchLine/SearchLine";
import WeatherCard from "./WeatherCard/WeatherCard";
import React, { useState, useEffect } from "react";

function App() {
  const [weatherInCity, setWeatherInCity] = useState({});

  const [requestStatus, setRequestStatus] = useState("pending");

  useEffect(() => {
  }, [weatherInCity]);
  console.log("pampi = ", weatherInCity === false);
  switch (requestStatus) {
    case "fulfilled":
      return (
        <div className="App">
          <SearchLine
            setWeatherInCity={setWeatherInCity}
            setRequestStatus={setRequestStatus}
          />
          <WeatherCard weatherInCity={weatherInCity} />
        </div>
      );
    default:
      return (
        <div className="App">
          <SearchLine
            setWeatherInCity={setWeatherInCity}
            setRequestStatus={setRequestStatus}
          />
        </div>
      );
  }
  
}

export default App;
