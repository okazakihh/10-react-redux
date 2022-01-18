import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { buscar } from "../actions/nomina";

const Search = () => {
  //const {document}= data;
  const dispatch = useDispatch();

  const [viewForm, setViewForm] = useState(false);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("ayyyy",value)
    //setInputValue(value);
  };
  const handleSearch = () => {
    setViewForm(!viewForm);
    //dispatch(buscar(data.Documento))
  };
  return (
    <div>
      <button className=" btn blue right waves-effect waves-light btn" onClick={handleSearch}>
        {!viewForm ? (
          <i className="small  material-icons">search</i>
        ) : (
          <i className="small  material-icons">keyboard_arrow_up</i>
        )}
      </button>
      {viewForm && (
        <div className="row">
          <input
            id="search"
            type="number"
            placeholder="Buscar"
           onChange={handleChange}
            name="search"
          />
        </div>
      )}
    </div>
  );
};

export default Search;
