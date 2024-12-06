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


const Insight = ({loading,comname, data }) => {
    const [expandedWhy, setExpandedWhy] = useState(false); // For 'why' section
    const [showAllPoints, setShowAllPoints] = useState(false); // Control whether to show all points or just the first 5

    if (loading) {
      return <div>Loading...</div>;
  }

  // Check if data has content
  if (!data || data.length === 0) {
      return <div>No data available.</div>;
  }
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
        chartArea: { top:"13%",width: "50%" },
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
          gridlines: {
            color: 'none' // Remove vertical gridlines
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
          gridlines: {
            color: 'none' // Remove vertical gridlines
          },
        },
        colors: ['#15464a','#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
        tooltip: {
          isHtml: true, // Enables HTML tooltips
          textStyle: {
            color: '#000000', // Tooltip text color
          },
          showColorCode: true, // Displays the color of the series in the tooltip
        },
      };
      const optionsG2 = {
        //title: "Revenue Distribution  - Business Divisions",
        chartArea: {  top:"13%",width: "50%" },
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
          gridlines: {
            color: 'none' // Remove vertical gridlines
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
          gridlines: {
            color: 'none' // Remove vertical gridlines
          },
        },
        colors: ['#15464a','#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
        tooltip: {
          isHtml: true, // Enables HTML tooltips
          textStyle: {
            color: '#000000', // Tooltip text color
          },
          showColorCode: true, // Displays the color of the series in the tooltip
        },
      };


      const MAX_POINTS = 10; // Number of points to display initially
    
      // Function to handle toggling between showing all points or the limited list
      const handleTogglePoints = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setShowAllPoints(!showAllPoints); // Toggle between showing all and limited points
      };

      if (loading) {
        return <div>Loading...</div>;
      }
    return (
        <>
            <div >
                <div className="data-heading d-flex justify-content-between align-items-center">
                    <div>
                        <h2>Industry Insights <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content111"/>
                        <ReactTooltip
                                            id="quality-content111"
                                            place="bottom"
                                            content={tooltipData111}
                                            //  className="custom-tooltip"
                                            style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}                                        /></h2>
                        <div className="rule" style={{ width: "290px" }}></div>
                    </div>
                    {/* <h3 className="appendix">Appendix<i class="arrow"></i></h3> */}
                </div>
                <div className="insight-list mt-3">

                    {/* <ul>
                        {insights.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul> */}

                    <ul>
                        {/* Slice the insights array to show the first 5 points or all based on the showAllPoints flag */}
                        {insights.slice(0, showAllPoints ? insights.length : MAX_POINTS).map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>

                    {/* Show "Read More" link if there are more than 5 points */}
                    {insights.length > MAX_POINTS && (
                        <a
                            href="#"
                            onClick={handleTogglePoints}
                            style={{ color: "#007bff", cursor: "pointer" }}
                        >
                            {showAllPoints ? "Show Less" : "Read More"}
                        </a>
                    )}
                </div>
                <Row>
                    <Col md={6}>
                        <div className="mt-4 graph-box">


                            <Chart
                chartType="ColumnChart" // Change from BarChart to ColumnChart
                width="100%"
                height="400px"
                data={data[0].industryInsights.graph1}
                options={optionsG1}
              />
                        </div>
            <span style={{ fontSize: "12px" }} className="d-block text-end">{data[0].
industryInsightsSource.Source7}</span>

                    </Col>
                    <Col md={6}>
                        <div className="mt-4 graph-box">
                          

                            
<Chart
                chartType="ColumnChart" // Change from BarChart to ColumnChart
                width="100%"
                height="400px"
                data={data[0].industryInsights.graph2}
                options={optionsG2}
              />
                        </div>
            <span style={{ fontSize: "12px" }} className="d-block text-end">{data[0].
industryInsightsSource.Source8}</span>

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
