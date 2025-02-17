import React from "react";
import ReactDOM from "react-dom";
import DineDash from "../utils/DineDash.png";
import Nav_item from "./Nav_item";
import { Link } from "react-router-dom";
const Header= ()=>{
    return (
        <div className="Header h-20 border-2 flex justify-between items-center px-72 text-xl font-semibold">
            <div className="logo_container">
                <Link className="flex items-center" to="/"><img className="logo h-16 pr-4" src={DineDash}/>
                <h1>DineDash</h1></Link>
            </div>
            <div className="Nav_item">
                <Nav_item/>
            </div>
        </div>
    )
}
export default Header;