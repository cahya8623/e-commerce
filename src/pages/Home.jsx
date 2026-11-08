import logo from "../assets/shopping-bag.png";
import { Navbar } from "../component/Navbar";
import { Link } from "react-router";
import Product from "../component/Product";
export default function Home() {


  return (
    <div className="container">
      <Navbar />
      <div className="text-content">
        <h2>Define Your Style</h2>
        <p>Minimal Design For Everyday Confidence</p>
        <button>Shop Collection</button>
      </div>
      <div className="banner-main"></div>
      <div className="product-card">
        <Product />
      </div>

      <Link to="./Checkout">
        <div className="cart-main">
          <img src={logo} alt="cart-logo" />
          <p>🛒</p>
        </div>
      </Link>
    </div>
  );
}
