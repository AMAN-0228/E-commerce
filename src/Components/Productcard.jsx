import React from 'react'
import {NavLink} from 'react-router-dom'
import Card from './styled/Card'

const Productcard = () => {
  return (
    <Card>
      <NavLink to="/singleProduct">
        <figure>
            <img src="https://images.unsplash.com/photo-1548799768-325bc5913aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80" alt="product-img" />
            <figcaption>Caption</figcaption>
        </figure>
      </NavLink>
      <div>
        <span>Name</span>
        <span>Amount</span>
      </div>
    </Card>
  )
}

export default Productcard
