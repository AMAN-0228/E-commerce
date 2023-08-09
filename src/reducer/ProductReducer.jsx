const ProductReducer = (state,action)=>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading : true
            }
        case "SET_API_DATA":            
            const featuredData = action.payload.filter((item)=>{return item.featured === true})
            return{
                ...state,
                isLoading : false,
                featuredProducts  : featuredData,
                products : action.payload,
                isError : false
            }
        case "API_ERROR":
            return{
                ...state,
                isError : true,
                isLoading : false
            }
        case "SET_SINGLE_LOADING":
            return{
                ...state,
                singleLoading : true
            }
        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                singleLoading : false,
                singleError : false,
                singleProduct : action.payload
            }
        case "SET_SINGLE_ERROR":
            return{
                ...state,
                singleError : true,
                singleLoading : false
            }
        default :
            return {...state}
    }
}

export default ProductReducer