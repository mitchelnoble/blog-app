import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/add-card">
        <div className="nav-link">Add a Post</div>
      </Link>
      <Link to="/login">
        <div className="nav-link">Login</div>
      </Link>
    </div>
  );
}
