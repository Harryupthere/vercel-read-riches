import React, { useState,useEffect } from "react";
import Info from "../../components/img/info.svg"
import { Col, Row } from "react-bootstrap";
import { PieChart, Pie, Sector, Cell, Label, LabelList } from "recharts";
import { Tooltip as ReactTooltip } from 'react-tooltip'


const Headwinds = ({ data }) => {
    // State to store the clicked section data

    const [selectedSection, setSelectedSection] = useState(null);

    // Example data for the pie chart
    // const data1 = [
    //     { name: "Group A", value: 1, data:data[0].Porter[0] },
    //     { name: "Group B", value: 2, data: { dnamek: "hello k" } },
    //     { name: "Group C", value: 3, data: { dnamem: "hello m" } },
    //     { name: "Group D", value: 4, data: { dnameb: "hello b" } },
    //     { name: "Group E", value: 5, data: { dnamec: "hello c" } },
    // ];
    const data1 = [
        { name: "Group A", value: 1,value2:2, data: data[0].Porter[0] },
        { name: "Group B", value: 2,value2:2, data: data[0].Porter[1] },
        { name: "Group C", value: 3,value2:2, data:data[0].Porter[2] },
        { name: "Group D", value: 4,value2:2, data: data[0].Porter[3] },
        { name: "Group E", value: 5,value2:2, data: data[0].Porter[4] },
    ];
    // Handler to update selected section
    const handlePieClick = (entry) => {
        setSelectedSection(entry.data); // Set the clicked section's data
    };
    const [activeIndex, setActiveIndex] = useState(null);

    const onPieEnter = (index) => {
        setActiveIndex(index);
    };
    // Handler for mouse leave
    const onPieLeave = () => {
        setActiveIndex(null);
    };

    const tooltipData1111 = "Headwindsare challenges that slow down progress, like economic downturns or regulatory hurdles. Tailwindsare favourable conditions that drive growth, such as market trends or technological advances. Both impact a company or economy's performance.";
    
    const renderActiveShape = (props) => {
        const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;
      

        return (
            <g>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius + 10}
                    outerRadius={outerRadius + 10} // Increased outerRadius for hover effect
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />

            </g>
        );
    };


    useEffect(() => {
        setSelectedSection(data1[0]);
        setActiveIndex(0)
      }, []);
    
    
    return (
        <>
            <div id="list-item-5">
                <div className="data-heading mt-5">
                    <h2>Headwinds & Tailwinds <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content1111"/> <ReactTooltip
                                            id="quality-content1111"
                                            place="bottom"
                                            content={tooltipData1111}
                                            //  className="custom-tooltip"
                                            style={{ fontSize: "12px" }}
                                        /></h2>
                    <div className="rule" style={{ width: "350px" }}></div>
                </div>
              
                <Row className="w-100 mt-md-5 mt-2">
                    <Col md={6}>
                        <div className="list-box headwinds">
                            <h3>Headwinds</h3>
                            <div className="insight-list mt-3">
                                <ul>
                                    {data[0].HEADWINDS.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="list-box tailwind">
                            <h3>Tailwinds</h3>
                            <div className="insight-list mt-3">
                                <ul>
                                    {data[0].TAILWINDS.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div>
                    {/* <Row className="w-100 align-items-center mb-4">
                        <Col md={6}>
                            <div className="mt-4">
                                <PieChart width={400} height={350}>
                                    <Pie
                                        data={data1}
                                        activeIndex={activeIndex}
                                        activeShape={renderActiveShape}
                                        innerRadius={110}
                                        outerRadius={160}
                                        fill="#73BBC3"
                                        paddingAngle={5}
                                        dataKey="value"
                                        onClick={(entry) => handlePieClick(entry)} // Capture click events
                                        onMouseEnter={(_, index) => onPieEnter(index)}
                                        onMouseLeave={onPieLeave}
                                    >
                                    
                                        <LabelList
                                            dataKey="value"
                                            position="inside"
                                            style={{ fontSize: '16px', color: "#000" }}
                                            className="pie-text"
                                        />
                                        <Label
                                            value="Porter’s five forces"
                                            position="center"
                                            style={{ fontSize: "24px", fontWeight: "600", color: "#fff" }}
                                        />
                                        {data1.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={activeIndex === index ? '#1D666D' : "#73BBC3"}
                                            />
                                        ))}
                                    </Pie>

                                </PieChart>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="graph-box p-3">
                                {selectedSection ? (
                                    <>
                                        {Object.keys(selectedSection).map((key, index) => (
                                            <div key={index}>
                                                <h3 style={{ fontSize: "20px" }}>{key}</h3>
                                                <p>{selectedSection[key]}</p>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <p>Select a section to see the details.</p>
                                )}
                            </div>
                        </Col>

                    </Row> */}
                 <Row className="w-100 align-items-center mb-4">
                  
  {/* <Col md={6}>
    <div className="mt-4">
      <PieChart width={400} height={350}>
        <Pie
          data={data1}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          innerRadius={110}
          outerRadius={160}
          fill="#73BBC3"
          paddingAngle={5}
          dataKey="value2"
          onMouseEnter={(_, index) => {
            setSelectedSection(data1[index]); // Set section on hover
            setActiveIndex(index); // Set active index for color change
          }}
          onMouseLeave={() => {
            setSelectedSection(null); // Reset on leave
            setActiveIndex(null); // Remove active state
          }}
        >

          <LabelList
            dataKey="value"
            position="inside"
            style={{ fontSize: '16px', color: "#000" }}
            className="pie-text"
          />
          <Label
            value="Porter’s five forces"
            position="center"
            style={{ fontSize: "24px", fontWeight: "600", color: "#fff" }}
          />
          {data1.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={activeIndex === index ? '#1D666D' : "#73BBC3"} // Change fill color on hover
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  </Col>
  <Col md={6}>
    <div className="graph-box p-3">
      {selectedSection ? (
        <>
            <div>
              <h3 style={{ fontSize: "20px" }}>{Object.keys(selectedSection.data)}</h3>
              <p>{selectedSection.data[Object.keys(selectedSection.data)]}</p>
            </div>
         
        </>
      ) : (
        <p>Hover over a section to see the details.</p>
      )}
    </div>
  </Col> */}


  <Col md={6}>
        <div className="mt-4">
          <PieChart width={400} height={350}>
            <Pie
              data={data1}
              activeIndex={activeIndex}
              activeShape={renderActiveShape} // Optional if you want active shapes
              innerRadius={110}
              outerRadius={160}
              fill="#73BBC3"
              paddingAngle={5}
              dataKey="value2"
              onClick={(_, index) => {
                setSelectedSection(data1[index]); // Set section on click
                setActiveIndex(index); // Set active index for color change
              }}
            >
              <LabelList
                dataKey="value"
                position="inside"
                style={{ fontSize: '16px', color: "#000" }}
                className="pie-text"
                
              />

                                     
              <Label
                value="Porter’s five forces"
                position="center"
                style={{ fontSize: "24px", fontWeight: "600", color: "#fff" }}
              />
              {data1.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={activeIndex === index ? '#1D666D' : "#73BBC3"} // Change fill color on click
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </Col>
      <Col md={6}>
        <div className="graph-box p-3">
          {selectedSection ? (
            <>
              <div>
                <h3 style={{ fontSize: "20px" }}>{Object.keys(selectedSection.data)}</h3>
                <p>{selectedSection.data[Object.keys(selectedSection.data)]}</p>
              </div>
            </>
          ) : (
            <p>Click on a section to see the details.</p>
          )}
        </div>
      </Col>
</Row>


                </div>
            </div>
        </>
    );
};


export default Headwinds;
