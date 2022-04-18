import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {CartProvider} from "./Context/cartContext";
import { FilterProvider } from "./Context/filterContext";
import { WishlistProvider } from "./Context/wishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
    <CartProvider>
      <WishlistProvider>
    <BrowserRouter>
         <App />
    </BrowserRouter> 
    </WishlistProvider>
    </CartProvider>
    </FilterProvider>
      
  </React.StrictMode>,
  document.getElementById("root")
);
