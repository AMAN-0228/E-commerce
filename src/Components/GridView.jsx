import React from 'react'
import Productcard from './Productcard';

const GridView = ({products}) => {

  return (
    <div className="products-page-productsShow">
      {
        products.map((item)=>{
        return <Productcard data={item} key={item.id}/>
      })}
    </div>
  )
}

export default GridView
