import { faDownload, faEdit, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './EntityDetail.css'

const EntityDetail = () => {
    const tableData = [
        {
            service: "Arabic Language Traslation : EZ Assured",
            unit: "Words",
            price: "0.1 AED",
            offerPrice: "0.09 AED",
            discount: "(10%) ( 19% )"
        },
        {
            service: "Arabic Language Traslation : EZ Assured",
            unit: "Words",
            price: "0.1 AED",
            offerPrice: "0.09 AED",
            discount: "(10%) ( 19% )"
        },
        {
            service: "Arabic Language Traslation : EZ Assured",
            unit: "Words",
            price: "0.1 AED",
            offerPrice: "0.09 AED",
            discount: "(10%) ( 19% )"
        },
        {
            service: "Arabic Language Traslation : EZ Assured",
            unit: "Words",
            price: "0.1 AED",
            offerPrice: "0.09 AED",
            discount: "(10%) ( 19% )"
        },
        {
            service: "Arabic Language Traslation : EZ Assured",
            unit: "Words",
            price: "0.1 AED",
            offerPrice: "0.09 AED",
            discount: "(10%) ( 19% )"
        },
        {
            service: "Arabic Language Traslation : EZ Assured",
            unit: "Words",
            price: "0.1 AED",
            offerPrice: "0.09 AED",
            discount: "(10%) ( 19% )"
        }
    ]
    return (
        <div className="entity-details">
            <div className="detail-top">
                <div className="entry-left">
                    <div className="entry-left-left">
                        <div className="adderess">
                            <div className="addere">Address</div>
                            <div className="line-1">Line 1</div>
                            <div className="line-2">Line 2</div>
                            <div className="city-country">City, Country</div>
                            <div className="zip-code">ZIP Code</div>
                        </div>
                        <div className="code-number">
                            <div className="charge-code">Charge Code / PO Number</div>
                            <div className="require">Required</div>
                        </div>
                        <div className="msla">
                            <div className="msla-name">MSLA</div>
                            <div className="msla-detail">
                                <div className="name">20200916 EZ LucasFilms MOU_signed by George.pdf</div>
                                <div className="eye">
                                    <FontAwesomeIcon icon={faEye} />
                                </div>
                                <div className="download">
                                    <FontAwesomeIcon icon={faDownload} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="entry-left-middile">
                        <div className="mid-top-deta">
                            <div className="registration-name">Company Registration Number</div>
                            <div className="registration-num">UICE87F2T749WEY</div>
                        </div>
                        <div className="mid-mid-deta">
                            <div className="registration-name">Company Registration Validity</div>
                            <div className="rgistration-date">5 June 2025</div>
                        </div>
                        <div className="mid-bot-deta">
                            <div className="registration-name">Duratuon of File Storage</div>
                            <div className="duration">90 Days</div>
                        </div>
                    </div>
                    <div className="entry-left-right">
                        <div className="div1">
                            <div className="registration-name">Tax Registration Number</div>
                            <div className="registration-num">AHR37T983Q7TRG8FG</div>
                        </div>
                        <div className="div1">
                            <div className="registration-name">TRN Validity</div>
                            <div className="rgistration-date">5 June 2025</div>
                        </div>
                        <div className="div1">
                            <div className="registration-name">Currency</div>
                            <div className="currency-sign">US Doller ($)</div>
                        </div>
                        <div className="div1">
                            <div className="registration-name">VAT + WHT</div>
                            <div className="tax">5% + 5%</div>
                        </div>
                    </div>
                </div>
                <div className="entry-right">
                    <FontAwesomeIcon icon={faEdit} />
                </div>
            </div>
            <div className="detail-bottom">
                <div className="heading-name">Corporate Price as per MSLA</div>
                <div className="box">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Units</th>
                                <th>List Price</th>
                                <th>Offered Price</th>
                                <th>Discount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((ele, idx) => (
                                <tr key={idx}>
                                    <td>{ele.service}</td>
                                    <td>{ele.unit}</td>
                                    <td>{ele.price}</td>
                                    <td>{ele.offerPrice}</td>
                                    <td>{ele.discount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default EntityDetail