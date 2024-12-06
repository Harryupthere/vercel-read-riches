// import React, { useState } from "react";
// import { Col, Row } from "react-bootstrap";
// import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis,Tooltip } from 'recharts';
// import SearchImg from "../../components/img/search.svg"
// import Modal from 'react-bootstrap/Modal';


// const OverView = ({comname,data}) => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const datax = [
//         { category: 'Meaning', rating: data[0].overviewChart?.['Meaning'] },
//         { category: 'Moat', rating: data[0].overviewChart?.['Moat'] },
//         { category: 'Management', rating: data[0].overviewChart?.['Management'] },
//         { category: 'Money-Making', rating: data[0].overviewChart?.['Money-Making'] },
//         { category: 'Margin of Safety', rating: data[0].overviewChart?.['Margin of Safety'] },
//     ];


//     const data1 = [
//         {
//             month: 'Jan',
//             A: 120,
//             B: 110,
//             total: 150,
//         },
//         {
//             month: 'Feb',
//             A: 98,
//             B: 130,
//             total: 150,
//         },
//         {
//             month: 'Mar',
//             A: 86,
//             B: 130,
//             total: 150,
//         },
//         {
//             month: 'Apr',
//             A: 99,
//             B: 60,
//             total: 150,
//         },
//         {
//             month: 'May',
//             A: 95,
//             B: 50,
//             total: 150,
//         },
//         {
//             month: 'Jun',
//             A: 90,
//             B: 55,
//             total: 150,
//         },
//         {
//             month: 'Jul',
//             A: 95,
//             B: 65,
//             total: 150,
//         }
//     ];

//     return (
//         <>
//             <div id="list-item-1">
//                 <div className="data-heading d-flex justify-content-between mb-4">
//                     <h2 className=" cursor-pointer" onClick={handleShow}>{data[0].company_name}</h2>
//                     <div className="d-flex align-items-center">
//                     <h2>₹{data[0]?.['StockPrice']}</h2>
//                     <span className="pb-2 ms-1" style={{color:"#08AE05",fontSize:"13px"}}>
//                     <i className="fa fa-caret-up me-2"></i>
//                     (990)</span>
//                     </div>
//                 </div>
//                 <div>
//                     <h3 className="data-heading2">Overview</h3>
//                     <div className="rule" style={{ width: "100px" }}></div>
//                     <p className="content1 mt-3">{data[0].details}</p> // here
//                 </div>
//                 <Row>
//                     <Col lg={7}>
//                         <div className="graph-box d-flex">
//                             <table>
//                                 <tr>
//                                     <th>Stock PE</th>
//                                     <td>₹ {data[0]?.['StockPrice']}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Volume</th>
//                                     <td>{data[0]?.['Volume']} %</td>
//                                 </tr>
//                                 <tr>

//                                     <th>52 Week High</th>
//                                     <td>₹ {data[0]?.['52WeekH']}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>52 Week Low</th>
//                                     <td>₹ {data[0]?.['52WeekL']}</td>
//                                 </tr>
//                             </table>
//                             <table className="ms-5">
//                                 <tr>
//                                     <th>Sales Growth</th>
//                                     <td>{data[0]?.SalesGrowth} %</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Net Profit CAGR</th>
//                                     <td>{data[0]?.NetProfitGrowth} %</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Debt/Equity</th>
//                                     <td>{data[0]?.Debt}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>ROE</th>
//                                     <td>{data[0]?.ROE} %</td>
//                                 </tr>
//                             </table>
//                         </div>
//                     </Col>
//                     <Col md={5}>
//                         <div className="graph-box">
//                             <p className="text-center" style={{ fontSize: "12px" }}>Overview</p>
//                             <RadarChart cy={100} outerRadius={80} width={300} height={190} data={datax} style={{ display: "flex", margin: "auto" }}>
//                                 <PolarGrid />
//                                 <PolarAngleAxis dataKey="month" style={{ fontSize: "9px" }} />
//                                 <PolarRadiusAxis angle={72} domain={[0, data[0].maxChartValue]} />
//                                 <Radar name="Company" dataKey="rating" stroke="#FDB600" fill="#FDB600" fillOpacity={0.6} />
//                                 <Tooltip formatter={(value, name, props) => [` ${value}`, ` ${props.payload.category}`]} />

//                             </RadarChart>
//                         </div>
//                     </Col>
//                 </Row>
//                 <section>
//                     <div className="color-section">
//                         <div className="dark-bg">
//                             <div className="light-bg">
//                                 <div className="why">
//                                     <div className="d-flex align-items-center mb-3">  <img src={SearchImg} alt="search" /><h2>WHY?</h2></div>
//                                     <h3>{comname} lost its shares</h3>
//                                      <p>{data[0].why}</p> // here
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//             <Modal
//                 size="lg"
//                 show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//                 dialogClassName="right-corner-modal"
//                 aria-labelledby="example-modal-sizes-title-lg"
//             >
//                 <Modal.Header closeButton>
//                     <div className="data-heading ">
//                         <h2 style={{ fontSize: "32px" }}>Tata motors Ltd.</h2>
//                     </div>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <h3 style={{ color: "#666666", fontSize: "20px" }}>About the company </h3>
//                     <div className="insight-list mt-3">
//                     <ul>
//                         <li>Global reach: They have a large presence in India, but also operate internationally through subsidiaries and joint ventures. This includes the famous British brands Jaguar and Land Rover Wikipedia: en.wikipedia.org/wiki/Tata_Motors.</li>
//                         <li>Focus on innovation: Tata Motors is committed to using technology to develop safe, smart, and greener vehicles. They're a big player in the electric vehicle (EV) market, with a dedicated subsidiary for electric mobility https://en.wikipedia.org/wiki/Tata_Motors.</li>
//                         <li>
//                         Human-centric approach:  They design their vehicles with people in mind, focusing on safety, comfort, and driving experience https://en.wikipedia.org/wiki/Tata_Motors.
//                         </li>
//                     </ul>
//                     </div>
//                 </Modal.Body>

//             </Modal>
//         </>
//     );
// };

// export default OverView;

import Info from "../../components/img/info.svg"
import { Tooltip as ReactTooltip } from 'react-tooltip'

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import SearchImg from "../../components/img/search.svg";
import Modal from 'react-bootstrap/Modal';

const OverView = ({ loading,comname, data }) => {
    
    const [show, setShow] = useState(false);
    const [expandedDetails, setExpandedDetails] = useState(false); // For details section
    const [expandedWhy, setExpandedWhy] = useState(false); // For 'why' section

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if (loading) {
        return <div>Loading...</div>;
    }

    // Check if data has content
    if (!data || data.length === 0) {
        return <div>No data available.</div>;
    }
    const ddl = data[0].DailyPriceChange
    const datax = [
        { category: 'Meaning', rating: data[0].overviewChart?.['Meaning'] },
        { category: 'Moat', rating: data[0].overviewChart?.['Moat'] },
        { category: 'Management', rating: data[0].overviewChart?.['Management'] },
        { category: 'Money-Making', rating: data[0].overviewChart?.['Money-Making'] },
        { category: 'Margin of Safety', rating: data[0].overviewChart?.['Margin of Safety'] },
    ];

    // Helper function to truncate text
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };
    const tooltipData1 = "Live PE ratio of the stock.";
    const tooltipData2 = "Daily Volume of the stock.";
    const tooltipData3 = "10 year Sales growth measured in CAGR.";
    const tooltipData4 = "10 year Net Profit growth rate in CAGR.";
    const isPositive = ddl >= 0;
    const color = isPositive ? "#08AE05" : "#FF0000"; // Green for positive, red for negative
    const icon = isPositive ? "fa-caret-up" : "fa-caret-down"; // Up icon for positive, down for negative
    if (loading) {
        return <div>Loading...</div>;
      }
    return (
        <>
            <div >
                <div className="data-heading d-flex justify-content-between mb-4">
                    <h2 className="cursor-pointer" onClick={handleShow}>{data[0].company_name}</h2>
                    <div className="d-flex align-items-center">
                    <h2>₹{data[0]?.['StockPrice'] ? new Intl.NumberFormat('en-IN').format(data[0]['StockPrice']) : ''}</h2>
                    <span className="pb-2 ms-1" style={{ color: color, fontSize: "13px" }}>
                            <i className={`fa ${icon} me-2`}></i> ({ddl})
                        </span>
                    </div>
                </div>
                <div>
                    <h3 className="data-heading2">Overview</h3>
                    <div className="rule" style={{ width: "100px" }}></div>
                    <p className="content1 mt-3">
                        {expandedDetails ? data[0].details : truncateText(data[0].details, 48)}
                        {data[0].details.split(" ").length > 48 && (
                            <button onClick={() => setExpandedDetails(!expandedDetails)} className="btn btn-link p-0 readmore">
                                {expandedDetails ? "Show Less" : "Read more"}
                            </button>
                        )}
                    </p>
                  
                </div>
                <Row>
                    <Col lg={7}>
                        <div className="graph-box d-flex blue-border">
                            <div className="w-50">
                            <table>
                                <tr>
                                    <th>Stock PE <img src={Info} alt="info" className="ms-1 info-icon" data-tooltip-id="quality-content1" />
                                        <ReactTooltip
                                            id="quality-content1"
                                            place="bottom"
                                            content={tooltipData1}
                                            style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}                                        />  </th>
                                    <td>{data[0]?.['StockPE']? new Intl.NumberFormat('en-IN').format(data[0]?.['StockPE']):''}</td>
                                </tr>
                                <tr>
                                    <th>Volume <img src={Info} alt="info" className="ms-1 info-icon" data-tooltip-id="quality-content2" /><ReactTooltip
                                        id="quality-content2"
                                        place="bottom"
                                        content={tooltipData2}
                                        style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}                                    /></th>
                                    <td>{data[0]?.['Volume']}%</td>
                                </tr>
                                <tr>
                                    <th>52 Week High</th>
                                    <td>₹ {data[0]?.['52WeekH']? new Intl.NumberFormat('en-IN').format(data[0]?.['52WeekH']):''}</td>
                                </tr>
                                <tr>
                                    <th>52 Week Low</th>
                                    <td>₹ {data[0]?.['52WeekL']? new Intl.NumberFormat('en-IN').format(data[0]?.['52WeekL']):''}</td>
                                </tr>
                            </table>
                            </div>
                            <div className="w-50">
                            <table >
                                <tr>
                                    <th>Sales Growth <img src={Info} alt="info" className="ms-1 info-icon" data-tooltip-id="quality-content3" /><ReactTooltip
                                        id="quality-content3"
                                        place="bottom"
                                        content={tooltipData3}
                                        //  className="custom-tooltip"
                                        style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}                                    /></th>
                                    <td>{data[0]?.SalesGrowth}%</td>
                                </tr>
                                <tr>
                                    <th>Net Profit CAGR <img src={Info} alt="info" className="ms-1 info-icon" data-tooltip-id="quality-content3" /><ReactTooltip
                                        id="quality-content4"
                                        place="bottom"
                                        content={tooltipData4}
                                        //  className="custom-tooltip"
                                        style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}                                    /></th>
                                    <td>{data[0]?.NetProfitGrowth}%</td>
                                </tr>
                                <tr>
                                    <th>Debt/Equity</th>
                                    <td>{data[0]?.Debt}</td>
                                </tr>
                                <tr>
                                    <th>ROE</th>
                                    <td>{data[0]?.ROE}%</td>
                                </tr>
                            </table>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="graph-box" style={{border:"1.5px solid #E5E5EA"}}>
                            <p className="text-center" style={{ fontSize: "12px" }}>Overview</p>

                            <RadarChart cy={100} outerRadius={80} width={300} height={190} data={datax} style={{ display: "flex", margin: "auto" }}>

                                <PolarGrid />

                                <PolarAngleAxis dataKey="month" style={{ fontSize: "9px" }}
                                    tickFormatter={(value, index) => datax[index].category} />

                                <PolarRadiusAxis angle={72} domain={[0, data[0].maxChartValue]} />

                                <Radar name="Company" dataKey="rating" stroke="#3a9aa1" fill="#69ccd3" fillOpacity={0.6}
                                />

                                <Tooltip formatter={(value, name, props) => [` ${value}`, ` ${props.payload.category}`]} />

                            </RadarChart>
                        </div>
                    </Col>
                </Row>
                <section>
                    <div className="color-section">
                        <div className="dark-bg">
                            <div className="light-bg">
                                <div className="why">
                                    <div className="d-flex align-items-center mb-3">
                                        <img src={SearchImg} alt="search" /><h2>WHY?</h2>
                                    </div>
                                    <h3>{comname} lost its shares</h3>
                                    <p>
                                        {/* Conditionally render truncated or full content */}
                                        {expandedWhy ? data[0].why : truncateText(data[0].why, 48)}
                                        {data[0].why.split(" ").length > 48 && (
                                            <button onClick={() => setExpandedWhy(!expandedWhy)} className="btn btn-link p-0 readmore">
                                                {expandedWhy ? "Show Less" : "Read more"}
                                            </button>
                                        )}
                                    </p>
                                    {/* Show "Read more" button if the content is longer than 48 words */}
                                    {/* {data[0].why.split(" ").length > 48 && (
                                        <button onClick={() => setExpandedWhy(!expandedWhy)} className="btn btn-link p-0 readmore">
                                            {expandedWhy ? "Show Less" : "Read more"}
                                        </button>
                                    )} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="right-corner-modal"
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <div className="data-heading ">
                        <h2 style={{ fontSize: "32px" }}>Tata motors Ltd.</h2>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <h3 style={{ color: "#666666", fontSize: "20px" }}>About the company </h3>
                    <div className="insight-list mt-3">
                        <ul>
                            <li>Global reach: They have a large presence in India, but also operate internationally through subsidiaries and joint ventures. This includes the famous British brands Jaguar and Land Rover Wikipedia: en.wikipedia.org/wiki/Tata_Motors.</li>
                            <li>Focus on innovation: Tata Motors is committed to using technology to develop safe, smart, and greener vehicles. They're a big player in the electric vehicle (EV) market, with a dedicated subsidiary for electric mobility https://en.wikipedia.org/wiki/Tata_Motors.</li>
                            <li>Human-centric approach:  They design their vehicles with people in mind, focusing on safety, comfort, and driving experience https://en.wikipedia.org/wiki/Tata_Motors.</li>
                        </ul>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default OverView;
