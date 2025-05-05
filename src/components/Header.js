import React from "react";
import { Link } from "react-router-dom";
import DineDash from "../utils/DineDash.png";
import Nav_item from "./Nav_item";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={DineDash} alt="DineDash" className="h-12 w-auto" />
          <span className="text-2xl font-bold text-orange-500">DineDash</span>
        </Link>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Nav_item />
        </nav>
      </div>
    </header>
  );
};

export default Header;
