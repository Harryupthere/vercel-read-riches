import React, { useState, useEffect } from "react";
import Info from "../../components/img/info.svg"
import { Col, Row } from "react-bootstrap";
import { PieChart, Pie, Sector, Cell, Label, LabelList } from "recharts";
import { Tooltip as ReactTooltip } from 'react-tooltip'

const forcesData = [
  {
    id: 1,
    title: "Threat of Substitute",
    text: "The threat of substitutes is low. In rural markets, limestone is a substitute for paint. Absences to paint and wall coverings exist in urban areas.",
    label: "1",
  },
  {
    id: 2,
    title: "Bargaining Power of Buyers",
    text: "Buyers have moderate power due to the availability of multiple paint brands and products.",
    label: "2",
  },
  {
    id: 3,
    title: "Bargaining Power of Suppliers",
    text: "Suppliers have low power due to the high number of suppliers and availability of raw materials.",
    label: "3",
  },
  {
    id: 4,
    title: "Industry Rivalry",
    text: "High competition exists among established paint companies, leading to price wars and marketing battles.",
    label: "4",
  },
  {
    id: 5,
    title: "Threat of New Entrants",
    text: "The threat is moderate due to high initial investment but attractive market growth opportunities.",
    label: "5",
  },
];

const Headwinds = ({ loading, data }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [showFullText, setShowFullText] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(null);
  const [showFullHeadwinds, setShowFullHeadwinds] = useState(false);
  const [showFullTailwinds, setShowFullTailwinds] = useState(false);
  const MAX_WORDS = 18;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const radiusOuter = 80;
  const radiusInner = 50;
  const center = 100;
  const totalSegments = forcesData.length;
  const angleStep = (2 * Math.PI) / totalSegments;
  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedSection(data[0].Porter[0]);
      setActiveIndex(0);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if data has content
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  const handleReadMore = (e) => {
    e.preventDefault();
    setShowFullText(!showFullText);
  };

  const getDisplayText = (text) => {
    const words = text.split(" ");
    if (words.length > MAX_WORDS && !showFullText) {
      return `${words.slice(0, MAX_WORDS).join(" ")}...`;
    }
    return text;
  };

  // Define data1 safely after confirming data availability
  const data1 = data.length > 0 ? [
    { name: "Group A", value: 1, value2: 2, data: data[0]?.Porter?.[0] || 'No data' },
    { name: "Group B", value: 2, value2: 2, data: data[0]?.Porter?.[1] || 'No data' },
    { name: "Group C", value: 3, value2: 2, data: data[0]?.Porter?.[2] || 'No data' },
    { name: "Group D", value: 4, value2: 2, data: data[0]?.Porter?.[3] || 'No data' },
    { name: "Group E", value: 5, value2: 2, data: data[0]?.Porter?.[4] || 'No data' },
  ] : [];

  const tooltipData1111 = "Headwinds are challenges that slow down progress, like economic downturns or regulatory hurdles. Tailwinds are favourable conditions that drive growth, such as market trends or technological advances. Both impact a company or economy's performance.";

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius + 15}
          outerRadius={outerRadius + 15}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  const toggleHeadwinds = () => setShowFullHeadwinds(!showFullHeadwinds);
  const toggleTailwinds = () => setShowFullTailwinds(!showFullTailwinds);

  return (
    <>
      <div >
        <div className="data-heading mt-5">
          <h2>Headwinds & Tailwinds <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content1111" /> <ReactTooltip
            id="quality-content1111"
            place="bottom"
            content={tooltipData1111}
            //  className="custom-tooltip"
            style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} /></h2>
          <div className="rule" style={{ width: "350px" }}></div>
        </div>


        <Row className="w-100 mt-md-5 mt-2">
          <Col md={6}>
            <div className="list-box headwinds">
              <h3>Headwinds</h3>
              <div className="insight-list mt-3">
                <ul>
                  {data[0].HEADWINDS.slice(0, showFullHeadwinds ? data[0].HEADWINDS.length : 4).map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                {data[0].HEADWINDS.length > 4 && (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleHeadwinds();
                    }}
                    style={{ color: "#007bff", cursor: "pointer" }}
                  >
                    {showFullHeadwinds ? "Show Less" : "Read More"}
                  </a>
                )}
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="list-box tailwind">
              <h3>Tailwinds</h3>
              <div className="insight-list mt-3">
                <ul>
                  {data[0].TAILWINDS.slice(0, showFullTailwinds ? data[0].TAILWINDS.length : 4).map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                {data[0].TAILWINDS.length > 4 && (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleTailwinds();
                    }}
                    style={{ color: "#007bff", cursor: "pointer" }}
                  >
                    {showFullTailwinds ? "Show Less" : "Read More"}
                  </a>
                )}
              </div>
            </div>
          </Col>
        </Row>

        <div>

          <Row className="w-100 align-items-center mb-4">
            {/* <div className="porters-container"> */}
            <Col md={6}>
            <svg viewBox="0 0 200 200" className="donut-chart">
  {forcesData.map((force, index) => {
    const startAngle = index * angleStep;
    const endAngle = (index + 1) * angleStep;

    // Calculate the outer arc coordinates
    const x1Outer = center + radiusOuter * Math.cos(startAngle);
    const y1Outer = center + radiusOuter * Math.sin(startAngle);
    const x2Outer = center + radiusOuter * Math.cos(endAngle);
    const y2Outer = center + radiusOuter * Math.sin(endAngle);

    // Calculate the inner arc coordinates
    const x1Inner = center + radiusInner * Math.cos(endAngle);
    const y1Inner = center + radiusInner * Math.sin(endAngle);
    const x2Inner = center + radiusInner * Math.cos(startAngle);
    const y2Inner = center + radiusInner * Math.sin(startAngle);

    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

    // Define path data for the donut segment
    const pathData = `
      M ${x1Outer} ${y1Outer}
      A ${radiusOuter} ${radiusOuter} 0 ${largeArcFlag} 1 ${x2Outer} ${y2Outer}
      L ${x1Inner} ${y1Inner}
      A ${radiusInner} ${radiusInner} 0 ${largeArcFlag} 0 ${x2Inner} ${y2Inner}
      Z
    `;

    // Midpoint angle for positioning and translation
    const midAngle = (startAngle + endAngle) / 2;

    // Calculate translation for active segment
    const isActive = activeIndex === index;
    const offsetDistance = isActive ? 10 : 0; // Adjust this value to control the pop-out effect
    const translateX = offsetDistance * Math.cos(midAngle);
    const translateY = offsetDistance * Math.sin(midAngle);

    // Text positioning
    const textX = center + (radiusInner + (radiusOuter - radiusInner) / 2) * Math.cos(midAngle);
    const textY = center + (radiusInner + (radiusOuter - radiusInner) / 2) * Math.sin(midAngle);

    // Text background rectangle
    const textWidth = 17;
    const textHeight = 17;
    const rectX = textX - textWidth / 2;
    const rectY = textY - textHeight / 2;

    return (
      <g
        key={force.id}
        transform={`translate(${translateX}, ${translateY})`}
        onClick={() => handleClick(index)}
      >
        {/* Donut segment */}
        <path
          d={pathData}
          className={`segment ${isActive ? "active" : ""}`}
        />
        {/* Background rectangle for text */}
        <rect
          x={rectX}
          y={rectY}
          width={textWidth}
          height={textHeight}
          rx="10"
          ry="10"
          className={`segment-label-bg ${isActive ? "active-bg" : ""}`}
        />
        {/* Text label */}
        <text
          x={textX}
          y={textY}
          textAnchor="middle"
          dy=".35em"
          className={`segment-label ${isActive ? "active-label" : ""}`}
        >
          {force.label}
        </text>
      </g>
    );
  })}

  <text x="50%" y="48%" textAnchor="middle" dy=".3em" className="center-text">
    Porter's Five
  </text>
  <text x="50%" y="54%" textAnchor="middle" dy=".3em" className="center-text">
    Forces
  </text>
</svg>

            </Col>
            <Col md={6}>
              <div className="">
                <div className="force-details">
                  <h3>{forcesData[activeIndex].title}</h3>
                  <p>{forcesData[activeIndex].text}</p>
                </div>
              </div>
            </Col>

            {/* </div> */}



            {/* <Col md={6}>
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
                      setShowFullText(false);
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
                {selectedSection != null ? (
                  <>
                    <div>
                      <h3 style={{ fontSize: "20px" }}>
                        {selectedSection.data ? Object.keys(selectedSection.data).join(', ') : 'No keys available'}
                      </h3>
                      <p>
                        {selectedSection.data && Object.keys(selectedSection.data).length > 0 ? (
                          getDisplayText(
                            selectedSection.data[Object.keys(selectedSection.data)[0]] || 'No data available'
                          )
                        ) : 'No data available'}

                        {selectedSection.data && Object.keys(selectedSection.data).length > 0 && (
                          selectedSection.data[Object.keys(selectedSection.data)[0]] &&
                            selectedSection.data[Object.keys(selectedSection.data)[0]].split(" ").length > MAX_WORDS ? (
                            <a
                              href="#"
                              onClick={handleReadMore}
                              style={{ color: "#007bff", cursor: "pointer" }}
                            >
                              {showFullText ? " Show Less" : " Read More"}
                            </a>
                          ) : null
                        )}
                      </p>
                    </div>
                  </>
                ) : (
                  <p>Click on a section to see the details.</p>
                )}
              </div>
            </Col> */}
          </Row>


        </div>
      </div>
    </>
  );
};


export default Headwinds;
