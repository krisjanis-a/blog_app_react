import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./Settings.css";
import axios from "axios";
import noUserImage from "../../assets/no-user.png";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PublicFolder = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user._id,
    };

    if (username.length !== 0) {
      updatedUser.username = username;
    }
    if (email.length !== 0) {
      updatedUser.email = email;
    }
    if (password.length !== 0) {
      updatedUser.password = password;
    }

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      console.log(res);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  let enteredPassword;

  const deleteAccount = async () => {
    enteredPassword = document.getElementById("password_for_deletion").value;

    const userDel = {
      userId: user._id,
      password: enteredPassword,
    };

    console.log(localStorage);

    try {
      const res = await axios.delete("/users/" + user._id, {
        data: { userId: userDel.userId, password: userDel.password },
      });
      console.log(res);
      handleLogout();
    } catch (err) {
      console.log(err);
      let passwordIncorrect = document.querySelector(
        ".password_incorrect_warning"
      );
      passwordIncorrect.classList.remove("hidden");
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const hidePasswordIncorrect = () => {
    let passwordIncorrect = document.querySelector(
      ".password_incorrect_warning"
    );
    passwordIncorrect.classList.add("hidden");
  };

  const showDeletePrompt = () => {
    let deletePromptMessage = document.querySelector(".delete_account_prompt");
    deletePromptMessage.classList.remove("hidden");
  };

  const hideDeletePrompt = () => {
    let deletePromptMessage = document.querySelector(".delete_account_prompt");
    deletePromptMessage.classList.add("hidden");
  };

  const hidePasswordPrompt = () => {
    let passwordPrompt = document.querySelector(".delete_password_prompt");
    passwordPrompt.classList.add("hidden");
    document.getElementById("password_for_deletion").value = "";
  };

  const handleDeleteAccount = () => {
    hideDeletePrompt();
    let passwordPrompt = document.querySelector(".delete_password_prompt");
    passwordPrompt.classList.remove("hidden");
  };

  return (
    <div className="settings">
      <div className="settings_wrapper">
        <div className="settings_title">
          <span className="settings_update_title">Update Your Account</span>
          <div className="settings_delete_window">
            <span
              className="settings_delete_title"
              onClick={() => {
                showDeletePrompt();
                hidePasswordPrompt();
              }}
            >
              Delete Account
            </span>
            <div className="delete_account_prompt hidden">
              <span>
                Are you sure you want to delete your account? All your posts
                will be deleted.
              </span>
              <div className="delete_prompt_buttons">
                <button
                  type="button"
                  id="delete_yes"
                  onClick={() => handleDeleteAccount()}
                >
                  Yes
                </button>
                <button type="button" id="delete_no" onClick={hideDeletePrompt}>
                  No
                </button>
              </div>
            </div>
            <div className="delete_password_prompt hidden">
              <label htmlFor="password">Enter your password:</label>
              <input
                type="password"
                name="password"
                id="password_for_deletion"
                required
                onChange={hidePasswordIncorrect}
              />
              <button
                type="button"
                className="confirm_delete"
                onClick={deleteAccount}
              >
                Delete account
              </button>
              <span className="password_incorrect_warning hidden">
                Password incorrect
              </span>
              <div className="cancel_delete" onClick={hidePasswordPrompt}>
                <i className="fas fa-times-circle"></i>
              </div>
            </div>
          </div>
        </div>
        <form className="settings_form" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settings_profile_picture">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : user.profilePicture !== ""
                  ? PublicFolder + user.profilePicture
                  : noUserImage
              }
              alt=""
              className="profile_picture"
            />
            <label className="settings_file_input" htmlFor="file_input">
              <i className="settings_profile_picture_icon far fa-user"></i>
            </label>
            <input
              type="file"
              id="file_input"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="username">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settings_submit" type="submit">
            Update
          </button>
          {success && (
            <span className="updated_notification">
              Profile has been updated
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;
