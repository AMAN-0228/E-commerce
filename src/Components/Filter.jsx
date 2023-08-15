import React, { useState } from 'react'
import { useFilterContext } from '../context/FilterContext'
import { styled } from 'styled-components';
import FormatePrice from './FormatePrice';

const Filter = () => {
  const {
    updateFilter,
    all_Products,
    resetFilter,
    filter :{text,category,company,price,maxPrice,minPrice}
  } = useFilterContext();
  const [companyName, setCompanyName] = useState(company);

  // to get unique value of each field
  const getUniqueData = (data,property)=>{
    let newList = data.map((item)=>{
      return item[property]
    })
    if(property ==='colors'){
      newList = [...new Set(newList.flat())]
    }
    else{
      newList = ["ALL", ...new Set(newList)]
    }
    // console.log(newList)
    return newList
  }
  // unique data
  const CategoryOnlyData = getUniqueData(all_Products,"category")
  const CompanyOnlyData = getUniqueData(all_Products,"company")
  const ColorsOnlyData = getUniqueData(all_Products,"colors")
  return (
    <Wrapper>
      <div className="filter-search">
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
          <input type="text" name="text" id="search" value={text} onChange={updateFilter}/>
        </form>
      </div>
      <div className="filter-category">
        <h2>Category</h2>
        <div className='filter-category-name'>
          {
            CategoryOnlyData.map((item,index)=>{
              return (
                <button 
                  className={item===category?'filter-category-active':''} 
                  type='button' 
                  name='category' 
                  value={item} 
                  key={index}
                  onClick={updateFilter}
                >
                  {item}
                </button>
              )
            })
          }
        </div>
      </div>
      <div className="filter-company">
        <h2>Company</h2>
        <select name="company"  id="company"  onClick={updateFilter} >{
          CompanyOnlyData.map((item,index)=>{
            return <option key={index} name='company' value={item} >{item}</option>
          })
        }        
        </select>
      </div>
      <div className="filter-color">
        <h2>Color : </h2>
        <div className="filter-color-list">
          {
            ColorsOnlyData.map((item,index)=>{
              return <button type='button' key={index} name='color' value={item} onClick={updateFilter} style={{background:item}}></button>
            })
          }
        </div>
      </div>
      <div className="filter-range">
        <h2>Price</h2>
        <FormatePrice price ={price} className="formated-price"/>
        <input type="range" name="price" id="filter-price" value={price} max={maxPrice} min={minPrice}  onChange={updateFilter}/>
      </div>
      <div className="filter-reset">
        <button className="filter-reset-btn" type='button' onClick={resetFilter}>Clear Filter</button>
      </div>
    </Wrapper> 
  )
}

const Wrapper = styled.div`
  display : flex;
  flex-direction : column;
  algin-item : center;
  // position : fixed;
  background-color : white;
  // gap : 2rem;
  .filter-search{
    input{

      width : 85%;
    }
  }
  .filter-category {
    .filter-category-name{
      display : flex;
      flex-direction : column;
      justify-content: start;
      align-items: flex-start;
      gap : 1rem;
      button{
        position : relative;
        background-color : transparent;
        border : none;
        &::after{
          border-bottom : 1.4px solid blue;
          content :'';
          width : 0%;
          position : absolute;
          bottom : 0px;
          left : 0px;
          z-index : 1;
        }
      }
      .filter-category-active{
        &::after{
          width : 100%;
          transition : width .3s ease-in;
        }
      }
    }
  }
  .filter-company{
    select{
      padding : 3px 0;
      width : 40%;
      option{
        text-align : center;
      }
    }
  }
  .filter-color{
    .filter-color-list{
      display : flex;
      // flex-direction : column;
      justify-content: start;
      align-items: center;
      gap : 10px;
      button{
        padding : 10px;
        border-radius : 50%;
        border : none;
      }
    }
  }
  .filter-range{
    display : flex;
    flex-direction : column;
    gap : 0.3em;
    color : #4E4FEB;
  }
  .filter-reset{
    margin-block : 2em;
    button{
      padding: .5em 1em;
      background-color : #4E4FEB;
      color : #fff;
      border-radius : 5px;
      font-size : 1rem;
    }
  }
  h2{
    margin-block : .6rem;
    font-size: 16px;
  }
`

export default Filter
