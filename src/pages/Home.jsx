import logo from "../assets/shopping-bag.png";
import { Navbar } from "../component/Navbar";
import { Link } from "react-router";
import Product from "../component/Product";
export default function Home() {


  return (
    <div className="container">
      <Navbar />
      <div className="banner-main"></div>
        <Product />

      <Link to="./Checkout">
        <div className="cart-main">
          <img src={logo} alt="cart-logo" />
          <p>🛒</p>
        </div>
      </Link>
    </div>
  );
}
