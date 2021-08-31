import { Link } from "react-router-dom";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="post_image"
        src="https://images.unsplash.com/photo-1470165511815-34e78ff7a111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
      />
      <div className="post_info">
        <div className="post_categories">
          <span className="post_category">Reservoirs</span>
          <span className="post_category">Animals</span>
        </div>
        <Link className="link" to="/post">
          <span className="post_title">Lorem ipsum dolor sit amet</span>
        </Link>
        <hr />
        <span className="post_date">30 minutes ago</span>
      </div>
      <p className="post_description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eveniet
        sint assumenda ea quia tenetur consequatur placeat itaque asperiores
        omnis nulla laudantium vitae ipsum eos, repellat voluptate reiciendis
        rerum ducimus blanditiis ipsa, molestias recusandae. Obcaecati fugit
        dignissimos exercitationem corporis optio, molestias perspiciatis et
        vitae, labore minima provident placeat deserunt magnam.
      </p>
    </div>
  );
};

export default Post;
