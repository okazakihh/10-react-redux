import React from "react";
import { useDispatch } from "react-redux";
import { borrarRegistro } from "../actions/nomina";



const Element = ({ data }) => {
  const { id, Fecha, Documento, Nombres, Apellidos, Pago, image_uploads, preview } = data;
  
  
  const dispatch = useDispatch();

  let fechaFormato;

  if (Fecha.seconds) {
    const date = Fecha.toDate();
    fechaFormato = date.toLocaleDateString();
  } else {
    fechaFormato = Fecha;
  }

  const handleDelete = () => {
    var confirmar = window.confirm(
      "Esta que seguro que desea eliminar el registro?"
    );
    if (confirmar === true) {
      dispatch(borrarRegistro(id));
      alert("Registro eliminado correctamente");
    }
  };

  return (
    <div className="col borderRadius: 50pt">
      <div>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <p>Fecha: {fechaFormato}</p>
            <br />
            <p>Documento: {Documento}</p>
            <br />
            <p>Nombres: {Nombres}</p>
            <br />
            <p>Apellidos: {Apellidos}</p>
            <br />
            <p>Pago: $ {Pago}</p>
            <br />
            <div className="card-image">
          <img src={preview} alt ={image_uploads} />
          </div>
            <br />
            <div className="center">
              <a onClick={handleDelete}>
                <i className="material-icons center">delete</i>
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Element;
