import "./Navbar.css";
import logo from "../../assets/maple-leaf-logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
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
            <Link to="/">HOME</Link>
          </li>
          <li className="navbar_list_item">
            <Link to="/write">CREATE</Link>
          </li>
          <li className="navbar_list_item">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="navbar_list_item">
            {user ? <Link to="/">LOGOUT</Link> : <Link to="/login">LOGIN</Link>}
          </li>
        </ul>
        <div className="navbar_search">
          <input
            className="searchbar"
            name="searchbar"
            placeholder="Search"
          ></input>
          <button className="search_button">
            <i class="search_button_logo fas fa-search"></i>
          </button>
        </div>
        {user ? (
          <div className="navbar_user_container">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
              alt="User image"
              className="navbar_user_image"
            />
            <div className="navbar_user_info">
              <span className="navbar_username">Michael42</span>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
