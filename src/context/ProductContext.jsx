import { createContext, useContext, useEffect, useReducer } from "react"
import axios from "axios"
// import {ProductReducer as reducer} from '../reducer/ProductReducer'
import  reducer from '../reducer/ProductReducer'
const AppContext = createContext()

const API =  "https://api.pujakaitem.com/api/products"

const initialState = {
  isLoading : false,
  isError : false,
  products : [],
  featuredProducts : [],
  singleProduct : {},
  singleLoading : false,
  singleERROR : false
}

// const reducer = (action)=>{
//   // switch
// }
const AppProvider = ({children})=>{
  const [state,dispatch] = useReducer(reducer,initialState);

  const getProducts = async(url)=>{
    dispatch({type : "SET_LOADING"})
    try {
      const res = await axios.get(url)
      const product = res.data
      console.log(product)
      dispatch({type : "SET_API_DATA",payload : product})
    } catch (error) {
      dispatch({type : "API_ERROR"})
    }
  }
  const getSingleProduct = async (url)=>{
    try {
      dispatch({type : "SINGLE_LOADING"})
      const res = await axios.get(url)
      const SingleProduct = await res.data
      dispatch({type : "SET_SINGLE_PRODUCT",payload : SingleProduct})
    } catch (error) {
      dispatch({type : "SET_SINGLE_ERROR"})
    }
  }

  useEffect(()=>{
    getProducts(API);
  },[])
    return (
      <AppContext.Provider value={{...state,getSingleProduct}}>
        {children}
      </AppContext.Provider>
    )
}

const useProductContext = ()=>{
  return useContext(AppContext);
}
export {AppProvider,AppContext,useProductContext}