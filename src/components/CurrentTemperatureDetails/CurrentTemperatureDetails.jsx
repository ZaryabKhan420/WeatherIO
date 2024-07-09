import React from "react";

import directionImage from "../../assets/images/weather_icons/direction.png";

const timings = [
  "9 PM",
  "12 AM",
  "3 AM",
  "6 AM",
  "9 AM",
  "12 PM",
  "3 PM",
  "6 PM",
];

const CurrentTemperatureDetails = ({ day05Forecast }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 mt-5 bg-primary py-5">
      <h1 className="text-textPrimary">Today at</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-5  w-full justify-center items-center h-[600px] sm:h-[320px] md:h-[280px] lg:h-[280px] xl:h-[125px]">
        {day05Forecast.list.map((day, index) => {
          return (
            <div key={Math.random()}>
              {index <= 7 ? (
                <div className="bg-accent text-textPrimary flex flex-col justify-between items-center p-3 gap-2 rounded-2xl h-[125px]">
                  <h1>{timings[index]}</h1>
                  <img
                    src={`../../assets/images/weather_icons/${day.weather[0].icon}.png`}
                    alt="Weather"
                    loading="lazy"
                    className="w-[2rem]"
                  />
                  <h1 className="text-textPrimary flex justify-start items-start">
                    {parseFloat(day.main.temp - 273.15).toFixed(0)}{" "}
                    <span className="text-sm"> &deg;C</span>
                  </h1>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8  gap-5 justify-center items-center w-full h-[600px] sm:h-[320px] md:h-[280px] lg:h-[280px] xl:h-[125px]">
        {day05Forecast.list.map((day, index) => {
          return (
            <div key={Math.random()}>
              {index <= 7 ? (
                <div className="bg-accent text-textPrimary flex flex-col justify-between items-center p-3 gap-2 rounded-2xl h-[125px]">
                  <h1>{timings[index]}</h1>
                  <img
                    src={directionImage}
                    alt="Weather"
                    loading="lazy"
                    className={`w-[2rem]`}
                    style={{ rotate: `${day.wind.deg}deg` }}
                  />
                  <h1 className="text-textPrimary flex justify-start items-start">
                    {Math.round(day.wind.speed)} Km/h
                  </h1>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentTemperatureDetails;
