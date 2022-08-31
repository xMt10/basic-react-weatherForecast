import React from "react";
import "./app.css"

const City = ({ city }) => {
  console.log(city);
  return (
    <div>
      <div className="city">
        <h1 className="cityTemp">{city.main.temp} <span className="c">°C</span> </h1>
        <h1 className="cityName">{city.name}</h1>
        <h1 className="cityWeather">{city.weather[0].main}</h1>
      </div>
    </div>
  );
};

export default City;