import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const DbDataContext = createContext();

const useDbData = () => useContext(DbDataContext);

const dbDataReducer = (dbDataState, dbDataAction) => {
  switch (dbDataAction.type) {
    case "PRODUCTS":
      return { ...dbDataState, products: dbDataAction.payload };
    default:
      return dbDataState;
  }
};

const DbDataProvider = ({ children }) => {
  const [dbDataState, dbDataDispatch] = useReducer(dbDataReducer, {
    products: [],
  });

  useEffect(() => {
    if (dbDataState.products.length === 0) {
      (async () => {
        try {
          const productsData = await axios.get("/api/products");
          dbDataDispatch({
            type: "PRODUCTS",
            payload: productsData.data.products,
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);
  return (
    <DbDataContext.Provider value={{ dbDataState, dbDataDispatch }}>
      {children}
    </DbDataContext.Provider>
  );
};

export { useDbData, DbDataProvider };
