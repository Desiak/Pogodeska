import React from "react";
import "./css/style.css";
import DayMenu from "./components/DayMenu";
import { setInterval } from "timers";
import SpecificForecast from "./components/SpecificForecast";
import BasicInfo from "./components/BasicInfo";
import video from "./assets/cinegraph.mp4";
//klucz
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
    forecastNum: 0
  };
  //toggle menu
  onClickToggle = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  };
  //get basic info (day, date, sunrise, sunset)
  getBasicInfo = () => {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${APIKey}&units=metric&lang=pl`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //get forecast
  getWeather = () => {
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},PL&appid=${APIKey}&units=metric&lang=pl`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się pobrać danych!");
      })
      .then(response => response.json())
      .then(data => {
        //funkcja która iteruje odpowiednią ilość(ustalaną w zależności od wybranej opcji) elementów tablicy. Objęte elementy będą wrzucane do tablicy i wyświtlane na stronie.
        const forecast = data.list.slice(0, this.state.forecastNum);
        let array = [];
        if (forecast.length === 9) {
          array = forecast;
        } else if (forecast.length === 17) {
          array = forecast.filter((x, i) => i % 2 === 0);
        } else if (forecast.length === 33) {
          array = forecast.filter((x, i) => i % 4 === 0);
        }
        const arrForecast = array.map(elem => {
          return {
            time: elem.dt_txt,
            temp: elem.main.temp,
            feelsTemp: elem.main.feels_like,
            press: elem.main.pressure,
            humidity: elem.main.humidity,
            wind: elem.wind.speed,
            description: elem.weather[0].description
          };
        });
        this.setState({
          forecast: arrForecast
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  display96hForecast = () => {
    this.getWeather();
    this.setState({
      displayForecast: true,
      displayToday: false,
      displayTomorrow: false,
      forecastNum: 33
    });
  };

  display48hForecast = () => {
    this.getWeather();

    this.setState({
      displayForecast: true,
      forecastNum: 17
    });
  };

  display24hForecast = () => {
    this.getWeather();
    this.setState({
      displayForecast: true,
      forecastNum: 9
    });
  };

  getCurrentTime = () => {
    this.setState({
      hour: new Date().toLocaleTimeString()
    });
  };

  getCurrentDay = () => {
    const days = [
      "Niedziela",
      "Poniedzialek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota"
    ];
    const day = this.state.data.getDay();
    this.setState({
      day: days[day]
    });
  };

  citySelector = e => {
    this.setState({
      city: e.target.value
    });
  };

  onChangeInfo = () => {
    this.getBasicInfo();
    this.getWeather();
  };

  onClickHide = () => {
    this.setState({
      displayForecast: false
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
        <video autoPlay="autoplay" loop="loop" muted className="video">
          <source src={video} type="video/mp4"></source>
        </video>
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
