import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import { styled } from 'styled-components';

const Filter = () => {
  const {
    updateFilter,
    all_Products,
    resetFilter,
    filter :{text,company}
  } = useFilterContext();

  // to get unique value of each field
  const getUniqueData = (data,property)=>{
    let newList = data.map((item)=>{
      return item[property]
    })
    if(property ==='colors'){
      newList = ["ALL",...new Set(newList.flat())]
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
      <ul>
        {
          CategoryOnlyData.map((item,index)=>{
            return <button type='button' name='category' value={item} key={index} onClick={updateFilter}>{item}</button>
          })
        }
      </ul>
    </div>
    <div className="filter-company">
      <h2>Company</h2>
      <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <select name="company"  id=""  onClick={updateFilter} value={company}>{
        CompanyOnlyData.map((item,index)=>{
          return <option key={index} name='company' value={item} >{item}</option>
        })
      }        
      </select>
      </form>
    </div>
    <div className="filter-color">
      <h2>Color : </h2>
      {
        ColorsOnlyData.map((item,index)=>{
          return <button type='button' key={index} name='color' value={item} onClick={updateFilter}>{item}</button>
        })
      }
    </div>
    <div className="filter-reset">
      <button className="filter-reset-btn" type='button' onClick={resetFilter}>Reset</button>
    </div>
    </Wrapper> 
  )
}

const Wrapper = styled.div`
  display : flex;
  flex-direction : column;
`

export default Filter
