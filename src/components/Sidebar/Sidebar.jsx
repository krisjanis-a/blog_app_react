import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <span className="sidebar_title">MISSION</span>
        <img
          className="sidebar_image"
          src="https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80"
          alt=""
        />
        <p>
          The aim of this blog is to share ideas and stories about life,
          philosophy, freedom and other topics that promote intelectual growth
          and progress of humanity.
        </p>
      </div>
      <div className="sidebar_item">
        <span className="sidebar_title">CATEGORIES</span>
        <ul className="sidebar_list">
          {categories.map((category) => (
            <Link
              className="link_sidebar"
              key={category._id}
              to={`/?category=${category.title}`}
            >
              <li className="sidebar_list_item" key={category.title}>
                {category.title}
              </li>
            </Link>
          ))}
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
