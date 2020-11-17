import React from "react";
import sun from "../assets/sun.svg";
const Info = (props) => {
  const hours = (props.sunset - props.sunrise) / 3600;
  const hoursFull = Math.floor((props.sunset - props.sunrise) / 3600);
  const minutes = Math.floor((hours - hoursFull) * 60);
  const today = new Date().toLocaleDateString();
  const sunrise = new Date(props.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(props.sunset * 1000).toLocaleTimeString();

  return (
    <div className="info">
      <div className="info-wrapper">
        <h1 className="info-city">{props.city}</h1>
        <p className="info-day">{props.day}</p>
        <p className="info-clock"> {props.hour}</p>
        <p className="info-date">{today}</p>
        <p className="info-sunrise">Wschód słońca: {sunrise}</p>
        <p className="info-sunset">Zachód słońca: {sunset}</p>
        <p className="info-day-length">
          Długość dnia: {hoursFull} godzin i {minutes} minut.
        </p>
      </div>
      <div className="sun-container">
        <img className="sun" src={sun} alt="sun" />
        <i className="fas fa-moon moon"></i>

        <div className="horizon"></div>
      </div>
    </div>
  );
};

export default Info;
