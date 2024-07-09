import React, { useEffect, useState } from "react";
import { MdAir } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiWavesBold } from "react-icons/pi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiThermometerHot } from "react-icons/pi";
const TodaysForecast = ({ airPollution, currentWeather, place, setPlace }) => {
  const [aqiResult, setAqiResult] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  useEffect(() => {
    const aqiValue = airPollution.list[0].main.aqi;
    if (aqiValue === 1) {
      setAqiResult("Good");
    } else if (aqiValue === 2) {
      setAqiResult("Fair");
    } else if (aqiValue === 3) {
      setAqiResult("Moderate");
    } else if (aqiValue === 4) {
      setAqiResult("Poor");
    } else if (aqiValue === 5) {
      setAqiResult("Very Poor");
    }
    if (aqiValue > 0 && aqiValue <= 3) {
      document.getElementById("aqi").classList.remove("bg-weatherReportOK");
      document.getElementById("aqi").classList.remove("bg-weatherReportNotOK");
      document.getElementById("aqi").classList.add("bg-weatherReportOK");
    }
    if (aqiValue >= 4) {
      document.getElementById("aqi").classList.remove("bg-weatherReportOK");
      document.getElementById("aqi").classList.remove("bg-weatherReportNotOK");
      document.getElementById("aqi").classList.add("bg-weatherReportNotOK");
    }

    setSunrise(unixToTime(currentWeather.sys.sunrise));
    setSunset(unixToTime(currentWeather.sys.sunset));
  }, [place, setPlace, currentWeather, airPollution]);

  function unixToTime(unixTimestamp) {
    // Convert Unix timestamp (in seconds) to milliseconds
    const milliseconds = unixTimestamp * 1000;

    // Create a Date object
    const date = new Date(milliseconds);

    // Extract hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format time with AM/PM
    const period = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12; // Handle 12 AM/PM
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${period}`;
  }

  return (
    <div className="p-5 flex flex-col justify-center items-start w-full bg-secondary gap-3 rounded-2xl">
      <h1 className="text-textPrimary">Todays Highlights</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-fit justify-start items-start">
        {/* First Box  */}
        <div className="p-5 flex flex-col justify-between items-between w-full bg-accent gap-8 rounded-2xl">
          <div className="flex justify-between items-start w-full">
            <p className="text-sm text-textAccent">Air Quality Index</p>
            <button
              id="aqi"
              className={`text-[0.7rem] px-5 text-primary py-1 rounded-full`}
            >
              {aqiResult}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-start items-center gap-8">
            <div className="flex flex-col justify-center items-center gap-2">
              <MdAir className="text-5xl" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-sm text-textAccent">PM25</p>
              <h1 className="text-3xl text-textPrimary">
                {airPollution.list[0].components.pm2_5}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-sm text-textAccent">SO2</p>
              <h1 className="text-3xl text-textPrimary">
                {airPollution.list[0].components.so2}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-sm text-textAccent">NO2</p>
              <h1 className="text-3xl text-textPrimary">
                {airPollution.list[0].components.no2}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-sm text-textAccent">O3</p>
              <h1 className="text-3xl text-textPrimary">
                {airPollution.list[0].components.o3}
              </h1>
            </div>
          </div>
        </div>

        {/* Second Box  */}

        <div className="p-5 flex flex-col justify-center items-center w-full bg-accent gap-8 rounded-2xl">
          <div>
            <p className="text-sm text-textAccent">Sunrise & Sunset</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-start items-center gap-8">
            <div className="flex justify-start items-center gap-5">
              <MdOutlineWbSunny className="text-4xl" />
              <div className="flex flex-col justify-start items-start gap-1">
                <p className="text-sm text-textAccent">Sunrise</p>
                <p className="text-3xl text-textPrimary">{sunrise}</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <LuMoon className="text-4xl" />
              <div className="flex flex-col justify-start items-start gap-1">
                <p className="text-sm text-textAccent">Sunset</p>
                <p className="text-3xl text-textPrimary">{sunset}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Parameters  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5">
        <div className="p-5 flex flex-col justify-center items-start w-full bg-accent gap-5 rounded-2xl mt-2">
          <p className="text-textAccent text-sm">Humidity</p>
          <div className="flex justify-between items-center w-full">
            <MdOutlineWaterDrop className="text-3xl" />
            <h1 className="text-3xl">
              {currentWeather.main.humidity} <span className="text-xl">%</span>{" "}
            </h1>
          </div>
        </div>
        <div className="p-5 flex flex-col justify-center items-start w-full bg-accent gap-5 rounded-2xl mt-2">
          <p className="text-textAccent text-sm">Pressure</p>
          <div className="flex justify-between items-center w-full">
            <PiWavesBold className="text-3xl" />
            <h1 className="text-3xl">
              {currentWeather.main.pressure}
              <span className="text-xl">hPa</span>{" "}
            </h1>
          </div>
        </div>
        <div className="p-5 flex flex-col justify-center items-start w-full bg-accent gap-5 rounded-2xl mt-2">
          <p className="text-textAccent text-sm">Visibility</p>
          <div className="flex justify-between items-center w-full">
            <MdOutlineRemoveRedEye className="text-3xl" />
            <h1 className="text-3xl">
              {currentWeather.visibility / 1000}
              <span className="text-xl">KM</span>
            </h1>
          </div>
        </div>
        <div className="p-5 flex flex-col justify-center items-start w-full bg-accent gap-5 rounded-2xl mt-2">
          <p className="text-textAccent text-sm">Feels Like</p>
          <div className="flex justify-between items-center w-full">
            <PiThermometerHot className="text-3xl" />
            <h1 className="text-3xl flex justify-start items-start">
              {parseFloat(currentWeather.main.feels_like - 273.15).toFixed(0)}{" "}
              <span className="text-lg"> &deg;C</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysForecast;
