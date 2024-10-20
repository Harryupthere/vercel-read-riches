import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Info from "../../components/img/info.svg"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  PieChart, Pie, Label
} from "recharts";
import Icon1 from "../../components/img/hotspot.svg"
import Icon2 from "../../components/img/doller.svg"
import Icon3 from "../../components/img/polymer.svg"
import { Chart } from "react-google-charts";
const data1 = [

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
  }
];

const CompanyProfile = ({ comname, data }) => {

  console.log(data, "//")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);


  const [showAll, setShowAll] = useState(false);
  const handleCloseAll = () => setShowAll(false);
  const handleShowAll = () => setShowAll(true);

  const getRandomColor = (index) => {
    const colors = ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'];
    return colors[index % colors.length]; // Loop through the colors array
  };
  const COLORS = ["#9787FF", "#FFA5DA", "#0096FF", "#1d666d", '#FF6384'];
  let dataWithNumberValues = data[0].companyProfileGraph.graph6


  const [expandedDetails, setExpandedDetails] = useState(false); // For details section
  const [expandedWhy1, setExpandedWhy1] = useState(false); // For 'why' section
  const [expandedWhy2, setExpandedWhy2] = useState(false); // For 'why' section
  const [expandedWhy3, setExpandedWhy3] = useState(false); // For 'why' section

  // Helper function to truncate text
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };




  const [showTooltip, setShowTooltip] = useState(false);

  // Example data from state
  const tooltipData11 = "determining the sustainability of revenue using three factors which are Predictability, Profitability and Plurality.";
  const tooltipData22 = "Stable, recurring income that ensures reliable cash flow with certainty.";
  const tooltipData33 = "Revenue that generates strong margins and efficiently converts to profits.";
  const tooltipData44 = "A varied revenue base reducing dependency on any single source, increasing resilience.";


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
    colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
  };
  const optionsG2 = {
    //title: "Revenue Distribution  - Geographical",
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
    colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
  };



  const optionsG3 = {
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
    colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
  };
  const optionsG4 = {
    //title: "Revenue Distribution  - Geographical",
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
    colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
  };
  const optionsG5 = {
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
    colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
  };


  const optionsG7 = {
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
      title: "Mode",
      titleTextStyle: {
        fontSize: 18, // Increase vertical axis title font size
      },
      textStyle: {
        fontSize: 14, // Increase vertical axis labels font size
      },
    },
    colors: ['#15464a', '#1d666d', '#2f878d'],
  };
  return (
    <>
      <div id="list-item-3">
        <div className="data-heading d-flex justify-content-between mb-4 mt-5">
          <div>
            <h2>Company profile </h2>
            <div className="rule" style={{ width: "280px" }}></div></div>

          <h3 className="appendix cursor-pointer" onClick={handleShow4}>Appendix<i class="arrow"></i></h3>

        </div>
        <div>
          <h3 className="heading2">Business model </h3>

          {/* <p className="content2 mt-3">Tata Motors is a major Indian automaker, part of the Tata Group conglomerate. They produce cars, trucks, buses, and even electric vehicles.  They're the leader in commercial vehicles in Tata Motors is a major Indian automaker, part of the Tata Group conglomerate. They produce cars, trucks, buses, and even electric vehicles.  They're the leader in commercial vehicles in </p> */}
          {/* <p className="content2 mt-3">{data[0].companyProfile.details}</p> */}

          <p className="content2 mt-3">{expandedDetails ? data[0].companyProfile.details : truncateText(data[0].companyProfile.details, 48)}

            {data[0].companyProfile.details.split(" ").length > 48 && (
              <button onClick={() => setExpandedDetails(!expandedDetails)} className="btn btn-link p-0 readmore">
                {expandedDetails ? "Show Less" : "Read more"}
              </button>
            )}
          </p>


        </div>
        <h3 className="heading2 ">Revenue mix</h3>
        <Row>
          {/* <Col md={6}>
            <div className="mt-2 graph-box">
              <p className="text-center">Revenue Distribution  - Business Divisions</p>
              <BarChart
                width={500}
                height={300}
                style={{ height: "100%", width: "100%" }}
                data={data[0].companyProfileGraph.graph1}
                barSize={20}
                barCategoryGap={10}
                barGap={5}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{ fontSize: "12px", fontWeight: "500" }} />
                <YAxis style={{ fontSize: "12px", fontWeight: "500" }} />
                <Tooltip cursor={{ fill: 'transparent' }} /> 
                {Object.keys(data[0].companyProfileGraph.graph1[0])
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
            </div>
          </Col> */}

          <Col md={6}>
            <div className="mt-2 graph-box">
              <p className="text-center">Revenue Distribution  - Business Divisions</p>
              <Chart
                chartType="ColumnChart" // Change from BarChart to ColumnChart
                width="100%"
                height="400px"
                data={data[0].companyProfileGraph.graph1}
                options={optionsG1}
              />
            </div>
            <span style={{ fontSize: "12px" }} className="d-block text-end">Source - Annual Report</span>
          </Col>
          <Col md={6}>
            <div className="mt-2 graph-box">
              {/* <p className="text-center">Revenue Distribution  - Geographical
              </p>
              <BarChart
                width={500}
                height={300}
                style={{ height: "100%", width: "100%" }}
                data={data[0].companyProfileGraph.graph2}
                barSize={20}
                barCategoryGap={10}
                barGap={5}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{ fontSize: "12px", fontWeight: "500" }} />
                <YAxis style={{ fontSize: "12px", fontWeight: "500" }} />
                <Tooltip cursor={{ fill: 'transparent' }} /> 
                {Object.keys(data[0].companyProfileGraph.graph2[0])
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
              <p className="text-center">Revenue Distribution  - Geographical
              </p>
              <Chart
                chartType="ColumnChart" // Change from BarChart to ColumnChart
                width="100%"
                height="400px"
                data={data[0].companyProfileGraph.graph2}
                options={optionsG2}
              />
            </div>
            <span style={{ fontSize: "12px" }} className="d-block text-end">Source</span>
          </Col>
        </Row>
        <section>
          <div className="data-heading d-flex justify-content-between mt-5 mb-2">
            <h3 className="heading2">
              Quality of Revenue
              <div className=" d-inline">
                <img
                  src={Info}
                  alt="info"
                  className="ms-2 "
                  data-tooltip-id="quality-content11"
                />

                <ReactTooltip
                  id="quality-content11"
                  place="bottom"
                  content={tooltipData11}
                  style={{ fontSize: "12px" }}
                />

                <ReactTooltip
                  id="quality-content22"
                  place="bottom"
                  content={tooltipData22}
                  //  className="custom-tooltip"
                  style={{ fontSize: "12px" }}
                /> <ReactTooltip
                  id="quality-content33"
                  place="bottom"
                  content={tooltipData33}
                  //  className="custom-tooltip"
                  style={{ fontSize: "12px" }}
                /> <ReactTooltip
                  id="quality-content44"
                  place="bottom"
                  content={tooltipData44}
                  //  className="custom-tooltip"
                  style={{ fontSize: "12px" }}
                />


              </div>
            </h3>
            <h3 className="appendix cursor-pointer" onClick={handleShowAll}>Appendix<i class="arrow"></i></h3>
          </div>
          <Row>
            <Col md={4}>
              <div className={`quality-box ${expandedWhy1 ? "" : "quality-min"} `}>
                <div className="d-flex align-items-center" >
                  <div className="quality-icon">
                    <img src={Icon1} />
                  </div>
                  <h3 className="mb-0">Predictability <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content22" /></h3></div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p> */}
                {/* <p>{data[0].companyProfile.Predictability}</p> */}

                <p>{expandedWhy1 ? data[0].companyProfile.Predictability : truncateText(data[0].companyProfile.Predictability, 48)}

                  {data[0].companyProfile.Predictability.split(" ").length > 48 && (
                    <button onClick={() => setExpandedWhy1(!expandedWhy1)} className="btn btn-link p-0 readmore">
                      {expandedWhy1 ? "Show Less" : "Read more"}
                    </button>
                  )}
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`quality-box ${expandedWhy2 ? "" : "quality-min"} `}>
                <div className="d-flex align-items-center" >
                  <div className="quality-icon">
                    <img src={Icon2} />
                  </div>
                  <h3 className="mb-0">Profitability <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content33" /></h3></div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p> */}
                {/* <p>{data[0].companyProfile.Profitability}</p> */}

                <p>{expandedWhy2 ? data[0].companyProfile.Profitability : truncateText(data[0].companyProfile.Profitability, 48)}

                  {data[0].companyProfile.Profitability.split(" ").length > 48 && (
                    <button onClick={() => setExpandedWhy2(!expandedWhy2)} className="btn btn-link p-0 readmore">
                      {expandedWhy2 ? "Show Less" : "Read more"}
                    </button>
                  )}
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`quality-box ${expandedWhy3 ? "" : "quality-min"} `}>
                <div className="d-flex align-items-center" >
                  <div className="quality-icon">
                    <img src={Icon3} />
                  </div>
                  <h3 className="mb-0">Plurality <img src={Info} alt="info" className="ms-2" data-tooltip-id="quality-content44" /></h3></div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p> */}
                {/* <p>{data[0].companyProfile.Diversity}</p> */}

                <p>{expandedWhy3 ? data[0].companyProfile.Diversity : truncateText(data[0].companyProfile.Diversity, 48)}

                  {data[0].companyProfile.Diversity.split(" ").length > 48 && (
                    <button onClick={() => setExpandedWhy3(!expandedWhy3)} className="btn btn-link p-0 readmore">
                      {expandedWhy3 ? "Show Less" : "Read more"}
                    </button>
                  )}
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        ///dialogClassName="right-corner-modal"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <div className="data-heading ">
            <h2 style={{ fontSize: "32px" }}>Quality of revenue</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="insight-list mt-3">
            <ul>
              <li>Global reach: They have a large presence in India, but also operate internationally through subsidiaries and joint ventures. This includes the famous British brands Jaguar and Land Rover Wikipedia: en.wikipedia.org/wiki/Tata_Motors.</li>
              <li>Focus on innovation: Tata Motors is committed to using technology to develop safe, smart, and greener vehicles. They're a big player in the electric vehicle (EV) market, with a dedicated subsidiary for electric mobility https://en.wikipedia.org/wiki/Tata_Motors.</li>
              <li>
                Human-centric approach:  They design their vehicles with people in mind, focusing on safety, comfort, and driving experience https://en.wikipedia.org/wiki/Tata_Motors.
              </li>
            </ul>
          </div>
        </Modal.Body>

      </Modal>

      <Modal
        size="lg"
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
        ///dialogClassName="right-corner-modal"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <div className="data-heading ">
            <h2 style={{ fontSize: "32px" }}>Predictability</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="insight-list mt-3">
            <div className="mt-2 graph-box">
              <p className="text-center">Business Segments</p>
              {/* <BarChart
                width={500}
                height={300}
                style={{ height: "100%", width: "100%" }}
                data={data[0].companyProfileGraph.graph3}
                barSize={20}
                barCategoryGap={10}
                barGap={5}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{ fontSize: "12px", fontWeight: "500" }} />
                <YAxis style={{ fontSize: "12px", fontWeight: "500" }} />
                <Tooltip />
                {Object.keys(data[0].companyProfileGraph.graph3[0])
                  .filter(key => key !== 'name')
                  .map((key, index, arr) => (

                    <Bar
                      key={key}
                      dataKey={key}
                      stackId="a"
                      fill={getRandomColor(index)}
                      radius={index === arr.length - 1 ? [10, 10, 0, 0] : [0, 0, 0, 0]}
                    />
                  ))}
              </BarChart> */}
              <Chart
                chartType="ColumnChart" // Change from BarChart to ColumnChart
                width="100%"
                height="400px"
                data={data[0].companyProfileGraph.graph3}
                options={optionsG3}
              />
            </div>
          </div>
        </Modal.Body>

      </Modal>

      <Modal
        size="lg"
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
        ///dialogClassName="right-corner-modal"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <div className="data-heading ">
            <h2 style={{ fontSize: "32px" }}>Profitability</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="insight-list mt-3">
            <div className="mt-2 graph-box">
              <p className="text-center">Business Segments</p>
              {/* <BarChart
                width={500}
                height={300}
                style={{ height: "100%", width: "100%" }}
                data={data[0].companyProfileGraph.graph4}
                barSize={20}
                barCategoryGap={10}
                barGap={5}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{ fontSize: "12px", fontWeight: "500" }} />
                <YAxis style={{ fontSize: "12px", fontWeight: "500" }} />
                <Tooltip />
                {Object.keys(data[0].companyProfileGraph.graph4[0])
                  .filter(key => key !== 'name')
                  .map((key, index, arr) => (

                    <Bar
                      key={key}
                      dataKey={key}
                      stackId="a"
                      fill={getRandomColor(index)}
                      radius={index === arr.length - 1 ? [10, 10, 0, 0] : [0, 0, 0, 0]}
                    />
                  ))}
              </BarChart> */}
              <Chart
                chartType="ColumnChart" // Change from BarChart to ColumnChart
                width="100%"
                height="400px"
                data={data[0].companyProfileGraph.graph4}
                options={optionsG4}
              />
            </div>
          </div>
        </Modal.Body>

      </Modal>


      <Modal
        size="lg"
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
        centered
        // ///dialogClassName="right-corner-modal"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <div className="data-heading ">
            <h2 style={{ fontSize: "32px" }}>Plurality</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="insight-list mt-3">
            <div className="mt-2 graph-box">
              <p className="text-center">Business Segments</p>
              {/* <BarChart
                width={500}
                height={300}
                style={{ height: "100%", width: "100%" }}
                data={data[0].companyProfileGraph.graph5}
                barSize={20}
                barCategoryGap={10}
                barGap={5}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{ fontSize: "12px", fontWeight: "500" }} />
                <YAxis style={{ fontSize: "12px", fontWeight: "500" }} />
                <Tooltip />
                {Object.keys(data[0].companyProfileGraph.graph5[0])
                  .filter(key => key !== 'name')
                  .map((key, index, arr) => (

                    <Bar
                      key={key}
                      dataKey={key}
                      stackId="a"
                      fill={getRandomColor(index)}
                      radius={index === arr.length - 1 ? [10, 10, 0, 0] : [0, 0, 0, 0]}
                    />
                  ))}
              </BarChart> */}
              <Chart
                chartType="ColumnChart" // Change from BarChart to ColumnChart
                width="100%"
                height="400px"
                data={data[0].companyProfileGraph.graph5}
                options={optionsG5}
              />
            </div>
          </div>
        </Modal.Body>

      </Modal>



      <Modal
        // size="lg"
        show={show4}
        onHide={handleClose4}
        backdrop="static"
        keyboard={false}
        // ///dialogClassName="right-corner-modal"
        // centered
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <div className="data-heading ">
            <h2 style={{ fontSize: "32px" }}>Revenue Distribution</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          {!data[0].companyProfileGraph.appendixstatus ? (
            <Col md={6}>
              <PieChart width={700} height={300} >
                <Pie
                  data={dataWithNumberValues}
                  innerRadius={90}
                  outerRadius={110}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                  style={{ width: "100%" }}
                >

                  {data1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </Col>) : (
            <div className="insight-list mt-3">
              <div className="mt-2 graph-box">
                {/* <BarChart
              width={800}
              height={500}
              style={{ height: "70%", width: "100%" }}
              data={data[0].companyProfileGraph.graph7}
              barSize={20}
              barCategoryGap={10}
              barGap={5}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" style={{ fontSize: "12px", fontWeight: "500" }} />
              <YAxis style={{ fontSize: "12px", fontWeight: "500" }} />
              <Tooltip />
              {Object.keys(data[0].companyProfileGraph.graph7[0])
                .filter(key => key !== 'name')
                .map((key, index, arr) => (

                  <Bar
                    key={key}
                    dataKey={key}
                    stackId="a"
                    fill={getRandomColor(index)}
                    radius={index === arr.length - 1 ? [10, 10, 0, 0] : [0, 0, 0, 0]}
                  />
                ))}
            </BarChart> */}
                <Chart
                  chartType="ColumnChart" // Change from BarChart to ColumnChart
                  width="400px"
                  height="400px"
                  data={data[0].companyProfileGraph.graph7}
                  options={optionsG7} />

              </div></div>)

          }

          <span style={{ fontSize: "12px" }} className="d-block text-end">Source - Annual Report</span>

        </Modal.Body>

      </Modal>



      <Modal
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        show={showAll}
        onHide={handleCloseAll}
        backdrop="static"
        keyboard={false}
      // ///dialogClassName="right-corner-modal"
      >
        <Modal.Header closeButton>
          <div className="data-heading ">
            <h2 style={{ fontSize: "32px" }}>Quality Revenue</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="insight-list my-3 d-md-flex gap-3">
          <div>
            <div className="mt-2 graph-box ">
              <p className="text-center">Predictability</p>
              {/* <BarChart
                width={800}
                height={600}
                style={{ height: "100%", width: "100%" }}
                data={data[0].companyProfileGraph.graph3}
                barSize={20}
                barCategoryGap={10}
                barGap={5}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{ fontSize: "16px", fontWeight: "500" }} />
                <YAxis style={{ fontSize: "16px", fontWeight: "500" }} />
                <Tooltip cursor={{ fill: 'transparent' }} /> 
                {Object.keys(data[0].companyProfileGraph.graph3[0])
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
                width="350px"
                height="400px"
                data={data[0].companyProfileGraph.graph3}
                options={optionsG3}
              />
            </div>
            <span style={{ fontSize: "12px" }} className="d-block text-end">Source - Annual Report</span>
          </div>
          <div>
            <div className="mt-2 graph-box">
              <p className="text-center">Profitability</p>
              {/* <BarChart
                width={800}
                height={600}
                style={{ height: "100%", width: "100%" }}
                data={data[0].companyProfileGraph.graph4}
                barSize={20}
                barCategoryGap={10}
                barGap={5}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{ fontSize: "16px", fontWeight: "500" }} />
                <YAxis style={{ fontSize: "16px", fontWeight: "500" }} />
                <Tooltip cursor={{ fill: 'transparent' }} /> 
                {Object.keys(data[0].companyProfileGraph.graph4[0])
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
                width="350px"
                height="400px"
                data={data[0].companyProfileGraph.graph4}
                options={optionsG4}
              />
            </div>
            <span style={{ fontSize: "12px" }} className="d-block text-end">Source - Annual Report</span>
            </div>
            <div>
            <div className="mt-2 graph-box">
              <p className="text-center">Plurality</p>
              {/* <BarChart
                width={800}
                height={600}
                style={{ height: "100%", width: "100%" }}
                data={data[0].companyProfileGraph.graph5}
                barSize={20}
                barCategoryGap={10}
                barGap={5}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{ fontSize: "16px", fontWeight: "500" }} />
                <YAxis style={{ fontSize: "16px", fontWeight: "500" }} />
                <Tooltip cursor={{ fill: 'transparent' }} /> 
                {Object.keys(data[0].companyProfileGraph.graph5[0])
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
                width="350px"
                height="400px"
                data={data[0].companyProfileGraph.graph5}
                options={optionsG5}
              />
            </div>
            <span style={{ fontSize: "12px" }} className="d-block text-end">Source - Annual Report</span>
            </div>
          </div>
        </Modal.Body>

      </Modal>

    </>
  );
};

export default CompanyProfile;
