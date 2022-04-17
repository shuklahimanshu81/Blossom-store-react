
import { useCart } from "../../Context/cartContext";
import {  useProduct } from "../../Context/filterContext";
import { useWishlist } from "../../Context/wishlistContext";
import Filters from "../Filters/Filters";

//CSS
import './Products.css'

const Products = () => {
    
 const { finalProduct} = useProduct()
 const {cartDispatch} = useCart();
const {wishlistDispatch} = useWishlist()
console.log(finalProduct)

return <div className="products-page">
  <Filters />
<section className="products-section">
    {
     finalProduct.map( product =>{
        return <div className="vertical-card card-section">
          <div className="card-img-section">
            <img src={product.image} alt={product.title} className="card-img" />
          </div>
          <div className="card-heading">
            {product.title}
          </div>
          <div className="card-detail">{product.price} </div>
          <div className="card-btns">
            <button className="card-primary-btn card-btn" onClick={()=> cartDispatch({type:"ADD_TO_CART",payload: product})}> Add to cart</button>
            <button className="card-secondary-btn card-btn" onClick={()=> wishlistDispatch({type:"ADD_TO_WISHLIST",payload: product})}> Add to wishlist </button>
          </div>
        </div>
      }
      )
    }
</section>
</div>

}

export default Products;