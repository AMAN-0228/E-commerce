import React from 'react'
import {NavLink} from 'react-router-dom'
import Card from './styled/Card'

const Productcard = ({data}) => {
  return (
    <Card>
      <NavLink to={`/singleProduct/${data.id}`}>
        <figure>
            <img src={data.image} alt={`${data.name}-img`} />
            <figcaption>{data.category}</figcaption>
        </figure>
      </NavLink>
      <div>
        <span>{data.name}</span>
        <span>{data.price}</span>
      </div>
    </Card>
  )
}

export default Productcard
