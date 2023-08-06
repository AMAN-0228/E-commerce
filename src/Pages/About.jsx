import React from 'react'
import HeroSection from '../Components/HeroSection'
import Container from '../Components/styled/Container'
import {MdOutlineSecurity} from 'react-icons/md'
import {FaTruck,FaStoreSlash} from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <HeroSection/>
      <Container>
        <div className="content grid grid-three-columns">
          <p>
            <MdOutlineSecurity/>
            <span>Secured Payment</span>
          </p>
          <div>
            <p>
              <FaStoreSlash/>
              <span>No Physical Contact</span>
            </p> 
            <p>
              <MdOutlineSecurity/>
              <span>Secure Payment</span>
            </p>
          </div>
          <p>
            <FaTruck/>
            <span>Fast Delivery</span>
          </p>
        </div>
      </Container>
    </div>
  )
}

export default About
