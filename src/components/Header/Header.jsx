import "./Header.css";
// import image1 from "../../assets/trees-image-1.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header_titles">
        <h3>A Blog about</h3>
        <h2>Life &amp; Ideas</h2>
      </div>
      <img
        className="header_image"
        // src={image1}
        src="https://images.unsplash.com/photo-1619450535979-6939a4690888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
        alt="Embers and fire"
      />
    </div>
  );
};

export default Header;
