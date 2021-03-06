import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

// PROBLEM - after fetching posts by category or user and then clicking HOME in NAVBAR the page does NOT reload all posts...

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      // console.log(res);
    };
    fetchPosts();
  }, [search]); // This (adding ",[search]") fixed the PAGE RELOADING problem => ALWAYS read error messages...

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar display={"home"} />
      </div>
    </>
  );
};

export default Home;
