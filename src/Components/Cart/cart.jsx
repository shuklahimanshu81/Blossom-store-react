import {useCart} from '../../Context//cartContext'
import './cart.css'

const Cart = () => {

const {cartState} = useCart();


    return <main className="main-div-cart">
      
      <section className="products-section">
    {
     cartState.cart.map( product =>{
        return <div className="vertical-card card-section">
          <div className="card-img-section">
            <img src={product.image} alt={product.title} className="card-img" />
          </div>
          <div className="card-heading">
            {product.title}
          </div>
          <div className="card-detail">{product.price} </div>
          <div className="card-btns">
            <button className="card-primary-btn card-btn" > Remove from cart</button>
            <button className="card-secondary-btn card-btn" > Move to wishlist </button>
          </div>
        </div>
      }
      )
    }
</section>
      
    </main>
}

export default Cart ;