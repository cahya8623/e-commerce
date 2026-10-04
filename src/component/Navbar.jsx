import logo from '../assets/logo.png'
import "./Navbar.css";
export function Navbar() {
    
    return (
        <div className="navbar-con"> 
            <img src={logo} alt="" />
            <h3>HOME</h3>
            <h3>PRODUCT</h3>
            <h3>ABOUT</h3>

            <div className="search-bar">
                <input placeholder='🔎' type="text" size={30} />
                <button>Search</button>
            </div>
        </div>
    )
}