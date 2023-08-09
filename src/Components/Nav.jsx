import React, { useState } from 'react'
import { StyledNav } from './styled/Header.styled'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaBarsStaggered ,FaX} from "react-icons/fa6";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <StyledNav>
      <ul className={toggle?'sideNav':''}>
        <li>
          <NavLink to='/' onClick={()=>setToggle(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' onClick={()=>setToggle(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/products' onClick={()=>setToggle(false)}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' onClick={()=>setToggle(false)}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart' onClick={()=>setToggle(false)}>
          <FaShoppingCart/>
            <span>10</span>
          </NavLink>
        </li>
      </ul>
      <div className="mobile-view">
      <FaBarsStaggered className={`mobile-view-btn ${toggle?'active':''}`} onClick={()=>setToggle(true)}/>
      <FaX className={`cross-btn ${toggle?'':'active'}`} name='cross-btn' onClick={()=>setToggle(false)}/>
      </div>
    </StyledNav>
  )
}

export default Nav
