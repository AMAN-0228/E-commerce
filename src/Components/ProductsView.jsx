import React from 'react'
import GridView from './GridView'
import ListView from './ListView';
import { useFilterContext } from '../context/FilterContext';

const ProductsView = () => {
    const {filtered_Products,grid_view} = useFilterContext();
    console.log(filtered_Products)
  return (
    <div>
      {grid_view && <GridView products={filtered_Products}/>}
      {!grid_view && <ListView products={filtered_Products}/>}
    </div>
  )
}

export default ProductsView
