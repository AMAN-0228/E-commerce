const FilterReducer = (state,action)=>{
    switch (action.type) {
        case "SET_FILTERED_DATA":
            return{
                ...state,
                all_Products : [...action.payload],
                filtered_Products : [...action.payload],
            }
        case "SET_LIST_VIEW":
            return{
                ...state,
                grid_view : false,
            }
        case "SET_GRID_VIEW":
            return{
                ...state,
                grid_view : true,
            }
        case "SET_SORT_VALUE":
            console.log(action.payload)
            return{
                ...state,
                sort_value : action.payload ,
            }
        case "SORT_PRODUCT":
            const {filtered_Products,sort_value} = state
            let temp = [...filtered_Products]
            const SortCompareFn = (a,b)=>{
                switch (sort_value) {
                    case "lowest":
                        return a.price-b.price;
                    case "highest":
                        return b.price-a.price;
                    case "a-z":
                        return a.name.localeCompare(b.name);
                    case "z-a":
                        return b.name.localeCompare(a.name);
                
                    default:
                        break;
                }
            }
            let newList = temp.sort(SortCompareFn);
            return{
                ...state,
                filtered_Products : newList,
            }
        case "UPDATE_FILTER_VALUE":
            // const {filter} = state
            console.log(action.payload.name ,action.payload.value)
            return{
                ...state,
                filter : {
                    ...state.filter,
                    [action.payload.name] : action.payload.value,
                }
            }
        case "FILTER_PRODUCT":
            const {all_Products} = state
            let tempFilteredProduct = [...all_Products]
            const {text,category,company,color} = state.filter
            // if(category != "ALL")
            
            if(category !== "ALL"){
                tempFilteredProduct = tempFilteredProduct.filter(item=>{
                    return item.category === category
                })
            }
            if(company !== "ALL"){
                tempFilteredProduct = tempFilteredProduct.filter(item=>{
                    return item.company === company
                })
            }
            if(color !== "ALL"){
                tempFilteredProduct = tempFilteredProduct.filter(item=>{
                    return item.colors.includes(color)
                })
            }
            // search box filter
            tempFilteredProduct = tempFilteredProduct.filter((item)=>{
                return item.name.toLowerCase().includes(text)
            })
            // console.log(tempFilteredProduct)
            // let newfilteredProduct = tempFilteredProduct
            return{
                ...state,
                // filtered_Products : newfilteredProduct,
                filtered_Products : tempFilteredProduct,
            }
        case "FILTER_VALUES_RESET":
            return{
                ...state,
                filter :{
                    text:"",
                    company : "ALL",
                    category : "ALL",
                    color : "ALL"
                }
            }
        default:
            return{
                ...state
            }
    }
}

export default FilterReducer