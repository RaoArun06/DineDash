import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Nav_item= ()=>{
    const onlineStatus=useOnlineStatus();
    return(
        <div className="flex gap-9">
            {(onlineStatus===true)?<h1>Online 🟢</h1>:<h1>Offline 🔴</h1>}
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About Us</Link>
        </div>
    )
}
export default Nav_item;