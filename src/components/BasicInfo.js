import React from "react";

const BasicInfo = props => {
  const hours = (props.sunset - props.sunrise) / 3600;
  const hoursFull = Math.floor((props.sunset - props.sunrise) / 3600);
  const minutes = Math.floor((hours - hoursFull) * 60);
  const today = new Date().toLocaleDateString();
  const sunrise = new Date(props.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(props.sunset * 1000).toLocaleTimeString();

  return (
    <div
      className="info"
      style={{
        backgroundPosition: "center",
        padding: "25px",
        color: "white",
        backgroundImage: `url(${props.img})`
      }}
    >
      <h3>{props.city}</h3>
      <div className="citySelect">
        <select
          className="form-control"
          onChange={props.citySelector}
          placeholder="Zmień miasto..."
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
        <button
          onClick={props.changeInfo}
          className="btn btn-info"
          style={{ opacity: "0.86" }}
        >
          Aktualizuj
        </button>
        <br></br>
      </div>

      <br></br>
      <div
        style={{
          opacity: "0.9",
          paddingTop: "10px",
          border: "2px solid white",
          borderRadius: "7px",
          backgroundColor: "rgb(0, 139,139, 0.75)",
          backgroundRepeat: "no-repeat"
        }}
      >
        <p>Dzisiaj jest: {props.day}</p>
        <p>{today}</p>
        <p>Aktualnie jest godzina: {props.hour}</p>
        <p>Wschód słońca: {sunrise}</p>
        <p>Zachód słońca: {sunset}</p>
        <p>
          Długość dnia: {hoursFull} godzin i {minutes} minut.
        </p>
      </div>
    </div>
  );
};

export default BasicInfo;
