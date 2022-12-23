import React from 'react'
import './UpperMiddleBottom.css'

const UpperMiddleBottom = () => {
  return (
    <div className="upperMiddleBottom">
      <div className="up-mid-bottm-left">
        <div className="umbl-top">
          <div className="comp-code-name">Company Code</div>
          <div className="comp-code">LUCF</div>
        </div>
        <div className="umbl-bottom">
          <div className="comp-logo-name">Company Logo</div>
          <div className="comp-logo">
            {/* <img src="#" alt="Unavailable" /> */}
            Unavailable
          </div>
        </div>
      </div>
      <div className="up-mid-bottm-right">
        <div className="domain">Domain</div>
        <div className="emailid">@lucasfilms.com</div>
        <div className="emailid">@lucasstarwars.com</div>
        <div className="emailid">@starwars.com</div>
        <div className="more">+5 Others</div>
      </div>
    </div>
  )
}

export default UpperMiddleBottom