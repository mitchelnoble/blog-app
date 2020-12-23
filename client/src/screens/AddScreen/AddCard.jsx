import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createPost, updatePost } from "../../services/posts";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./AddCard.css"

const AddCard = (props) => {
  const history = useHistory();
  const params = useParams();
  const [post, setPost] = useState({
    author: "",
    title: "",
    imgURL: "",
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
      await updatePost(params.id, post);
      history.push("/");
    } else {
      await createPost(post);
      history.push("/");
    }
  };

  return (
    <div>
      <img className="comment-bubble" src="https://i.ibb.co/4NfN64J/Untitled-design-2-1.png" />
      <form className="addForm" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Author"
          value={post.author}
          name="author"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-title"
          placeholder="Title"
          value={post.title}
          name="title"
          onChange={handleChange}
        />
        <input
          className="input-image"
          placeholder="Image URL"
          value={post.imgURL}
          name="imgURL"
          onChange={handleChange}
        />
        <div className="content-form">
          <input
            className="input-content"
            placeholder="Your Content"
            value={post.content}
            name="content"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Make It So.
        </button>
      </form>


    </div>
  );
};

export default AddCard;
