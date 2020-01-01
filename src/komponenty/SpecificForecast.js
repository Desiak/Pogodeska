import React from "react";
import SingleForecast from "./SingleForecast";
const SpecificForecast = props => {
  const forecast = [props.forecast];
  const displayWeather = forecast[0].map(day => {
    return (
      <SingleForecast
        key={day.time}
        temp={day.temp}
        time={day.time}
        feelsTemp={day.feelsTemp}
        press={day.press}
        humidity={day.humidity}
        wind={day.wind}
        description={day.description}
      />
    );
  });
  // return displayWeather;
  const slideOne = displayWeather.slice(0, 3);
  const slideTwo = displayWeather.slice(3, 6);
  const slideThree = displayWeather.slice(6, 9);

  return (
    <div className="forecast-header">
      <h2
        style={{
          padding: "10px",
          margin: "20px 25%",
          color: "white",
          borderRadius: "14px",
          backgroundColor: "rgba(0, 139, 139, 0.650)"
        }}
      >
        Prognoza pogody w mieście {props.city}
      </h2>
      <div
        id="carouselForecast"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">{slideOne}</div>
          <div className="carousel-item">{slideTwo}</div>
          <div className="carousel-item">{slideThree}</div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselForecast"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselForecast"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <button className="btn btn-dark hide" onClick={props.hide}>
        Ukryj
      </button>
    </div>
  );
};

export default SpecificForecast;
