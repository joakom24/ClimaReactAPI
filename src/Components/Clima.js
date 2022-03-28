import React from "react";
import PropTypes from "prop-types";
import "../Styles/Clima.css";
const Clima = ({ resultado }) => {
  const { name, main, sys, wind } = resultado;
  if (!name) return null;

  const kelvin = 273.15;
  return (
    <div className="card-panel col s12 ">
      <div className="white-text">
        <h2>
          {name}, {sys.country}
        </h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin).toFixed(2)} <span> &#x2103;</span>
        </p>
        <p>
          Velocidad del viento: {parseFloat(wind.speed).toFixed(2)}{" "}
          <span>%</span>
        </p>
        <p>
          Humedad: {parseFloat(main.humidity).toFixed(2)} <span>%</span>
        </p>
        <p>
          Temperatura máxima: {parseFloat(main.temp_max - kelvin).toFixed(2)}
          <span> &#x2103;</span>
        </p>
        <p>
          Temperatura mínima: {parseFloat(main.temp_min - kelvin).toFixed(2)}
          <span> &#x2103;</span>
        </p>
      </div>
    </div>
  );
};
Clima.protoTypes = {
  resultado: PropTypes.object.isRequired,
};
export default Clima;
