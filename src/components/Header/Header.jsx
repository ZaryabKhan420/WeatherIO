import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { HiSearch } from "react-icons/hi";
import { TbCurrentLocation } from "react-icons/tb";
import { IoChevronBack } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import Conf from "../../conf/Conf";
const Header = ({ place, setPlace, places, selection, setSelection }) => {
  const [toggle, setToggle] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setPlace({
      ...places[0],
    });
    setSelection(true);
  };

  const reverseGeocoding = async (lat, lon) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${Conf.VITE_WEATHER_API_KEY}`
      );
      const data = await response.json();
      if (data) {
        setPlace({
          country: data[0].country,
          lat: lat,
          lon: lon,
          name: data[0].name,
          state: data[0].state,
        });
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      {toggle === true ? (
        <div className="absolute bg-primary h-screen w-screen top-0 left-0 z-[5] overflow-hidden">
          <div className="flex flex-col justify-start items-start gap-3 text-textPrimary">
            <div className="w-full flex justify-center items-center gap-3 bg-secondary border-b-textSecondary h-[12vh] px-5">
              <IoChevronBack
                className="text-textPrimary text-xl"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPlace({
                    ...places[0],
                  });
                  setSelection(true);
                  setToggle(!toggle);
                }}
                className="w-full"
              >
                <input
                  type="text"
                  placeholder=""
                  value={place.name}
                  id="search"
                  className="bg-secondary cursor-pointer outline-none border-none text-textPrimary w-full "
                  onChange={(e) => {
                    setSelection(false);
                    setPlace({
                      ...place,
                      name: e.target.value,
                    });
                  }}
                />
              </form>
            </div>

            {selection === true ? null : (
              <div className="px-5">
                <div className="flex flex-col justify-start items-start gap-3">
                  {places.length > 0
                    ? places.map((value, idx) => {
                        return (
                          <div
                            className="flex justify-start items-center gap-5"
                            key={idx}
                          >
                            <GrLocation className="text-md" />
                            <a
                              href="#"
                              onClick={(e) => {
                                setPlace({
                                  ...value,
                                });
                                setSelection(true);
                                setToggle(!toggle);
                              }}
                            >
                              {value.name}
                            </a>
                            <p className="text-sm text-textAccent">
                              {value.country}
                            </p>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
      <div className="flex justify-between items-center h-[12vh] py-8">
        <div>
          <img src={Logo} alt="" width="150rem" className="cursor-pointer" />
        </div>
        <form
          className="justify-start items-center gap-3 bg-secondary px-4 py-3 rounded-full w-[30%] md:flex hidden relative"
          onSubmit={handleSearch}
        >
          <label htmlFor="search">
            <HiSearch className="text-textPrimary text-xl cursor-pointer" />
          </label>
          <input
            type="text"
            placeholder=""
            value={place.name}
            id="search"
            className="bg-secondary cursor-pointer outline-none border-none text-textPrimary w-full "
            onChange={(e) => {
              setPlace({
                ...place,
                name: e.target.value,
              });
              setSelection(false);
            }}
          />
          {selection === true ? null : (
            <div className="absolute top-[100%] left-0 w-full h-full flex flex-col justify-start items-start gap-3 bg-primary text-textPrimary px-4 rounded-full">
              {places.length > 0
                ? places.map((value, idx) => {
                    return (
                      <div
                        className="flex justify-start items-center gap-3"
                        key={idx}
                      >
                        <GrLocation className="text-md" />
                        <a
                          href="#"
                          onClick={(e) => {
                            setSelection(true);
                            setPlace({
                              ...value,
                            });
                          }}
                        >
                          {value.name}
                        </a>
                        <p className="text-sm text-textAccent">
                          {value.country}
                        </p>
                      </div>
                    );
                  })
                : null}
            </div>
          )}
        </form>
        <div className="flex justify-center items-center gap-3 cursor-pointer">
          <div className="flex justify-center items-center bg-secondary p-3 rounded-full md:hidden">
            <HiSearch
              className="text-textPrimary text-xl cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </div>
          <div
            className="flex justify-center items-center gap-2 p-3 sm:py-3 sm:px-5 rounded-full bg-[#B6A0E5] cursor-pointer"
            onClick={() => {
              navigator.geolocation.getCurrentPosition(
                (postion) => {
                  const { latitude, longitude } = postion.coords;
                  reverseGeocoding(latitude, longitude);
                },
                (error) => {
                  throw error.message;
                }
              );
            }}
          >
            <TbCurrentLocation className="text-primary text-xl" />
            <button className="text-primary text-sm hidden sm:block">
              Current Location
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
