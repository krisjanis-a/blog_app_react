import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import "./Write.css";
import noImage from "../../assets/no-image.jpg";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postCategories, setPostCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
      categories: postCategories,
    };

    const existingCategories = categories.map((category) => category.title);
    const newCategories = postCategories.filter((category) => {
      return !existingCategories.includes(category);
    });

    try {
      for (let i = 0; i < newCategories.length; i++) {
        let newCategory = { title: newCategories[i] };
        await axios.post("/categories", newCategory);
      }
    } catch (err) {}

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);

  let firstClick = true;

  const toggleDropdown = () => {
    let dropdown = document.querySelector(".category_dropdown");
    if (dropdown.style.display === "none" || firstClick) {
      dropdown.style.display = "block";
      firstClick = false;
    } else {
      dropdown.style.display = "none";
    }
  };

  const handleCategory = (e) => {
    if (!postCategories.includes(e.target.innerText)) {
      let currentPostCategories = [...postCategories];
      currentPostCategories.push(e.target.innerText);
      setPostCategories(currentPostCategories);
    }
  };

  const addNewCategory = () => {
    let categoryName = document.getElementById("new_category").value;
    let currentPostCategories = [...postCategories];
    document.getElementById("new_category").value = "";
    categoryName.length !== 0 &&
      !currentPostCategories.includes(categoryName) &&
      currentPostCategories.push(categoryName);
    setPostCategories(currentPostCategories);
  };

  const removeCategory = (arg) => {
    let currentPostCategories = [...postCategories];
    currentPostCategories = currentPostCategories.filter((category) => {
      return category !== arg;
    });
    setPostCategories(currentPostCategories);
  };

  return (
    <div className="write">
      {file ? (
        <img src={URL.createObjectURL(file)} alt="" className="write_image" />
      ) : (
        <img src={noImage} alt="" className="write_image no_image" />
      )}
      <form className="write_form" onSubmit={handleSubmit}>
        <div className="write_form_group wfg_file_title">
          <label htmlFor="file_input">
            <i className="write_icon far fa-plus-square"></i>
          </label>
          <input
            type="file"
            name="image"
            id="file_input"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="write_input"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write_form_group wfg_category">
          <div className="choose_category">
            <div className="dropdown_wrapper">
              <i
                className="fas fa-chevron-circle-down"
                onClick={toggleDropdown}
              ></i>
              <div className="category_dropdown">
                <ul className="existing_categories">
                  {categories.map((category) => (
                    <li
                      className="category_dropdown_list_item"
                      key={category.title}
                      onClick={(e) => {
                        toggleDropdown();
                        handleCategory(e);
                      }}
                    >
                      {category.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <input
              type="text"
              maxLength="20"
              id="new_category"
              placeholder="New Category"
              className="write_input write_category"
            />
            <button
              className="add_category"
              type="button"
              onClick={addNewCategory}
            >
              Add
            </button>
          </div>
          <div className="chosen_categories">
            {postCategories.map((category) => (
              <div className="new_category" key={category}>
                <span className="new_category_text" key={category}>
                  {category}
                </span>
                <div
                  className="new_category_delete"
                  onClick={() => {
                    removeCategory(category);
                  }}
                >
                  <i className="fas fa-times-circle"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="write_form_group wfg_text">
          <textarea
            placeholder="What is on your mind?"
            type="text"
            className="write_input write_text"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="write_submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
