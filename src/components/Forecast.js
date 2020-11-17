import React, { useEffect, useState } from "react";
import Day from "./Day";

const Forecast = (props) => {
  const [dailyForecast, setDailyForecast] = useState();
  const createWeatherBlocks = () => {
    if (props.forecast) {
      const days = [
        "Niedziela",
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
      ];
      let indexOfDay = days.indexOf(props.day) - 1;
      const dailyWeather = props.forecast.daily.map((day) => {
        if (indexOfDay === days.length - 1) {
          indexOfDay = 0;
        } else indexOfDay++;
        return (
          <Day
            key={day.dt}
            dayName={days[indexOfDay]}
            icon={day.weather[0].icon}
            desc={day.weather[0].description}
            temp={day.temp.day}
            press={day.pressure}
          ></Day>
        );
      });
      setDailyForecast(dailyWeather);
    }
  };

  useEffect(() => {
    createWeatherBlocks();
  }, [props.sunset]);
  useEffect(() => {}, []);
  return (
    <div className="forecast">
      <div className="forecast-container">{dailyForecast}</div>
    </div>
  );
};

export default Forecast;
