import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="Checkout" element={<Checkout />}></Route>
    </Routes>
  );
}

export default App;
