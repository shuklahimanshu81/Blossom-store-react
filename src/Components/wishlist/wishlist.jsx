
import { useWishlist } from "../../Context/wishlistContext"

const Wishlist = () => {
    const {wishlistState} = useWishlist();
    return <main className="main-div-cart">
      
    <section className="products-section">
  {
   wishlistState.wishlist.map( product =>{
      return <div className="vertical-card card-section">
        <div className="card-img-section">
          <img src={product.image} alt={product.title} className="card-img" />
        </div>
        <div className="card-heading">
          {product.title}
        </div>
        <div className="card-detail">{product.price} </div>
        <div className="card-btns">
          <button className="card-primary-btn card-btn" > Move to cart </button>
          <button className="card-secondary-btn card-btn" > Remove from wishlist </button>
        </div>
      </div>
    }
    )
  }
</section>
    
  </main>
}

export default Wishlist