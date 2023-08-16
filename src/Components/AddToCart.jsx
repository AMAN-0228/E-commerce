import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { useCartContext } from '../context/CartContext'
import QuantityToggle from './QuantityToggle'

const AddToCart = ({product}) => {
    const {addToCart} = useCartContext()
    const [quantity,setQuantity] = useState(1)
    const Increment = ()=>{
        quantity < product.stock && setQuantity(quantity + 1)
    }
    const Decrement = ()=>{
        quantity > 1 && setQuantity(quantity - 1)
    }
  return (
    <Wrapper>
      <QuantityToggle quantity={quantity} Increment={Increment} Decrement={Decrement}/>
      <NavLink to='/cart' onClick={()=> addToCart(product.id,product.colors[0],quantity,product)}>
        <button type='button' >ADD TO CART</button>
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .numerical-value{
        display : flex;
        justify-content : space-evenly;
        algin-items : center;
        .icon{
            font-size : 21px;
            cursor : pointer;
        }
    }
    button{
        margin : 13px 8px;
        background-color : #4E4FEB;
        border : none;
        border-radius : 5px;
        color : white;
        padding : 8px 4px;
        cursor : pointer;

    }
`

export default AddToCart
