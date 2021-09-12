import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const PublicFolder = "http://localhost:5000/images/";

  return (
    <div className="post" key={post._id}>
      {post.image && (
        <img className="post_image" src={PublicFolder + post.image} alt="" />
      )}

      <div className="post_info">
        <div className="post_categories">
          {post.categories.map((category) => (
            <span className="post_category" key={category}>
              {category}
            </span>
          ))}
        </div>
        <Link className="post_link" to={`/post/${post._id}`}>
          <span className="post_title">{post.title}</span>
        </Link>
        <span className="post_date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post_description">{post.description}</p>
    </div>
  );
};

export default Post;
