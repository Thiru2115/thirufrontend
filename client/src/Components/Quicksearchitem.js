import React from "react";
import { Link } from "react-router-dom";
function Quicksearchitem(props) {
  return (
    <div>
      <Link to="/Filter" className="d-flex border border-4 rounded-3 shadow bg-body rounded">
        <img
          src={props.img}
          alt="food images"
        style={{height:'150px', width:"150px"}}
        />
        <div className="px-4 py-4">
          <h4 className="title">{props.name}</h4>
          <h6 className="detail">{props.detail}</h6>
        </div>
      </Link>
    
    </div>
  );
}

export default Quicksearchitem;
