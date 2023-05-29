import React from "react";
import { NavLink } from "react-router-dom";
import NavLogo from "../Images/NavLogo.png";
import "../Styles/NavBar.css";

function NavBar() {
  return (
    <div>
      <div id="Nav">
        <div className="NavBar">
          <div className="Logo">
            <img src={NavLogo} alt="JahonTa'lim" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
