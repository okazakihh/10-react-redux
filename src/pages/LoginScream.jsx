import React from "react"

import { Link } from "react-router-dom"

import GoogleButton  from "react-google-button"
import { googlelogin } from "../actions/auth.js"
import { useDispatch } from "react-redux"


const LoginScream = () => {


  const dispatch = useDispatch();
  const handleGoogleLogin = () =>{
    dispatch(googlelogin());
  };


  return (
    <div className="container">
      <h3 className="tittle">Login page</h3>
      <hr />

      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s11">
              <i className="material-icons prefix">mail</i>
              <input id="icon_prefix1" type="email" className="validate" />
              <label htmlFor="icon_prefix1">Email</label>
            </div>
            <div className="input-field col s11">
              <i className="material-icons prefix">vpn_key</i>
              <input id="icon_prefix2" type="password" className="validate" />
              <label htmlFor="icon_prefix2">Pass</label>
            </div>
            
          </div>
          <div className="row col s7" >
          <button className="waves-effect waves-light btn ">
              Enter
            </button>
            <hr className="row" />
            <div className=" row col">
            <Link  className="row " to="/register">Register in the platform</Link>
            <GoogleButton className="row"onClick={handleGoogleLogin}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginScream
