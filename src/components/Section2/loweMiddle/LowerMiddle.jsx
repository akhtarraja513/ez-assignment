import React, { useState } from 'react'
import './LowerMiddle.css'

const LowerMiddle = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const showData = () => {
    setShow(!show);
  }

  const showData1 = () => {
    setShow1(!show1);
  }
  return (
    <div className="lower-middle-comp">
        <div id='low-mid' className="lm-left">ENTITIES</div>
        <div className="lm-mid" onMouseOver={showData}>{show ? "INVOICE CODE" : "DETAILS"}</div>
        <div className="lm-right" onMouseOver={showData1}>{show1 ? "USERS" : "DETAILS"}</div>
    </div>
  )
}

export default LowerMiddle