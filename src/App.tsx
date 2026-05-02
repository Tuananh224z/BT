import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Cart from "./Pages/Cart";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
