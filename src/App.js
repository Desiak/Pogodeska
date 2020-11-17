import React from "react";
import "./css/style.css";
import { setInterval } from "timers";
import Forecast from "./components/Forecast";
import Info from "./components/Info";
import SelectCity from "./components/SelectCity";
//key
const APIKey = "efa2ef11f117f7485b2fca8e87a3a2f5";
class App extends React.Component {
  state = {
    data: new Date(),
    hour: null,
    day: null,
    sunrise: 0,
    sunset: 0,
    city: "Kraków",
    forecast: null,
    lon: 19.57,
    lat: 50.03,
    currentTime: null,
    cityPending: null,
  };

  onClickSelectCity = (city) => {
    let lat;
    let lon;
    const infoWrapper = document.querySelector(".info-wrapper");
    const forecastWrapper = document.querySelector(".forecast-container");
    switch (city) {
      case "Kraków":
        lat = 50.03;
        lon = 19.57;
        break;
      case "Warszawa":
        lat = 52.12;
        lon = 21.02;
        break;
      case "Rzeszów":
        lat = 50;
        lon = 22;
        break;
      case "Poznań":
        lat = 52.25;
        lon = 16.55;
        break;
      case "Wrocław":
        lat = 51.07;
        lon = 17.02;
        break;
      case "Gdańsk":
        lat = 54.22;
        lon = 18.38;
        break;
      case "Łódź":
        lat = 51.47;
        lon = 19.28;
        break;
      case "Katowice":
        lat = 50;
        lon = 19.01;
        break;
      case "Lublin":
        lat = 51.14;
        lon = 22.34;
        break;
      default:
        console.log("coś nie działa");
    }
    this.setState({
      cityPending: city,
      lat: lat,
      lon: lon,
    });

    infoWrapper.classList.add("hide");
    forecastWrapper.classList.add("hide");
  };

  //get forecast
  getWeather = (lon = 19.57, lat = 50.03) => {
    const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${APIKey}&units=metric&lang=pl`;
    const infoWrapper = document.querySelector(".info-wrapper");
    const forecastWrapper = document.querySelector(".forecast-container");

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się pobrać danych!");
      })
      .then((response) => response.json())
      .then((data) => {
        infoWrapper.classList.remove("hide");
        forecastWrapper.classList.remove("hide");

        this.setState({
          forecast: data,
          currentTime: data.current.dt,
          sunset: data.current.sunset,
          sunrise: data.current.sunrise,
        });
      });
  };

  getGeolocation = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const infoWrapper = document.querySelector(".info-wrapper");
    const forecastWrapper = document.querySelector(".forecast-container");

    this.setState({
      lat: lat,
      lon: lon,
      cityPending: "u Ciebie :)",
    });
    infoWrapper.classList.add("hide");
    forecastWrapper.classList.add("hide");
  };

  getLocalWeather = () => {
    navigator.geolocation.getCurrentPosition(this.getGeolocation);
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

  componentDidMount() {
    const infoSelector = document.querySelector(".info-wrapper");

    this.getCurrentDay();
    setInterval(this.getCurrentTime, 1000);
    this.getWeather();

    infoSelector.addEventListener("transitionend", () => {
      this.getWeather(this.state.lon, this.state.lat);
      this.setState({
        city: this.state.cityPending,
      });
    });
  }

  calculateSunPosition = () => {
    //selectors
    const sunContainer = document.querySelector(".sun-container");
    const sun = document.querySelector(".sun");
    const horizon = document.querySelector(".horizon");
    const moon = document.querySelector(".moon");
    //values
    const dayLength = (this.state.sunset - this.state.sunrise) / 3600;
    const currentTime = (this.state.currentTime - this.state.sunrise) / 3600;
    const sunPositionX = (currentTime / dayLength) * sunContainer.clientWidth;
    const sunPositionY =
      ((-4 * sunContainer.clientHeight) /
        (sunContainer.clientWidth * sunContainer.clientWidth)) *
      sunPositionX *
      (sunPositionX - sunContainer.clientWidth);
    //final sun position
    const finalX = Math.floor(sunPositionX);
    const finalY = sunContainer.clientHeight - Math.floor(sunPositionY);

    //check whether its day or night:
    if (
      finalX < sunContainer.clientWidth &&
      finalY < sunContainer.clientHeight
    ) {
      //if its day- display bright sky and sun
      sun.style.left = `${finalX}px`;
      sun.style.top = `${finalY}px`;
      moon.style.display = "none";
      sun.style.display = "unset";
      sunContainer.style.backgroundColor = "rgb(202, 226, 247)";
      horizon.style.backgroundColor = "rgb(123, 201, 134)";
    } else {
      //in the night display dark sky and moon
      sun.style.display = "none";
      moon.style.display = "unset";

      sunContainer.style.backgroundColor = "rgba(104, 144, 245, 1)";
      horizon.style.backgroundColor = "rgba(209, 218, 241, 1)";
    }
  };

  componentDidUpdate() {
    this.calculateSunPosition();
  }
  render() {
    return (
      <div className="App">
        <Info
          city={this.state.city}
          day={this.state.day}
          hour={this.state.hour}
          sunset={this.state.sunset}
          sunrise={this.state.sunrise}
        />
        <SelectCity
          selectCity={this.onClickSelectCity}
          getLocalWeather={this.getLocalWeather}
        ></SelectCity>
        <Forecast
          getWeather={this.getWeather}
          forecast={this.state.forecast}
          city={this.state.city}
          hide={this.onClickHide}
          day={this.state.day}
          sunset={this.state.sunset}
        />
      </div>
    );
  }
}
export default App;
