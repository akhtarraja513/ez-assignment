import { faArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Bottom.css'
import EntityDetail from './EntityDetail.jsx/EntityDetail'

const Bottom = () => {
    const [showDown, setShowDown] = useState(true);
  return (
    <div className="bottom-comp">
        <div className="bottom1">
            <div className="entities">4 Entity</div>
            <button>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
        <div className="bottom2">
            <div className="one">Billing Location</div>
            <div className="two">Entity Name</div>
            <div className="three">Entity Code</div>
            <div className="four">MSLA Valid through</div>
            <div className="five">File Sharing</div>
        </div>
        <div className="bottom3">
            <div className="location">Riyadh, Kingdom of Saudi Arabia</div>
            <div className="entity-name">Locus Film Private Limited</div>
            <div className="entity-code">LUCFOI</div>
            <div className="validity">30 June 2022 - 5 June 2030</div>
            <div className="file-share">External</div>
            <div className="right3-icon">
                <FontAwesomeIcon icon={faArrowDown} onClick={() => setShowDown(!showDown)} />
            </div>
        </div>
        { showDown && <div className="bottom4">
            <EntityDetail/>
        </div> }
    </div>
  )
}

export default Bottom