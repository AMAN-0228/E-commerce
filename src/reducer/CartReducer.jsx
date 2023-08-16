const CartReducer = (state,action)=>{
    if(action.type === "ADD_TO_CART"){
        let {id,color,amount,product} = action.payload
        const cartProduct = {
            id : id + color,
            color,
            amount,
            name : product.name,
            image : product.image[0].url,
            price : product.price,
            max : product.stock,
        }
        return{
            ...state,
            cart : [...state.cart,cartProduct],
        }
    }
        
    if(action.type === "REMOVE_ITEM"){

        console.log(action.payload)
        let updatedCart = state.cart.filter((item)=>{
            console.log(item.id,action.payload)
            return item.id !== action.payload
        })
        return{
            ...state,
            cart : updatedCart,
        }
    }
    return{
        ...state,
    }
    
}

export default CartReducer