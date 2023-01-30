import React, { useState } from "react";
import "./Component.css";
import { BiSearchAlt } from "react-icons/bi";
import ResultsSearch from "./ResultsSearch";

export default function NavbarSearch() {
  const [field, setField] = useState(false);

  // const searchField = ()=>{

  // }
  return (
    <nav className="nav">
      <div className="container">
        <div className="wrap-search">
          {field ? (
            <div className="search-close">
              <BiSearchAlt
                onClick={(e) => setField(false)}
                className="icon-search"
                style={{ cursor: "pointer" }}
              />
            </div>
          ) : (
            <div className="search-open">
              <BiSearchAlt
                onClick={(e) => setField(true)}
                className="icon-search"
                style={{ cursor: "pointer" }}
              />
            </div>
          )}

          {field ? (
            <div className="wrap-field">
              <input className="inpt-search" type="text"></input>
            </div>
          ) : null}
        </div>
        <ResultsSearch/>
      </div>
    </nav>
  );
}
