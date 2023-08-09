import React from 'react'
import Productcard from './Productcard'
import { useProductContext } from '../context/ProductContext'
import { styled } from 'styled-components'

const Wrapper = styled.section`
  padding-block : 5rem;
  display : grid;
  grid-template-columns : 150px 2fr 150px;
  background-color: ${({theme})=>theme.color.bg};
  .content{
    grid-column : 2/3;
    h3{
      color : ${({theme})=>theme.color.color1};
      font-size : 15px;
    }
    h2{
      color : ${({theme})=>theme.color.color2};
      font-size : 35px;
      margin-bottom : 20px;
    }
  }
  .products{
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
  }
  @media(max-width : ${({theme})=>theme.mobile}){
    .products{
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;
      align-items: center;
      justify-content: center;
      
    }
  }
`
const Featured = () => {
  const {isLoading, featuredProducts} = useProductContext()
  console.log(featuredProducts)
  // console.log("products",products)
  return (
    <Wrapper >
      <div className='content'>
        <h3>check Now!</h3>
        <h2>Our Featured Products</h2>
        {isLoading && <div>Loading....</div>}
        <div className="products">
        {        
          featuredProducts.map(item=>{
            return <Productcard key={item.id} data={item}/>
          })
        }
        </div>
      </div>
    </Wrapper>
  )
}

export default Featured
