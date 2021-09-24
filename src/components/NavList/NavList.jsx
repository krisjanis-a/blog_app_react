import "./NavList.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../../context/Context";

const NavList = () => {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="mobile_navlist">
      <ul className="mobile_navbar_list">
        <Link exact="true" to="/" className="mobile_navbar_list_item">
          <li>HOME</li>
        </Link>
        <Link to="/write" className="mobile_navbar_list_item">
          <li>CREATE</li>
        </Link>
        <Link to="/about" className="mobile_navbar_list_item">
          <li>ABOUT</li>
        </Link>
        {user ? (
          <Link
            to="/login"
            onClick={handleLogout}
            className="mobile_navbar_list_item"
          >
            <li>LOGOUT</li>
          </Link>
        ) : (
          <Link to="/login" className="mobile_navbar_list_item">
            <li>LOGIN</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default NavList;
