import React, { useState, useEffect } from "react";
import { Col, Row, Form } from "react-bootstrap";
import Info from "../../components/img/info.svg"
import Modal from 'react-bootstrap/Modal';
import SearchImg from "../../components/img/search.svg";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { Chart } from "react-google-charts";


const Financial = ({ loading, comname, data }) => {

    const [show, setShow] = useState(false);
    const [expandedWhy, setExpandedWhy] = useState(false); // For 'why' section

    if (loading) {
        return <div>Loading...</div>;
    }

    // Check if data has content
    if (!data || data.length === 0) {
        return <div>No data available.</div>;
    }
    let tablssss1 = { col: data[0].IncomeStatementOrg.column, data: data[0].IncomeStatementOrg.data, title: "Income Statement" }
    let tablssss2 = { col: data[0].BalanceSheetOrg.column, data: data[0].BalanceSheetOrg.data, title: "Balance Sheet" }
    let tablssss3 = { col: data[0].CashFlowOrg.column, data: data[0].CashFlowOrg.data, title: "Cash Flow" }
    let tablssss4 = { col: data[0].RatioAnalysisOrg.column, data: data[0].RatioAnalysisOrg.data, title: "Ratio Analysis", }

    const handleClose = () => {

        setShow(false)
    };

    const handleShow = (e) => {
        e.preventDefault()
        setShow(true)
    };


    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };
    const tooltipData111111 = "It is a detailed analysis of a company's financial health, revealing insights into its performance, strengths, and weaknesses. It provides a clear view of financial metrics, trends, and potential risks.";
    const tooltipData222222 = "It breaks down ROE into five factors: Net Profit Margin, Asset Turnover, Financial Leverage (debt use), Operating Efficiency, and Tax impact. This comprehensive approach provides detailed insights into the key drivers of ROE.";



    const optionsF1 = {
        titleTextStyle: {
            fontSize: 16,
        },
        hAxis: {
            title: "Years",
            slantedText: true,
            slantedTextAngle: 45,
            gridlines: { color: 'none' }
        },
        vAxis: {
            title: `${data[0].financialXrays.graph1[0][1]} (Cr)`,
            minValue: 0,
            gridlines: { color: 'none' }
        },
        pointSize: 5,
        colors: ["#2f878d"],
        legend: "none",
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };


    const optionsF2 = {
        titleTextStyle: { fontSize: 16 },
        seriesType: "bars",
        series: { 1: { type: "line", targetAxisIndex: 1 } },
        vAxes: {
            0: { title: data[0].financialXrays.graph2[0][1], minValue: 0, gridlines: { color: 'none' } }, // Left Y-axis
            1: { title: data[0].financialXrays.graph2[0][2], minValue: 0, gridlines: { color: 'none' } }, // Right Y-axis
        },
        chartArea: { width: "60%" },
        hAxis: {
            title: "Years",
            slantedText: true,
            slantedTextAngle: 45,
            gridlines: { color: 'none' }
        },
        pointSize: 5,
        colors: ["#2f878d", "#15464a"],
        legend: { position: "bottom" },
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };

    const optionsF3 = {
        titleTextStyle: { fontSize: 16 },
        seriesType: "bars",
        series: { 1: { type: "line", targetAxisIndex: 1 } },
        vAxes: {
            0: { title: data[0].financialXrays.graph3[0][1], minValue: 0, gridlines: { color: 'none' } },
            1: { title: data[0].financialXrays.graph3[0][2], minValue: 0, gridlines: { color: 'none' } }
        },
        chartArea: { width: "60%" },
        hAxis: {
            title: "Years",
            slantedText: true,
            slantedTextAngle: 45,
            showTextEvery: 1,
            gridlines: { color: 'none' }
        },
        pointSize: 5,
        colors: ["#2f878d", "#15464a"],
        legend: { position: "bottom" },
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };

    const optionsF4 = {
        titleTextStyle: { fontSize: 16 },
        hAxis: {
            title: "Years",
            slantedText: true,
            slantedTextAngle: 45,
            showTextEvery: 1,
            gridlines: { color: 'none' }
        },
        vAxis: {
            title: "Percentage (%)",
            gridlines: { color: 'none' }
        },
        series: {
            0: { color: "#2f878d" },
            1: { color: "#15464a" }
        },
        pointSize: 5,
        legend: { position: "bottom" },
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };

    const optionsF5 = {
        titleTextStyle: { fontSize: 16 },
        hAxis: {
            title: "Years",
            slantedText: true,
            slantedTextAngle: 45,
            showTextEvery: 1,
            gridlines: { color: 'none' }
        },
        vAxis: {
            title: data[0].financialXrays.graph1[0][1],
            minValue: 0,
            gridlines: { color: 'none' }
        },
        pointSize: 5,
        colors: ["#2f878d"],
        legend: "none",
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };

    const optionsF61 = {
        height: 350, // Set your desired height

        titleTextStyle: { fontSize: 16 },
        hAxis: {
            title: "Years",
            slantedText: true,
            slantedTextAngle: 90,
            showTextEvery: 1,
            gridlines: { color: 'none' }
        },
        vAxis: {
            title: data[0].financialXrays.graph6[0][1],
            minValue: 0,
            gridlines: { color: 'none' }
        },
        pointSize: 5,
        colors: ["#2f878d"],
        legend: "none",
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };

    const optionsF62 = {
        height: 350, // Set your desired height
        titleTextStyle: {
            fontSize: 16,
        },
        hAxis: {
            title: "Years",
            slantedText: true,
            slantedTextAngle: 90,
            showTextEvery: 1,
            gridlines: { color: 'none' }
        },
        vAxis: {
            title: data[0].financialXrays.graph61[0][1],
            minValue: 0,

            gridlines: { color: 'none' }
        },
        pointSize: 5,
        colors: ["#2f878d"],
        legend: "none",
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };

    const optionsF63 = {
        height: 350, // Set your desired height

        titleTextStyle: {
            fontSize: 16,
        },
        hAxis: {
            title: "Years",
            slantedText: true,
            slantedTextAngle: 90,
            showTextEvery: 1,
            gridlines: { color: 'none' }
        },
        vAxis: {
            title: data[0].financialXrays.graph62[0][1],
            minValue: 0,
            gridlines: { color: 'none' }
        },
        pointSize: 5,
        colors: ["#2f878d"],
        legend: "none",
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };

    const optionsF64 = {
        height: 350, // Set your desired height

        titleTextStyle: {
            fontSize: 16,
        },
        hAxis: {
            title: "Years",
            slantedText: true,
            slantedTextAngle: 90,
            showTextEvery: 1,
            gridlines: { color: 'none' }
        },
        vAxis: {
            title: data[0].financialXrays.graph63[0][1],
            minValue: 0,
            gridlines: { color: 'none' }
        },
        pointSize: 5,
        colors: ["#2f878d"],
        legend: "none",
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };

    const optionsF65 = {
        height: 350, // Set your desired height

        titleTextStyle: {
            fontSize: 16,
        },
        hAxis: {
            title: "Years",
            slantedText: true,
            slantedTextAngle: 90,
            showTextEvery: 1,
            gridlines: { color: 'none' }
        },
        vAxis: {
            title: data[0].financialXrays.graph64[0][1],
            minValue: 0,
            gridlines: { color: 'none' }
        },
        pointSize: 5,
        colors: ["#2f878d"],
        legend: "none",
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };

    const optionsF66 = {
        titleTextStyle: {
            fontSize: 16,
        },
        hAxis: {
            title: "Years",
            gridlines: { color: 'none' }
        },
        vAxis: {
            title: data[0].financialXrays.graph65[0][1],
            minValue: 0,
            gridlines: { color: 'none' }
        },
        pointSize: 5,
        colors: ["#2f878d"],
        legend: "none",
        tooltip: {
            isHtml: true, // Enables HTML tooltips
            textStyle: {
                color: '#000000', // Tooltip text color
            },
            showColorCode: true, // Displays the color of the series in the tooltip
        },
    };


    return (
        <>
            <div >
                <div className="data-heading mb-4 mt-5">
                    <div className="d-flex justify-content-between">
                        <h2 className=" cursor-pointer" >Financial X-ray   <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content111111" /> <ReactTooltip
                            id="quality-content111111"
                            place="bottom"
                            content={tooltipData111111}
                            style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} /><div className="rule" style={{ width: "260px" }}></div></h2>


                        <h3 className="appendix cursor-pointer" onClick={e => { handleShow(e) }}>Appendix<i class="arrow"></i></h3>
                    </div>

                </div>

                <Row className="w-100">


                    <Col md={6}>

                        <div className="graph-box grey-bordered py-4">
                            <h3 className="chart-heading2">NET PROFIT GRAPH</h3>
                            <Chart
                                chartType="ComboChart"
                                width="100%"
                                height="300px"
                                data={data[0].financialXrays.graph3}
                                options={optionsF3}
                            />
                        </div>
                    </Col>


                    <Col md={6}>
                        <div className="graph-box grey-bordered py-4">
                            <h3 className="chart-heading2">OPERATING PROFIT GRAPH</h3>
                            <Chart
                                chartType="ComboChart"
                                width="100%"
                                height="300px"
                                data={data[0].financialXrays.graph2}
                                options={optionsF2}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="w-100 mt-3">
                    <Col md={4}>
                        <div className="graph-box grey-bordered py-4">
                            <h3 className="chart-heading2">REVENUE GRAPH</h3>
                            <Chart
                                chartType="LineChart"
                                width="100%"
                                height="300px"
                                data={data[0].financialXrays.graph1}
                                options={optionsF1}
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="graph-box grey-bordered py-4">
                            <h3 className="chart-heading2">ROCE vs ROE Graph</h3>
                            <Chart
                                chartType="LineChart"
                                width="100%"
                                height="300px"
                                data={data[0].financialXrays.graph4}
                                options={optionsF4}
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="graph-box grey-bordered py-4">
                            <h3 className="chart-heading2">CFO vs PAT Graph</h3>
                            <Chart
                                chartType="LineChart" // Use LineChart for the line graph with points
                                width="100%"
                                height="300px"
                                data={data[0].financialXrays.graph5}
                                options={optionsF5}
                            />
                        </div>
                    </Col>
                </Row>
                <span className="mt-4 me-4" style={{ fontSize: "12px", display: "block", textAlign: "right" }} >{data[0].financialXraysSource.Source12
                }</span>
                <section>
                    <div className="color-section">
                        <div className="dark-bg">
                            <div className="light-bg">
                                <div className="why">
                                    <div className="d-flex align-items-center mb-3">
                                        <img src={SearchImg} alt="search" />
                                        <h2>WHY?</h2>
                                    </div>
                                    <h3>{comname} lost its shares</h3>
                                    <p>
                                        {expandedWhy ? data[0].financialXray.why : truncateText(data[0].financialXray.why, 48)}
                                        {data[0].financialXray.why.split(" ").length > 48 && (
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
                <Row>
                    <Col md={12}>
                        <div className="mt-0">
                            <div className="d-flex justify-content-between">
                                <h2 className="heading2">Dupont Analysis<img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content222222" /><ReactTooltip
                                    id="quality-content222222"
                                    place="bottom"
                                    content={tooltipData222222}
                                    style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} /></h2>
                            </div>


                        </div>

                        <div className="chart-base d-flex justify-content-between mt-2">
                            <h3 className=" graph-title">ROE</h3>


                            <Chart
                                chartType="LineChart"
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph65}
                                options={optionsF66}
                            />
                        </div>
                    </Col>
                </Row>
                <div style={{ overflowX: "auto" }} className="show-scrollbar">
                    <div className="mt-3 dupont-section">
                        <div className="w-20">
                            <div className="graph-box grey-bordered" style={{ borderRadius: "10px 10px 0 0" }}>
                                <h5 className="chart-heading2">Asset Turnover</h5>
                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    height="350px"
                                    data={data[0].financialXrays.graph61}
                                    options={optionsF62}
                                />
                            </div>
                            <div className="graph-data">
                                <div className="after-line"><h2>{data[0].financialXrays.extras.extra[0]}</h2><span>{data[0].financialXrays.extras.extra1[0]}%</span></div>
                                <div className="after-line"><h2>{data[0].financialXrays.extras.extra[1]}</h2><span>{data[0].financialXrays.extras.extra1[1]}%</span></div>
                                <div><h2>{data[0].financialXrays.extras.extra[2]}</h2><span>{data[0].financialXrays.extras.extra1[2]}%</span></div>
                                {/* <h2><span>{data[0].financialXrays.extras.extra[0]} {data[0].financialXrays.extras.extra[1]} {data[0].financialXrays.extras.extra[2]}</span></h2>
                                <span>{data[0].financialXrays.extras.extra1[0]}% {data[0].financialXrays.extras.extra1[1]}% {data[0].financialXrays.extras.extra1[2]}%</span> */}
                            </div>
                        </div>
                        <div className="w-20">
                            <div className="graph-box grey-bordered" style={{ borderRadius: "10px 10px 0 0" }}>
                                <h5 className="chart-heading2">Interest Efficiency</h5>
                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    height="350px"
                                    data={data[0].financialXrays.graph62}
                                    options={optionsF63}
                                />
                            </div>
                            <div className="graph-data">
                                <div className="after-line"><h2>{data[0].financialXrays.extras.extra[0]}</h2><span>{data[0].financialXrays.extras.extra1[0]}%</span></div>
                                <div className="after-line"><h2>{data[0].financialXrays.extras.extra[1]}</h2><span>{data[0].financialXrays.extras.extra1[1]}%</span></div>
                                <div><h2>{data[0].financialXrays.extras.extra[2]}</h2><span>{data[0].financialXrays.extras.extra1[2]}%</span></div>
                                {/* <h2><span>{data[0].financialXrays.extras.extra[0]} {data[0].financialXrays.extras.extra[1]} {data[0].financialXrays.extras.extra[2]}</span></h2>
                                <span>{data[0].financialXrays.extras.extra2[0]}% {data[0].financialXrays.extras.extra2[1]}% {data[0].financialXrays.extras.extra2[2]}%</span> */}
                            </div>
                        </div>
                        <div className="w-20">
                            <div className="graph-box grey-bordered" style={{ borderRadius: "10px 10px 0 0" }}>
                                <h5 className="chart-heading2">Financial Leverage</h5>
                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    height="350px"
                                    data={data[0].financialXrays.graph63}
                                    options={optionsF64}
                                />
                            </div>
                            <div className="graph-data">
                                <div className="after-line"><h2>{data[0].financialXrays.extras.extra[0]}</h2><span>{data[0].financialXrays.extras.extra1[0]}%</span></div>
                                <div className="after-line"><h2>{data[0].financialXrays.extras.extra[1]}</h2><span>{data[0].financialXrays.extras.extra1[1]}%</span></div>
                                <div><h2>{data[0].financialXrays.extras.extra[2]}</h2><span>{data[0].financialXrays.extras.extra1[2]}%</span></div>
                                {/* <h2><span>{data[0].financialXrays.extras.extra[0]} {data[0].financialXrays.extras.extra[1]} {data[0].financialXrays.extras.extra[2]}</span></h2>
                                <span>{data[0].financialXrays.extras.extra3[0]}% {data[0].financialXrays.extras.extra3[1]}% {data[0].financialXrays.extras.extra3[2]}%</span> */}
                            </div>
                        </div>
                        <div className="w-20">
                            <div className="graph-box grey-bordered" style={{ borderRadius: "10px 10px 0 0" }}>
                                <h5 className="chart-heading2">Tax Efficiency</h5>
                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    height="350px"
                                    data={data[0].financialXrays.graph64}
                                    options={optionsF65}
                                />
                            </div>
                            <div className="graph-data">
                                <div className="after-line"><h2>{data[0].financialXrays.extras.extra[0]}</h2><span>{data[0].financialXrays.extras.extra1[0]}%</span></div>
                                <div className="after-line"><h2>{data[0].financialXrays.extras.extra[1]}</h2><span>{data[0].financialXrays.extras.extra1[1]}%</span></div>
                                <div><h2>{data[0].financialXrays.extras.extra[2]}</h2><span>{data[0].financialXrays.extras.extra1[2]}%</span></div>
                                {/* <h2><span>{data[0].financialXrays.extras.extra[0]} {data[0].financialXrays.extras.extra[1]} {data[0].financialXrays.extras.extra[2]}</span></h2>
                                <span>{data[0].financialXrays.extras.extra4[0]}% {data[0].financialXrays.extras.extra4[1]}% {data[0].financialXrays.extras.extra4[2]}%</span> */}
                            </div>
                        </div>
                        <div className="w-20">
                            <div className="graph-box grey-bordered" style={{ borderRadius: "10px 10px 0 0" }}>
                                <h5 className="chart-heading2">Operating Margin</h5>
                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    height="350px"
                                    data={data[0].financialXrays.graph6}
                                    options={optionsF61}
                                />
                            </div>
                            <div className="graph-data">
                                <div className="after-line"><h2>{data[0].financialXrays.extras.extra[0]}</h2><span>{data[0].financialXrays.extras.extra1[0]}%</span></div>
                                <div className="after-line"><h2>{data[0].financialXrays.extras.extra[1]}</h2><span>{data[0].financialXrays.extras.extra1[1]}%</span></div>
                                <div><h2>{data[0].financialXrays.extras.extra[2]}</h2><span>{data[0].financialXrays.extras.extra1[2]}%</span></div>
                                {/* <h2><span>{data[0].financialXrays.extras.extra[0]} {data[0].financialXrays.extras.extra[1]} {data[0].financialXrays.extras.extra[2]}</span></h2>
                                <span>{data[0].financialXrays.extras.extra5[0]}%  {data[0].financialXrays.extras.extra5[1]}% {data[0].financialXrays.extras.extra5[2]}%</span> */}
                            </div>
                        </div>

                    </div>
                </div>
                <span style={{ fontSize: "12px" }} className="d-block text-end">{data[0].
                    financialXraysSource.Source13
                }</span>
            </div>

            <Modal
                dialogClassName="modal-90w"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <div className="data-heading">
                        <h2 style={{ fontSize: "32px" }}>Financial X-Ray</h2>
                    </div>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '90vh', overflowY: 'auto' }}>
                    <h3 style={{ color: "#666666", fontSize: "20px" }}>{tablssss1.title}</h3>
                    <div className="postion-relative" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                        <table className='theme-table w-100'>
                            <thead>
                                <tr>
                                    {tablssss1.col.map((item) => (
                                        <th key={item}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {tablssss1.data.map((item, index) => (
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
                    <span style={{ fontSize: "12px" }} className="d-block text-end mt-2">{data[0].
                        financialXraysSource.Source14
                    }</span>


                    <h3 className="mt-5" style={{ color: "#666666", fontSize: "20px" }}>{tablssss2.title}</h3>
                    <div className="postion-relative" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                        <table className='theme-table mt-3 w-100'>
                            <thead>
                                <tr>
                                    {tablssss2.col.map((item) => (
                                        <th key={item}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {tablssss2.data.map((item, index) => (
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
                    <span style={{ fontSize: "12px" }} className="d-block text-end mt-2">{data[0].
                        financialXraysSource.Source15
                    }</span>


                    <h3 className="mt-5" style={{ color: "#666666", fontSize: "20px" }}>{tablssss3.title}</h3>
                    <div className="postion-relative" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                        <table className='theme-table mt-3 w-100'>
                            <thead>
                                <tr>
                                    {tablssss3.col.map((item) => (
                                        <th key={item}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {tablssss3.data.map((item, index) => (
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
                    <span style={{ fontSize: "12px" }} className="d-block text-end mt-2">{data[0].
                        financialXraysSource.Source16
                    }</span>


                    <h3 className="mt-5" style={{ color: "#666666", fontSize: "20px" }}>{tablssss4.title}</h3>
                    <div className="postion-relative" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                        <table className='theme-table mt-3 w-100'>
                            <thead>
                                <tr>
                                    {tablssss4.col.map((item) => (
                                        <th key={item}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {tablssss4.data.map((item, index) => (
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
                    <span style={{ fontSize: "12px" }} className="d-block text-end mt-2">{data[0].
                        financialXraysSource.Source17
                    }</span>

                </Modal.Body>
            </Modal>

        </>
    );
};

export default Financial;
