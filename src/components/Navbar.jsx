import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";

const Navbar = () => {
    const  dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout());
    }

  return (
    <nav>
      <div className="nav-wrapper green">
        <span >Calculadora nominal</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button className=" btn red waves-effect waves-light btn" onClick={handleLogout}>logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
