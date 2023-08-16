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
  total_items: "",
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
   useEffect(()=>{
    console.log(state.cart)
    localStorage.setItem("e-commerceCart",JSON.stringify(state.cart))
  },[state.cart])
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
