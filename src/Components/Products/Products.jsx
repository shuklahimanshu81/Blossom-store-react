import axios from "axios";
import { useEffect, useState } from "react";

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
  {
  productList.map( product =>{
  return <div>
    <div className="vertical-card card-section">
      <div className="card-img-section">
        <img src={product.image} alt="alt-text" className="card-img" />
      </div>
      <div className="card-heading">
        {product.title}
      </div>
      <div className="card-subheading">
      </div>
      <div className="card-detail">{product.price} </div>
      <div className="card-btns">
        <button className="card-primary-btn card-btn"> Add to cart</button>
        <button className="card-secondary-btn card-btn"> Buy Now </button>
      </div>
    </div>
  </div>
  }
  )
  }
</div>
}

export default Products;