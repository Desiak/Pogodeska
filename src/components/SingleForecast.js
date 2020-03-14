import React from "react";

const SingleForecast = props => {
  return (
    <div className="single-forecast">
      <h4>{props.time}</h4>
      <p>
        <b>{props.description}</b>
      </p>
      <div className="forecast-info">
        <p className="temperature">{props.temp}&#176;C</p>
        <p className="pressure">{props.press} hPa</p>
        <p>Wiatr: {props.wind} m/s</p>
        <p>Wilgotność: {props.humidity}%</p>
      </div>
    </div>
  );
};

export default SingleForecast;
