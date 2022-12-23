import React from 'react'
import Section1 from './Section1.jsx/Section1'
import Section2 from './Section2/Section2'
import './Wrapper.css'

const Wrapper = () => {
  return (
    <div className='wrapper'>
        <Section1/>
        <Section2/>
    </div>
  )
}

export default Wrapper