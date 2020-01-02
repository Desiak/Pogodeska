import React from "react";
import "./DayMenu.css";
const DayMenu = props => {
  return (
    <div className="menu">
      <div
        data-toggle="collapse"
        data-target="#menu"
        className="toggleMenu"
        onClick={() => props.onToggle()}
      >
        <p>{props.toggle ? "Ukryj menu" : "Pokaż menu"}</p>
      </div>
      <div className="dropdown">
        <div className="collapse" id="menu">
          <button
            type="button"
            className="btn btn-light top"
            onClick={() => props.switch()}
          >
            Pokaż prognozę na 24 godziny (pomiary co 3 godziny)
          </button>
          <br></br>
          <button
            type="button"
            className="btn btn-light top"
            onClick={() => props.switchTomorrow()}
          >
            Pokaż prognozę na 48 godzin (pomiary co 6 godzin)
          </button>
          <br></br>
          <button
            type="button"
            className="btn btn-light top"
            onClick={props.switch3days}
          >
            Pokaż prognozę na 96 godzin (pomiary co 12 godzin)
          </button>
        </div>
      </div>
    </div>
  );
};

export default DayMenu;
