import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";
const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("e-commerceCart");
    console.log(localCartData)
  if (localCartData === null) {
    return [];
  }
  return JSON.parse(localCartData);
};
const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fees: 500,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, quantity, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, quantity, product },
    });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const increment = (id)=>{
    console.log("inc",id)
    dispatch({type : "INCREMENT" , payload : id})
  }
  const decrement = (id)=>{
    dispatch({type : "DECREMENT" , payload : id})
  }
   useEffect(()=>{
    dispatch({type : "TOTAL_ITEM_PRICE"})
    localStorage.setItem("e-commerceCart",JSON.stringify(state.cart))
  },[state.cart])
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, increment, decrement }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
