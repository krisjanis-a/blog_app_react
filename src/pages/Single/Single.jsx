import "./Single.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";

const single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar display={"single"} />
    </div>
  );
};

export default single;
