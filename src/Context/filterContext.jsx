import {useContext,useState, useEffect, createContext, useReducer} from 'react'


import axios from 'axios';

const filterContext = createContext();
const useProduct = () => useContext(filterContext)

const FilterProvider = ({children}) =>{
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

    const reducerFunc = (state,action) => {
        switch(action.type){
            case "sort" : if(action.payload === 'LOW_TO_HIGH')
                           return action;
                          else if(action.payload === 'HIGH_TO_LOW') return action;
                          else return state;

            case "category" : if(action.payload === 'trumpets')return action;
                              else if(action.payload === 'drums')return action;
                              else if(action.payload === 'flutes')return action;
                              else return state;
            case "rating" : if(action.payload === '4')return {...state,payload: action.payload}
                            else if(action.payload === '3')return action;
                            else if(action.payload === '2')return action;
                            else return state;
            
        }
    }
    const [state,dispatch] = useReducer(reducerFunc,{type:'sort',payload:''})
   const getFinalProduct = (state,data) => {
       switch(state.type){
           case 'sort' :if(state.payload === 'LOW_TO_HIGH') return data.sort((a,b) => Number(a["price"]) - Number(b["price"]))
                        else if(state.payload === 'HIGH_TO_LOW') return data.sort((a,b) => Number(b["price"]) - Number(a["price"]))
                        else return data; 
           case 'category' : if(state.payload === 'drums')return data.filter(item => item.categoryName === 'drums');
                             else if(state.payload === 'trumpet')return data.filter(item => item.categoryName === 'trumpet');
                             else if(state.payload === 'flutes')return data.filter(item => item.categoryName === 'flutes');
                             else return data;
           default  : return data
       }
       
   }

   let finalProduct = getFinalProduct(state,[...productList])
    
    
        return <filterContext.Provider value={{ finalProduct,state,dispatch ,productList}}>
        {children}
    </filterContext.Provider>
    
}
    
export {FilterProvider,useProduct}