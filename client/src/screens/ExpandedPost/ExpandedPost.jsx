// this is the full, expanded blog post with more details and such
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPost, deletePost } from "../../services/posts";
import { Link } from "react-router-dom";

const ExpandedPost = (props) => {
  const params = useParams();
  const history = useHistory();
  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await getPost(params.id);
      setPost(response);
    }
    fetchData();
  }, [params.id]);

  async function handleDelete() {
    await deletePost(params.id);
    history.push("/");
  }

  if (!post) {
    return <div>LOADING....</div>;
  }

  return (
    <div>
      <div>{post.title}</div>
      <div>{post.author}</div>
      <div>{post.content}</div>
      <img src={`${post.imgURL}`} alt={`${post.title}`} />
      <buttons onClick={handleDelete}>DELETE</buttons>
      <Link to={`/add-card/${post._id}`}>
        <button>EDIT</button>
      </Link>
    </div>
  );
};

export default ExpandedPost;
