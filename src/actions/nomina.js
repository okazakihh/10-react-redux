import { db } from "../firebase/config-firebase";
import { types } from "../types/Types";

export const CrearRegistro = (Documento, Nombres, Apellidos, Pago,  ) => {

  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const datos = {
      Fecha: new Date().toLocaleDateString(),
      Documento,
      Nombres,
      Apellidos,
      Pago,
      
    };
    console.log("soy los datos", datos);
    const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos);

    const id = await referencia.id;
    const newData = {
      ...datos,
      id,
    };
    dispatch(crear(newData));

    console.log(referencia);
 
  };
};
export const leerRegistros = (data) => {
  return {
    type: types.nominaRead,
    payload: data,
  };
};

/*export const buscar = (data) => {
  return async (getState) => {
    const { uid } = getState().auth;

    var dataa = await db.doc(`${uid}/nominas/nomina/${data.Documento}`).search();

    console.log("ayayayyy",dataa)
  };
};*/

export const crear = (data) => {
  return {
    type: types.nominaAdd,
    payload: data,
  };
};

export const borrarRegistro = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    await db.doc(`${uid}/nominas/nomina/${id}`).delete();

    dispatch(borrar(id));
  };
};

export const borrar = (id) => {
  return {
    type: types.nominaDelete,
    payload: id,
  };
};

export const limpiar = () => {
  return {
    type: types.nominaClean,
    
  };
};
