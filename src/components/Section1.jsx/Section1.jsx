import React, { useState } from 'react'
import './Section1.css'
import Left from './left/Left'
import Right from './right/Right'

const Section1 = () => {
  return (
    <div className='section1'>
        <div className="leftSection">
            <Left/>
        </div>
        <div className="rightSection">
            <Right/>
        </div>
    </div>
  )
}

export default Section1