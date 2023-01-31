import logo from "./logo.svg";
import "./App.css";
import NavbarSearch from "./Components/NavbarSearch";
import ResultsSearch from "./Components/ResultsSearch";
import NavbarResult from "./Components/NavbarResult";

function App() {
  return (
    <div className="container">
      <div className="wrap-main">
        <div className="left">
          <NavbarSearch />
          <ResultsSearch />
        </div>
        <div className="right">
          <NavbarResult />
        </div>
      </div>
    </div>
  );
}

export default App;
