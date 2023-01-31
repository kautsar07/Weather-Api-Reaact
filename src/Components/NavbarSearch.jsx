import React, { useState } from "react";
import "./Component.css";
import { BiSearchAlt } from "react-icons/bi";

export default function NavbarSearch() {
  const [field, setField] = useState(false);
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // setCityName(value);
  };
  return (
    <div className="wrap-search">
      {field ? (
        <div className="search-close">
          <BiSearchAlt
            onClick={(e) => setField(false)}
            className="icon-search-close"
            style={{ cursor: "pointer" }}
          />
        </div>
      ) : (
        <div className="search-open">
          <BiSearchAlt
            onClick={(e) => setField(true)}
            className="icon-search-open"
            style={{ cursor: "pointer" }}
          />
        </div>
      )}

      {field ? (
        <div className="wrap-field">
          <form onSubmit={handleSearch}>
            <input
              onChange={(e) => setValue(e.target.value)}
              className="inpt-search"
              type="text"
            ></input>
          </form>
        </div>
      ) : null}
    </div>
  );
}
