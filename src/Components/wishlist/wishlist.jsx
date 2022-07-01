import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cartContext";
import { useWishlist } from "../../Context/wishlistContext";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();
  const navigate = useNavigate();

  return (
    <main className="cart">
      {wishlistState.wishlist.length > 0 ? (
        <section className="products-section">
          {wishlistState.wishlist.map((product) => {
            return (
              <div className="vertical-card card-section">
                <div className="card-img-section">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img"
                  />
                </div>
                <div className="card-heading">{product.title}</div>
                <div className="card-detail">{product.price} </div>
                <div className="card-btns">
                  <button
                    className="card-primary-btn card-btn"
                    onClick={() => {
                      cartDispatch({ type: "ADD_TO_CART", payload: product });
                    }}
                  >
                    Add to cart
                  </button>
                  <button
                    className="card-secondary-btn card-btn"
                    onClick={() =>
                      wishlistDispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: product,
                      })
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <div className="empty-cart-div">
          <p className="empty-cart-message">
            Looks like you didn't added anything to your wishlist.
          </p>
          <br></br>
          <p className="shop-btn" onClick={() => navigate("/products")}>
            {" "}
            Shop Now{" "}
          </p>
        </div>
      )}
    </main>
  );
};

export default Wishlist;
