import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './UpperMiddleUpper.css'

const UpperMiddleUpper = () => {
  return (
    <div className="up-mid-upper">
        <div className="upm-top-left">
            <div className="pdf">
                <FontAwesomeIcon icon={faFilePdf} className='pdf-icon' />
            </div>
            <div className="comp-name">Locus Films Private Limited</div>
        </div>
        <div className="upm-top-right">
            <button>Edit</button>
        </div>
    </div>
  )
}

export default UpperMiddleUpper