import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const Nav_item= ()=>{
    return(
        <div className="flex gap-9">
            
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About Us</Link>
        </div>
    )
}
export default Nav_item;