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
        default:
            return{
                ...state
            }
    }
}

export default FilterReducer