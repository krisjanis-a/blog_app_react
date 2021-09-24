import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer_list">
        <Link className="link" to="/settings">
          <li className="footer_list_item">Settings</li>
        </Link>
      </ul>

      <h3 className="footer_credits_title">Free Minds - Blog © 2021</h3>
    </div>
  );
};

export default Footer;
