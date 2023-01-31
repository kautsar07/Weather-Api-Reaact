import React from "react";
import logo from "../Img/weatherLogo.png";

export default function NavbarResult() {
  return (
    <div className="wrap-navResult">
      <div className="day">
        <p>Today</p>
        <p>Week</p>
      </div>
      <div className="temp-menu">
        <p>°C</p>
        <p>°F</p>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
