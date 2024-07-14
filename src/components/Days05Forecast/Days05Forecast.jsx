import React from "react";
import {
  pic01d,
  pic01n,
  pic02d,
  pic02n,
  pic03d,
  pic03n,
  pic04d,
  pic04n,
  pic09d,
  pic09n,
  pic10d,
  pic10n,
  pic11d,
  pic11n,
  pic13d,
  pic13n,
  pic50d,
  pic50n,
} from "../../assets/Index";
const Days05Forecast = ({ day05Forecast }) => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();

  var i = 0;

  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <h1 className="text-textPrimary">5 Days Forecast</h1>
      <div className="flex flex-col w-full bg-secondary p-5 justify-start items-between gap-3 rounded-2xl">
        {day05Forecast.list.map((day) => {
          {
            return day.dt_txt ===
              `${date.getFullYear()}-0${
                date.getMonth() + 1
              }-${date.getDate()} 12:00:00` ||
              day.dt_txt ===
                `${date.getFullYear()}-0${date.getMonth() + 1}-${
                  date.getDate() + 1
                } 12:00:00` ||
              day.dt_txt ===
                `${date.getFullYear()}-0${date.getMonth() + 1}-${
                  date.getDate() + 2
                } 12:00:00` ||
              day.dt_txt ===
                `${date.getFullYear()}-0${date.getMonth() + 1}-${
                  date.getDate() + 3
                } 12:00:00` ||
              day.dt_txt ===
                `${date.getFullYear()}-0${date.getMonth() + 1}-${
                  date.getDate() + 4
                } 12:00:00` ? (
              <div key={Math.random()}>
                <div className="hidden">{(i = i + 1)}</div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center gap-2">
                    {day.weather[0].icon === "01d" ? (
                      <img src={pic01d} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "01n" ? (
                      <img src={pic01n} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "02d" ? (
                      <img src={pic02d} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "02n" ? (
                      <img src={pic02n} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "03d" ? (
                      <img src={pic03d} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "03n" ? (
                      <img src={pic03n} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "04d" ? (
                      <img src={pic04d} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "04n" ? (
                      <img src={pic04n} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "09d" ? (
                      <img src={pic09d} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "09n" ? (
                      <img src={pic09n} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "10d" ? (
                      <img src={pic10d} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "10n" ? (
                      <img src={pic10n} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "11d" ? (
                      <img src={pic11d} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "11n" ? (
                      <img src={pic11n} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "13d" ? (
                      <img src={pic13d} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "13n" ? (
                      <img src={pic13n} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "50d" ? (
                      <img src={pic50d} alt="weather" className="w-[2rem]" />
                    ) : null}
                    {day.weather[0].icon === "50n" ? (
                      <img src={pic50n} alt="weather" className="w-[2rem]" />
                    ) : null}
                    <h1 className="text-textPrimary text-xl flex justify-start items-start">
                      {parseFloat(day.main.temp - 273.15).toFixed(0)}{" "}
                      <span className="text-sm"> &deg;C</span>
                    </h1>
                  </div>
                  <p className="text-textAccent text-sm ">
                    {date.getDate() + i} {months[date.getMonth()]}
                  </p>
                  <p className="text-textAccent text-sm ">
                    {days[date.getDay() + i]}
                  </p>
                </div>
              </div>
            ) : null;
          }
        })}
      </div>
    </div>
  );
};

export default Days05Forecast;
