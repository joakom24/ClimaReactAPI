import React, { useState } from "react";
import Error from "../Components/Error";
import PropTypes from "prop-types";
const Form = ({ search, saveSearch, saveConsultar }) => {
  const [error, saveError] = useState(false);
  const { ciudad } = search;

  const handleChange = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.trim() === "") {
      saveError(true);
      return;
    } else {
      saveError(false);
    }
    saveConsultar(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="El campo es obligatorio. " /> : null}
      <div className="input-field col s12 ">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Buscar
          <i className="material-icons right"></i>
        </button>
      </div>
    </form>
  );
};
Form.protoTypes = {
  search: PropTypes.object.isRequired,
  saveSearch: PropTypes.func.isRequired,
  saveConsultar: PropTypes.func.isRequired,
};
export default Form;
