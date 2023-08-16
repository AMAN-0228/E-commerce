import React from "react";
import FormatePrice from "./FormatePrice";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ id, name, color, image, amount, price }) => {
    const {removeItem}=useCartContext()
  return (
    <div className="cart-item">
      <div className="item-section">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="item-written">
          <p>{name}</p>
          <p>
            Color:<span style={{ backgroundColor: color }}></span>
          </p>
        </div>
      </div>
      <div className="item-section">
        <FormatePrice price={price} />
      </div>
      <div className="item-section">component</div>
      <div className="item-section">
        <FormatePrice price={price * amount} />
      </div>
      <div className="item-section">
        <MdDelete className="remove-item" onClick={()=>removeItem(id)}/>
      </div>
    </div>
  );
};

export default CartItem;
