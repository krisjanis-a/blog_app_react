import "./Write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt=""
        className="write_image"
      />
      <form className="write_form">
        <div className="write_form_group">
          <label htmlFor="file_input">
            <i className="write_icon far fa-plus-square"></i>
          </label>
          <input type="file" id="file_input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write_input"
            autoFocus={true}
          />
        </div>
        <div className="write_form_group">
          <textarea
            placeholder="What is on your mind?"
            type="text"
            className="write_input write_text"
          ></textarea>
        </div>
        <button className="write_submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
