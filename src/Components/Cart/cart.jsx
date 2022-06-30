import { useCart } from "../../Context//cartContext";
import { useWishlist } from "../../Context/wishlistContext";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const navigate = useNavigate();
  let totalPrice = 0;
  cartState.cart.forEach((item) => {
    totalPrice = totalPrice + item.price * item.quantity;
  });
  return (
    <main className="cart">
      {cartState.cart.length > 0 ? (
        <div className="main-div-cart">
          <section className="products-section">
            {cartState.cart.map((product, index) => {
              return (
                <div key={index} className="horizontal-card">
                  <div className="card-img-section">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="hz-card-img cart-img"
                    />
                  </div>
                  <div className="about-card">
                    <p className="card-heading">{product.title}</p>
                    <p className="card-detail"> ₹ {product.price} </p>
                    <p className="card-btn-section">
                      <button
                        className="card-btn cart-btn"
                        onClick={() =>
                          cartDispatch({
                            type: "DECREASE_QUANTITY",
                            payload: product,
                          })
                        }
                      >
                        -
                      </button>
                      {product.quantity}
                      <button
                        className="card-btn cart-btn"
                        onClick={() =>
                          cartDispatch({
                            type: "INCREASE_QUANTITY",
                            payload: product,
                          })
                        }
                      >
                        +
                      </button>
                    </p>
                    <p className="card-btns">
                      <button
                        className="card-primary-btn card-btn"
                        onClick={() => {
                          wishlistDispatch({
                            type: "ADD_TO_WISHLIST",
                            payload: product,
                          });
                          cartDispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          });
                        }}
                      >
                        Move to wishlist
                      </button>
                      <button
                        className="card-secondary-btn card-btn"
                        onClick={() =>
                          cartDispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      >
                        Remove
                      </button>
                    </p>
                    <p></p>
                  </div>
                </div>
              );
            })}
          </section>
          <div class="text-only-card">
            <p class="card-heading">Price Details</p>
            <hr></hr>
            <section className="total-price-section">
              <p className="totol-price">Total Price : {totalPrice}</p>
              <button className="card-primary-btn card-btn place-order-btn">
                Place Order
              </button>
            </section>
          </div>
        </div>
      ) : (
        <div className="empty-cart-div">
          <p className="empty-cart-message">
            {" "}
            Looks like you didn't added anything to your cart.
          </p>
          <p className="shop-btn" onClick={() => navigate("/products")}>
            {" "}
            Shop Now{" "}
          </p>
        </div>
      )}
    </main>
  );
};

export default Cart;
