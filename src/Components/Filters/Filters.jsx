import { FaStar } from "react-icons/fa";
import "./Filters.css";
import { useProduct } from "../../Context/filterContext";

const Filters = () => {
  const { filterState, filterDispatch } = useProduct();

  return (
    <div className="filters-div">
      <div className="sorting-by-price-filter">
        <p className="filters-head">
          <span className="filter-type">Filters</span>
          <span
            className="filter-reset filter-type"
            onClick={() => filterDispatch({ type: "RESET" })}
          >
            Clear All
          </span>
        </p>
        <p className="filter-type"> Sort By </p>
        <ul class="radio-type">
          <li>
            <input
              type="radio"
              name="sorting"
              value="LOW_TO_HIGH"
              checked={filterState.SORT_BY === "LOW_TO_HIGH"}
              onChange={() =>
                filterDispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
              }
            />
            Low to High
          </li>
          <li>
            <input
              type="radio"
              name="sorting"
              value="HIGH_TO_LOW"
              checked={filterState.SORT_BY === "HIGH_TO_LOW"}
              onChange={() =>
                filterDispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
              }
            />
            High to Low
          </li>
        </ul>
      </div>
      <div className="pricing-filter">
        <p className="filter-type"> Price(in ₹) </p>
        <label className="pricing-filter-labels">
          <input
            className="pricing-filter-input"
            type="range"
            value={filterState.PRICE}
            onChange={(e) =>
              filterDispatch({ type: "PRICE", payload: e.target.value })
            }
            step={2000}
            min={0}
            max={10000}
          />
          <div>
            <span>0</span>
            <span>2k</span>
            <span>4k</span>
            <span>6k</span>
            <span>8k</span>
            <span>10k</span>
          </div>
        </label>
      </div>
      <div className="rating-filter">
        <p className="filter-type"> Rating </p>
        <ul class="checkbox-type">
          <li>
            <input
              name="rating"
              type="radio"
              checked={filterState.RATING === "4"}
              onChange={() => filterDispatch({ type: "RATING", payload: "4" })}
            />
            4 <FaStar /> and above
          </li>
          <li>
            <input
              name="rating"
              type="radio"
              checked={filterState.RATING === "3"}
              onChange={() => filterDispatch({ type: "RATING", payload: "3" })}
            />
            3 <FaStar /> and above
          </li>
          <li>
            <input
              name="rating"
              type="radio"
              checked={filterState.RATING === "2"}
              onChange={() => filterDispatch({ type: "RATING", payload: "2" })}
            />
            2 <FaStar /> and above
          </li>
        </ul>
      </div>
      <div className="product-type-filter">
        <p className="filter-type"> Category </p>
        <ul class="checkbox-type">
          <li>
            <input
              type="checkbox"
              checked={filterState.CATEGORY.indexOf("trumpet") >= 0}
              onChange={(e) =>
                filterDispatch({
                  type: "CATEGORY",
                  payload: { checked: e.target.checked, value: "trumpet" },
                })
              }
            />
            Trumpets
          </li>
          <li>
            <input
              type="checkbox"
              checked={filterState.CATEGORY.indexOf("drum") >= 0}
              onChange={(e) =>
                filterDispatch({
                  type: "CATEGORY",
                  payload: { checked: e.target.checked, value: "drum" },
                })
              }
            />
            Drums
          </li>
          <li>
            <input
              type="checkbox"
              checked={filterState.CATEGORY.indexOf("flute") >= 0}
              onChange={(e) =>
                filterDispatch({
                  type: "CATEGORY",
                  payload: { checked: e.target.checked, value: "flute" },
                })
              }
            />
            Flutes
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
