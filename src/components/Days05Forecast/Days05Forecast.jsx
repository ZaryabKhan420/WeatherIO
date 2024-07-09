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
            return day.dt === 1720526400 ||
              day.dt === 1720569600 ||
              day.dt === 1720656000 ||
              day.dt === 1720742400 ||
              day.dt === 1720828800 ? (
              <div key={Math.random()}>
                <div className="hidden">{(i = i + 1)}</div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src={eval("pic" + day.weather[0].icon)}
                      alt="Weather"
                      loading="lazy"
                      className="w-[1.6rem]"
                    />
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
