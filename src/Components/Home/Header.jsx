import logo from "../../Assets/Images/store-logo.png";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/cartContext";
import { useWishlist } from "../../Context/wishlistContext";
import { useAuth } from "../../Context/authContext";

const Header = () => {
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const { authToken, logoutUser } = useAuth();
  return (
    <nav className="nav-component">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="Blossom" className="logo-img" />
        </Link>
      </div>
      <div className="nav-center">
        <input
          className="search-bar"
          type="text"
          placeholder="Search Here..."
        />
      </div>
      <div className="right-nav">
        <ul className="nav-items">
          {authToken ? (
            <li className="list-item">
              <button className="secondary-btn btn" onClick={logoutUser}>
                Logout
              </button>
            </li>
          ) : (
            <li className="list-item">
              <Link to={"/login"}>
                <button className="primary-btn btn">Log In / Sign Up </button>
              </Link>
            </li>
          )}
          <li className="list-item">
            <Link className="item flex" to={"/cart"}>
              <FaShoppingCart />
              <p className="cart-count">{cartState.cart.length}</p>
            </Link>
          </li>
          <li>
            <Link className="item flex" to={"/wishlist"}>
              <FaRegHeart height="3em" />
              <p className="wishlist-count">{wishlistState.wishlist.length}</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
