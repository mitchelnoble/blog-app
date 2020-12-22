import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createPost, getPost, updatePost } from "../../services/posts";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";

const AddCard = (props) => {
  const history = useHistory();
  const params = useParams();
  const [post, setPost] = useState({
    _id: "",
    author: "",
    title: "",
    imgURL: "",
    content: "",
    _v: "",
    createdAt: "",
    updatedAt: "",
  });
  console.log(post);
  useEffect(() => {
    async function fetchData() {
      if (params.id) {
        const response = await getPost(params.id);
        setPost(response);
      }
    }
    fetchData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      await updatePost(params.id, post);
      history.push("/postman");
    } else {
      await createPost(post);
      history.push("/");
    }
  };

  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit} onChange={handleChange}>
        <input
          className="input-name"
          placeholder="Author"
          value={post.author}
          name="author"
          required
          autoFocus
        />
        <input
          className="input-title"
          placeholder="Title"
          value={post.title}
          name="title"
        />
        <input
          className="input-image"
          placeholder="Image"
          value={post.imgURL}
          name="imgURL"
        />
        <input
          className="input-content"
          placeholder="Your Content"
          value={post.content}
          name="content"
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
