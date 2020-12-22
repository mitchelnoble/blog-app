import { useState, useEffect } from "react";
import "./Home.css";
import { getPosts } from "../../services/posts";
import PostCard from "../../components/PostCard/PostCard";
import "./Home.css";

// import PostDetail from "../PostDetail/PostDetail";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const response = await getPosts();
    setPosts(response);
  }, []);

  return (
    <div className="home">
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default Home;
