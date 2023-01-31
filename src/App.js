import logo from "./logo.svg";
import "./App.css";
import NavbarSearch from "./Components/NavbarSearch";
import ResultsSearch from "./Components/ResultsSearch";
import NavbarResult from "./Components/NavbarResult";
import { useState } from "react";
import CardForecast from "./Components/CardForecast";

function App() {
  const [cityName, setCityName] = useState("New York");
  return (
    <div className="container">
      <div className="wrap-main">
        <div className="left">
          <NavbarSearch />
          <ResultsSearch cityName={cityName}/>
        </div>
        <div className="right">
          <NavbarResult />
          <CardForecast/>
        </div>
      </div>
    </div>
  );
}

export default App;
