import React from 'react'

import {aboutContainer} from '../data/dataAboutContainer'
import Hero from '../component/2.Hero/Hero'
import Container from '../component/5.Container/Container'

const AboutPage = () => {
  return (
    <div>
      <Hero
          bgImage="/im6.jpg"
          title="About"
          classname='about'
       />
          {aboutContainer.map((item , index) => {
            return(
              <section>
              <Container
               key={index}
               title={item.title}
               text={item.text}
               classname="aboutpagecontainer"
              />
              </section>
            )
          })}
          
    </div>
  )
}

export default AboutPage