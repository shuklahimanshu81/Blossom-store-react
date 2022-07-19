import { useContext, createContext, useReducer } from "react";
import { useDbData } from "./dbDataContext";

const filterContext = createContext();

const useProduct = () => useContext(filterContext);

const FilterProvider = ({ children }) => {
  const { dbDataState } = useDbData();

  const filterReducer = (filterState, filters) => {
    switch (filters.type) {
      case "SORT_BY":
        return { ...filterState, SORT_BY: filters.payload };
      case "RATING":
        return { ...filterState, RATING: filters.payload };
      case "CATEGORY":
        if (filters.payload.checked) {
          return filterState.CATEGORY.indexOf(filters.payload.value) >= 0
            ? filterState
            : {
                ...filterState,
                CATEGORY: [...filterState.CATEGORY, filters.payload.value],
              };
        } else {
          return {
            ...filterState,
            CATEGORY: filterState.CATEGORY.filter(
              (item) => item !== filters.payload.value
            ),
          };
        }
      case "PRICE":
        console.log({ ...filterState, PRICE: filters.payload });
        return { ...filterState, PRICE: filters.payload };
      case "RESET":
        return {
          SORT_BY: "",
          RATING: 0,
          CATEGORY: [],
          PRICE: 6000,
        };

      default:
        return filterState;
    }
  };

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    SORT_BY: "",
    RATING: 0,
    CATEGORY: [],
    PRICE: 6000,
  });

  const getSortedProduct = (products, sortType) => {
    switch (sortType) {
      case "LOW_TO_HIGH":
        return products.sort((a, b) => a.price - b.price);
      case "HIGH_TO_LOW":
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const getFilteredProduct = (sortedProductList, filters) => {
    let finalProductList = filters.CATEGORY.length
      ? []
      : [...sortedProductList];

    filters.CATEGORY.forEach((category) => {
      finalProductList = [
        ...finalProductList,
        ...[...sortedProductList].filter(
          (item) => item.categoryName === category
        ),
      ];
    });

    if (filters.RATING) {
      finalProductList = finalProductList.filter(
        (item) => item.rating >= filters.RATING
      );
    }
    if (filters.PRICE) {
      finalProductList = finalProductList.filter(
        (item) => Number(item.price) <= filters.PRICE
      );
    }
    return finalProductList;
  };

  const filteredProduct = getFilteredProduct(dbDataState.products, filterState);
  const sortedProduct = getSortedProduct(filteredProduct, filterState.SORT_BY);

  return (
    <filterContext.Provider
      value={{ sortedProduct, filterDispatch, filterState }}
    >
      {children}
    </filterContext.Provider>
  );
};

export { FilterProvider, useProduct };
