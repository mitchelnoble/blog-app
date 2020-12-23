import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import "./PostCard.css"

export default function PostCard(props) {
  const { post } = props;
  return (
    <div className = "all-cards">
    <div className="post-card">
      <div className="post-title">{post.title}</div>
      <div className="post-author">{post.author}</div>
      {/* <div className="post-content-short">{post.content}</div> */}
      {/* Do we want to have the content on the post-card be a shorter version of the full detailed content?? */}
      </div>
      <div className= "more-book">
      <Link className= "more-icon" to={`/expanded-post/${post._id}`}><FontAwesomeIcon icon={faBookOpen} /></Link>
      </div>
      </div>
  );
}
