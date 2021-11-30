import React from 'react'

import { Link } from 'react-router-dom'

import GoogleButton  from 'react-google-button'
import { googlelogin } from '../actions/auth'
import { useDispatch } from 'react-redux'


const LoginScream = () => {


  const dispatch = useDispatch();
  const handleGoogleLogin = () =>{
    dispatch(googlelogin("Jose","0219"));
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
              <input id="email" type="email" className="validate" />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field col s11">
              <i className="material-icons prefix">vpn_key</i>
              <input id="password" type="password" className="validate" />
              <label htmlFor="icon_prefix">Pass</label>
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
