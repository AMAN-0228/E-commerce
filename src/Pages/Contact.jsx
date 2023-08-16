import React from 'react'
import { styled } from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29436.580817080547!2d75.87705593971411!3d22.74412191777981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd541cc92fb7%3A0x84fe7fdd973a8f3e!2sC21%20Mall!5e0!3m2!1sen!2sin!4v1692221545604!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
      </div>
      <div className="form">
        <form action="">
          form
        </form>
      </div>
      Contact
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
    // grid-column : 4/7;
  }
`

export default Contact
