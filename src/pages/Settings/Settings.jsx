import Sidebar from "../../components/Sidebar/Sidebar";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings_wrapper">
        <div className="settings_title">
          <span className="settings_update_title">Update Your Account</span>
          <span className="settings_delete_title">Delete Account</span>
        </div>
        <form className="settings_form">
          <label>Profile Picture</label>
          <div className="settings_profile_picture">
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt=""
              className="profile_picture"
            />
            <label htmlFor="file_input">
              <i className="settings_profile_picture_icon far fa-user"></i>
            </label>
            <input type="file" id="file_input" style={{ display: "none" }} />
          </div>
          <label for="username">Username</label>
          <input type="text" placeholder="JohnDoe" />
          <label for="email">Email</label>
          <input type="email" placeholder="johndoe@example.com" />
          <label for="username">Password</label>
          <input type="password" />
          <button className="settings_submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
