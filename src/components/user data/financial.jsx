import React, { useState, useEffect } from "react";
import { Col, Row, Form } from "react-bootstrap";
import Info from "../../components/img/info.svg"
import Modal from 'react-bootstrap/Modal';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar,
    Legend,
    ResponsiveContainer,
    ComposedChart
} from "recharts";
import DownArrow from "../../components/img/down.svg"
import PurpleArrow from "../../components/img/arrow-purple.svg"
import SearchImg from "../../components/img/search.svg";
import { min, max } from 'lodash';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { Chart } from "react-google-charts";

const data1 = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

const allData = [
    { date: "Jan", sales: 4000, revenue: 2400, profit: 2400, loss: 2300, other: 1400, other2: 1700 },
    { date: "Feb", sales: 3000, revenue: 1398, profit: 2210, loss: 2300, other: 1400, other2: 1700 },
    { date: "Mar", sales: 2000, revenue: 9800, profit: 2290, loss: 2300, other: 1400, other2: 1700 },
    { date: "Apr", sales: 2780, revenue: 3908, profit: 2000, loss: 2300, other: 1400, other2: 1700 },
    { date: "May", sales: 1890, revenue: 4800, profit: 2181, loss: 2300, other: 1400, other2: 1700 },
    { date: "Jun", sales: 2390, revenue: 3800, profit: 2500, loss: 2300, other: 1400, other2: 1700 },
    { date: "Jul", sales: 3490, revenue: 4300, profit: 2100, loss: 2300, other: 1400, other2: 1700 },
    { date: "Aug", sales: 3000, revenue: 2400, profit: 2400, loss: 2300, other: 1400, other2: 1700 },
    { date: "Sep", sales: 2800, revenue: 1398, profit: 2210, loss: 2300, other: 1400, other2: 1700 },
    { date: "Oct", sales: 2000, revenue: 9800, profit: 2290, loss: 2300, other: 1400, other2: 1700 },
    { date: "Nov", sales: 2780, revenue: 3908, profit: 2000, loss: 2300, other: 1400, other2: 1700 },
    { date: "Dec", sales: 1890, revenue: 4800, profit: 2181, loss: 2300, other: 1400, other2: 1700 }
];

const box = [
    {}, {}, {}, {}
]
const Financial = ({ comname, data }) => {
    console.log(data, "///")
    const [domain1, setDomain1] = useState([0, 100]);
    const [ticks1, setTicks1] = useState([]);
    const [domain2, setDomain2] = useState([0, 100]);
    const [ticks2, setTicks2] = useState([]);
    const [domain3, setDomain3] = useState([0, 100]);
    const [ticks3, setTicks3] = useState([]);
    const [domain4, setDomain4] = useState([0, 100]);
    const [ticks4, setTicks4] = useState([]);
    const [domain5, setDomain5] = useState([0, 100]);
    const [ticks5, setTicks5] = useState([]);

    const [domain6, setDomain6] = useState([0, 100]);
    const [ticks6, setTicks6] = useState([]);
    const [domain61, setDomain61] = useState([-100, 100]);
    const [ticks61, setTicks61] = useState([]);
    const [domain62, setDomain62] = useState([-100, 100]);
    const [ticks62, setTicks62] = useState([]);
    const [domain63, setDomain63] = useState([0, 100]);
    const [ticks63, setTicks63] = useState([]);
    const [domain64, setDomain64] = useState([0, 100]);
    const [ticks64, setTicks64] = useState([]);
    const [domain65, setDomain65] = useState([0, 100]);
    const [ticks65, setTicks65] = useState([]);


    const maxminVal = (graphData, setD, setT) => {
        if (graphData.length === 0) return; // Check if there's data

        const minValue = Math.min(...graphData.map((d) => d.value));
        const maxValue = Math.max(...graphData.map((d) => d.value));

        const tickCount = 10;
        const tickStep = Math.ceil((maxValue - minValue) / (tickCount - 1));
        const dynamicTicks = [];

        for (let i = minValue; i <= maxValue; i += tickStep) {
            dynamicTicks.push(i);
        }

        setD([minValue, maxValue]);
        setT(dynamicTicks);
    };
    const maxminVal2 = (graphData, setD, setT) => {
        if (graphData.length === 0) return; // Check if there's data

        const minValue = Math.min(...graphData.map((d) => d.value2));
        const maxValue = Math.max(...graphData.map((d) => d.value1));

        const tickCount = 10;
        const tickStep = Math.ceil((maxValue - minValue) / (tickCount - 1));
        const dynamicTicks = [];

        for (let i = minValue; i <= maxValue; i += tickStep) {
            dynamicTicks.push(i);
        }

        setD([minValue, maxValue]);
        setT(dynamicTicks);
    };


    useEffect(() => {
        if (data[0]?.financialXrays) {
            maxminVal(data[0].financialXrays.graph1, setDomain1, setTicks1);
            maxminVal2(data[0].financialXrays.graph2, setDomain2, setTicks2);
            maxminVal2(data[0].financialXrays.graph3, setDomain3, setTicks3);
            maxminVal2(data[0].financialXrays.graph4, setDomain4, setTicks4);
            maxminVal(data[0].financialXrays.graph5, setDomain5, setTicks5);

            maxminVal(data[0].financialXrays.graph6, setDomain6, setTicks6);
            maxminVal(data[0].financialXrays.graph61, setDomain61, setTicks61);
            maxminVal(data[0].financialXrays.graph62, setDomain62, setTicks62);
            maxminVal(data[0].financialXrays.graph63, setDomain63, setTicks63);
            maxminVal(data[0].financialXrays.graph64, setDomain64, setTicks64);
            maxminVal(data[0].financialXrays.graph65, setDomain65, setTicks65);

        }

    }, [data]);

    const [show, setShow] = useState(false);
    const [tableName, setTableName] = useState('')
    const [tableColumns, setTableColumns] = useState([])
    const [tableData, setTableData] = useState([]);

    let tablssss1 = { col: data[0].IncomeStatementOrg.column, data: data[0].IncomeStatementOrg.data, title: "Income Statement" }
    let tablssss2 = { col: data[0].BalanceSheetOrg.column, data: data[0].BalanceSheetOrg.data, title: "Balance Sheet" }
    let tablssss3 = { col: data[0].CashFlowOrg.column, data: data[0].CashFlowOrg.data, title: "Cash Flow" }
    let tablssss4 = { col: data[0].RatioAnalysisOrg.column, data: data[0].RatioAnalysisOrg.data, title: "Ratio Analysis", }

    const handleClose = () => {
        // setTableColumns([])
        // setTableData([])
        // setTableName('')
        setShow(false)
    };

    const handleShow = (e) => {
        e.preventDefault()
        // setTableColumns(tableCal)
        // setTableData(tableDa)
        // setTableName(tableNa)

        setShow(true)
    };

    const [months, setMonths] = useState(12);

    const getFilteredData = (months) => {
        const endMonthIndex = allData.length - 1;
        const startMonthIndex = Math.max(0, endMonthIndex - months + 1);
        return allData.slice(startMonthIndex, endMonthIndex + 1);
    };
    const filteredData = getFilteredData(months);


    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
                    <p>{`Date: ${payload[0].payload.name}`}</p>
                    <p>{`${payload[0].payload.sub}: ${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomTooltip2 = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
                    <p>{`Date: ${payload[0].payload.name}`}</p>
                    <p>{`${payload[0].payload.sub1}: ${payload[0].value}`}</p>
                    <p>{`${payload[0].payload.sub2}: ${payload[1].value}`}</p>
                </div>
            );
        }
        return null;
    };

    const [expandedWhy, setExpandedWhy] = useState(false); // For 'why' section
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };
    const tooltipData111111 = "It is a detailed analysis of a company's financial health, revealing insights into its performance, strengths, and weaknesses. It provides a clear view of financial metrics, trends, and potential risks.";
    const tooltipData222222 = "It breaks down ROE into five factors: Net Profit Margin, Asset Turnover, Financial Leverage (debt use), Operating Efficiency, and Tax impact. This comprehensive approach provides detailed insights into the key drivers of ROE.";

    const optionsF1 = {
        title: "Revenue Graph",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
        },
        hAxis: {
            title: "Years",// data[0].financialXrays.graph1[0][0],
        },
        vAxis: {
            title: data[0].financialXrays.graph1[0][1],
            minValue: 0,
        },
        pointSize: 5, // Size of the points (bubbles) on the line
        colors: ["#2f878d"], // Custom color for the line and points
        legend: "none", // Hide legend
    };

    const optionsF2 = {
        // title: "Oprerating Profit Graph",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
        },
        seriesType: "bars", // Set default series type to bars
        series: {
            1: { type: "line", targetAxisIndex: 1 }, // Second series (Expenses) will be a line, on the right Y-axis
        },
        vAxes: {
            0: { title: data[0].financialXrays.graph2[0][1], minValue: 0 }, // Left Y-axis for bars (Revenue)
            1: { title: data[0].financialXrays.graph2[0][2], minValue: 0 }, // Right Y-axis for line (Expenses)
        },
        chartArea: { width: "60%" }, // Adjust chart area width
        hAxis: {
            title: "Years",
        },
        pointSize: 5,
        colors: ["#2f878d", "#15464a"], // Custom colors for bars and line
        legend: { position: "bottom" }, // Place legend at the bottom
    };

    const optionsF3 = {
        title: "Net Profit Graph",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
        },
        seriesType: "bars", // Set default series type to bars
        series: {
            1: { type: "line", targetAxisIndex: 1 }, // Second series (Expenses) will be a line, on the right Y-axis
        },
        vAxes: {
            0: { title: data[0].financialXrays.graph3[0][1], minValue: 0 }, // Left Y-axis for bars (Revenue)
            1: { title: data[0].financialXrays.graph3[0][2], minValue: 0 }, // Right Y-axis for line (Expenses)
        },
        chartArea: { width: "60%" }, // Adjust chart area width
        hAxis: {
            title: "Years",
        },
        pointSize: 5,
        colors: ["#2f878d", "#15464a"], // Custom colors for bars and line
        legend: { position: "bottom" }, // Place legend at the bottom
    };

    const optionsF4 = {
        title: "ROCE vs ROE Graph",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
        },
        hAxis: {
            title: "Year",
        },
        vAxis: {
            title: "Percentage (%)",
        },
        series: {
            0: { color: "#2f878d" }, // Custom color for the first line (Sales)
            1: { color: "#15464a" }, // Custom color for the second line (Expenses)
        },
        pointSize: 5, // Size of the points on the line chart
        legend: { position: "bottom" }, // Position the legend at the bottom
    };

    const optionsF5 = {
        title: "CFO vs PAT Graph",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
        },
        hAxis: {
            title: data[0].financialXrays.graph5[0][0],
        },
        vAxis: {
            title: "Years",// data[0].financialXrays.graph1[0][1],
            minValue: 0,
        },
        pointSize: 5, // Size of the points (bubbles) on the line
        colors: ["#2f878d"], // Custom color for the line and points
        legend: "none", // Hide legend
    };

    const optionsF61 = {
        title: "ROE",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
        },
        hAxis: {
            title: "Years",//data[0].financialXrays.graph5[0][0],
        },
        vAxis: {
            title: data[0].financialXrays.graph6[0][1],
            minValue: 0,
        },
        pointSize: 5, // Size of the points (bubbles) on the line
        colors: ["#2f878d"], // Custom color for the line and points
        legend: "none", // Hide legend
    };

    const optionsF62 = {
        title: "CFO vs PAT Graph",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
        },
        hAxis: {
            title: data[0].financialXrays.graph5[0][0],
        },
        vAxis: {
            title: "Years",// data[0].financialXrays.graph1[0][1],
            minValue: 0,
        },
        pointSize: 5, // Size of the points (bubbles) on the line
        colors: ["#2f878d"], // Custom color for the line and points
        legend: "none", // Hide legend
    };

    const optionsF63 = {
        title: "CFO vs PAT Graph",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
        },
        hAxis: {
            title: data[0].financialXrays.graph5[0][0],
        },
        vAxis: {
            title: "Years",// data[0].financialXrays.graph1[0][1],
            minValue: 0,
        },
        pointSize: 5, // Size of the points (bubbles) on the line
        colors: ["#2f878d"], // Custom color for the line and points
        legend: "none", // Hide legend
    };

    const optionsF64 = {
        title: "CFO vs PAT Graph",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
        },
        hAxis: {
            title: data[0].financialXrays.graph5[0][0],
        },
        vAxis: {
            title: "Years",// data[0].financialXrays.graph1[0][1],
            minValue: 0,
        },
        pointSize: 5, // Size of the points (bubbles) on the line
        colors: ["#2f878d"], // Custom color for the line and points
        legend: "none", // Hide legend
    };

    const optionsF65 = {
        title: "CFO vs PAT Graph",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
        },
        hAxis: {
            title: data[0].financialXrays.graph5[0][0],
        },
        vAxis: {
            title: "Years",// data[0].financialXrays.graph1[0][1],
            minValue: 0,
        },
        pointSize: 5, // Size of the points (bubbles) on the line
        colors: ["#2f878d"], // Custom color for the line and points
        legend: "none", // Hide legend
    };

    const optionsF66 = {
        title: "CFO vs PAT Graph",
        titleTextStyle: {
            fontSize: 16, // Increase title font size
        },
        hAxis: {
            title: data[0].financialXrays.graph5[0][0],
        },
        vAxis: {
            title: "Years",// data[0].financialXrays.graph1[0][1],
            minValue: 0,
        },
        pointSize: 5, // Size of the points (bubbles) on the line
        colors: ["#2f878d"], // Custom color for the line and points
        legend: "none", // Hide legend
    };
    return (
        <>
            <div >
                <div className="data-heading mb-4 mt-5">
                    <div><h2 className=" cursor-pointer" >Financial X-ray   <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content111111" /> <ReactTooltip
                        id="quality-content111111"
                        place="bottom"
                        content={tooltipData111111}
                        //  className="custom-tooltip"
                        style={{ fontSize: "12px" }}
                    /></h2>


                        <div className="rule" style={{ width: "200px" }}></div>
                        {/* <h3 className="appendix cursor-pointer" >Appendix<i class="arrow"></i></h3> */}
                    </div>
                </div>
                <Row className="w-100">
                    {/* <Col md={6}>
                        <h3 className="heading2">REVENUE GRAPH</h3>

                        <div className="graph-box grey-bordered">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart width={500} height={300} data={data[0].financialXrays.graph1} style={{ height: "100%", width: "100%" }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis  dataKey="name" padding={{ left: 30, right: 30 }}  angle={-40}
                                     interval={0} 
                                     scale="point" />
                                    <YAxis style={{ fontSize: "12px" }}
                                        domain={domain1}
                                        tickCount={10}
                                        ticks={ticks1}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#FBE38E"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Col> */}

                    <Col md={6}>
                        {/* <h3 className="heading2">REVENUE GRAPH</h3> */}

                        <div className="graph-box grey-bordered">
                            {/* <ResponsiveContainer width="100%" height={300}>
                                <LineChart
                                    width={400}
                                    height={200}
                                    data={data[0].financialXrays.graph1} 
                                    margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
                                >

                                    <CartesianGrid strokeDasharray="3 3" />

                                    <XAxis
                                        dataKey="name" 
                                        padding={{ left: 30, right: 30 }}
                                        angle={-40} 
                                        textAnchor="end" 
                                        interval={0} 
                                        scale="band"
                                        tick={{ fontSize: 12 }}
                                        tickFormatter={(name) => name}
                                    />

                                    <YAxis
                                        style={{ fontSize: "12px" }}
                                        domain={domain1} 
                                        tickCount={10}
                                        ticks={ticks1}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />

                                    <Tooltip content={<CustomTooltip />} />

                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#1d666d"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer> */}

                            <Chart
                                chartType="LineChart" // Use LineChart for the line graph with points
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph1}
                                options={optionsF1}
                            />
                        </div>
                    </Col>

                    {/* <Col md={6}>
                    <h3 className="heading2">OPERATING PROFIT GRAPH</h3>

                        <div className="graph-box grey-bordered">
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart width={500} height={300} data={data[0].financialXrays.graph2} style={{ height: "100%", width: "100%" }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis  padding={{ left: 30, right: 30 }} /> 
                                    <YAxis style={{ fontSize: "12px" }}
                                        domain={domain2}
                                        tickCount={10}
                                        ticks={ticks2}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip2 />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value1"
                                        stroke="#FBE38E"
                                        activeDot={{ r: 8 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="value2"
                                        stroke="#9A89FF"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Col> */}
                    <Col md={6}>
                        <h3 className="heading2">OPERATING PROFIT GRAPH</h3>


                        <div className="graph-box grey-bordered">
                            {/* <ResponsiveContainer width="100%" height={300}>
                                <ComposedChart
                                    data={data[0].financialXrays.graph2}
                                    margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />

                                    <XAxis
                                        dataKey="name" 
                                        padding={{ left: 20, right: 20 }}
                                        angle={-40} 
                                        textAnchor="end" 
                                      
                                        tick={{ fontSize: 12 }}

                                        interval={0} 
                                        scale="point" 
                                    />

                                    <YAxis
                                        yAxisId="left"
                                        style={{ fontSize: "12px" }}
                                        domain={domain2} // Your domain for this Y-axis
                                        tickCount={10}
                                        ticks={ticks2}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />

                                    <YAxis
                                        yAxisId="right"
                                        orientation="right"
                                        style={{ fontSize: "12px" }}
                                        domain={[0, 'dataMax + 10']} // Adjust as necessary
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />

                                    <Tooltip content={<CustomTooltip2 />} />

                                    <Bar
                                        yAxisId="left" // This bar uses the left Y-axis
                                        dataKey="value1" // Replace with your bar data key
                                        fill="#5FCBD4"
                                        barSize={20}
                                    />

                                    <Line
                                        yAxisId="right" // This line uses the right Y-axis
                                        type="monotone"
                                        dataKey="value2" // Replace with your line data key
                                        stroke="#1d666d"
                                        activeDot={{ r: 8 }}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer> */}
                            <Chart
                                chartType="ComboChart"
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph2}
                                options={optionsF2}
                            />
                        </div>
                    </Col>




                </Row>
                <Row className="w-100 mt-3">
                    <Col md={4}>
                        <h3 className="heading2">NET PROFIT GRAPH</h3>
                        <div className="graph-box grey-bordered">
                            {/* <ResponsiveContainer width="100%" height={300}>
                                <LineChart width={400} height={200} data={data[0].financialXrays.graph3}
                                    margin={{ top: 20, right: 10, bottom: 40, left: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="name" // Ensure this is a date string or formatted correctly
                                        padding={{ left: 5, right: 10 }}
                                        angle={-40} // Rotate labels for better visibility
                                        textAnchor="end" // Align text to the end
                                        // tickFormatter={(date) => {
                                        //     const parsedDate = new Date(date);
                                        //     return parsedDate.toLocaleDateString(); // Customize the format as needed
                                        // }}
                                        tick={{ fontSize: 12 }}

                                        interval={0} // Show all ticks
                                        scale="point" // Force all data points to be equally spaced
                                    />
                                    <YAxis style={{ fontSize: "12px" }}
                                        domain={domain3}
                                        tickCount={10}
                                        ticks={ticks3}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip2 />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value1"
                                        stroke="#1d666d"
                                        activeDot={{ r: 8 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="value2"
                                        stroke="#5FCBD4"
                                    />
                                </LineChart>
                            </ResponsiveContainer> */}
                            <Chart
                                chartType="ComboChart"
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph3}
                                options={optionsF3}
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <h3 className="heading2">ROCE vs ROE Graph</h3>

                        <div className="graph-box grey-bordered">
                            {/* <ResponsiveContainer width="100%" height={300}>
                                <LineChart width={400} height={350} data={data[0].financialXrays.graph4} s margin={{ top: 20, right: 10, bottom: 40, left: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="name" // Ensure this is a date string or formatted correctly
                                        padding={{ left: 5, right: 10 }}
                                        angle={-40} // Rotate labels for better visibility
                                        textAnchor="end" // Align text to the end
                                        // tickFormatter={(date) => {
                                        //     const parsedDate = new Date(date);
                                        //     return parsedDate.toLocaleDateString(); // Customize the format as needed
                                        // }}
                                        tick={{ fontSize: 12 }}

                                        interval={0} // Show all ticks
                                        scale="point" // Force all data points to be equally spaced
                                    />                                    <YAxis style={{ fontSize: "12px" }}
                                        domain={domain4}
                                        tickCount={10}
                                        ticks={ticks4}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip2 />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value1"
                                        stroke="#1d666d"
                                        activeDot={{ r: 8 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="value2"
                                        stroke="#5FCBD4"
                                    />
                                </LineChart>
                            </ResponsiveContainer> */}
                            <Chart
                                chartType="LineChart"
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph4}
                                options={optionsF4}
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <h3 className="heading2">CFO vs PAT Graph</h3>

                        <div className="graph-box grey-bordered">
                            {/* <ResponsiveContainer width="100%" height={300}>
                                <LineChart width={400} height={350} data={data[0].financialXrays.graph5} margin={{ top: 20, right: 10, bottom: 40, left: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="name" // Ensure this is a date string or formatted correctly
                                        padding={{ left: 5, right: 10 }}
                                        angle={-40} // Rotate labels for better visibility
                                        textAnchor="end" // Align text to the end
                                        // tickFormatter={(date) => {
                                        //     const parsedDate = new Date(date);
                                        //     return parsedDate.toLocaleDateString(); // Customize the format as needed
                                        // }}
                                        tick={{ fontSize: 12 }}

                                        interval={0} // Show all ticks
                                        scale="point" // Force all data points to be equally spaced
                                    />
                                    <YAxis style={{ fontSize: "12px" }}
                                        domain={domain5}
                                        tickCount={10}
                                        ticks={ticks5}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#1d666d"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer> */}

                            <Chart
                                chartType="LineChart" // Use LineChart for the line graph with points
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph5}
                                options={optionsF5}
                            />
                        </div>
                    </Col>
                </Row>
                <span className="mt-4 me-4" style={{ fontSize: "12px", display: "block", textAlign: "right" }} >Source - Annual Report</span>
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
                                        {/* {data[0].financialXray.why} */}
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
                        <div className="mt-4">
                            <div className="d-flex justify-content-between">
                                <h2 className="heading2">Dupont Analysis<img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content222222" /><ReactTooltip
                                    id="quality-content222222"
                                    place="bottom"
                                    content={tooltipData222222}
                                    //  className="custom-tooltip"
                                    style={{ fontSize: "12px" }}
                                /></h2>
                                <h3 className="appendix cursor-pointer" onClick={e => { handleShow(e) }}>Appendix<i class="arrow"></i></h3>
                            </div>
                            <h3 className=" graph-title">ROE</h3>
                            {/* <ResponsiveContainer width="100%" height={300}>
                                <LineChart width={400} height={350} data={data[0].financialXrays.graph65} 
                                    margin={{ top: 20, right: 20, bottom: 10, left: 15 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis 
                                        dataKey="name" 
                                        padding={{ left: 20, right: 20 }}
                                        angle={0} 
                                        textAnchor="end" 
                                        tick={{ fontSize: 12 }}

                                        interval={0} 
                                        scale="point" 
                                    />
                                    <YAxis style={{ fontSize: "12px" }}
                                        domain={domain65}
                                        tickCount={10}
                                        ticks={ticks65}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#1A5C62"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                            */}

                            <Chart
                                chartType="LineChart" // Use LineChart for the line graph with points
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph6}
                                options={optionsF61}
                            />
                            <span style={{ fontSize: "12px" }} className="d-block text-end">Source - Annual Report</span>
                        </div>

                        {/* <div className="chart-base d-flex justify-content-between ms-5 mb-2">
                            <h3 className="ps-3 graph-title">$20 678.89 <span>-1.5%</span><img src={PurpleArrow} className="mx-1" /></h3 >
                            <span className="d-flex"><div className="yellow-dot me-2"></div>Product</span>
                        </div> */}
                        <div className="chart-base d-flex justify-content-between mt-5">
                            {/* <h3 className=" graph-title">ROE</h3> */}
                        </div>
                    </Col>
                </Row>

                {/* <Row className="mt-5">
                    {box.map(item => (
                        <Col lg={3} md={4} sm={2}>
                            <div className="data-box">
                            </div>
                            <div className="graph-data">
                                <h5>1 year 3 year 5 year</h5>
                                <span>17.22% 17.22% 17.22%</span>
                            </div>
                        </Col>
                    ))}
                </Row> */}
                <div className="mt-3 w-100 dupont-section">
                    <div className="w-20">
                    <h5 className="heading3">Operating Margin</h5>  
                        <div className="graph-box grey-bordered mb-2">
                            {/* <ResponsiveContainer width="100%" height={200}>
                                <LineChart width={300} height={250} data={data[0].financialXrays.graph6} style={{ height: "100%", width: "100%" }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <YAxis style={{ fontSize: "10px" }}
                                        domain={domain6}
                                        tickCount={10}
                                        ticks={ticks6}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value1"
                                        stroke="#FBE38E"
                                        activeDot={{ r: 8 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="value2"
                                        stroke="#9A89FF"
                                    />
                                </LineChart>
                            </ResponsiveContainer> */}

                            {/*<ResponsiveContainer width="100%" height={200}>
                                <LineChart width={300} height={250} data={data[0].financialXrays.graph6} //style={{ height: "100%", width: "100%" }}
                                    margin={{ top: 10, right: 1, bottom: 30, left: -15 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis

                                        //padding={{ left: 30, right: 30 }} 
                                        dataKey="name" // Ensure this is a date string or formatted correctly
                                        padding={{ left: 1, right: 1 }}
                                        angle={-90} // Rotate labels for better visibility
                                        textAnchor="end" // Align text to the end
                                        //  // tickFormatter={(date) => {
                                        //  //     const parsedDate = new Date(date);
                                        //  //     return parsedDate.toLocaleDateString(); // Customize the format as needed
                                        //  // }}
                                        interval={0} // Show all ticks
                                        scale="point" // Force all data points to be equally spaced
                                        tick={{ fontSize: 10 }}

                                    />
                                    <YAxis style={{ fontSize: "12px" }}
                                        domain={domain6}
                                        tickCount={10}
                                        ticks={ticks6}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#1A5C62"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>*/}
                            <Chart
                                chartType="LineChart" // Use LineChart for the line graph with points
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph61}
                                options={optionsF62}
                            />
                        </div>
                        <div className="graph-data">
                            <h5 className="heading3">Operating Margin
                            </h5>   
                            {/* <span>17.22% 17.22% 17.22%</span> */}
                        </div>
                    </div>
                    <div className="w-20">
                    <h5 className="heading3">Operating Margin</h5>  
                        <div className="graph-box grey-bordered mb-2">
                            {/*<ResponsiveContainer width="100%" height={200}>
                                <LineChart width={200} height={250} data={data[0].financialXrays.graph61} //style={{ height: "100%", width: "100%" }}
                                    margin={{ top: 10, right: 1, bottom: 30, left: -15 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis //padding={{ left: 30, right: 30 }} 
                                        dataKey="name" // Ensure this is a date string or formatted correctly
                                        padding={{ left: 1, right: 1 }}
                                        angle={-90} // Rotate labels for better visibility
                                        textAnchor="end" // Align text to the end
                                        //  // tickFormatter={(date) => {
                                        //  //     const parsedDate = new Date(date);
                                        //  //     return parsedDate.toLocaleDateString(); // Customize the format as needed
                                        //  // }}
                                        interval={0} // Show all ticks
                                        scale="point" // Force all data points to be equally spaced
                                        tick={{ fontSize: 10 }}

                                    />
                                    <YAxis style={{ fontSize: "12px" }}
                                        domain={domain61}
                                        tickCount={10}
                                        ticks={ticks61}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#1A5C62"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>*/}
                            <Chart
                                chartType="LineChart" // Use LineChart for the line graph with points
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph62}
                                options={optionsF63}
                            />
                            {/* <div className="data-box"> */}
                        </div>
                        <div className="graph-data">
                            <h5>Asset Turnover
                            </h5>
                        </div>
                    </div>
                    <div className="w-20">
                    <h5 className="heading3">Operating Margin</h5>  
                        <div className="graph-box grey-bordered mb-2">
                            {/* <ResponsiveContainer width="100%" height={200}>
                                <LineChart width={300} height={250} data={data[0].financialXrays.graph62} //style={{ height: "100%", width: "100%" }}
                                    margin={{ top: 10, right: 1, bottom: 30, left: -15 }}

                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" // Ensure this is a date string or formatted correctly
                                        padding={{ left: 1, right: 1 }}
                                        angle={-90} // Rotate labels for better visibility
                                        textAnchor="end" // Align text to the end
                                        //  // tickFormatter={(date) => {
                                        //  //     const parsedDate = new Date(date);
                                        //  //     return parsedDate.toLocaleDateString(); // Customize the format as needed
                                        //  // }}
                                        interval={0} // Show all ticks
                                        scale="point" // Force all data points to be equally spaced
                                        tick={{ fontSize: 10 }}

                                    />
                                    <YAxis style={{ fontSize: "12px" }}
                                        domain={domain62}
                                        tickCount={10}
                                        ticks={ticks62}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#1A5C62"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>*/}
                            <Chart
                                chartType="LineChart" // Use LineChart for the line graph with points
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph63}
                                options={optionsF64}
                            />
                            {/* <div className="data-box"> */}
                        </div>
                        <div className="graph-data">
                            <h5>Interest Efficiency
                            </h5>
                        </div>
                    </div>
                    <div className="w-20">
                    <h5 className="heading3">Operating Margin</h5>  
                        <div className="graph-box grey-bordered mb-2">
                            {/* <ResponsiveContainer width="100%" height={200}>
                                <LineChart width={300} height={250} data={data[0].financialXrays.graph63} //style={{ height: "100%", width: "100%" }}
                                    margin={{ top: 10, right: 1, bottom: 30, left: -15 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" // Ensure this is a date string or formatted correctly
                                        padding={{ left: 1, right: 1 }}
                                        angle={-90} // Rotate labels for better visibility
                                        textAnchor="end" // Align text to the end
                                        //  // tickFormatter={(date) => {
                                        //  //     const parsedDate = new Date(date);
                                        //  //     return parsedDate.toLocaleDateString(); // Customize the format as needed
                                        //  // }}
                                        interval={0} // Show all ticks
                                        scale="point" // Force all data points to be equally spaced
                                        tick={{ fontSize: 10 }}

                                    />
                                    <YAxis style={{ fontSize: "12px" }}
                                        domain={domain63}
                                        tickCount={10}
                                        ticks={ticks63}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#1A5C62"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>*/}
                            <Chart
                                chartType="LineChart" // Use LineChart for the line graph with points
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph64}
                                options={optionsF65}
                            />
                            {/* <div className="data-box"> */}
                        </div>
                        <div className="graph-data">
                            <h5>Financial Leverage
                            </h5>
                        </div>
                    </div>
                    <div className="w-20">
                    <h5 className="heading3">Operating Margin</h5>  
                        <div className="graph-box grey-bordered mb-2">
                            {/*<ResponsiveContainer width="100%" height={200}>
                                <LineChart width={300} height={250} data={data[0].financialXrays.graph64} //style={{ height: "100%", width: "100%" }}
                                    margin={{ top: 10, right: 1, bottom: 30, left: -15 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" // Ensure this is a date string or formatted correctly
                                        padding={{ left: 1, right: 1 }}
                                        angle={-90} // Rotate labels for better visibility
                                        textAnchor="end" // Align text to the end
                                        //  // tickFormatter={(date) => {
                                        //  //     const parsedDate = new Date(date);
                                        //  //     return parsedDate.toLocaleDateString(); // Customize the format as needed
                                        //  // }}
                                        interval={0} // Show all ticks
                                        scale="point" // Force all data points to be equally spaced
                                        tick={{ fontSize: 10 }}
                                    />
                                    <YAxis style={{ fontSize: "12px" }}
                                        domain={domain64}
                                        tickCount={10}
                                        ticks={ticks64}
                                        tickFormatter={(value) => new Intl.NumberFormat().format(value)}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#1A5C62"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>*/}
                            <Chart
                                chartType="LineChart" // Use LineChart for the line graph with points
                                width="100%"
                                height="400px"
                                data={data[0].financialXrays.graph65}
                                options={optionsF66}
                            />
                            {/* <div className="data-box"> */}
                        </div>
                        <div className="graph-data">
                            <h5>Tax Efficiency
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="right-corner-modal"
                fullscreen={true}
            >
                <Modal.Header closeButton>
                    <div className="data-heading ">
                        <h2 style={{ fontSize: "32px" }}>Financial X-Ray</h2>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <h3 style={{ color: "#666666", fontSize: "20px" }}>{tableName}</h3>
                    <table className='theme-table mt-3  w-100'>
                        <thead>
                            <tr>
                                {tableColumns.map((item) => (
                                    <th>{item}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>

                            {tableData.map((item) => (<tr>
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
                            </tr>))}
                        </tbody>
                    </table>
                </Modal.Body>

            </Modal> */}
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
                <Modal.Body style={{ maxHeight: '90vh', overflowY: 'auto' }}> {/* Limit height and add scroll */}
                    {/* <h3 style={{ color: "#666666", fontSize: "20px" }}>{tableName}</h3>
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
                    </table> */}



                    <h3 style={{ color: "#666666", fontSize: "20px" }}>{tablssss1.title}</h3>

                    <table className='theme-table mt-3 w-100'>
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
                    <span style={{ fontSize: "12px" }} className="d-block text-end mt-2">Source - Annual Report</span>


                    <h3 className="mt-5" style={{ color: "#666666", fontSize: "20px" }}>{tablssss2.title}</h3>
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
                    <span style={{ fontSize: "12px" }} className="d-block text-end mt-2">Source - Annual Report</span>


                    <h3 className="mt-5" style={{ color: "#666666", fontSize: "20px" }}>{tablssss3.title}</h3>
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
                    <span style={{ fontSize: "12px" }} className="d-block text-end mt-2">Source - Annual Report</span>


                    <h3 className="mt-5" style={{ color: "#666666", fontSize: "20px" }}>{tablssss4.title}</h3>

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
                    <span style={{ fontSize: "12px" }} className="d-block text-end mt-2">Source - Annual Report</span>

                </Modal.Body>
            </Modal>

        </>
    );
};

export default Financial;
