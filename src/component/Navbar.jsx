import { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
export function Navbar() {
    const [isOpen, UseIsOpen] = useState(false)
    function toggleSidebar (){
        UseIsOpen(!isOpen)
        console.log(isOpen)
    }
  return (
    <div className="container">
      <div className={`navbar-con ${isOpen ? "active" : ""}`}>
        <img src={logo} alt="" />
        <h3>HOME</h3>
        <h3>PRODUCT</h3>
        <h3>ABOUT</h3>

        <div className="search-bar">
          <input placeholder="🔎" type="text" size={30} />
          <button>Search</button>
        </div>
      </div>

      <div className={`menu ${isOpen ? "active" : ""}`} onClick={toggleSidebar}>
        <div className={`bar1 ${isOpen ? "active" : ""}`}></div>
        <div className={`bar2 ${isOpen ? "active" : ""}`}></div>
        <div className={`bar3 ${isOpen ? "active" : ""}`}></div>
      </div>

    </div>
  );
}
