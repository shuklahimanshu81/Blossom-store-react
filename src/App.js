import "./App.css";
import Footer from "./Components/Home/Footer";
import Header from "./Components/Home/Header";
import Landing from "./Components/Home/Landing";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/cart";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Wishlist from "./Components/wishlist/wishlist";


function App() {
  
  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;