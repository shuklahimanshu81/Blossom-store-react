import { createContext, useContext, useReducer } from "react";
import { useProduct } from "./filterContext";

const cartContext = createContext();

const useCart = () => useContext(cartContext);

const CartProvider = ({ children }) => {
  const { productList } = useProduct();

  const increaseQuantity = (cartState, action) => {
    return {
      ...cartState,
      cart: cartState.cart.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    };
  };
  const decreaseQuantity = (cartState, action) => {
    return {
      ...cartState,
      cart: cartState.cart.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    };
  };
  const isInCart = (cart, product) => {
    console.log(cart, product);
    if (cart.findIndex((item) => item._id === product._id) >= 0) return true;
    else return false;
  };
  const cartReducer = (cartState, action) => {
    let isItemInCart = isInCart(cartState.cart, action.payload);
    switch (action.type) {
      case "ADD_TO_CART":
        if (isItemInCart) {
          return increaseQuantity(cartState, action);
        }
        return {
          ...cartState,
          cart: [...cartState.cart, { ...action.payload, quantity: 1 }],
        };
      case "INCREASE_QUANTITY":
        if (action.payload.quantity >= 0) {
          return increaseQuantity(cartState, action);
        }
        return cartState;
      case "DECREASE_QUANTITY":
        if (action.payload.quantity > 1) {
          return decreaseQuantity(cartState, action);
        }
        return cartState;
      case "REMOVE_FROM_CART":
        return {
          ...cartState,
          cart: cartState.cart.filter(
            (item) => item._id !== action.payload._id
          ),
        };
      default:
        return cartState;
    }
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
    totalQuantity: 0,
  });

  return (
    <cartContext.Provider value={{ cartDispatch, cartState }}>
      {children}
    </cartContext.Provider>
  );
};

export { CartProvider, useCart };
