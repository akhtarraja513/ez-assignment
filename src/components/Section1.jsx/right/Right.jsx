import { faArrowDown, faArrowDownWideShort, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Right = () => {
    const [value, setValue] = useState("");
    const [showData, setShowData] = useState(true);
    const userData = [
        {
            name: "Company Name",
            entity: "7 Entities",
            code: "Code",
            user: "60 User"
        },
        {
            name: "Company Name",
            entity: "5 Entities",
            code: "Code",
            user: "55 User"
        },
        {
            name: "Company Name",
            entity: "6 Entities",
            code: "Code",
            user: "59 User"
        },
        {
            name: "Company Name",
            entity: "4 Entities",
            code: "Code",
            user: "48 User"
        },
        {
            name: "Company Name",
            entity: "3 Entities",
            code: "Code",
            user: "57 User"
        },
        {
            name: "Company Name",
            entity: "1 Entities",
            code: "Code",
            user: "51 User"
        },
        {
            name: "Company Name",
            entity: "7 Entities",
            code: "Code",
            user: "61 User"
        },
        {
            name: "Company Name",
            entity: "3 Entities",
            code: "Code",
            user: "53 User"
        },
        {
            name: "Company Name",
            entity: "6 Entities",
            code: "Code",
            user: "49 User"
        },
        {
            name: "Company Name",
            entity: "5 Entities",
            code: "Code",
            user: "52 User"
        },
        {
            name: "Company Name",
            entity: "2 Entities",
            code: "Code",
            user: "42 User"
        }
    ]
    return (
        <div className="right">
            <div className="right1">
                <h1>Clients <span><FontAwesomeIcon icon={faArrowDownWideShort} /> Creation Time</span></h1>
                <button>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <div className="right2">
                <input type="search" placeholder='Company, Entity, User, Domain, Service...' onChange={(e) => setValue(e.target.value)} />
                <FontAwesomeIcon icon={faSearch} className='search' />
            </div>
            <div className="right3">
                <div className="right3-tex">April 2021</div>
                <div className="right3-icon">
                    <FontAwesomeIcon icon={faArrowDown} onClick={() => setShowData(!showData)} />
                </div>
            </div>
            {showData && <div className="right4">
                {userData.filter((item) => {
                    const searchName = value.toLowerCase();
                    const fullName = item.name.toLowerCase();

                    return (
                        fullName.startsWith(searchName)
                    )
                }).map((ele, idx) => (
                    <div className="right-4-sections" key={idx}>
                        <div className="right-4-left">
                            <div className="content">{ele.name}</div>
                            <div className="quantity">{ele.entity}</div>
                        </div>
                        <div className="right-4-right">
                            <div className="code">{ele.code}</div>
                            <div className="user">{ele.user}</div>
                        </div>
                    </div>
                ))}
            </div> }
        </div>
    )
}

export default Right