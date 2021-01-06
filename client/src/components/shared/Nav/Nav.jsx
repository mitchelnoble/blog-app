import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
  
    <div className="all-links">
      
      <div className= "fix">
         <Link className="header-link" to="/"><FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
      
    
      <div className="fix-that"> 
        
      <Link className="link-nav" to="/add-card">
          <div className="nav-add"><FontAwesomeIcon icon={faPlusSquare} /></div>
        </Link>
      </div>
      
      <div className= "fix-these">
        <Link className="login-nav" to="/login">
       
          <div className="nav-login"><FontAwesomeIcon icon={faUser} /></div>
        </Link>
        <img className="post-dude" src="https://i.ibb.co/CJX089X/Untitled-design-1-1.png" alt="Untitled-design-1-1" border="0" /><header>Best Blog Ever.</header>
        </div>
        
          </div>
    
    
    
  );
}
