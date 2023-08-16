import React, { useState } from 'react'
import { BiMinus } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { useCartContext } from '../context/CartContext'

const AddToCart = ({product}) => {
    const {addToCart} = useCartContext()
    const [count,setCount] = useState(1)
    const Increment = ()=>{
        count < product.stock && setCount(count + 1)
    }
    const Decrement = ()=>{
        count > 1 && setCount(count - 1)
    }
  return (
    <Wrapper>
      <div className="numerical-value">
        <BsPlus className='icon' onClick={Increment}/>
        <span>{count}</span>
        <BiMinus className='icon' onClick={Decrement}/>
      </div>
      <NavLink to='/cart' onClick={()=> addToCart(product.id,product.colors[0],count,product)}>
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
