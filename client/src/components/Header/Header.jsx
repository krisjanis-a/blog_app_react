import "./Header.css";
import image1 from "../../assets/trees-image-1.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header_titles">
        <h3>A blog about</h3>
        <h2>Nature</h2>
        {/* <h3>
          {"{"} the site is not functional (yet) {"}"}
        </h3>
        <h3>
          {"{"} only front end navigation {"}"}
        </h3> */}
      </div>
      <img
        className="header_image"
        // src={image1}
        src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
        alt="Big tree"
      />
    </div>
  );
};

export default Header;
