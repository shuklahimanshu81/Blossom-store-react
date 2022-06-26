
import { createContext, useContext, useReducer } from 'react'
import { useProduct } from './filterContext';

const cartContext = createContext();

const useCart = () => useContext(cartContext)



const CartProvider = ({ children }) => {
    const { productList } = useProduct();

    const addToCart = (cartState, action) => {
        let data = [...cartState.cart, { ...action.payload }]
        cartState = { ...cartState, cart: data }
        return cartState
    }


    const [cartState, cartDispatch] = useReducer(addToCart, { cart: [] })
    // console.log(cartState)  

    return <cartContext.Provider value={{ cartDispatch, cartState }}>
        {children}
    </cartContext.Provider>
}

export { CartProvider, useCart };