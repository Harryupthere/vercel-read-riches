import React, { useState } from "react";
import Info from "../../components/img/info.svg"
import { Col, Row } from "react-bootstrap";
import ValuationImg from "../../components/img/valuation.png"
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
import {
    PieChart, Pie, Sector, Cell, Label, LabelList,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ComposedChart,
    Line,
    ResponsiveContainer,

} from "recharts";
import { Link } from "react-scroll";
import { Chart } from "react-google-charts";

const Valuation = ({ data }) => {
    const data12 = [
        {
            name: 'Page A',
            pv: 800,
        },
        {
            name: 'Page B',
            pv: 967,
        },
        {
            name: 'Page C',
            pv: 1098,
        },
        {
            name: 'Page D',
            pv: 1200,
        },
        {
            name: 'Page E',
            pv: 1108,
        },
        {
            name: 'Page F',
            pv: 680,
        },
    ];
    const [show, setShow] = useState(false);
    const [tableName, setTableName] = useState('')
    const [tableColumns, setTableColumns] = useState([])
    const [tableData, setTableData] = useState([])
    const [tableData1, setTableData1] = useState([])

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

        // Merge tableData1 into tableData
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
        title: "Population of Largest U.S. Cities",
        chartArea: { width: "50%" },
        isStacked: true,
        hAxis: {
          title: "Total Population",
          minValue: 0,
        },
        vAxis: {
          title: "City",
        },
      };
    return (
        <>
            <div >
                <Row className="mb-5">
                    <Col md={6}>
                        <div className="data-heading">
                            <h2>Valuation<img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-contentab1" /><ReactTooltip
                                id="quality-contentab1"
                                place="bottom"
                                content={asas1}
                                //  className="custom-tooltip"
                                style={{ fontSize: "12px" }}
                            /></h2>
                            <div className="rule" style={{ width: "160px" }}></div>
                        </div>
                        <div className="insight-list mt-3">
                            <ul>
                                <ul>
                                    {data[0].valuation.details.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                {/* <li className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                    <li className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li> */}
                            </ul>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            {/* <img src={ValuationImg} alt="valuation-data" /> */}
                            {/* <ResponsiveContainer width="100%" height={400}>
                                <ComposedChart
                                    layout="vertical"
                                    data={data[0].valusationGraph.Valuation}
                                    margin={{
                                        top: 20,
                                        right: 20,
                                        bottom: 20,
                                        left: 20,
                                    }}
                                >
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <XAxis type="number" />
                                    <YAxis dataKey="name" type="category" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" barSize={20} fill="#15464a" />
                                </ComposedChart>
                            </ResponsiveContainer> */}
                            <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data[0].valusationGraph.Valuation}
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
                        //  className="custom-tooltip"
                        style={{ fontSize: "12px" }}
                    /> </h3>
                    <h3 className="appendix" onClick={e => { handleShow(e) }}>Appendix<i class="arrow"></i></h3>
                </div>
                <div className="er-chart">
                    <div className="d-flex align-items-center">
                        <div className="value-box box1 ">
                            {/* <img src={Info} style={{ float: "right" }} /> */}
                            {/* <span>Revenue <br /> CAGR</span>
                            <h3>8.54%</h3> */}
                            <span>{data[0].valusationGraph
                                .DCFValuation[0].name}
                                {/* <br /> CAGR */}
                            </span>
                            <h3>{(data[0].valusationGraph
                                .DCFValuation[0].value).toFixed(2)}%</h3>
                        </div>
                        <div className="value-box box2 ms-5">
                            {/* <img src={Info} style={{ float: "right" }} /> */}
                            <span>{data[0].valusationGraph
                                .DCFValuation[1].name}
                                {/* <br /> CAGR */}
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
                    <div className="d-flex align-items-center justify-content-center align-items-center my-5">

                        <div className="value-box box5">
                            <div className="back-box"></div>
                            <img src={CandleIcon} className="d-block" />
                            {/* <img src={Info} style={{ float: "right" }} /> */}
                            {/* <span>DCA Valuestion</span> */}
                            <h3>DCA Valuestion</h3>
                            <h3>{data[0].valusationGraph.Valuation[1].value}</h3>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="value-box box3">
                            {/* <img src={Info} style={{ float: "right" }} /> */}
                            <span>{data[0].valusationGraph
                                .DCFValuation[2].name}
                                {/* <br /> CAGR */}
                            </span>
                            <h3>{(data[0].valusationGraph
                                .DCFValuation[2].value).toFixed(2)}%</h3>
                        </div>
                        <div className="value-box box4  ms-5">
                            {/* <img src={Info} style={{ float: "right" }} /> */}
                            <span>{data[0].valusationGraph
                                .DCFValuation[3].name}
                                {/* <br /> CAGR */}
                            </span>
                            <h3>{(data[0].valusationGraph
                                .DCFValuation[3].value).toFixed(2)}%</h3>
                        </div>
                    </div>

                </div>
                <div className="py-5">
                    <div className="d-md-flex justify-content-between my-3">
                        <h3 className="heading2">Relative valuation <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-contentab3" /><ReactTooltip
                            id="quality-contentab3"
                            place="bottom"
                            content={asas3}
                            //  className="custom-tooltip"
                            style={{ fontSize: "12px" }}
                        /></h3>
                        {/* <h3 className="appendix">Appendix<i class="arrow"></i></h3> */}
                    </div>
                    <div className="graph-overflow">
                        <div className="relative-boxes py-5">
                            <div className="r-box pt-5 two-trio" style={{ borderTop: "0", backgroundColor: "transparent", position: "relative" }}>
                                <img src={Box1Bg} className="box1-bg" />
                                {/* <div className="rate">₹5</div> */}
                                <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[0].value).toFixed(1)}</div>
                                <h3>Current EPS</h3>
                                {/* <p>Capturing the current EPS from Income statement</p> */}
                            </div>
                            <img src={BoxSide} className="side-img" />
                            <div className="r-box">
                                <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[1].value).toFixed(1)}</div>
                                <h3>Future ESP</h3>
                                {/* <p>compounding Current EPS with Estimated Future Growth Rate to project Future EPS after 10 years</p> */}
                            </div>
                            <img src={BoxSide} className="side-img" />
                            <div className="r-box">
                                <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[2].value).toFixed(1)}</div>
                                <h3>Future PE</h3>
                                {/* <p>predicting future PE using historical median and industry median</p> */}
                            </div>
                            <img src={BoxSide} className="side-img" />
                            <div className="r-box">
                                <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[3].value).toFixed(1)}</div>
                                <h3>Future Sharing Price</h3>
                                {/* <p>multiplying the projected Future EPS with Predicted Future PE to determine Future Share Price after 10 years
                                </p> */}
                            </div>
                            <img src={BoxSide} className="side-img" />
                            <div className="r-box with-arrow">
                                <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[4].value).toFixed(1)}</div>
                                <h3>Stricker Price</h3>
                                {/* <p>discounting the Future Share Price with required rate of return to compute the Sticker Price                           </p> */}
                                <div class="triangle-down">
                                    <img src={ArrowBg} className="arro-bg" />
                                    <div className="mt-lg-5 mt-0">
                                        <div className="rate">₹{(data[0]?.valusationGraph.RelativeValuation[5].value).toFixed(1)}</div>
                                        <h3>Buy Price
                                        </h3>
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
                dialogClassName="modal-90w" // Custom class for centering
            >
                <Modal.Header closeButton>
                    <div className="data-heading">
                        <h2 style={{ fontSize: "32px" }}>Valuation</h2>
                    </div>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '90vh', overflowY: 'auto' }}> {/* Limit height and add scroll */}
                    <h3 style={{ color: "#666666", fontSize: "20px" }}>{tableName}</h3>
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
                                    <td>{item.sub}</td>
                                    <td>{item.val1}</td>
                                    <td>{item.val2}</td>
                                    <td>{item.val3}</td>
                                    <td>{item.val4}</td>
                                    <td>{item.val5}</td>
                                    <td>{item.val6}</td>
                                    <td>{item.val7}</td>
                                    <td>{item.val8}</td>
                                    <td>{item.val9}</td>
                                    <td>{item.val10}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Valuation;
