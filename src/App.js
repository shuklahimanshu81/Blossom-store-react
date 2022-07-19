import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Home/Header";
import Landing from "./Components/Home/Landing";
import Footer from "./Components/Home/Footer";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/cart";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Wishlist from "./Components/wishlist/wishlist";
import Toast from "./Utils/toast-container";
import RequiresAuth from "./Components/reuqiresAuth/requireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Toast />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
