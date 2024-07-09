import React, { useEffect, useState } from "react";
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
import { MdOutlineCalendarToday } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
const CurrentTemperature = ({ currentWeather, place }) => {
  const [date, setDate] = useState({
    day: "Wednesday",
    date: "1",
    month: "March",
  });

  useEffect(() => {
    const date = new Date();
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
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
    var dayName = days[date.getDay()];
    var monthName = months[date.getMonth()];
    setDate({
      day: dayName,
      date: date.getDate(),
      month: monthName,
    });
  }, [place]);

  return (
    <div className="bg-secondary p-5 rounded-2xl border-none flex flex-col justify-start items-start gap-3">
      <h1 className="text-textPrimary">Now</h1>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-7xl text-textPrimary flex justify-start items-start">
          {parseFloat(currentWeather.main.temp - 273.15).toFixed(0)}{" "}
          <span className="text-3xl"> &deg;C</span>
        </h1>
        <img
          src={eval("pic" + currentWeather.weather[0].icon)}
          alt="weather"
          className="w-[4rem]"
        />
      </div>
      <h3 className="text-sm text-textSecondary capitalize">
        {currentWeather.weather[0].description}
      </h3>
      <div className="w-full h-[1px] bg-textSecondary "></div>
      <div className="flex justify-start items-center gap-2">
        <MdOutlineCalendarToday className="text-md" />
        <p className="text-sm text-textAccent">
          {date.day} {date.date}, {date.month}
        </p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <GrLocation className="text-md" />
        <p className="text-textAccent text-sm">
          {place.name}, {place.country}
        </p>
      </div>
    </div>
  );
};

export default CurrentTemperature;
