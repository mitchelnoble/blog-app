// this is the full, expanded blog post with more details and such
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services/posts";

const ExpandedPost = (props) => {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(async () => {
    const response = await getPost(params.id);
    setPost(response);
    console.log(post);
  }, []);
  if (!post) {
    return <div>LOADING....</div>;
  }
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.author}</div>
      <div>{post.content}</div>
      <img src={`${post.imgURL}`} alt={`${post.title}`} />
      {/* DELETE BUTTON AND EDIT BUTTON HERE */}
    </div>
  );
};

export default ExpandedPost;
