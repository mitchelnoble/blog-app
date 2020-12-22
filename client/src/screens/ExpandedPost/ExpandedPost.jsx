// this is the full, expanded blog post with more details and such
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services/posts";

const ExpandedPost = (props) => {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const response = getPost(params.id);
    setPost(response);
  }, []);

  return (
    <div>
      <div>{post.title}</div>
    </div>
  );
};

export default ExpandedPost;
