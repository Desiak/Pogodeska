import React from "react";

const Day = (props) => {
  const { dayName, icon, desc, temp, press } = props;
  return (
    <div className="daily-forecast">
      <p className="day-name">{dayName}</p>
      <img
        className="icon"
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt="alt"
      />
      <p className="day-description">{desc}</p>

      <p className="day-temperature">{temp}&#176;C</p>
      <p className="day-pressure">{press} hPa</p>
    </div>
  );
};

export default Day;
