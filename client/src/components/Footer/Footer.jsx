import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer_list">
        <Link className="link" to="/settings">
          <li className="footer_list_item">Settings</li>
        </Link>
        <Link className="link" to="/help">
          <li className="footer_list_item">Help</li>
        </Link>
        <Link className="link" to="/resources">
          <li className="footer_list_item">Additional Resources</li>
        </Link>
        <Link className="link" to="/donate">
          <li className="footer_list_item">Donate</li>
        </Link>
        <Link className="link" to="/contacts">
          <li className="footer_list_item">Contacts</li>{" "}
        </Link>
      </ul>

      <h3 className="footer_credits_title">Amazing Wilderness - Blog © 2021</h3>
    </div>
  );
};

export default Footer;
