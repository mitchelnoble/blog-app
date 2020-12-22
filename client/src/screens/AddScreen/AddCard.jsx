import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/apiConfig";
import { createPost, updatePost } from "../../services/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const AddCard = (props) => {
  const history = useHistory();
  const params = useParams();
  const [post, setPost] = useState({
    author: "",
    title: "",
    imgUrl: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      updatePost(params.id, post);
      history.push("/");
    } else {
      createPost(post);
      history.push("/");
    }
  };

  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Home"
          value={post.author}
          name="author"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-title"
          placeholder="title"
          value={post.title}
          name="title"
          onChange={handleChange}
        />
        <input
          className="input-image"
          placeholder="image"
          value={post.img}
          name="image"
          onChange={handleChange}
        />
        <input
          className="input-content"
          placeholder="content"
          value={post.content}
          name="content"
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Bazinga
        </button>
      </form>

      {/* <div>
        <div className="edit-time">
          <Link to={`/edit/${post.id}`}>
            <button className="edit-butt">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default AddCard;
