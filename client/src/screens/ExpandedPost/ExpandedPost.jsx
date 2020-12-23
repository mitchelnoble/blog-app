// this is the full, expanded blog post with more details and such
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPost, deletePost } from "../../services/posts";
import { Link } from "react-router-dom";
import "./ExpandedPost.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

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
<<<<<<< HEAD
      <img className="big-pic" src={`${post.imgURL}`} alt={`${post.title}`} />
      <div className= "all-content">
      <div className= "blog-title">{post.title}</div>
      <div className= "user">{post.author}</div>
        <div className= "blog-content">{post.content}</div>
        </div>
      <button className="delete" onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></button>
      <Link to={`/add-card/${post._id}`}>
        <button className="edit"><FontAwesomeIcon icon={faEdit} /></button>
=======
      <div>{post.title}</div>
      <div>{post.author}</div>
      <div>{post.content}</div>
      <img src={`${post.imgURL}`} alt={`${post.title}`} />
      <button onClick={handleDelete}>DELETE</button>
      <Link to={`/edit/${post._id}`}>
        <button>EDIT</button>
>>>>>>> d7327dcc160b9ff979007f8ffeae5ac5c2c84044
      </Link>
    </div>
  );
};

export default ExpandedPost;
