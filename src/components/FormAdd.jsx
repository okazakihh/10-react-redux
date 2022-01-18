import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CrearRegistro } from "../actions/nomina";


const FormAdd = () => {
  

  const dispatch = useDispatch();

  const [viewForm, setViewForm] = useState(false);
  const [data, setData] = useState({});
  
 
 
  const handleAdd = () => {
    setViewForm(!viewForm);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
   
    
  };

  const handleSave = () => {
    dispatch(
      CrearRegistro(
        data.document,
        data.names,
        data.surnames,
        data.paid,
       
      )
    );

    alert("Informacion registrada correctamente");
    document.getElementById("document").value = "";
    document.getElementById("names").value = "";
    document.getElementById("surnames").value = "";
    document.getElementById("paid").value = "";
    document.getElementById("image_uploads").value = "";
  };



  return (
    <div>
      <div>
        <button
          className=" btn green waves-effect waves-light btn"
          onClick={handleAdd}
        >
          {!viewForm ? (
            <i className="small  material-icons">expand_more</i>
          ) : (
            <i className="small  material-icons">keyboard_arrow_up</i>
          )}
        </button>
        {viewForm && (
          <>
            <div className="row">
              <input
                id="document"
                type="number"
                placeholder="Documento"
                onChange={handleChange}
                name="document"
              />
              <input
                id="names"
                type="text"
                placeholder="Nombres"
                onChange={handleChange}
                name="names"
              />
              <input
                id="surnames"
                type="text"
                placeholder="Apellidos"
                onChange={handleChange}
                name="surnames"
              />

              <input
                id="paid"
                type="number"
                placeholder="Valor pago"
                onChange={handleChange}
                name="paid"
              />
            </div>
            <button
              onClick={handleSave}
              className=" btn blue waves-effect waves-light btn"
            >
              <i className="small  material-icons">save</i>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FormAdd;
