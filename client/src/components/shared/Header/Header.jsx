import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="header">
      <Link to="/">Best Blog App Ever.</Link>
     <img className= "post-dude" src="https://i.ibb.co/CJX089X/Untitled-design-1-1.png" alt="Untitled-design-1-1" border="0"/>
    </div>
  );
}
