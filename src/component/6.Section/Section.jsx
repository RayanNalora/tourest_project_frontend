import './Section.css'
import React, { Children } from 'react'

const Section = ({children}) => {
  return (
    <div className='section'>
        {children}
    </div>
  )
}

export default Section