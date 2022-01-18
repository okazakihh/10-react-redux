import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import FormAdd from "../components/FormAdd";
//import Search from "../components/Search";
import Element from "../components/Element";

const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayName);


  
  const datos = useSelector((state) => state.nomina.data);
  console.log("soy la dataaaaaaaaaaa", datos);
  return (
    <>
      <Navbar />
    <br />
    <div className="">

      <div className="row animate__animated animate__fadeInUp ">
        <div className="container">
          <h2>Hola! {name}</h2>
          <hr />
          <FormAdd />
          <div className="row">

                {datos
                  ? datos.map((dato) => {
                      return (
                        <div
                          className="col  "
                          key={dato.id}
                        >
                          <Element data={dato} />
                        </div>
                      );
                    })
                  : console.log("cargando...")}
              
          </div>
          
         
        </div>
      </div>
    </div>
    </>
  );
};

export default AppScreen;
