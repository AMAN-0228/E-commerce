import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../reducer/FilterReducer'

const FilterContext = createContext();

const initialState = {
    all_Products : [],
    filtered_Products : [],
    grid_view : true,
    sort_value : "lowest",
    filter : {
        text:"",
        company : "ALL",
        category : "ALL",
        color : "ALL",
        price : 0,
        maxPrice : 0,
        minPrice : 0,
    }
}

const FilterContextProvider = ({children})=>{
    const {products} = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState);
    // for grid view
    const SetGridView = ()=>{
        dispatch({type : "SET_GRID_VIEW"})
    }
    // for list view
    const SetListView = ()=>{
        dispatch({type : "SET_LIST_VIEW"})
    }
    //get sort value
    const sort = (event)=>{
        dispatch({type : "SET_SORT_VALUE",payload : `${event.target.value}`})
    }
    // set filter value
    const updateFilter = (e) =>{
        const name  = e.target.name
        const value = e.target.value
        return dispatch({type : "UPDATE_FILTER_VALUE",payload:{name,value}})
    }
    // reset filter 
    const resetFilter = (e) =>{
        dispatch({type : "FILTER_VALUES_RESET"})
    }
    // sorting the data and filter
    useEffect(()=>{
        dispatch({type : "FILTER_PRODUCT"})
        dispatch({type : "Filter_DATA"})
        dispatch({type : "SORT_PRODUCT"})
    },[state.sort_value,products,state.filter])
    // set max min price value
    useEffect(()=>{
        dispatch({type : "FILTER_PRICE_VALUE"})
    },[state.all_Products,state.filter.maxPrice])
    // setting data
    useEffect(()=>{
        dispatch({type : "SET_FILTERED_DATA",payload : products});
      },[products])
    return (
        <FilterContext.Provider value={{...state,SetGridView,SetListView,sort,updateFilter,resetFilter}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = ()=>{
    return useContext(FilterContext)
}

export {FilterContextProvider,useFilterContext}