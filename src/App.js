import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Home/Header"
import Landing from "./Components/Home/Landing";
import Footer from "./Components/Home/Footer";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/cart";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Wishlist from "./Components/wishlist/wishlist";


function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;