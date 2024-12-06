import React, { useState } from "react";
import Info from "../../components/img/info.svg"
import { Col, Row } from "react-bootstrap";
import CandleIcon from "../../components/img/icon/candle.svg"
import Line1 from "../../components/img/line1.svg"
import Line2 from "../../components/img/line2.svg"
import Line3 from "../../components/img/line3.svg"
import Line4 from "../../components/img/line4.svg"
import Modal from 'react-bootstrap/Modal';
import BoxSide from "../../components/img/boxSide.png"
import Box1Bg from "../../components/img/box1-bg.svg"
import ArrowBg from "../../components/img/arrowBg.png"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { Chart } from "react-google-charts";

const Valuation = ({ loading, data }) => {

    const [show, setShow] = useState(false);
    const [tableName, setTableName] = useState('')
    const [tableColumns, setTableColumns] = useState([])
    const [tableData, setTableData] = useState([])
    const [showFullText, setShowFullText] = useState(false); // State for "Read More"

    if (loading) {
        return <div>Loading...</div>;
    }

    // Check if data has content
    if (!data || data.length === 0) {
        return <div>No data available.</div>;
    }
    const toggleHeadwinds = () => setShowFullText(!showFullText);

    const handleClose = () => {
        setTableColumns([])
        setTableData([])
        setTableName('')
        setShow(false)
    };

    const handleShow = (e) => {
        e.preventDefault()
        const mainColumns = data[0].valusationGraph.DCF_VALUATION_APPENDIX.column;
        const mainData = data[0].valusationGraph.DCF_VALUATION_APPENDIX.data1;
        const additionalData = data[0].valusationGraph.DCF_VALUATION_APPENDIX.data2;
        const mergedData = [...mainData, ...additionalData.map((item) => ({
            ...item,
            val2: '', val3: '', val4: '', val5: '', val6: '', val7: '', val8: '', val9: '', val10: ''
        }))];

        setTableColumns(mainColumns);
        setTableData(mergedData);
        setTableName('DCF VALUATION');
        setShow(true);
    };

    let asas1 = "Equity valuation is the process of determining the value of a company's stock using methods like discounted cash flow (DCF) or comparative analysis."
    let asas2 = "It estimates a company's value by discounting its future cash flows to their present value."
    let asas3 = "It estimates a company's value by comparing it to similar companies using metrics like P/E or P/B ratios."
    const options = {
        chartArea: { width: "50%" },
        isStacked: false,
        hAxis: {
            title: data[0].valusationGraph.ValuationX[0][1],
            minValue: 0,
            gridlines: {
                color: 'none'
            }
        },
        vAxis: {
            title: data[0].valusationGraph.ValuationX[0][0],
            gridlines: {
                color: 'none'
            }
        },
        colors: ["#2f878d", "#f28e2c", "#4e79a7", "#e15759", "#76b7b2", "#59a14f"],
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
              color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
          },
    };

    const CurrentEPS="Capturing the current EPS from Income statement"
    const FutureESP='compounding Current EPS with Estimated Future Growth Rate to project Future EPS after 10 years'
    const FuturePE='predicting future PE using historical median and industry median'
    const FutureSharingPrice='multiplying the projected Future EPS with Predicted Future PE to determine Future Share Price after 10 years'
    const StrickerPrice='discounting the Future Share Price with required rate of return to compute the Sticker Price'

    return (
        <>
            <div >
                <Row className="mb-5">
                    <Col md={6}>
                        <div className="data-heading">
                            <h2>Valuation<img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-contentab1" />
                            <ReactTooltip
                                id="quality-contentab1"
                                place="bottom"
                                content={asas1}
                                style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}
                            />
                            </h2>
                            <div className="rule" style={{ width: "160px" }}></div>
                        </div>
                        <div className="insight-list mt-3">
                            <ul>
                                {data[0].valuation.details.slice(0, showFullText ? data[0].valuation.details.length : 4).map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                            {data[0].valuation.details.length > 4 && (
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleHeadwinds();
                                    }}
                                    style={{ color: "#007bff", cursor: "pointer" }}
                                >
                                    {showFullText ? "Show Less" : "Read More"}
                                </a>
                            )}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>

                            <Chart
                                chartType="BarChart"
                                width="100%"
                                height="400px"
                                data={data[0].valusationGraph.ValuationX}
                                options={options}
                            />
                        </div>
                    </Col>
                </Row>
                <div className="d-md-flex justify-content-between">
                    <h3 className="heading2">DCF Valuation<img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-contentab2" /><ReactTooltip
                        id="quality-contentab2"
                        place="bottom"
                        content={asas2}
                        style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}
                        /> </h3>
                    <h3 className="appendix" onClick={e => { handleShow(e) }}>Appendix<i class="arrow"></i></h3>
                </div>
                <div className="er-chart">
                    <div className="d-flex align-items-center">
                        <div className="value-box box1 ">
                            <span>{data[0].valusationGraph
                                .DCFValuation[0].name}
                            </span>
                            <h3>{(data[0].valusationGraph
                                .DCFValuation[0].value).toFixed(2)}%</h3>
                        </div>
                        <div className="value-box box2 ms-5">
                            <span>{data[0].valusationGraph
                                .DCFValuation[1].name}
                            </span>
                            <h3>{(data[0].valusationGraph
                                .DCFValuation[1].value).toFixed(2)}%</h3>
                            <div className="graph-lines">
                                <img src={Line1} className="d-block g-img1" />
                                <img src={Line2} className="d-block g-img2" />
                                <img src={Line3} className="d-block g-img3" />
                                <img src={Line4} className="d-block g-img4" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center align-items-center my-4">

                        <div className="value-box box5">
                            <div className="back-box"></div>
                            <img src={CandleIcon} className="d-block" />
                            <span>DCF Valuation</span>
                            <h3>{data[0].valusationGraph.Valuation[1].value}</h3>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="value-box box3">
                            <span>{data[0].valusationGraph
                                .DCFValuation[2].name}
                            </span>
                            <h3>{(data[0].valusationGraph
                                .DCFValuation[2].value).toFixed(2)}%</h3>
                        </div>
                        <div className="value-box box4  ms-5">
                            <span>{data[0].valusationGraph
                                .DCFValuation[3].name}
                            </span>
                            <h3>{(data[0].valusationGraph
                                .DCFValuation[3].value).toFixed(2)}%</h3>
                        </div>
                    </div>

                </div>
                <div className="py-5">
                    <div className="d-md-flex justify-content-between my-3">
                        <h3 className="heading2">Relative valuation <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-contentab3" />
                            <ReactTooltip
                                id="quality-contentab3"
                                place="bottom"
                                content={asas3}
                                style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}

                            />
                            </h3>
                    </div>
                    <div className="graph-overflow">
                        <div className="relative-boxes py-5">
                            <div className="r-box pt-3 two-trio" style={{ borderTop: "0", backgroundColor: "transparent", position: "relative" }}>
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div>
                                        <img src={Box1Bg} className="box1-bg" />
                                        <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[0].value).toFixed(1)}</div>
                                        <h3>Current EPS</h3>
                                        <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-contentab4" />
                                        <ReactTooltip
                                id="quality-contentab4"
                                place="bottom"
                                content={CurrentEPS}
                                style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}

                            />
                                    </div>
                                </div>
                            </div>
                            <img src={BoxSide} className="side-img" />
                            <div className="r-box">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div>
                                        <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[1].value).toFixed(1)}</div>
                                        <h3>Future ESP</h3>
                                        <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-contentab5" />
                                        <ReactTooltip
                                id="quality-contentab5"
                                place="bottom"
                                content={FutureESP}
                                style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}

                            />
                                    </div>
                                </div>
                            </div>
                            <img src={BoxSide} className="side-img" />
                            <div className="r-box">
                            <div className="d-flex align-items-center justify-content-center h-100">
                            <div>
                                <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[2].value).toFixed(1)}</div>
                                <h3>Future PE</h3>
                                <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-contentab6" />
                                <ReactTooltip
                                id="quality-contentab6"
                                place="bottom"
                                content={FuturePE}
                                style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}

                            />
                                </div>
                                </div>
                            </div>
                            <img src={BoxSide} className="side-img" />
                            <div className="r-box">
                            <div className="d-flex align-items-center justify-content-center h-100">
                            <div>
                                <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[3].value).toFixed(1)}</div>
                                <h3>Future Sharing Price</h3>
                                <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-contentab7" />
                                <ReactTooltip
                                id="quality-contentab7"
                                place="bottom"
                                content={FutureSharingPrice}
                                style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}

                            />
                                </div>
                                </div>
                            </div>
                            <img src={BoxSide} className="side-img" />
                            <div className="r-box with-arrow">
                           <div className="d-flex align-items-center justify-content-center h-75 mt-md-0 mt-4">
                            <div className="mt-md-0 mt-5 pt-md-0 pt-5">
                                <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[4].value).toFixed(1)}</div>
                                <h3>Stricker Price</h3>
                                <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-contentab8" />
                                <ReactTooltip
                                id="quality-contentab8"
                                place="bottom"
                                content={StrickerPrice}
                                style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}

                            />
                                <div class="triangle-down">
                                    <img src={ArrowBg} className="arro-bg" />
                                    <div className="mt-5 arrow-position">
                                        <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[5].value).toFixed(1)}</div>
                                        <h3>Buy Price</h3>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex ">
                        <div className="estimate">
                            <p>Future Share Price</p>
                            <h3>{(data[0]?.valusationGraph.RelativeValuation[6].value).toFixed(1)}%</h3>
                        </div>
                        <div className="estimate">
                            <p>Sticker Price
                            </p>
                            <h3>{(data[0]?.valusationGraph.RelativeValuation[7].value).toFixed(1)}%</h3>
                        </div>
                        <div className="estimate">
                            <p>Buy Price
                            </p>
                            <h3>{(data[0]?.valusationGraph.RelativeValuation[8].value).toFixed(1)}%</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton>
                    <div className="data-heading">
                        <h2 style={{ fontSize: "32px" }}>Valuation</h2>
                    </div>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '90vh', overflowY: 'auto' }}>
                    <h3 style={{ color: "#666666", fontSize: "20px" }}>{tableName}</h3>
                    <div className="postion-relative" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                        <table className='theme-table mt-3 w-100'>
                            <thead>
                                <tr>
                                    {tableColumns.map((item) => (
                                        <th key={item}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item, index) => (
                                    <tr key={index}>
                                        <td><b>{item.sub}</b></td>
                                        <td>{new Intl.NumberFormat('en-IN').format(item.val1)}</td>
                                        <td>{new Intl.NumberFormat('en-IN').format(item.val2)}</td>
                                        <td>{new Intl.NumberFormat('en-IN').format(item.val3)}</td>
                                        <td>{new Intl.NumberFormat('en-IN').format(item.val4)}</td>
                                        <td>{new Intl.NumberFormat('en-IN').format(item.val5)}</td>
                                        <td>{new Intl.NumberFormat('en-IN').format(item.val6)}</td>
                                        <td>{new Intl.NumberFormat('en-IN').format(item.val7)}</td>
                                        <td>{new Intl.NumberFormat('en-IN').format(item.val8)}</td>
                                        <td>{new Intl.NumberFormat('en-IN').format(item.val9)}</td>
                                        <td>{new Intl.NumberFormat('en-IN').format(item.val10)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Valuation;
