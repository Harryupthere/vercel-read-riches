import React, { useState } from "react";
import Info from "../../components/img/info.svg"
import { Col, Row } from "react-bootstrap";
import SearchImg from "../../components/img/search.svg"
import SignImg from "../../components/img/signature.png"
import Modal from 'react-bootstrap/Modal';
import config from "../../config";
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
import { Chart } from "react-google-charts";

import { Tooltip as ReactTooltip } from 'react-tooltip'

const data1 = [
    {
        name: "April",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "May",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "June",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "July",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "August",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "September",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },

];
const dataPie = [
    { name: "Group A", value: '10.23' },
    { name: "Group B", value: '53.85' },
    { name: "Group C", value: '33' },
    { name: "Group D", value: '3' },
    { name: "Group D", value: '1' },
];
//const COLORS = ["#9787FF", "#FFA5DA", "#0096FF", "#FDB600", '#FF6384'];
const COLORS = ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'];
// Function to generate random colors
const Managment = ({ comname, data, compId }) => {

    const [expandedWhy, setExpandedWhy] = useState(false); // For 'why' section

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getRandomColor = (index) => {
        //const colors = ['#FDB600', '#0096FF', '#9787FF', '#FF6384', '#36A2EB', '#FFCE56'];
        const colors = ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'];

        return colors[index % colors.length]; // Loop through the colors array
    };
    const dataWithNumberValues = data[0].managementMatter.graph2.map(item => ({
        ...item,
        value: parseFloat(item.value) // Ensure value is a number
    }));

    const tooltipData11111 = "It refers to how leadership and decision-making significantly impact a company's success, shaping its growth, efficiency, and overall performance.";
    const tooltipData22222 = "Management Discussion and Analysis (MD&A) is a report section where management explains financial results, trends, and future outlook.";

    // Helper function to truncate text
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    // Chart options
    const options = {
        title: "CEO Compensation and Net Income",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
          },
        seriesType: "bars", // Set default series type to bars
        series: {
            2: { type: "line", targetAxisIndex: 1 }, // Third column is a line chart, mapped to the second Y-axis
        },
        vAxes: {
            0: { title: "Compensation / Income (Crs)", minValue: 0 }, // Left Y-axis (bars)
            1: { title: "Ceo Comp % of Net Income", minValue: 0 }, // Right Y-axis (line)
            titleTextStyle: {
                fontSize: 18, // Increase horizontal axis title font size
              },
              textStyle: {
                fontSize: 14, // Increase horizontal axis labels font size
              },
        },
        chartArea: { width: "60%" }, // Adjust chart area width
        hAxis: {
            title: "Year",
            //textStyle: { fontSize: 12 }, // Increase font size for X-axis labels
            titleTextStyle: {
                fontSize: 18, // Increase horizontal axis title font size
              },
              textStyle: {
                fontSize: 14, // Increase horizontal axis labels font size
              },
        },
        bar: { groupWidth: "40%" }, // Adjust bar width
        colors: ["#2f878d", "#44b3bb", "#15464a"], // Custom colors for the bars and line
    };

      const optionsF = {
    title: "OWNERSHIP BREAKDOWN",
    colors: ['#15464a','#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
  };

    return (
        <>
            <div id="list-item-6">
                <div className="data-heading mt-5 d-flex justify-content-between align-items-center">
                    <div className=" ">
                        <h2>Management Matters <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content11111" /><ReactTooltip
                            id="quality-content11111"
                            place="bottom"
                            content={tooltipData11111}
                            //  className="custom-tooltip"
                            style={{ fontSize: "12px" }}
                        /></h2>
                        <div className="rule" style={{ width: "350px" }}></div>
                    </div>
                    {/* <h3 className="appendix cursor-pointer" onClick={handleShow} >Appendix<i class="arrow"></i></h3> */}
                </div>
                <Row className="w-100 mt-4">
                    <Col md={6}>
                        <h3 className="heading2">CEO COMPENSATION ANALYSIS</h3>

                        <div className="graph-box">
                            {/* <p className="text-center">CEO Compensation and Net Income</p> */}
                            {/* <div className="d-flex justify-content-center mb-3">
                                <div className="legend-item">
                                    <span style={{ backgroundColor: '#2f878d', display: 'inline-block', width: 12, height: 12, marginRight: 5 }}></span>
                                    CEO Comp (Crs)
                                </div>
                                <div className="legend-item ml-4">
                                    <span style={{ backgroundColor: '#44b3bb', display: 'inline-block', width: 12, height: 12, marginRight: 5 }}></span>
                                    Net Income (Crs)
                                </div>
                                <div className="legend-item ml-4">
                                    <span style={{ backgroundColor: '#15464a', display: 'inline-block', width: 12, height: 12, marginRight: 5 }}></span>
                                    Ceo Comp % of Net Income
                                </div>
                            </div> */}
                            {/* <ResponsiveContainer width="100%" height={200}>
                                <ComposedChart
                                    data={data[0].managementMatter.graph1}
                                    margin={{
                                        top: 20,
                                        right: 20,
                                        bottom: 20,
                                        left: 20,
                                    }}
                                >
                                    <CartesianGrid stroke="#f5f5f5" />

                                    <XAxis
                                        dataKey="name"
                                        interval={0}
                                        angle={-20} 
                                        textAnchor="end" 
                                    />

                                    <YAxis yAxisId="left" />

                                    <YAxis yAxisId="right" orientation="right" />

                                    <Tooltip />

                                    <Bar yAxisId="left" dataKey="CEO Comp (Crs)" barSize={20} fill="#2f878d" stackId="a" />

                                    <Bar yAxisId="left" dataKey="Net Income (Crs)" barSize={20} fill="#44b3bb" stackId="a" />

                                    <Line
                                        yAxisId="right"
                                        type="monotone"
                                        dataKey="Ceo Comp % of Net Income"
                                        stroke="#15464a"
                                        dot={(props) => {
                                            const { cx, cy, value } = props;
                                            const radius = Math.sqrt(value);
                                            return <circle cx={cx} cy={cy} r={radius} fill="#15464a" stroke="none" />;
                                        }}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer> */}
                            <Chart
                                chartType="ComboChart" // Use ComboChart for composed bar/line chart
                                width="100%"
                                height="400px"
                                data={data[0].managementMatter.graph1}
                                options={options}
                            />

                        </div>
                        <span style={{ fontSize: "12px" }} className="d-block text-end">Source - Annual Report</span>

                        {/* <div className="graph-box">
                            <p className="text-center"></p>
                            <ResponsiveContainer width="100%" height={300}>
                                <ComposedChart
                                    data={data[0].managementMatter.graph1}
                                    margin={{
                                        top: 20,
                                        right: 20,
                                        bottom: 20,
                                        left: 20,
                                    }}
                                >
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <XAxis dataKey="name" scale="band" />
                                 <YAxis />
                                   

                                    <Tooltip />
                                    <Legend />

                                    <Bar dataKey="CEO Comp (Crs)" barSize={20} fill="#413ea0" stackId="a" />

                                    <Bar dataKey="Net Income (Crs)" barSize={20} fill="#82ca9d" stackId="a" />

                                    <Line type="monotone" dataKey="Ceo Comp % of Net Income" stroke="#ff7300" dot={(props) => {
                                        const { cx, cy, value } = props;
                                        const radius = Math.sqrt(value); 
                                        return <circle cx={cx} cy={cy} r={radius} fill="#ff7300" stroke="none" />;
                                    }} />

                                    
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div> */}


                        {/* <div className="graph-box">
                            <p className="text-center"></p>
                            <BarChart
                                width={500}
                                height={300}
                                style={{ height: "100%", width: "100%" }}
                                data={data[0].managementMatter.graph1}
                                barSize={20}
                                barCategoryGap={10}
                                barGap={5}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" style={{ fontSize: "12px", fontWeight: "500" }} />
                                <YAxis style={{ fontSize: "12px", fontWeight: "500" }} />
                                <Tooltip cursor={{ fill: 'transparent' }} /> 
                                {Object.keys(data[0].managementMatter.graph1[0])
                                    .filter(key => key !== 'name')
                                    .map((key, index, arr) => (

                                        <Bar
                                            key={key}
                                            dataKey={key}
                                            stackId="a"
                                            fill={getRandomColor(index)}
                                            radius={index === arr.length - 1 ? [10, 10, 0, 0] : [0, 0, 0, 0]}
                                            isAnimationActive={false}

                                        />
                                    ))}
                            </BarChart>
                        </div> */}
                    </Col>
                    <Col md={6}>
                        <h3 className="heading2">OWNERSHIP BREAKDOWN</h3>
                        <div className="graph-box">
                            {/* <PieChart width={400} height={300} >
                                <Pie
                                    data={dataWithNumberValues}
                                    innerRadius={90}
                                    outerRadius={110}
                                    fill="#8884d8"
                                    paddingAngle={0}
                                    dataKey="value"
                                    style={{ width: "100%" }}
                                >
                                    <Label
                                        value="Total Value"
                                        position="center"
                                        style={{ fontSize: "16px", fontWeight: "600", color: "#1B373B" }}
                                    />
                                    {data1.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>

                                <Tooltip
                                    formatter={(value, name) => [`${value}%`, `${name}`]}  
                                    contentStyle={{
                                        backgroundColor: "#fff",
                                        borderRadius: "8px",
                                        padding: "10px",
                                        border: "1px solid #ccc",
                                    }}
                                    labelStyle={{ fontWeight: "bold", color: "#333" }}
                                />
                                <Legend />
                            </PieChart> */}

<Chart
      chartType="PieChart"
      data={data[0].managementMatter.graph2}
      options={optionsF}
      width={"100%"}
      height={"400px"}
    />
                        </div>
            <span style={{ fontSize: "12px" }} className="d-block text-end">Source - Annual Report</span>

                    </Col>
                </Row>
                <section>
                    <div className="color-section">
                        <div className="dark-bg">
                            <div className="light-bg">
                                <div className="why">
                                    <div className="d-flex align-items-center mb-3">  <img src={SearchImg} alt="search" /><h2>WHY?</h2></div>
                                    <h3>{comname} lost its shares</h3>
                                    {/* <p>{data[0].managementMatters.why}</p> */}

                                    <p>
                                        {/* Conditionally render truncated or full content */}
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
                            //  className="custom-tooltip"
                            style={{ fontSize: "12px" }}
                        /></h3>
                    <Row>
                        <Col md={6}>
                            <div className="insight-list mt-3">
                                {/* <ul>
                                    <li className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                    <li className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                    <li className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                </ul> */}
                                <ul>
                                    {data[0].managementMatters.details.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="p-4">
                                <img src={`${config.apiUrl}companyMainImage/${compId}`} style={{ height: "100%", width: "100%" }} />
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
                                {/* <th>Year</th>
                                <th>Ceo Comp. ₹ Cr</th>
                                <th>Net Income</th>
                                <th>Ceo comp.%<br /> of net income</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {data[0].managementMatter.graph3.dataManagementAppendix.map((item) => (<tr>
                                <td>{item.date}</td>
                                <td>{item.val1}</td>
                                <td>{item.val2}</td>
                                <td>{item.val3}</td>
                            </tr>))}
                            {/* <tr>
                                <td>2020</td>
                                <td>Goggle</td>
                                <td>460</td>
                                <td>Goggle</td>
                            </tr>
                            <tr>
                                <td>2020</td>
                                <td>Goggle</td>
                                <td>460</td>
                                <td>Goggle</td>
                            </tr>
                            <tr>
                                <td>2020</td>
                                <td>Goggle</td>
                                <td>460</td>
                                <td>Goggle</td>
                            </tr> */}
                        </tbody>
                    </table>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default Managment;
