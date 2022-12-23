import { faArrowDown, faArrowDownWideShort, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Right = () => {
    const [value, setValue] = useState("");
    const [showData, setShowData] = useState(true);
    let userData = [
        {
            id: 1,
            name: "Company Name",
            entity: "7 Entities",
            code: "Code",
            user: "60 User"
        },
        {
            id: 2,
            name: "Company Name",
            entity: "5 Entities",
            code: "Code",
            user: "55 User"
        },
        {
            id: 3,
            name: "Company Name",
            entity: "6 Entities",
            code: "Code",
            user: "59 User"
        },
        {
            id: 4,
            name: "Company Name",
            entity: "4 Entities",
            code: "Code",
            user: "48 User"
        },
        {
            id: 5,
            name: "Company Name",
            entity: "3 Entities",
            code: "Code",
            user: "57 User"
        },
        {
            id: 6,
            name: "Company Name",
            entity: "1 Entities",
            code: "Code",
            user: "51 User"
        },
        {
            id: 7,
            name: "Company Name",
            entity: "7 Entities",
            code: "Code",
            user: "61 User"
        },
        {
            id: 8,
            name: "Company Name",
            entity: "3 Entities",
            code: "Code",
            user: "53 User"
        },
        {
            id: 9,
            name: "Company Name",
            entity: "6 Entities",
            code: "Code",
            user: "49 User"
        },
        {
            id: 10,
            name: "Company Name",
            entity: "5 Entities",
            code: "Code",
            user: "52 User"
        },
        {
            id: 11,
            name: "Company Name",
            entity: "2 Entities",
            code: "Code",
            user: "42 User"
        }
    ]
    const [data, setData] = useState(userData);
    const handleSection = (idx) => {
        // console.log(idx);
        let findEle = userData.find((ele) => ele.id === idx)
        // console.log(findEle);
        findEle = {...findEle, name: "Mckinsey & Company", code: "MCKY"}
        // console.log(findEle);
        userData[findEle.id-1] = findEle
        // console.log(userData);
        setData(userData);
    }
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
                {data.filter((item) => {
                    const searchName = value.toLowerCase();
                    const fullName = item.name.toLowerCase();

                    return (
                        fullName.startsWith(searchName)
                    )
                }).map((ele) => (
                    <div id={`${ele.id}`} className="right-4-sections" key={ele.id} onClick={() => handleSection(ele.id)} >
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