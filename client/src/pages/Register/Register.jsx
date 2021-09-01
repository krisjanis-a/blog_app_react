import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="register_title">Register</span>
      <form className="register_form">
        <label htmlFor="username">Username: </label>
        <input
          type="username"
          className="register_input"
          placeholder="Enter your username"
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          className="register_input"
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          className="register_input"
          placeholder="Enter your password"
        />
      </form>
      <button className="register_button">Register</button>
      <Link to="/login">
        <button className="register_login_button">Log In</button>
      </Link>
    </div>
  );
};

export default Register;
