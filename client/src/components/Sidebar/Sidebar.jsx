import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <span className="sidebar_title">OUR MISSION</span>
        <img
          className="sidebar_image"
          src="https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80"
        />
        <p>
          The aim of this blog is to inform, educate and entertain people with
          stories and facts about nature, reservoirs, natural parks and more.
          Create an account and share your experiences and tales!
        </p>
      </div>
      <div className="sidebar_item">
        <span className="sidebar_title">CATEGORIES</span>
        <ul className="sidebar_list">
          <li className="sidebar_list_item">RESERVOIRS</li>
          <li className="sidebar_list_item">ANIMALS</li>
          <li className="sidebar_list_item">EVENTS</li>
          <li className="sidebar_list_item">LAKES</li>
          <li className="sidebar_list_item">TRAILS</li>
          <li className="sidebar_list_item">LOCATIONS</li>
        </ul>
      </div>
      <div className="sidebar_item">
        <span className="sidebar_title">FOLLOW US</span>
        <div className="sidebar_social_icons">
          <i className="sidebar_icon fab fa-facebook"></i>
          <i className="sidebar_icon fab fa-instagram"></i>
          <i className="sidebar_icon fab fa-pinterest"></i>
          <i className="sidebar_icon fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
