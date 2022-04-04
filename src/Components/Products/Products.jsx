import axios from "axios";
import { useEffect, useState } from "react";
import Filters from "../Filters/Filters";

//CSS
import './Products.css'

const Products = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        (async () => {
        try {
              const res = await axios.get("/api/products");
              setProductList(res.data.products);
        } catch (error) {
              console.log(error);
        }
      })();
    }, [])



return <div className="products-page">
  <Filters />
<section className="products-section">
    {
      productList.map( product =>{
        return <div className="vertical-card card-section">
          <div className="card-img-section">
            <img src={product.image} alt={product.title} className="card-img" />
          </div>
          <div className="card-heading">
            {product.title}
          </div>
          <div className="card-detail">{product.price} </div>
          <div className="card-btns">
            <button className="card-primary-btn card-btn"> Add to cart</button>
            <button className="card-secondary-btn card-btn"> Add to wishlist </button>
          </div>
        </div>
      }
      )
    }
</section>
</div>

}

export default Products;