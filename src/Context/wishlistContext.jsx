
import { createContext, useContext, useReducer } from 'react'
import { useProduct } from './filterContext';

const wishlistContext = createContext();

const useWishlist = () => useContext(wishlistContext)



const WishlistProvider = ({ children }) => {
    const { productList } = useProduct();

    const addToWishlist = (wishlistState, action) => {
        let data = [...wishlistState.wishlist, { ...action.payload }]
        wishlistState = { ...wishlistState, wishlist: data }
        return wishlistState
    }


    const [wishlistState, wishlistDispatch] = useReducer(addToWishlist, { wishlist: [] })
    // console.log(wishlistState)  

    return <wishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
        {children}
    </wishlistContext.Provider>
}

export { WishlistProvider, useWishlist };