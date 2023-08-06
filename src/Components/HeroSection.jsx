import React from 'react'
import StyledHeroSection from './styled/HeroSection.styled'

const HeroSection = () => {
  return (
    <StyledHeroSection>
        <div className='part-1'>
          <div>
            <span>Welcome To</span>
            <h2>E-commerce</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quae reprehenderit, maiores deleniti neque a! Hic exercitationem magni perferendis quis commodi architecto labore? Aliquid aspernatur, ducimus ab perferendis tenetur dolor ut enim odio ad?</p>
          </div>
        </div>
        <div className='part-2'>
          <figure>
            <img src="yesOpen.jpg" alt="img" />
          </figure>
        </div>
      </StyledHeroSection>
  )
}

export default HeroSection
