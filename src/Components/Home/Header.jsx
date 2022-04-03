import logo from '../../Assets/Images/store-logo.png'
import { FaRegHeart,FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    return( 
<nav className="nav-component">
      <div>
          <Link to={"/"}><img src={logo}
            alt="Blossom" className="logo-img" />
          </Link>
      </div>
      <div className="nav-center">
        <input className="search-bar" type="text" placeholder="Search Here..." />
      </div>
    <div className="right-nav">
     <ul className="nav-items">
       <li className="list-item">
        <button className="primary-btn btn">Log In </button>
       </li>
       <li className="list-item">
        <button className="secondary-btn btn">Sign Up</button>
       </li>
       <li className="list-item flex">
         <Link className="item" to={"/"}>
           <FaShoppingCart />
         </Link>
       </li>
       <li className="flex">
          <Link className="item" to={"/"}>
            <FaRegHeart />
          </Link>
       </li>
     </ul>
   </div>
</nav>
    )
    
}

export default Header