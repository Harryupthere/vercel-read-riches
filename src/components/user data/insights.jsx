import React, { useState } from "react";
import Info from "../../components/img/info.svg"
import { Col, Row } from "react-bootstrap";
import SearchImg from "../../components/img/search.svg"
import { Tooltip as ReactTooltip } from 'react-tooltip'

import { Chart } from "react-google-charts";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

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

const Insight = ({comname, data }) => {
    const [expandedWhy, setExpandedWhy] = useState(false); // For 'why' section

    const insights = data[0].industryInside.details
    const getRandomColor = (index) => {
        // const colors = ['#FDB600', '#0096FF', '#9787FF', '#FF6384', '#36A2EB', '#FFCE56'];
        const colors = [ '#15464a','#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'];
        return colors[index % colors.length]; // Loop through the colors array
    };

    const tooltipData111 = "Key understandings of market trends, challenges, and opportunities within a specific sector.";
   
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };


    const optionsG1 = {
        //title: "Revenue Distribution  - Business Divisions",
        chartArea: { width: "50%" },
        isStacked: true,
        titleTextStyle: {
          fontSize: 16, // Increase title font size
        },
        vAxis: {
          title: "Values",
          minValue: 0,
          titleTextStyle: {
            fontSize: 18, // Increase horizontal axis title font size
          },
          textStyle: {
            fontSize: 14, // Increase horizontal axis labels font size
          },
        },
        hAxis: {
          title: "Segment",
          titleTextStyle: {
            fontSize: 18, // Increase vertical axis title font size
          },
          textStyle: {
            fontSize: 14, // Increase vertical axis labels font size
          },
        },
        colors: ['#15464a','#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
      };
      const optionsG2 = {
        //title: "Revenue Distribution  - Business Divisions",
        chartArea: { width: "50%" },
        isStacked: true,
        titleTextStyle: {
          fontSize: 16, // Increase title font size
        },
        vAxis: {
          title: "Values",
          minValue: 0,
          titleTextStyle: {
            fontSize: 18, // Increase horizontal axis title font size
          },
          textStyle: {
            fontSize: 14, // Increase horizontal axis labels font size
          },
        },
        hAxis: {
          title: "Segment",
          titleTextStyle: {
            fontSize: 18, // Increase vertical axis title font size
          },
          textStyle: {
            fontSize: 14, // Increase vertical axis labels font size
          },
        },
        colors: ['#15464a','#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
      };
    return (
        <>
            <div id="list-item-4">
                <div className="data-heading d-flex justify-content-between align-items-center">
                    <div>
                        <h2>Industry insights <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content111"/>
                        <ReactTooltip
                                            id="quality-content111"
                                            place="bottom"
                                            content={tooltipData111}
                                            //  className="custom-tooltip"
                                            style={{ fontSize: "12px" }}
                                        /></h2>
                        <div className="rule" style={{ width: "290px" }}></div>
                    </div>
                    {/* <h3 className="appendix">Appendix<i class="arrow"></i></h3> */}
                </div>
                <div className="insight-list mt-3">
                    {/* <ul>
                        <li>Tata Motors thrives on a multi-pronged approach. They invest heavily in R&D to deliver innovative vehicles across a diverse product portfolio, from cars and trucks to electric options. This innovation is backed by strong manufacturing practices and a global sales network.</li>
                        <li>Their focus on sustainability attracts environmentally conscious customers, while their commitment to social responsibility strengthens stakeholder relationships.</li>
                        <li>
                            Tata Motors thrives on a multi-pronged approach. They invest heavily in R&D to deliver innovative vehicles across a diverse product portfolio, from cars and trucks to electric options.
                        </li>
                        <li>This innovation is backed by strong manufacturing practices and a global sales network. </li>
                        <li>Their focus on sustainability attracts environmentally conscious customers, while their commitment to social responsibility strengthens stakeholder relationships.</li>
                    </ul> */}

                    <ul>
                        {insights.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="mt-4 graph-box">
                            {/* <p className="text-center">Business Segments</p> */}
                            {/* <BarChart
                                width={500}
                                height={300}
                                style={{ height: "100%", width: "100%" }}
                                data={data1}
                                barSize={20}
                                barCategoryGap={10}
                                barGap={5}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" style={{ fontSize: "12px", fontWeight: "500" }} />
                                <YAxis style={{ fontSize: "12px", fontWeight: "500" }} />
                                <Tooltip />
                                <Bar dataKey="pv" stackId="a" fill="#9787FF" />
                                <Bar dataKey="amt" stackId="a" fill="#0096FF" radius={[10, 10, 0, 0]} />
                            </BarChart> */}
                            {/* <BarChart
                                width={500}
                                height={300}
                                style={{ height: "100%", width: "100%" }}
                                data={data[0].industryInsights.graph1}
                                barSize={20}
                                barCategoryGap={10}
                                barGap={5}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" style={{ fontSize: "12px", fontWeight: "500" }} />
                                <YAxis style={{ fontSize: "12px", fontWeight: "500" }} />
                                <Tooltip cursor={{ fill: 'transparent' }} /> 
                                {Object.keys(data[0].industryInsights.graph1[0])
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
                            </BarChart> */}

                            <Chart
                chartType="ColumnChart" // Change from BarChart to ColumnChart
                width="100%"
                height="400px"
                data={data[0].industryInsights.graph1}
                options={optionsG1}
              />
                        </div>
            <span style={{ fontSize: "12px" }} className="d-block text-end">Source - Annual Report</span>

                    </Col>
                    <Col md={6}>
                        <div className="mt-4 graph-box">
                            {/* <p className="text-center">Business Segments</p> */}
                            {/* <BarChart
                                width={500}
                                height={300}
                                style={{ height: "100%", width: "100%" }}
                                data={data1}
                                barSize={20}
                                barCategoryGap={10}
                                barGap={5}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" style={{ fontSize: "12px", fontWeight: "500" }} />
                                <YAxis style={{ fontSize: "12px", fontWeight: "500" }} />
                                <Tooltip />
                                <Bar dataKey="pv" stackId="a" fill="#9787FF" />
                                <Bar dataKey="amt" stackId="a" fill="#0096FF" radius={[10, 10, 0, 0]} />
                            </BarChart> */}
                            {/* <BarChart
                                width={500}
                                height={300}
                                style={{ height: "100%", width: "100%" }}
                                data={data[0].industryInsights.graph2}
                                barSize={20}
                                barCategoryGap={10}
                                barGap={5}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" style={{ fontSize: "12px", fontWeight: "500" }} />
                                <YAxis style={{ fontSize: "12px", fontWeight: "500" }} />
                                <Tooltip cursor={{ fill: 'transparent' }} /> 
                                {Object.keys(data[0].industryInsights.graph2[0])
                                    .filter(key => key !== 'name')
                                    .map((key, index, arr) => (
<>
                                        <Bar
                                            key={key}
                                            dataKey={key}
                                            stackId="a"
                                            fill={getRandomColor(index)}
                                            radius={index === arr.length - 1 ? [10, 10, 0, 0] : [0, 0, 0, 0]}
                                            isAnimationActive={false}
                                        />
                                        </>
                                    ))}
                            </BarChart> */}

                            
<Chart
                chartType="ColumnChart" // Change from BarChart to ColumnChart
                width="100%"
                height="400px"
                data={data[0].industryInsights.graph2}
                options={optionsG2}
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
                                    {/* <p>Tata Motors thrives on a multi-pronged approach. They invest heavily in R&D to deliver innovative vehicles across a diverse product portfolio, from cars and trucks to electric options.
                                        This innovation is backed by strong manufacturing practices and a global sales network.
                                        Their focus on sustainability attracts environmentally conscious customers, while their commitment to social responsibility strengthens stakeholder relationships.</p> */}
                                    {/* <p>{data[0].industryInside.why}.</p> */}
                                    <p>
                                        {/* Conditionally render truncated or full content */}
                                        {expandedWhy ? data[0].industryInside.why : truncateText(data[0].industryInside.why, 48)}
                                        {data[0].industryInside.why.split(" ").length > 48 && (
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
            </div>
        </>
    );
};

export default Insight;
