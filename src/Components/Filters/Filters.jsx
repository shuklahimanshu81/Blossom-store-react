import { FaStar } from 'react-icons/fa';
import './Filters.css'
import { useProduct } from '../../Context/filterContext';

const Filters = () => {
   const {dispatch} = useProduct();


    return <div className="filters-div">
    <div className="sorting-by-price-filter">
        <p className="filter-type"> Sort By </p>
    <ul class="radio-type">
        <li> <input type="radio" name='sorting' value='LOW_TO_HIGH' onChange={(e) => dispatch({type:"sort",payload: 'LOW_TO_HIGH'})}/> Low to High  </li>
        <li> <input type="radio" name='sorting' value='HIGH_TO_LOW' onChange={(e) => dispatch({type:"sort",payload: 'HIGH_TO_LOW'})}/> High to Low  </li>
    </ul>
    </div>
    <div className="pricing-filter">
        <p className="filter-type"> Price(in ₹) </p>
        <label className="pricing-filter-labels">
        <input className='pricing-filter-input' type="range" step={5000} min={0} max={20000}/>
        <div>
            <span>0</span>
            <span>5k</span>
            <span>10k</span>
            <span>15k</span>
            <span>20k</span>
        </div>
        </label>
    </div>
    <div className="rating-filter">
        <p className="filter-type"> Rating </p>
    <ul class="checkbox-type">
        <li> <input type="checkbox"  onChange={(e) => dispatch({type:"rating",payload: '4'})}/> 4 <FaStar/> and above  </li>
        <li> <input type="checkbox" onChange={(e) => dispatch({type:"rating",payload: '3'})} /> 3 <FaStar/> and above  </li>
        <li> <input type="checkbox" onChange={(e) => dispatch({type:"rating",payload: '2'})} /> 2 <FaStar/> and above  </li>
    </ul>
    </div>
    <div className="product-type-filter">
        <p className="filter-type"> Category </p>
    <ul class="checkbox-type">
        <li> <input type="checkbox" onClick={(e) => dispatch({type:"category",payload: 'trumpet'})} /> Trumpets </li>
        <li> <input type="checkbox" onClick={(e) => dispatch({type:"category",payload: 'drums'})} /> Drums </li>
        <li> <input type="checkbox" onClick={(e) => dispatch({type:"category",payload: 'flutes'})} /> Flutes </li>
    </ul>
    </div>
    </div>
}

export default Filters