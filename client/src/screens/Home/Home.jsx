import { useState, useEffect } from "react";
import "./Home.css";
import { getPosts } from "../../services/posts";
import PostCard from "../../components/PostCard/PostCard";
import "./Home.css";

// import PostDetail from "../PostDetail/PostDetail";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPosts();
      setPosts(response);
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;
