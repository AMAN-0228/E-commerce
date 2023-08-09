import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
        <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  )
}

const Wrapper = styled.section`
    height : 4rem;
    background-color : ${({theme})=>theme.color.bg};
    display :flex;
    justify-content : flex-start;
    align-items : center;
    font-size : 1.2rem;
    padding-left : 1.2rem;
    a{
        font-size : 1.2rem;
        color : ${({theme })=>theme.color.color1};
    }
    @media(max-width : ${({theme})=>theme.mobile}){
        padding-top :100px;
    }
`

export default PageNavigation
