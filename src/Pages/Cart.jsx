import React from 'react'
import { useCartContext } from '../context/CartContext'
import { styled } from 'styled-components';
import { MdDelete } from 'react-icons/md';
import FormatePrice from '../Components/FormatePrice';
import CartItem from '../Components/CartItem';

const Cart = () => {
  const{cart} = useCartContext();
  console.log(cart)
  return (
    <Wrapper>
      <div className="cart-items-display">
        <div className="heading">
          <p>Item</p>
          <p>Price </p>
          <p>Quantity</p>
          <p>SubTotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-items">
          {cart.map((item)=>{
            // const{name,image,color,amount,price} = item
            return(
              <CartItem key={item.id} {...item}/>
            )
          })}
        </div>
        <hr />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-block : 50px;
  display : grid;
  grid-template-columns : repeat(12,1fr);
  .cart-items-display{
    grid-column : 3/11;
    .heading{
      text-align : center;
      display : grid;
      grid-template-columns : repeat(5 ,1fr);
    }
    .cart-items{
      margin-block : 20px;
      // background : red;
    }
    .cart-item{
      text-align : center;
      display : grid;
      grid-template-columns : repeat(5,1fr);
      .item-section{
        display : flex;
        justify-content : center;
        align-items : center;
        figure{
          width : 50%;
          img{
            width : 100%;
          }
        }
        .item-written{
          text-align : left;
          font-size : 12px;
          span{
            margin-inline : 3px;
            font-size : 10px;
            padding : 1px 5px;
            border-radius : 50%;
          }
        }
        .remove-item{
          cursor : pointer;
          font-size : 28px;
          &:active{
            transform : scale(1.2,1.2)
          }
        }
      }
    }
  }
`

export default Cart
