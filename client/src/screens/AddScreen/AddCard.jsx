import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createPost, updatePost } from "../../services/posts";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";

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
          placeholder="Image"
          value={post.imgURL}
          name="imgURL"
          onChange={handleChange}
        />
        <input
          className="input-content"
          placeholder="Your Content"
          value={post.content}
          name="content"
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Make It So.
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
