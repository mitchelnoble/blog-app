// this is the edit page, we will import to expandedpost page


import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const editPost = () => {
  return (
    <div>
      <div className="edit-time">
            <Link to={`/edit/${post.id}`}> 
              <button className="edit-butt"><FontAwesomeIcon icon={faEdit} /></button>
            </Link>

          </div>
      
    </div>
  );
};


export default editPost;






