import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Info from "../../components/img/info.svg"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Icon1 from "../../components/img/hotspot.svg"
import Icon2 from "../../components/img/doller.svg"
import Icon3 from "../../components/img/polymer.svg"
import { Chart } from "react-google-charts";


const CompanyProfile = ({ loading, comname, data }) => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);


  const [showAll, setShowAll] = useState(false);
  const handleCloseAll = () => setShowAll(false);
  const handleShowAll = () => setShowAll(true);


  const [expandedDetails, setExpandedDetails] = useState(false); // For details section
  const [expandedWhy1, setExpandedWhy1] = useState(false); // For 'why' section
  const [expandedWhy2, setExpandedWhy2] = useState(false); // For 'why' section
  const [expandedWhy3, setExpandedWhy3] = useState(false); // For 'why' section
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if data has content
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }
  // Helper function to truncate text
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };


  // Example data from state
  const tooltipData11 = "determining the sustainability of revenue using three factors which are Predictability, Profitability and Plurality.";
  const tooltipData22 = "Stable, recurring income that ensures reliable cash flow with certainty.";
  const tooltipData33 = "Revenue that generates strong margins and efficiently converts to profits.";
  const tooltipData44 = "A varied revenue base reducing dependency on any single source, increasing resilience.";


  const optionsG1 = {
    title: "Business Divisions",
    chartArea: { top: '13%', width: "50%" },
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
      title: "Years",
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
    colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
    tooltip: {
      isHtml: true, // Enables HTML tooltips
      textStyle: {
        color: '#000000', // Tooltip text color
      },
      showColorCode: true, // Displays the color of the series in the tooltip
    },
  };
  const optionsG2 = {
    //title: "Revenue Distribution  - Geographical",
    chartArea: { top: '13%', width: "50%" },
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
      title: "Years",
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
    colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
    tooltip: {
      isHtml: true, // Enables HTML tooltips
      textStyle: {
        color: '#000000', // Tooltip text color
      },
      showColorCode: true, // Displays the color of the series in the tooltip
    },
  };
  const optionsG3 = {
    //title: "Revenue Distribution  - Business Divisions",
    chartArea: { top: '13%', width: "50%" },
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
      title: "Years",
      titleTextStyle: {
        fontSize: 18, // Increase vertical axis title font size
      },
      textStyle: {
        fontSize: 14, // Increase vertical axis labels font size
      },
      gridlines: {
        color: 'none' // Remove vertical gridlines
      },
      slantedText: true, // Enable slanted text
      slantedTextAngle: 45, // Adjust the angle (45 degrees is a common value)
    },
    colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
    tooltip: {
      isHtml: true, // Enables HTML tooltips
      textStyle: {
        color: '#000000', // Tooltip text color
      },
      showColorCode: true, // Displays the color of the series in the tooltip
    },
  };
  const optionsG4 = {
    //title: "Revenue Distribution  - Geographical",
    chartArea: { top: '13%', width: "50%" },
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
      title: "Years",
      titleTextStyle: {
        fontSize: 18, // Increase vertical axis title font size
      },
      textStyle: {
        fontSize: 14, // Increase vertical axis labels font size
      },
      gridlines: {
        color: 'none' // Remove vertical gridlines
      },
      slantedText: true, // Enable slanted text
      slantedTextAngle: 45, // Adjust the angle (45 degrees is a common value)
    },
    colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
    tooltip: {
      isHtml: true, // Enables HTML tooltips
      textStyle: {
        color: '#000000', // Tooltip text color
      },
      showColorCode: true, // Displays the color of the series in the tooltip
    },
  };
  const optionsG5 = {
    //title: "Revenue Distribution  - Business Divisions",
    chartArea: { top: '13%', width: "50%" },
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
      }
    },
    hAxis: {
      title: "Years",
      titleTextStyle: {
        fontSize: 18, // Increase vertical axis title font size
      },
      textStyle: {
        fontSize: 14, // Increase vertical axis labels font size
      },
      gridlines: {
        color: 'none' // Remove vertical gridlines
      },
      slantedText: true, // Enable slanted text
      slantedTextAngle: 45, // Adjust the angle (45 degrees is a common value)
    },
    colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
    tooltip: {
      isHtml: true, // Enables HTML tooltips
      textStyle: {
        color: '#000000', // Tooltip text color
      },
      showColorCode: true, // Displays the color of the series in the tooltip
    },
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
  const optionsF = {
    // title: "OWNERSHIP BREAKDOWN",
    colors: ['#15464a', '#1d666d', '#2f878d', '#3a9aa1', '#44b3bb', '#69ccd3'],
    chartArea: {
      left: "10%",
      top: "10%",
      width: "80%",
      height: "80%" // Adjust the chart area to give more space around the pie
    },
    legend: {
      position: 'right', // Position the legend to the right of the chart
      alignment: 'top', // Align legend in the center
      textStyle: { fontSize: 14 }, // Adjust legend text size
    },
    pieSliceText: 'percentage', // Display percentage on the slices
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
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

          <p className="content2 mt-2">{expandedDetails ? data[0].companyProfile.details : truncateText(data[0].companyProfile.details, 48)}

            {data[0].companyProfile.details.split(" ").length > 48 && (
              <button onClick={() => setExpandedDetails(!expandedDetails)} className="btn btn-link p-0 readmore">
                {expandedDetails ? "Show Less" : "Read more"}
              </button>
            )}
          </p>


        </div>
        <h3 className="heading2 mt-md-4">Revenue mix</h3>
        <Row>
          <Col md={6}>
            {/* <h5 className="text-center">{data[0].companyProfileHeadings.compHeading1}</h5> */}
            <div className="mt-2 graph-box">
              <Chart
                chartType="ColumnChart" // Change from BarChart to ColumnChart
                width="100%"
                height="400px"
                data={data[0].companyProfileGraph.graph1}
                options={optionsG1}
              />
            </div>
            <span style={{ fontSize: "12px" }} className="d-block text-end">{data[0].companyProfileSource.Source1}</span>
          </Col>
          <Col md={6}>
            {/* <h5 className="text-center">{data[0].companyProfileHeadings.compHeading2}</h5> */}
            <div className="mt-2 graph-box">
              <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={data[0].companyProfileGraph.graph2}
                options={optionsG2}
              />
            </div>
            <span style={{ fontSize: "12px" }} className="d-block text-end">{data[0].companyProfileSource.Source2}</span>
          </Col>
        </Row>
        {/* <section> */}
          <div className="data-heading d-flex justify-content-between mb-3 mt-3">
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
                  style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} />

                <ReactTooltip
                  id="quality-content22"
                  place="bottom"
                  content={tooltipData22}
                  style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} />
                <ReactTooltip
                  id="quality-content33"
                  place="bottom"
                  content={tooltipData33}
                  style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} />
                <ReactTooltip
                  id="quality-content44"
                  place="bottom"
                  content={tooltipData44}
                  style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} />


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
        {/* </section> */}
      </div>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
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

              <Chart
                chartType="ColumnChart"
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

              <Chart
                chartType="ColumnChart"
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

              <Chart
                chartType="ColumnChart"
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
        show={show4}
        onHide={handleClose4}
        backdrop="static"
        keyboard={false}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <div className="data-heading ">
            <h2 style={{ fontSize: "32px" }}>Revenue Distribution</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          {!data[0].companyProfileGraph.appendixstatus ? (
            <Chart
              chartType="PieChart"
              data={data[0].companyProfileGraph.pieData}
              options={optionsF}
              width={"100%"}
              height={"400px"}
            />
          ) : (
            <div className="insight-list mt-3">
              <div className="mt-2 graph-box">

                <Chart
                  chartType="ColumnChart"
                  width="400px"
                  height="400px"
                  data={data[0].companyProfileGraph.graph7}
                  options={optionsG7} />

              </div></div>)

          }

          <span style={{ fontSize: "12px" }} className="d-block text-end">{!data[0].companyProfileGraph.appendixstatus ? data[0].companyProfileSource.pieSource : data[0].companyProfileSource.Source3
          }</span>

        </Modal.Body>

      </Modal>



      <Modal
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        show={showAll}
        onHide={handleCloseAll}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div className="data-heading ">
            <h2 style={{ fontSize: "32px" }}>Quality Of Revenue</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="insight-list my-3 d-md-flex gap-3 justify-content-center">
            <div>
              <div className="mt-2 graph-box scroll-mob">
                <p className="text-center">{data[0].companyProfileHeadings.compHeading3}</p>
                <Chart
                  chartType="ColumnChart"
                  width="350px"
                  height="400px"
                  data={data[0].companyProfileGraph.graph3}
                  options={optionsG3}
                />
              </div>
              <span style={{ fontSize: "12px" }} className="d-block text-end">{data[0].companyProfileSource.Source4}</span>
            </div>
            <div>
              <div className="mt-2 graph-box scroll-mob">
                <p className="text-center">{data[0].companyProfileHeadings.compHeading4}</p>

                <Chart
                  chartType="ColumnChart"
                  width="350px"
                  height="400px"
                  data={data[0].companyProfileGraph.graph4}
                  options={optionsG4}
                />
              </div>
              <span style={{ fontSize: "12px" }} className="d-block text-end">{data[0].companyProfileSource.Source5}</span>
            </div>
            <div>
              <div className="mt-2 graph-box scroll-mob">
                <p className="text-center">{data[0].companyProfileHeadings.compHeading5}</p>


                <Chart
                  chartType="ColumnChart"
                  width="350px"
                  height="400px"
                  data={data[0].companyProfileGraph.graph5}
                  options={optionsG5}
                />
              </div>
              <span style={{ fontSize: "12px" }} className="d-block text-end">{data[0].companyProfileSource.Source6}</span>
            </div>
          </div>
        </Modal.Body>

      </Modal>

    </>
  );
};

export default CompanyProfile;
