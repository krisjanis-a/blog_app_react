import "./SinglePost.css";
import { Link, useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [previousData, setPreviousData] = useState([title, description]);

  // const PublicFolder = "http://localhost:5000/images/";
  const PublicFolder =
    "https://res.cloudinary.com/dqgny4f47/image/upload/free-world-blog-images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setCategories(res.data.categories);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description,
        categories,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="single_post">
      <div className="single_post_wrapper">
        {post.image && (
          <img
            src={PublicFolder + post.image}
            alt=""
            className="single_post_image"
          />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="single_post_title_input"
            autoFocus
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        ) : (
          <h1 className="single_post_title">
            {title}
            {post.username === user?.username && (
              <div className="single_post_edit">
                <i
                  className="single_post_icon fas fa-edit"
                  onClick={() => {
                    setUpdateMode(true);
                    setPreviousData([title, description]);
                  }}
                ></i>
                <i
                  className="single_post_icon fas fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="single_post_info">
          <span className="single_post_author">
            Author:
            <Link className="link_single_post" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <div className="single_post_categories">
            {categories.map((category) => (
              <span className="single_post_category" key={category}>
                {category}
              </span>
            ))}
          </div>
          <span className="single_post_date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <React.Fragment>
            <textarea
              className="single_post_description_input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="post_edit_buttons">
              <button
                className="single_post_update_button"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="exit_edit_mode_button"
                type="button"
                onClick={() => {
                  setTitle(previousData[0]);
                  setDescription(previousData[1]);
                  setUpdateMode(false);
                }}
              >
                <i className="fas fa-times-circle"></i>
              </button>
            </div>
          </React.Fragment>
        ) : (
          <p className="single_post_description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
