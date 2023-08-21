import React from 'react'
import{ styled } from 'styled-components'
const Footer = () => {
  return (
    <Wapper>
      @{new Date().getFullYear()} Copy rights reserved
    </Wapper>
  )
}
const Wapper = styled.footer`
  margin-top : 80px;
  // padding : 15px;
  display :flex;
  justify-content : center;
  align-items : center;
  width : 100%;
  height : 50px;
  background-color : #454545;
  color : #fff;

`

export default Footer
