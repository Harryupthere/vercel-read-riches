import React, { useState, useEffect } from "react";
import Info from "../../components/img/info.svg"
import { Col, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import SearchImg from "../../components/img/search.svg"
import { Tooltip as ReactTooltip } from 'react-tooltip'

import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ScatterChart,
    Scatter,
    ZAxis
} from "recharts";

const data1 = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Competitor = ({ comname, data }) => {
    // const [data12,setDatass]=useState([])

    //     useEffect(() => {
    //     let apiData=data[1].barbar

    //         const formattedData = apiData.map(item => ({
    //         ...item,
    //         'Operating Profit Margin %': parseFloat(item['Operating Profit Margin %']),
    //       }));

    //       setDatass(formattedData);
    //     }, []);
    let data12 = data[1].barbar

    const [expandedWhy, setExpandedWhy] = useState(false); // For 'why' section

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    let texti = "It involves analyzing and comparing a company’s performance, strategies, and market position against its competitors to identify strengths and weaknesses."

    return (
        <>
            <div>
                <div className="data-heading">
                    <h2>Competitor check <img src={Info} alt="info" className="ms-2 info-icon" data-tooltip-id="quality-texti" />  <ReactTooltip
                        id="quality-texti"
                        place="bottom"
                        content={texti}
                        style={{ fontSize: "12px" }}
                    />
                    </h2>
                    <div className="rule" style={{ width: "300px" }}></div>
                </div>
                <div className="my-4">


                    <ResponsiveContainer width="100%" height={400}>
                        <ScatterChart
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid />
                            <XAxis dataKey="Operating Profit Margin" name="Operating Profit Margin" />
                            <YAxis dataKey="PE Ratio" name="PE Ratio" />
                            <ZAxis dataKey="Revenue (₹ Crs)" range={[60, 400]} name="Revenue (₹ Crs)" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Legend />
                            <Scatter name="Company Name" data={data12} fill="#15464a" shape="circle" />
                        </ScatterChart>
                    </ResponsiveContainer>

                    {/* <ResponsiveContainer width="100%" height={400}>
                        <ScatterChart
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid />
                            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="A school" data={data} fill="#8884d8" shape="circle" size="z" />
                        </ScatterChart>
                    </ResponsiveContainer> */}
                    <span style={{ fontSize: "12px" }} className="d-block text-end mt-2">Source - Annual Report</span>
                </div>
            </div>
            <section>
                <div className="color-section">
                    <div className="dark-bg">
                        <div className="light-bg">
                            <div className="why">
                                <div className="d-flex align-items-center mb-3">  <img src={SearchImg} alt="search" /><h2>WHY?</h2></div>
                                <h3>{comname} lost its shares</h3>
                                <p>
                                    {/* {data[0].why} */}

                                    {expandedWhy ? data[0].why : truncateText(data[0].why, 48)}
                                    {data[0].why.split(" ").length > 48 && (
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
        </>
    );
};

export default Competitor;
