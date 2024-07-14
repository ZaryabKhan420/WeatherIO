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
        {currentWeather.weather[0].icon === "01d" ? (
          <img src={pic01d} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "01n" ? (
          <img src={pic01n} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "02d" ? (
          <img src={pic02d} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "02n" ? (
          <img src={pic02n} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "03d" ? (
          <img src={pic03d} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "03n" ? (
          <img src={pic03n} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "04d" ? (
          <img src={pic04d} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "04n" ? (
          <img src={pic04n} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "09d" ? (
          <img src={pic09d} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "09n" ? (
          <img src={pic09n} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "10d" ? (
          <img src={pic10d} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "10n" ? (
          <img src={pic10n} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "11d" ? (
          <img src={pic11d} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "11n" ? (
          <img src={pic11n} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "13d" ? (
          <img src={pic13d} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "13n" ? (
          <img src={pic13n} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "50d" ? (
          <img src={pic50d} alt="weather" className="w-[4rem]" />
        ) : null}
        {currentWeather.weather[0].icon === "50n" ? (
          <img src={pic50n} alt="weather" className="w-[4rem]" />
        ) : null}
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
