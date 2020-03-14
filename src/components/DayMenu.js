import React from "react";
const DayMenu = props => {
  return (
    <div>
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
              Prognoza na 24 godziny (co 3 godziny)
            </button>
            <br></br>
            <button
              type="button"
              className="btn btn-light top"
              onClick={() => props.switchTomorrow()}
            >
              Prognoza na 48 godzin (co 6 godzin)
            </button>
            <br></br>
            <button
              type="button"
              className="btn btn-light top"
              onClick={props.switch3days}
            >
              Prognoza na 96 godzin (co 12 godzin)
            </button>
          </div>
        </div>
      </div>
      {!props.dispInfo ? (
        <div className="alert alert-primary alert">
          Wybierz jedną z opcji z powyższego menu
        </div>
      ) : null}
    </div>
  );
};

export default DayMenu;
