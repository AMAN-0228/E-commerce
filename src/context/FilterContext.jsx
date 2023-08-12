import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../reducer/FilterReducer'

const FilterContext = createContext();

const initialState = {
    all_Products : [],
    filtered_Products : [],
    grid_view : true,
    sort_value : "lowest",
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
    const sort = (e)=>{
        dispatch({type : "SET_SORT_VALUE",payload : `${e.target.value}`})
    }
    // sorting the data
    useEffect(()=>{
        dispatch({type : "SORT_PRODUCT"})
    },[state.sort_value,products])
    // setting data
    useEffect(()=>{
        dispatch({type : "SET_FILTERED_DATA",payload : products});
      },[products])
    return (
        <FilterContext.Provider value={{...state,SetGridView,SetListView,sort}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = ()=>{
    return useContext(FilterContext)
}

export {FilterContextProvider,useFilterContext}