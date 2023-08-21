import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { styled } from 'styled-components'

const Contact = () => {
  const [filled,setFilled] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault()
    setFilled(true)
  }
  if(filled){
    return <Navigate to='/'/>
  }
  return (
    <Wrapper>
      <div className="map">
        <iframe title='location-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29436.580817080547!2d75.87705593971411!3d22.74412191777981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd541cc92fb7%3A0x84fe7fdd973a8f3e!2sC21%20Mall!5e0!3m2!1sen!2sin!4v1692221545604!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
      </div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder='Name'/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='email@gmail.com'/>
          <textarea name="description" id="description" cols="30" rows="10"></textarea>
          <button>Submit</button>
        </form>
      
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display : grid;
  grid-template-columns : repeat(12,1fr);
  .map{
    grid-column:1/13;
    margin-block : 2.5rem;
    iframe{
      height : 30vh;
      width : 100%;
    }
  }
  form{
    grid-column : 4/9;
    display :flex;
    flex-direction : column;
    gap : .6rem;
    input,textarea{
      padding : 4px 6px;
    }
    button{
      padding: .5em 1em;
      background-color : #4E4FEB;
      color : #fff;
      border-radius : 5px;
      font-size : 1rem;
      cursor: pointer;
    }
  }
  @media(max-width : ${({theme})=>theme.mobile}){
    margin-top: 15vh;
  }
`

export default Contact
