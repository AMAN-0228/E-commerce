const CartReducer = (state,action)=>{
    if(action.type === "ADD_TO_CART"){
        let {id,color,quantity,product} = action.payload
        let existingCartProduct = state.cart.find((item)=>{
            return item.id === id + color
        })
        if(existingCartProduct){
            let updatedCartProduct = state.cart.map(item=>{
                let newQuantity = item.quantity + quantity
                if(newQuantity > item.max){
                    newQuantity = item.max
                }
                if(item.id ===id + color){
                    return{
                        ...item,
                        quantity : newQuantity
                    }
                }
                else{
                    return item
                }
            })
            return{
                ...state,
                cart : updatedCartProduct,
            }
        }
        const cartProduct = {
            id : id + color,
            color,
            quantity,
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
    if(action.type === "TOTAL_ITEM_PRICE"){
        let updatedValue = state.cart.reduce((accum,curitem)=>{
            const {quantity,price} = curitem;
            accum.total_item  += quantity
            accum.total_price += (quantity * price)
            return accum
        },{total_item : 0 ,total_price : 0})
        return{
            ...state,
            total_item : updatedValue.total_item,
            total_price : updatedValue.total_price,
        }
    }
    if(action.type === "INCREMENT"){
        let updatedCart = state.cart.map(item=>{
            if(item.id === action.payload){
                let newQuantity = item.quantity + 1;
                if(newQuantity > item.max){
                    newQuantity = item.max
                }
                return{
                    ...item,
                    quantity : newQuantity,
                }
            }
            return{
                ...item,
            }
        })
        return{
            ...state,
            cart : updatedCart,
        }
    }
    if(action.type === "DECREMENT"){
        let updatedCart = state.cart.map(item=>{
            if(item.id === action.payload){
                let newQuantity = item.quantity - 1;
                if(newQuantity < 1){
                    newQuantity = 1
                }
                return{
                    ...item,
                    quantity : newQuantity,
                }
            }
            return{
                ...item,
            }
        })
        return{
            ...state,
            cart : updatedCart,
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
    if(action.type === "CLEAR_CART"){
        return{
            ...state,
            cart : [],
        }
    }
    return{
        ...state,
    }
    
}

export default CartReducer