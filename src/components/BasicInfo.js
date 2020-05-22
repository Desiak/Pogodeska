import React from "react";

const BasicInfo = (props) => {
  const hours = (props.sunset - props.sunrise) / 3600;
  const hoursFull = Math.floor((props.sunset - props.sunrise) / 3600);
  const minutes = Math.floor((hours - hoursFull) * 60);
  const today = new Date().toLocaleDateString();
  const sunrise = new Date(props.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(props.sunset * 1000).toLocaleTimeString();

  return (
    <div className="info">
      <h1>{props.city}</h1>
      <div className="citySelect">
        <select
          className="form-control"
          onChange={props.citySelector}
          onClick={props.changeInfo}
        >
          <option>Kraków</option>
          <option>Warszawa</option>
          <option>Jasło</option>
          <option>Rzeszów</option>
          <option>Gdańsk</option>
          <option>Poznań</option>
          <option>Wrocław</option>
          <option>Lublin</option>
        </select>
        <br></br>
      </div>
      <div className="basicInfo">
        <p className="basicInfo__day">{props.day}</p>
        <p className="basicInfo__clock"> {props.hour}</p>
        <p>{today}</p>
        <p>Wschód słońca: {sunrise}</p>
        <p>Zachód słońca: {sunset}</p>
        <p>
          Długość dnia: {hoursFull} godzin i {minutes} minut.
        </p>
      </div>
      <div className="slide-down">
        <p className="arrow">></p>
        <p>Przewiń</p>
        <p className="arrow">></p>
      </div>
    </div>
  );
};

export default BasicInfo;
