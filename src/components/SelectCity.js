import React from "react";

const SelectCity = (props) => {
  const handleClickCitySelect = (e) => {
    props.selectCity(e.target.id);
  };

  return (
    <div className="select-city">
      <p className="hint">Użyj geolokalizacji, albo wybierz jedno z miast:</p>

      <div className="local-city">
        <button
          className="local-button"
          onClick={() => props.getLocalWeather()}
        >
          <i class="fas fa-search-location"></i>
        </button>
      </div>
      <div className="cities-table">
        <div
          className="city"
          onClick={(e) => handleClickCitySelect(e)}
          id="Kraków"
        >
          Kraków
        </div>
        <div
          className="city"
          onClick={(e) => handleClickCitySelect(e)}
          id="Warszawa"
        >
          Warszawa
        </div>
        <div
          className="city"
          onClick={(e) => handleClickCitySelect(e)}
          id="Rzeszów"
        >
          Rzeszów
        </div>
        <div
          className="city"
          onClick={(e) => handleClickCitySelect(e)}
          id="Gdańsk"
        >
          Gdańsk
        </div>
        <div
          className="city"
          onClick={(e) => handleClickCitySelect(e)}
          id="Wrocław"
        >
          Wrocław
        </div>
        <div
          className="city"
          onClick={(e) => handleClickCitySelect(e)}
          id="Poznań"
        >
          Poznań
        </div>
        <div
          className="city"
          onClick={(e) => handleClickCitySelect(e)}
          id="Lublin"
        >
          Lublin
        </div>
        <div
          className="city"
          onClick={(e) => handleClickCitySelect(e)}
          id="Łódź"
        >
          Łódź
        </div>
        <div
          className="city"
          onClick={(e) => handleClickCitySelect(e)}
          id="Katowice"
        >
          Katowice
        </div>
      </div>
    </div>
  );
};

export default SelectCity;
