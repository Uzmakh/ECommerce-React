import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Login from "./Pages/LoginSignup";
import Footer from "./components/Footer";
import men_banner from "./assets/banner_men.png";
import women_banner from "./assets/banner_women.png";
import kids_banner from "./assets/banner_kids.png";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/men"
              element={<ShopCategory category="men" banner={men_banner} />}
            />
            <Route
              path="/women"
              element={<ShopCategory category="women" banner={women_banner} />}
            />
            <Route
              path="/kids"
              element={<ShopCategory category="kids" banner={kids_banner} />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/login" element={<LoginSignup/>} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
