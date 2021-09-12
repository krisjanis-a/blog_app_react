import "./Navbar.css";
import logo from "../../assets/maple-leaf-logo.png";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../../context/Context";
import noUserImage from "../../assets/no-user.png";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PublicFolder = "http://localhost:5000/images/";

  // if (user) {
  //   console.log(user.profilePicture);
  // }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar">
      <div className="navbar_logo_container">
        <img className="navbar_logo" src={logo} alt="Blog Website Logo" />
        <div className="navbar_blog_title">
          <h2>Amazing</h2>
          <h1>Wilderness</h1>
        </div>
      </div>
      <div className="navbar_menu">
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
        {/* <div className="navbar_search">
          <input
            className="searchbar"
            name="searchbar"
            placeholder="Search"
          ></input>
          <button className="search_button">
            <i className="search_button_logo fas fa-search"></i>
          </button>
        </div> */}
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
