import React from "react";
import "./App.css";
import DayMenu from "./components/DayMenu";
import { setInterval } from "timers";
import SpecificForecast from "./components/SpecificForecast";
import BasicInfo from "./components/BasicInfo";
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
    cityImg: "",
    toggleMenu: false,
    city: "Kraków",
    forecast: null,
    forecastNum: 0
  };
  onClickToggle = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  };
  imgSelector = () => {
    switch (this.state.city) {
      case "Kraków":
        this.setState({
          cityImg:
            "https://aparthotelmiodowa.pl/wp-content/uploads/2018/10/shutterstock_image-15.jpg"
        });
        break;
      case "Jasło":
        this.setState({
          cityImg: "http://www.rafaljak.phg.pl/obrazy/Ratusz_min.JPG"
        });
        break;
      case "Warszawa":
        this.setState({
          cityImg:
            "https://www.synevo.pl/wp-content/uploads/2018/08/laboratorium-warszawa.jpg"
        });
        break;
      case "Rzeszów":
        this.setState({
          cityImg:
            "https://ocdn.eu/pulscms-transforms/1/Y1Nk9kpTURBXy9mNWI3ZjRhNWVmNGI1YzYyNzA4ZGZhYThkZGYzNDgwMC5qcGeTlQMAUs0PIM0IgpMFzQMUzQG8kwmmMmU1YjRmBoGhMAE/pomnik-czynu-rewolucyjnego-w-rzeszowie-fot-franciszek-mazur-agencja-gazeta.jpg"
        });
        break;
      case "Gdańsk":
        this.setState({
          cityImg:
            "https://www.tyszkiewicz.pl/blog/wp-content/uploads/2017/10/Fotolia_119236654_S-e1507295734666.jpg"
        });
        break;
      case "Poznań":
        this.setState({
          cityImg:
            "https://fotoportal.poznan.pl/images/4bcbcc8f-f055-49af-86ba-8fc8dc20832c/home-section-2.jpg"
        });
        break;
      case "Wrocław":
        this.setState({
          cityImg:
            "https://kochamwroclaw.pl/wp-content/uploads/12ec4c8478d2d658d94da5fe27c68d89.jpg"
        });
        break;
      case "Lublin":
        this.setState({
          cityImg:
            "https://podroze.smcloud.net/t/image/t/123536/image/IMG-8940_1097909.jpg"
        });
        break;
      default:
        this.setState({
          cityImg:
            "https://www.xda-developers.com/files/2018/05/android-weather-apps.png"
        });
    }
  };
  getBasicInfo = () => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${APIKey}&units=metric&lang=pl`;

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

  display48hForecast = () => {
    this.imgSelector();

    this.getWeather();

    this.setState({
      displayForecast: true,
      forecastNum: 17
    });
  };

  display24hForecast = () => {
    this.imgSelector();
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
  componentDidMount() {
    this.getCurrentDay();
    setInterval(this.getCurrentTime, 1000);
    this.getWeather();
    this.getBasicInfo();

    this.imgSelector();
  }

  citySelector = e => {
    this.setState({
      city: e.target.value,

      displayForecast: false
    });
  };
  onChangeInfo = () => {
    this.getBasicInfo();
    this.getWeather();
    this.imgSelector();
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
  onClickHide = () => {
    this.setState({
      displayForecast: false
    });
  };
  render() {
    return (
      <div className="App">
        <div className="top-Name">
          <h1>Aplikacja z prognozą pogody</h1>
        </div>

        <BasicInfo
          changeInfo={this.onChangeInfo}
          citySelector={this.citySelector}
          city={this.state.city}
          day={this.state.day}
          hour={this.state.hour}
          sunset={this.state.sunset}
          sunrise={this.state.sunrise}
          img={this.state.cityImg}
        />
        <DayMenu
          switch={this.display24hForecast}
          switchTomorrow={this.display48hForecast}
          switch3days={this.display96hForecast}
          toggle={this.state.toggleMenu}
          onToggle={this.onClickToggle}
        />

        {this.state.displayForecast ? (
          <SpecificForecast
            forecast={this.state.forecast}
            city={this.state.city}
            hide={this.onClickHide}
          />
        ) : null}
        {!this.state.displayForecast ? (
          <div className="alert alert-info alert">
            Wybierz jedną z opcji z powyższego menu
          </div>
        ) : null}
      </div>
    );
  }
}
export default App;
