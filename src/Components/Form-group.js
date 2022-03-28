import React, { useEffect, useState } from "react";
import Form from "../Components/Form";
import Clima from "../Components/Clima";
import Error from "../Components/Error";
import "../Styles/Form.css";
const FormGroup = () => {
  const [search, saveSearch] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, saveConsultar] = useState(false);
  const [resultado, saveResultado] = useState({});
  const [error, saveError] = useState(false);
  const { ciudad } = search;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = "4b995f83fef040a8c89f9f7095408f17";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        saveResultado(resultado);
        saveConsultar(false);
      }
      if (resultado.cod === "404") {
        saveError(true);
      } else {
        saveError(false);
      }
    };
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados." />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <div className="container-form center-align ">
      <div className="row ">
        <div className="col s12 xl3">
          <Form
            search={search}
            saveSearch={saveSearch}
            saveConsultar={saveConsultar}
          />
        </div>
        <div className="row">
          <div className="col s12 xl9">{componente}</div>
        </div>
      </div>
    </div>
  );
};

export default FormGroup;
