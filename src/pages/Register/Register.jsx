import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/Authentication/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="register_title">Register</span>
      <form className="register_form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="username"
          className="register_input"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          className="register_input"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          className="register_input"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register_button" type="submit">
          Register
        </button>
      </form>
      <Link to="/login">
        <button className="register_login_button">Log In</button>
      </Link>
      {error && (
        <span className="registration_warning">Something went wrong!</span>
      )}
    </div>
  );
};

export default Register;
