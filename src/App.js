import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Home/Header"
import Landing from "./Components/Home/Landing";
import Footer from "./Components/Home/Footer";
import Products from "./Components/Products/Products";


function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;