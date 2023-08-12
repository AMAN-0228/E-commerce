import React from 'react'
import { styled } from 'styled-components'
import { useProductContext } from '../context/ProductContext'
import Filter from '../Components/Filter';
import Sort from '../Components/Sort';
import ProductsView from '../Components/ProductsView';

const Products = () => {
  const {isLoading} = useProductContext();
  return (
    <StyledGri>
      <div className='products-page-left'>
        <Filter/>
      </div>
      <div className='products-page-right'>
        <Sort/>
        {isLoading && <div>...Loading</div>}
        {!isLoading && 
          <ProductsView/>
        } 
      </div>
    </StyledGri>
  )
}

const StyledGri = styled.section`
  margin-block : 50px;
  display : grid;
  grid-template-columns : repeat(12,1fr);
  column-gap : 32px;
  .products-page-left{
    grid-column : 2/3;
  }
  .products-page-right{
    grid-column : 4/12;
    display :grid;
    grid-template-rows : .3fr 5fr;
    row-gap : 10px;
    .products-page-right-top{
      margin-block : 20px;
      display : flex;
      justify-content : space-between;
      align-items : center;
    }
    .products-page-productListing{
      // class to give to 1st div of productView page
    }
    .products-page-productsShow{
      padding : 10px;
      display : flex;
      flex-wrap : wrap;
      justify-content : space-between;
      gap : 20px;
      border : 2px solid #61677A;
      border-radius : 8px;
      &:nth-child(2n+1){
        // margin-inline : 1000px;
        border : 3px solid red;
        
      }
    }
  }
`



export default Products
