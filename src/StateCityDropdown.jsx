import React, { useState } from "react";
import statesCities from "./data/city-state.json";

const StateCityDropdown = ({
  states = statesCities.states,
  onStateChange,
  onCityChange,
  className,
  style,
  selectClassName,
  optionClassName,
}) => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    const selected = states.find((s) => s.name === state);
    setCities(selected ? selected.cities : []);
    onStateChange && onStateChange(state);
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    onCityChange && onCityChange(city);
  };

  return (
    <div className={className} style={style}>
      <select
        onChange={handleStateChange}
        value={selectedState}
        className={selectClassName}
      >
        <option value="" className={optionClassName}>
          Select State
        </option>
        {states.map((state) => (
          <option
            key={state.name}
            value={state.name}
            className={optionClassName}
          >
            {state.name}
          </option>
        ))}
      </select>

      {cities.length > 0 && (
        <select onChange={handleCityChange} className={selectClassName}>
          <option value="" className={optionClassName}>
            Select City
          </option>
          {cities.map((city, index) => (
            <option key={index} value={city} className={optionClassName}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default StateCityDropdown;
