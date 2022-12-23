import React from 'react'
import Bottom from './bottom/Bottom'
import LowerMiddle from './loweMiddle/LowerMiddle'
import './Section2.css'
import UpperMiddleBottom from './UpperMiddleBottom/UpperMiddleBottom'
import UpperMiddleUpper from './upperMiddleUpper/UpperMiddleUpper'
import User from './User'

const Section2 = () => {
  return (
    <div className='section2'>
      <div className="top"><User/></div>
      <div className="upper-middle">
        <div className="up-upper">
          <UpperMiddleUpper/>
        </div>
        <div className="up-bottom">
          <UpperMiddleBottom/>
        </div>
      </div>
      <div className="lower-middle">
        <LowerMiddle/>
      </div>
      <div className="bottom">
        <Bottom/>
      </div>
    </div>
  )
}

export default Section2