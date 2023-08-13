import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { styled } from 'styled-components'
import { useFilterContext } from '../context/FilterContext'

const Sort = () => {
  const{SetGridView,SetListView,sort,filtered_Products} = useFilterContext();
  return (
    <div className="products-page-right-top">
      <div>
        <Button className="view-option" onClick={SetGridView}>
          <BsFillGridFill />
        </Button>
        <Button className="view-option" onClick={SetListView}>
          <BsList/>
        </Button>
      </div>
      <div>
        {`${filtered_Products.length} product` }
      </div>
      <div>
        <form>
          <select name="sort" id="sort" onClick={sort}>
            <option value="lowest">Price low-high</option>
            <option value="highest">Price high-low</option>
            <option value="a-z">Name a-z</option>
            <option value="z-a">Name z-a</option>
          </select>
        </form>
      </div>
    </div>
  )
}

const Button = styled.button`
  margin-inline : 20px;
  background-color: #F8F0E5;
  padding: 5px 8px;
  font-size: 20px;
  border-color: transparent;
  border-radius: 5px;
  cursor : pointer;
  &:hover:active{
    svg{
      color : red;
    }
  }
`

export default Sort
