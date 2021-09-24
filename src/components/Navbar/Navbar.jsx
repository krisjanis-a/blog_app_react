import "./Navbar.css";
import logo from "../../assets/scales-logo.png";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import noUserImage from "../../assets/no-user.png";
import NavList from "../NavList/NavList";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  // const PublicFolder = "http://localhost:5000/images/";
  const PublicFolder =
    "https://res.cloudinary.com/dqgny4f47/image/upload/free-world-blog-images/";

  // if (user) {
  //   console.log(user.profilePicture);
  // }

  const [showNavMenu, setShowNavMenu] = useState(false);

  useEffect(() => {
    if (!showNavMenu) {
      window.addEventListener("click", toggleNavMenu);
      window.addEventListener("resize", toggleNavMenu);
      return () => {
        window.removeEventListener("click", toggleNavMenu);
        window.removeEventListener("resize", toggleNavMenu);
      };
    }
  }, [showNavMenu]);

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar">
      <div className="navbar_logo_container">
        <img className="navbar_logo" src={logo} alt="Blog Website Logo" />
        <div className="navbar_blog_title">
          <h2>Free</h2>
          <h1>Minds</h1>
        </div>
      </div>
      <div className="navbar_menu">
        <div className="toggle_navlist">
          {showNavMenu ? (
            <i
              className="toggle_navlist_button fas fa-bars"
              onClick={toggleNavMenu}
            ></i>
          ) : (
            <>
              <i
                className="toggle_navlist_button fas fa-times"
                onClick={toggleNavMenu}
              ></i>
              <NavList />
            </>
          )}
        </div>
        <ul className="navbar_list">
          <li className="navbar_list_item">
            <Link exact="true" to="/">
              HOME
            </Link>
          </li>
          <li className="navbar_list_item">
            <Link to="/write">CREATE</Link>
          </li>
          <li className="navbar_list_item">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="navbar_list_item">
            {user ? (
              <Link to="/login" onClick={handleLogout}>
                LOGOUT
              </Link>
            ) : (
              <Link to="/login">LOGIN</Link>
            )}
          </li>
        </ul>
        {user ? (
          <div className="navbar_user_container">
            <Link to="/settings">
              <img
                src={
                  user.profilePicture !== ""
                    ? PublicFolder + user.profilePicture
                    : noUserImage
                }
                alt="User"
                className="navbar_user_image"
              />
              <div className="navbar_user_info">
                <span className="navbar_username">{user.username}</span>
              </div>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
