import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { styled } from 'styled-components'
import { useFilterContext } from '../context/FilterContext'

const Sort = () => {
  const{SetGridView,SetListView,sort,filtered_Products,grid_view} = useFilterContext();
  return (
    <div className="products-page-right-top">
      <BtnWrapper>
        <button className={`view-option ${grid_view?'sort-btn-active':''}`} onClick={SetGridView}>
          <BsFillGridFill />
        </button>
        <button className={`view-option ${grid_view?'':'sort-btn-active'}`} onClick={SetListView}>
          <BsList/>
        </button>
      </BtnWrapper>
      <div>
        {`${filtered_Products.length} product` }
      </div>
      <div>
        <StyledForm>
          <select name="sort" id="sort" onClick={sort}>
            <option value="lowest" className='options'>Price low-high</option>
            <option value="#" disabled></option>
            <option value="highest">Price high-low</option>
            <option value="#" disabled></option>
            <option value="a-z">Name a-z</option>
            <option value="#" disabled></option>
            <option value="z-a">Name z-a</option>
          </select>
        </StyledForm>
      </div>
    </div>
  )
}

const BtnWrapper = styled.div`
  button{
    margin-inline : 20px;
  background-color: #F8F0E5;
  background: lightgray;
  // background: gainsboro;
  padding: 5px 8px;
  font-size: 20px;
  border-color: transparent;
  border-radius: 5px;
  cursor : pointer;
  // &:has(:hover,:active){
  //   svg{
  //     color : red;
  //   }
  // }
  }
  
  .sort-btn-active{
    color : white;
    background-color : black;
  }
`

const StyledForm = styled.form`
  margin-inline : 10px;
  select{
    padding : 5px 3px;
    .options{
      // color : red;
      margin : 13px 2px;
    }
    option{
      // color : red;
      // text-align : center;
    }
  }
`

export default Sort
