import { FaStar } from 'react-icons/fa';

import './Filters.css'

const Filters = () => {
    return <div className="filters-div">

    <div className="sorting-by-price-filter">
        <p className="filter-type"> Sort By </p>
    <ul class="radio-type">
        <li> <input type="radio" name='sorting' /> Low to High  </li>
        <li> <input type="radio" name='sorting' /> High to Low  </li>
    </ul>
    </div>
    <div className="pricing-filter">
        <p className="filter-type"> Price(in ₹) </p>
        <label className="pricing-filter-labels">
        <input className='pricing-filter-input' type="range" step={5000} min={0} max={20000} value={5000}/>
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
        <li> <input type="checkbox" /> 4 <FaStar/> and above  </li>
        <li> <input type="checkbox" /> 3 <FaStar/> and above  </li>
        <li> <input type="checkbox" /> 2 <FaStar/> and above  </li>
    </ul>
    </div>
    <div className="product-type-filter">
        <p className="filter-type"> Category </p>
    <ul class="checkbox-type">
        <li> <input type="checkbox" /> Guitars </li>
        <li> <input type="checkbox" /> Drums </li>
        <li> <input type="checkbox" /> Flutes </li>
    </ul>
    </div>
    </div>
}

export default Filters