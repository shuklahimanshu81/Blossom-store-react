import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/cartContext";
import { FilterProvider } from "./Context/filterContext";
import { WishlistProvider } from "./Context/wishlistContext";
import { DbDataProvider } from "./Context/dbDataContext";
import { AuthProvider } from "./Context/authContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DbDataProvider>
          <FilterProvider>
            <CartProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </CartProvider>
          </FilterProvider>
        </DbDataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
