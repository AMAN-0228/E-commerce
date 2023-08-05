import React from 'react'
import Nav from './Nav'
import {Logo, StyledHeader} from './styled/Header.styled'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <StyledHeader>
      <NavLink to='/'>
        <Logo src='e-com.png' alt='logo'/>
      </NavLink>
      <Nav/>
    </StyledHeader>
  )
}

export default Header
