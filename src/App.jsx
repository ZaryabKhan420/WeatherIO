import React, { useState, useEffect } from "react";
import Conf from "./conf/Conf";
import "./App.css";
import {
  Header,
  Footer,
  TodaysForecast,
  Days05Forecast,
  CurrentTemperature,
  CurrentTemperatureDetails,
} from "./components/Index";
function App() {
  const [selection, setSelection] = useState(true);

  const [place, setPlace] = useState({
    country: "GB",
    lat: 51.5073219,
    lon: -0.1276474,
    name: "London",
    state: "England",
  });
  const [places, setPlaces] = useState([
    {
      country: "GB",
      lat: 51.5073219,
      lon: -0.1276474,
      name: "London",
      state: "England",
    },
  ]);
  const [currentWeather, setCurrentWeather] = useState({
    coord: {
      lon: 10.99,
      lat: 44.34,
    },
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    base: "stations",
    main: {
      temp: 298.48,
      feels_like: 298.74,
      temp_min: 297.56,
      temp_max: 300.05,
      pressure: 1015,
      humidity: 64,
      sea_level: 1015,
      grnd_level: 933,
    },
    visibility: 10000,
    wind: {
      speed: 0.62,
      deg: 349,
      gust: 1.18,
    },
    rain: {
      "1h": 3.16,
    },
    clouds: {
      all: 100,
    },
    dt: 1661870592,
    sys: {
      type: 2,
      id: 2075663,
      country: "IT",
      sunrise: 1661834187,
      sunset: 1661882248,
    },
    timezone: 7200,
    id: 3163858,
    name: "Zocca",
    cod: 200,
  });

  const [day05Forecast, setDay05Forecast] = useState({
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1661871600,
        main: {
          temp: 296.76,
          feels_like: 296.98,
          temp_min: 296.76,
          temp_max: 297.87,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 933,
          humidity: 69,
          temp_kf: -1.11,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.62,
          deg: 349,
          gust: 1.18,
        },
        visibility: 10000,
        pop: 0.32,
        rain: {
          "3h": 0.26,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-08-30 15:00:00",
      },
      {
        dt: 1661882400,
        main: {
          temp: 295.45,
          feels_like: 295.59,
          temp_min: 292.84,
          temp_max: 295.45,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 931,
          humidity: 71,
          temp_kf: 2.61,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 1.97,
          deg: 157,
          gust: 3.39,
        },
        visibility: 10000,
        pop: 0.33,
        rain: {
          "3h": 0.57,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-08-30 18:00:00",
      },
      {
        dt: 1661893200,
        main: {
          temp: 292.46,
          feels_like: 292.54,
          temp_min: 290.31,
          temp_max: 292.46,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 931,
          humidity: 80,
          temp_kf: 2.15,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 68,
        },
        wind: {
          speed: 2.66,
          deg: 210,
          gust: 3.58,
        },
        visibility: 10000,
        pop: 0.7,
        rain: {
          "3h": 0.49,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-08-30 21:00:00",
      },

      {
        dt: 1662292800,
        main: {
          temp: 294.93,
          feels_like: 294.83,
          temp_min: 294.93,
          temp_max: 294.93,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 935,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 88,
        },
        wind: {
          speed: 1.14,
          deg: 17,
          gust: 1.57,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-04 12:00:00",
      },
    ],
    city: {
      id: 3163858,
      name: "Zocca",
      coord: {
        lat: 44.34,
        lon: 10.99,
      },
      country: "IT",
      population: 4593,
      timezone: 7200,
      sunrise: 1661834187,
      sunset: 1661882248,
    },
  });

  const [airPollution, setAirPollution] = useState({
    coord: [50.0, 50.0],
    list: [
      {
        dt: 1606147200,
        main: {
          aqi: 4.0,
        },
        components: {
          co: 203.609,
          no: 0.0,
          no2: 0.396,
          o3: 75.102,
          so2: 0.648,
          pm2_5: 23.253,
          pm10: 92.214,
          nh3: 0.117,
        },
      },
    ],
  });

  useEffect(() => {
    if (Object.keys(place).length > 0) {
      fetchData(
        `http://api.openweathermap.org/geo/1.0/direct?q=${place.name}&limit=5&appid=${Conf.VITE_WEATHER_API_KEY}`,
        setPlaces
      );

      fetchData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${place.lat}&lon=${place.lon}&appid=${Conf.VITE_WEATHER_API_KEY}`,
        setCurrentWeather
      );

      fetchData(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${place.lat}&lon=${place.lon}&appid=${Conf.VITE_WEATHER_API_KEY}`,
        setAirPollution
      );

      fetchData(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${place.lat}&lon=${place.lon}&appid=${Conf.VITE_WEATHER_API_KEY}`,
        setDay05Forecast
      );
    }
  }, []);

  useEffect(() => {
    if (Object.keys(place).length > 0) {
      fetchData(
        `http://api.openweathermap.org/geo/1.0/direct?q=${place.name}&limit=5&appid=${Conf.VITE_WEATHER_API_KEY}`,
        setPlaces
      );

      fetchData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${place.lat}&lon=${place.lon}&appid=${Conf.VITE_WEATHER_API_KEY}`,
        setCurrentWeather
      );

      fetchData(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${place.lat}&lon=${place.lon}&appid=${Conf.VITE_WEATHER_API_KEY}`,
        setAirPollution
      );

      fetchData(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${place.lat}&lon=${place.lon}&appid=${Conf.VITE_WEATHER_API_KEY}`,
        setDay05Forecast
      );
    }
  }, [place]);

  const fetchData = async (url, option) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        option(data);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="bg-primary">
      <div className="container relative">
        <Header
          place={place}
          setPlace={setPlace}
          places={places}
          selection={selection}
          setSelection={setSelection}
        />
        <div className="text-textPrimary grid grid-cols-1 lg:grid-cols-4 gap-8 my-5">
          <div className="lg:col-start-1 lg:col-end-1 flex flex-col gap-5">
            <CurrentTemperature currentWeather={currentWeather} place={place} />
            <Days05Forecast day05Forecast={day05Forecast} />
          </div>
          <div className="lg:col-start-2 lg:col-end-5">
            <TodaysForecast
              airPollution={airPollution}
              currentWeather={currentWeather}
              place={place}
              setPlace={setPlace}
            />
            <CurrentTemperatureDetails day05Forecast={day05Forecast} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
