import React from 'react'
import { useCartContext } from '../context/CartContext'
import { styled } from 'styled-components'
import CartItem from '../Components/CartItem'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const{cart,clearCart} = useCartContext();
  // console.log(cart)
  if(cart.length ===0){
    return <EmptyDiv><h3>No Item in Cart</h3></EmptyDiv>
  }
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
        <div className="cart-btn">
          <NavLink to='/products'>
            <button type='button' >Continue Shopping</button>
          </NavLink>
          <button type='button' onClick={clearCart}>Clear Cart</button>
        </div>
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
    .cart-btn{
      margin-block : 2rem;
      padding : 4px 3px;
      display : flex;
      justify-content : space-between;
      button{
        padding : 12px 15px;
        border : none;
        border-radius : 5px;
        background-color : #4E4FEB;
        color : #fff;
        font-size : 1rem;
      }
    }
  }
`

const EmptyDiv= styled.div`
  display : grid;
  place-items : center;
  height : 50vh;
  h3{
    text-transform : capitalize;
    font-weight : 300;
    font-size : 4.6rem;
  }
`

export default Cart
