import React, { useState, useEffect } from "react";
import Info from "../../components/img/info.svg"
import SearchImg from "../../components/img/search.svg"
import { Tooltip as ReactTooltip } from 'react-tooltip'

import { Chart } from "react-google-charts";


const Competitor = ({ loading,comname, data }) => {
       const [expandedWhy, setExpandedWhy] = useState(false); // For 'why' section

       if (loading) {
        return <div>Loading...</div>;
    }
  
    // Check if data has content
    if (!data || data.length === 0) {
        return <div>No data available.</div>;
    }
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    let texti = "It involves analyzing and comparing a company’s performance, strategies, and market position against its competitors to identify strengths and weaknesses."
    const options1 = {
        hAxis: { title: "Operating Profit Margin %" , gridlines: {
            color: 'none' 
          }},  
        vAxis: { title: "PE Ratio", gridlines: {
            color: 'none' 
          } },                 
        bubble: {
            textStyle: {
                opacity: 0 
                //fontSize: 0,
               // fontName: "Arial",
               // bold: true
            }
        },
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
            <div>
                <div className="data-heading">
                    <h2>Competitor check <img src={Info} alt="info" className="ms-2 info-icon" data-tooltip-id="quality-texti" />  <ReactTooltip
                        id="quality-texti"
                        place="bottom"
                        content={texti}
                        style={{ fontSize: "12px", width: "200px" ,zIndex:'1200'}}                    />
                    </h2>
                    <div className="rule" style={{ width: "300px" }}></div>
                </div>
                <div className="my-4">

                    <Chart
                        chartType="BubbleChart"
                        width="105%"
                        height="450px"
                        data={data[3]}
                        options={options1}
                    />

                    <span style={{ fontSize: "12px" }} className="d-block text-end mt-2">{data[2].Source18}??</span>
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
