import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/apiConfig";
import { createPost } from "../../services/posts";
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

  const [isCreated, setIsCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isCreated = await createPost(post);
    setIsCreated({ isCreated });
  };

  // if (isCreated) {
  //   history.push("/");
  // }

  if (params.id) {
    api.updatePosts(params.id, post);
    props.setToggleFetch((prev) => !prev);
    // history.push("/");
  } else {
    // history.push("/");
  }

  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder= "Author"
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
          value={post.img}
          name="image"
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
