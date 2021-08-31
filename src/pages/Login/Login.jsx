import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="login_title">Login</span>
      <form className="login_form">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          className="login_input"
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          className="login_input"
          placeholder="Enter your password"
        />
      </form>
      <button className="login_button">Log In</button>
      <Link to="/register">
        <button className="login_register_button">Register</button>
      </Link>
    </div>
  );
};

export default Login;
