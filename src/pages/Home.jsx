import logo from "../assets/shopping-bag.png";
import { Navbar } from "../component/Navbar";
import { Link } from "react-router";
// import banner from '../assets/pexels-last-evan-78158272-8676432-removebg-preview.png'
export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="text-content">
        <h2>Define Your Style</h2>
        <p>Minimal Design For Everyday Confidence</p>
      </div>
      <div className="banner-main">
        <button>Shop Collection</button>
      </div>
      <Link to="./Checkout">
        <div className="cart-main">
          <img src={logo} alt="cart-logo" />
        </div>
      </Link>
    </div>
  );
}
