import React, { useState } from "react";
import Info from "../../components/img/info.svg"
import { Col, Row } from "react-bootstrap";
import SearchImg from "../../components/img/search.svg"
import SignImg from "../../components/img/signature.png"
import Modal from 'react-bootstrap/Modal';
import config from "../../config";
import { Chart } from "react-google-charts";

import { Tooltip as ReactTooltip } from 'react-tooltip'

const Managment = ({ loading, comname, data, compId }) => {
    const [expandedWhy, setExpandedWhy] = useState(false); // For 'why' section
    const [expandedDetails, setExpandedDetails] = useState(false); // For 'details' list
    const initialPointsToShow = 4; // Number of points to show initially

    const [show, setShow] = useState(false);
    if (loading) {
        return <div>Loading...</div>;
    }

    // Check if data has content
    if (!data || data.length === 0) {
        return <div>No data available.</div>;
    }
    const handleClose = () => setShow(false);


    const tooltipData11111 = "It refers to how leadership and decision-making significantly impact a company's success, shaping its growth, efficiency, and overall performance.";
    const tooltipData22222 = "Management Discussion and Analysis (MD&A) is a report section where management explains financial results, trends, and future outlook.";

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };


    const options = {
        titleTextStyle: {
            fontSize: 16,
        },
        seriesType: "bars",
        series: {
            2: { type: "line", targetAxisIndex: 1 },
        },
        vAxes: {
            0: {
                title: "Compensation / Income (Crs)",
                minValue: 0,
                gridlines: { color: 'none' },
                titleTextStyle: {
                    fontSize: 18,
                },
                textStyle: {
                    fontSize: 14,
                },
            },
            1: {
                title: "Ceo Comp % of Net Income",
                minValue: 0,
                gridlines: { color: 'none' },
                titleTextStyle: {
                    fontSize: 18,
                },
                textStyle: {
                    fontSize: 14,
                },
            },
        },
        chartArea: { width: "60%" },
        hAxis: {
            title: "Year",
            gridlines: { color: 'none' },
            titleTextStyle: {
                fontSize: 18,
            },
            textStyle: {
                fontSize: 14,
            },
        },
        bar: { groupWidth: "40%" },
        colors: ["#2f878d", "#44b3bb", "#15464a"],
        pointSize: 5,
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };

    const optionsF = {
        colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
        pieHole: 0.4,
        chartArea: {
            left: "10%",
            top: "10%",
            width: "80%",
            height: "80%"
        },
        legend: {
            position: 'right',
            alignment: 'top',
            textStyle: { fontSize: 14 },
        },
    };

    return (
        <>
            <div >
                <div className="data-heading mt-5 d-flex justify-content-between align-items-center">
                    <div className=" ">
                        <h2>Management Matters <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content11111" /><ReactTooltip
                            id="quality-content11111"
                            place="bottom"
                            content={tooltipData11111}
                            style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} /></h2>
                        <div className="rule" style={{ width: "350px" }}></div>
                    </div>
                </div>
                <Row className="w-100 mt-4">
                    <Col md={6}>
                        <h5 className="graph-heading1">CEO Compensation and Net Income</h5>
                        <div className="graph-box">
                            <Chart
                                chartType="ComboChart"
                                width="100%"
                                height="400px"
                                data={data[0].managementMatter.graph1}
                                options={options}
                            />

                        </div>
                        <span style={{ fontSize: "12px" }} className="d-block text-end">{data[0].managementMatterSource.Source10}</span>

                    </Col>
                    <Col md={6}>
                        <h5 className="graph-heading1">Ownership Breakdown</h5>
                        <div className="graph-box">


                            <Chart
                                chartType="PieChart"
                                data={data[0].managementMatter.graph2}
                                options={optionsF}
                                width={"100%"}
                                height={"400px"}
                            />
                        </div>
                        <span style={{ fontSize: "12px" }} className="d-block text-end">{data[0].managementMatterSource.Source11}</span>

                    </Col>
                </Row>
                <section>
                    <div className="color-section">
                        <div className="dark-bg">
                            <div className="light-bg">
                                <div className="why">
                                    <div className="d-flex align-items-center mb-3">  <img src={SearchImg} alt="search" /><h2>WHY?</h2></div>
                                    <h3>{comname} lost its shares</h3>

                                    <p>
                                        {expandedWhy ? data[0].managementMatters.why : truncateText(data[0].managementMatters.why, 48)}
                                        {data[0].managementMatters.why.split(" ").length > 48 && (
                                            <button onClick={() => setExpandedWhy(!expandedWhy)} className="btn btn-link p-0">
                                                {expandedWhy ? "Show Less" : "Read More"}
                                            </button>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <h3 className="heading2">Management Discussion and Analysis<img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content22222" />
                        <ReactTooltip
                            id="quality-content22222"
                            place="bottom"
                            content={tooltipData22222}
                            style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} /></h3>
                    <Row>
                        <Col md={6}>
                            <div className="insight-list mt-3">
                                <ul>
                                    {(expandedDetails ? data[0].managementMatters.details : data[0].managementMatters.details.slice(0, initialPointsToShow))
                                        .map((point, index) => (
                                            <li key={index} className="mb-3">{point}</li>
                                        ))}
                                </ul>
                                {data[0].managementMatters.details.length > initialPointsToShow && (
                                    <button
                                        onClick={() => setExpandedDetails(!expandedDetails)}
                                        className="btn btn-link p-0"
                                    >
                                        {expandedDetails ? "Show Less" : "Read More"}
                                    </button>
                                )}
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="p-4">
                                <img src={`${config.apiUrl}companyMainImage/${compId}`} style={{ height: "100%", width: "100%" }} alt="Company Main" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="right-corner-modal"

            >
                <Modal.Header closeButton>
                    <div className="data-heading ">
                        <h2 style={{ fontSize: "32px" }}>Management Matters</h2>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <h3 style={{ color: "#666666", fontSize: "20px" }}>CEO compensation </h3>
                    <table className='theme-table mt-3  w-100'>
                        <thead>
                            <tr>
                                {data[0].managementMatter.graph3.subMang.map((item) => (<th>
                                    {item}
                                </th>))}

                            </tr>
                        </thead>
                        <tbody>
                            {data[0].managementMatter.graph3.dataManagementAppendix.map((item) => (<tr>
                                <td>{item.date}</td>
                                <td>{item.val1}</td>
                                <td>{item.val2}</td>
                                <td>{item.val3}</td>
                            </tr>))}

                        </tbody>
                    </table>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default Managment;
