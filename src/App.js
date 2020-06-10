import React from "react";
import "./css/style.css";
import DayMenu from "./components/DayMenu";
import { setInterval } from "timers";
import SpecificForecast from "./components/SpecificForecast";
import BasicInfo from "./components/BasicInfo";
import galaxy from "./assets/galaxy.jpg";
import forest from "./assets/forest1.jpg";
//key
const APIKey = "efa2ef11f117f7485b2fca8e87a3a2f5";
class App extends React.Component {
  state = {
    data: new Date(),
    hour: null,
    day: null,
    displayForecast: false,
    sunrise: 0,
    sunset: 0,
    toggleMenu: false,
    city: "Kraków",
    forecast: null,
    forecastNum: 0,
  };
  //toggle menu
  onClickToggle = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  };
  //get basic info (day, date, sunrise, sunset)
  getBasicInfo = () => {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${APIKey}&units=metric&lang=pl`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get forecast
  getWeather = () => {
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},PL&appid=${APIKey}&units=metric&lang=pl`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się pobrać danych!");
      })
      .then((response) => response.json())
      .then((data) => {
        //iterate certain number of array elements in order to display them in the forecast.
        const forecast = data.list.slice(0, this.state.forecastNum);
        let array = [];
        if (forecast.length === 9) {
          array = forecast;
        } else if (forecast.length === 17) {
          array = forecast.filter((x, i) => i % 2 === 0);
        } else if (forecast.length === 33) {
          array = forecast.filter((x, i) => i % 4 === 0);
        }
        const arrForecast = array.map((elem) => {
          return {
            time: elem.dt_txt,
            temp: elem.main.temp,
            feelsTemp: elem.main.feels_like,
            press: elem.main.pressure,
            humidity: elem.main.humidity,
            wind: elem.wind.speed,
            description: elem.weather[0].description,
          };
        });
        this.setState({
          forecast: arrForecast,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  display96hForecast = () => {
    this.getWeather();
    this.setState({
      displayForecast: true,
      displayToday: false,
      displayTomorrow: false,
      forecastNum: 33,
    });
  };

  display48hForecast = () => {
    this.getWeather();

    this.setState({
      displayForecast: true,
      forecastNum: 17,
    });
  };

  display24hForecast = () => {
    this.getWeather();
    this.setState({
      displayForecast: true,
      forecastNum: 9,
    });
  };

  getCurrentTime = () => {
    this.setState({
      hour: new Date().toLocaleTimeString(),
    });
  };

  getCurrentDay = () => {
    const days = [
      "Niedziela",
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota",
    ];
    const day = this.state.data.getDay();
    this.setState({
      day: days[day],
    });
  };

  citySelector = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  onChangeInfo = () => {
    this.getBasicInfo();
    this.getWeather();
  };

  onClickHide = () => {
    this.setState({
      displayForecast: false,
    });
  };

  componentDidMount() {
    this.getCurrentDay();
    setInterval(this.getCurrentTime, 1000);
    this.getWeather();
    this.getBasicInfo();
  }

  render() {
    return (
      <div className="container">
        <div className="background">
          <div className="imgContainer">
            <img id="backgroundImg" src={galaxy} alt="galaxy" />
          </div>
          <svg
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Polygon1"
              d="M980.848 0H1920V1080H980.848V823H1131.5H1380L980.848 142L572.5 823H808.5H980.848V1080H0V0H980.848Z"
              fill="url(#pattern1)"
            />
            <defs>
              <clipPath id="clip0">
                <rect width="1920" height="1080" fill="white" />
              </clipPath>
              <pattern
                id="pattern1"
                height="100%"
                width="100%"
                patternContentUnits="objectBoundingBox"
              >
                <image
                  height="1"
                  width="1"
                  preserveAspectRatio="none"
                  href={forest}
                />
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="App">
          <div className="header">
            <p>Prognoza pogody</p>
          </div>

          <BasicInfo
            changeInfo={this.onChangeInfo}
            citySelector={this.citySelector}
            city={this.state.city}
            day={this.state.day}
            hour={this.state.hour}
            sunset={this.state.sunset}
            sunrise={this.state.sunrise}
          />
          <DayMenu
            switch={this.display24hForecast}
            switchTomorrow={this.display48hForecast}
            switch3days={this.display96hForecast}
            toggle={this.state.toggleMenu}
            onToggle={this.onClickToggle}
            dispInfo={this.state.displayForecast}
          />

          {this.state.displayForecast ? (
            <SpecificForecast
              forecast={this.state.forecast}
              city={this.state.city}
              hide={this.onClickHide}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
export default App;
