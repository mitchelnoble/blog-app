import { Link } from "react-router-dom";

export default function PostCard(props) {
  const { post } = props;
  return (
    <div className="post-card">
      <div className="post-title">{post.title}</div>
      <div className="post-author">{post.author}</div>
      <div className="post-content-short">{post.content}</div>
      {/* Do we want to have the content on the post-card be a shorter version of the full detailed content?? */}
      <Link to={`/expanded-post/${post._id}`}>DETAIL ICON GOES HERE</Link>
    </div>
  );
}
