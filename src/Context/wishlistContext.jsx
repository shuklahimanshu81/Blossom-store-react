import { createContext, useContext, useReducer } from "react";

const wishlistContext = createContext();

const useWishlist = () => useContext(wishlistContext);

const WishlistProvider = ({ children }) => {
  const wishlistReducer = (wishlistState, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        return {
          ...wishlistState,
          wishlist: [...wishlistState.wishlist, action.payload],
        };
      case "REMOVE_FROM_WISHLIST":
        return {
          ...wishlistState,
          wishlist: wishlistState.wishlist.filter(
            (item) => item._id !== action.payload._id
          ),
        };
      default:
        return wishlistState;
    }
  };

  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });
  // console.log(wishlistState)

  return (
    <wishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

export { WishlistProvider, useWishlist };
