import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cartContext";
import { useProduct } from "../../Context/filterContext";
import { useWishlist } from "../../Context/wishlistContext";

import Filters from "../Filters/Filters";

//CSS
import "./Products.css";

const Products = () => {
  const { sortedProduct } = useProduct();
  const { cartDispatch, cartState } = useCart();
  const { wishlistDispatch, wishlistState } = useWishlist();
  const navigate = useNavigate();

  const cartHandler = (product) => {
    cartState.cart.findIndex((item) => item._id === product._id) >= 0
      ? navigate("/cart")
      : cartDispatch({
          type: "ADD_TO_CART",
          payload: product,
        });
  };
  const wishlistHandler = (product) => {
    wishlistState.wishlist.findIndex((item) => item._id === product._id) >= 0
      ? navigate("/wishlist")
      : wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: product,
        });
  };
  return (
    <div className="products-page">
      <Filters />
      <section className="products-section">
        {sortedProduct.length === 0 ? (
          <div>No products here </div>
        ) : (
          sortedProduct.map((product) => {
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
                <div className="card-detail"> ₹ {product.price} </div>
                <div className="card-btns">
                  <button
                    className="card-primary-btn card-btn"
                    onClick={() => cartHandler(product)}
                  >
                    {cartState.cart.findIndex(
                      (item) => item._id === product._id
                    ) >= 0
                      ? "Go to cart"
                      : "Add to cart"}
                  </button>
                  <button
                    className="card-secondary-btn card-btn"
                    onClick={() => wishlistHandler(product)}
                  >
                    {wishlistState.wishlist.findIndex(
                      (item) => item._id === product._id
                    ) >= 0
                      ? "Go to wishlist"
                      : "Add to wishlist"}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default Products;
