import React, { useEffect, useState } from "react";
import axios from "axios";
import { authConfig } from "./Url";
import logo from "../Img/weatherLogo.png";
import { BiCloudLightRain, BiCloudSnow } from "react-icons/bi";

export default function ResultsSearch({ cityName }) {
  const [weathers, setWeather] = useState([]);
  const loadWeatherCity = async () => {
    try {
      const weatherCity = await axios.get(
        authConfig.baseUrl + `weather?q=${cityName}&appid=` + authConfig.ApiKey
      );
      setWeather(weatherCity.data);

    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadWeatherCity();
  }, [weathers]);
  return (
    <div className="result">
      <div className="wrap-results">
        {weathers.weather&&weathers.weather.map((item) => (
        <img src={authConfig.iconUrl+item.icon+'@2x.png'} alt="" />
      ))}
        {/* <img src={logo} alt="" className="img-weather" /> */}
        {/* <BiCloudSnow size={"100%"} color={"#fff"} /> */}
        <h1>12°C</h1>
      </div>
      <div className="detail-result">
        <div className="date-time">
          <p>Monday, 16:00</p>
        </div>
        <div className="description">
          <BiCloudLightRain />
          <p>Mostly Rain</p>
        </div>
        <div className="description">
          <BiCloudLightRain />
          <p>Mostly Rain</p>
        </div>
      </div>
      <div className="img-city">
        <img
          src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <p>NEW YORK, USA</p>
      </div>
    </div>
  );
}
