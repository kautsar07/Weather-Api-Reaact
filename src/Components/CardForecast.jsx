import React from "react";
import { BiCloudLightRain, BiCloudSnow } from "react-icons/bi";

export default function CardForecast() {
  return (
    <div className="wrap-card-forecast">
      <div className="card">
        <p>Sun</p>
         <BiCloudSnow size={"70%"} color={"#fff"} />
         <div>
            <p>12°C, -3°F</p>
         </div>
      </div>
      <div className="card">
        <p>Mon</p>
         <BiCloudSnow size={"70%"} color={"#fff"} />
         <div>
            <p>12°C, -3°F</p>
         </div>
      </div>
      <div className="card">
        <p>Tue</p>
         <BiCloudSnow size={"70%"} color={"#fff"} />
         <div>
            <p>12°C, -3°F</p>
         </div>
      </div>
      <div className="card">
        <p>Wed</p>
         <BiCloudSnow size={"70%"} color={"#fff"} />
         <div>
            <p>12°C, -3°F</p>
         </div>
      </div>
      <div className="card">
        <p>Thu</p>
         <BiCloudSnow size={"70%"} color={"#fff"} />
         <div>
            <p>12°C, -3°F</p>
         </div>
      </div>
      <div className="card">
        <p>Fri</p>
         <BiCloudSnow size={"70%"} color={"#fff"} />
         <div>
            <p>12°C, -3°F</p>
         </div>
      </div>
      <div className="card">
        <p>Sat</p>
         <BiCloudSnow size={"70%"} color={"#fff"} />
         <div>
            <p>12°C, -3°F</p>
         </div>
      </div>
    </div>
  );
}
