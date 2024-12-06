import React, { useEffect, useState, useRef } from 'react';
import '../components/css/StockView.css';
import Header from './header';
import Read from "../components/img/readCompany.svg";
import Spoting from "../components/img/icon/spoting.svg";
import Inhouse from "../components/img/icon/inhouse.svg";
import Gems from "../components/img/icon/gems.svg";
import Footer from './Footer';
import TickerTape from "./ticker"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { Container, Row, Col, Spinner } from "react-bootstrap";
import config from "../config";

export default function StockView() {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Sorting state
  const [sortedData, setSortedData] = useState([]);
  const [tickerList, setTickerList] = useState(
 [
      {
        "proName": "FOREXCOM:SPXUSD",
        "title": "S&P 500 Index"
      }
    ])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStockData();
    getTickerData()

  }, []);

  useEffect(() => {
    // Whenever data changes, update the sortedData
    setSortedData(data);
  }, [data]);

  const getStockData = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxmVKARWdxmJawpxUqHxvqfyGXVML06atHSeikTkJSLJWovKzz5z2UslRYilF5cClCr/exec"
      );
      const text = await response.json();
      setData(text);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getTickerData=async()=>{
    try{
      const response = await fetch(`${config.apiUrl}getTickerData`, {
        method: 'GET'
    });

    const result = await response.json();

    if (result.status) {
      setTickerList(result.data.symbols)
    }
    }catch(error){

    }
  }

  // Function to sort data based on the "Company Name"
  const sortByCompanyName = () => {
    const sorted = [...sortedData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a['Company Name'].localeCompare(b['Company Name']);
      } else {
        return b['Company Name'].localeCompare(a['Company Name']);
      }
    });
    setSortedData(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sorting order
  };

  const sortByCAGR = () => {
    const sorted = [...sortedData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a["CAGR"] - b["CAGR"];
      } else {
        return b["CAGR"] - a["CAGR"];
      }
    });
    setSortedData(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sorting order
  };


  const sortByInvestedTime = () => {
    const sorted = [...sortedData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a["Total invested time↵ (in month(s))"] - b["Total invested time↵ (in month(s))"];
      } else {
        return b["Total invested time↵ (in month(s))"] - a["Total invested time↵ (in month(s))"];
      }
    });
    setSortedData(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sorting order
  };


  // const containerRef = useRef(null);

  // useEffect(() => {
  //   // Ensure script is added only once
  //   if (tickerList.length > 0) {
  //     if (containerRef.current && containerRef.current.childElementCount === 0) {
  //       const script = document.createElement('script');
  //       script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
  //       script.async = true;
  //       script.innerHTML = JSON.stringify(tickerList);

  //       containerRef.current.appendChild(script);
  //     }
  //   }

  // }, [tickerList]);
  // useEffect(() => {
  //     // Ensure script is added only once
  //     if (containerRef.current && containerRef.current.childElementCount === 0) {
  //       const script = document.createElement('script');
  //       script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
  //       script.async = true;
  //       script.innerHTML = JSON.stringify({
  //         symbols: [
  //           {
  //             proName: "FOREXCOM:SPXUSD",
  //             title: "S&P 500 Index"
  //           },
  //           {
  //             proName: "FOREXCOM:NSXUSD",
  //             title: "US 100 Cash CFD"
  //           },
  //           {
  //             proName: "FX_IDC:EURUSD",
  //             title: "EUR to USD"
  //           },
  //           {
  //             proName: "BITSTAMP:BTCUSD",
  //             title: "Bitcoin"
  //           },
  //           {
  //             proName: "BITSTAMP:ETHUSD",
  //             title: "Ethereum"
  //           }
  //         ],
  //         showSymbolLogo: true,
  //         isTransparent: false,
  //         displayMode: "adaptive",
  //         colorTheme: "light",
  //         locale: "en"
  //       });

  //       containerRef.current.appendChild(script);
  //     }
  //   }, []);

  const tooltipData1="1"
  const tooltipData2="2"
  const tooltipData3="3"


  return (
    <>
      <Header />
      {loading && <div className="spinner-container">
            <Spinner animation="border" variant="primary" className="spinner" />
          </div>
}
      {/* <div className='stock-line'> */}
      <div className='stockLine-data'>
        {/* <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget" ref={containerRef}></div>
      </div> */}
       {tickerList.length &&  <TickerTape data={tickerList} />}
      </div>
      {/* </div> */}

      <ReactTooltip
        id="quality-content1"
        place="bottom"
        content={tooltipData1}
        style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} />

      <ReactTooltip
        id="quality-content2"
        place="bottom"
        content={tooltipData2}
        style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} />

      <ReactTooltip
        id="quality-content3"
        place="bottom"
        content={tooltipData3}
        style={{ fontSize: "12px", width: "200px", zIndex: '1200' }} />

      <div className='my-4'>
        <Container fluid>
          <h2 className='main-heading text-theme text-center'>
          <b>Stock Comparison</b>
          </h2>
          <div className='table-container mb-5 mt-md-5 postition-relative px-3'>
            <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
              <table className='theme-table w-100 '>
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>
                      Company Name
                      <span
                        onClick={sortByCompanyName}
                        style={{ cursor: 'pointer', marginLeft: '10px' }}>
                        {sortOrder === 'asc' ? '↑' : '↓'}
                      </span>
                    </th>
                    <th>Release Date</th>
                    <th data-tooltip-id="quality-content1">Intrinsic Value(₹)</th>
                    <th  data-tooltip-id="quality-content2">Price on Release Date(₹)</th>
                    <th>Current Market Price(₹)</th>
                    <th>Entry Date</th>
                    <th>Today's Date</th>
                    <th>
                      Total Invested Time (In Months)
                      <span onClick={sortByInvestedTime} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                        {sortOrder === 'asc' ? '↑' : '↓'}
                      </span>
                    </th>
                    <th  data-tooltip-id="quality-content3">
                      CAGR (%)
                      <span onClick={sortByCAGR} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                        {sortOrder === 'asc' ? '↑' : '↓'}
                      </span>
                    </th>
                  </tr>
                </thead>
                {sortedData.length > 0 ? (
                  <tbody>
                    {sortedData.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td >{item["Company Name"]}</td>
                        {/* <td>{new Date(item["Release Date"]).toISOString().split('T')[0]}</td> */}
                        <td>{new Date(item["Release Date"]).toISOString().split('T')[0]}</td>

                        <td>{item["Intrinsic Value"]}</td>
                        <td>{item["Price on Release Date"]}</td>
                        <td>{item["Current Market Price"]}</td>
                        <td>{item["Entry Date"].split('T')[0]}</td>
                        <td>{new Date(item["Today's date"]).toISOString().split('T')[0]}</td>
                        <td>{parseInt(item["Total invested time(in month(s))"])}</td>
                        <td style={{ color: item["CAGR"] < 0 ? 'red' : 'green' }}>
                          {(item["CAGR"] * 100).toFixed(2)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <p>No Data found</p>
                )}
              </table>
            </div>
          </div>
        </Container>
        <Container >
          <div className='my-md-5 py-md-5'>
            <h2 className='main-heading text-center mb-md-3'>How Read Riches <b>Selects Companies</b></h2>
            {/* <p className='para text-center'>
              At Read Riches, we provide comprehensive financial reports on a diverse<br/> range of companies through a meticulous selection process.
            </p> */}
            {/* <Row>
              <Col md={1}></Col>
              <Col md={10}>
                <div className='company-read'>
                  <img src={Read} alt='Select company' />
                </div>
              </Col>
              <Col md={1}></Col>
            </Row> */}
            <div className='mt-5'>
              <div className='d-flex gap-2 align-items-center justify-content-center stock-boxes '>
                <div className='outer-box position-relative' style={{ borderTop: "none" }}>
                  <div className='dotted-circle stock-box1'>
                    <div className='small-cards'>
                      <img src={Spoting} />
                      <h3 className='text-theme'>Spotting Market Leaders</h3>
                      <p>Our algorithm is like a spotlight that identifies companies standing tall in their industries.</p>
                    </div>
                  </div>
                </div>
                <div className='outer-box position-relative'>
                  <div className='dotted-circle stock-box2'>
                    <div className='small-cards' style={{ border: "2px solid #1E6E76" }}>
                      <img src={Inhouse} />
                      <h3 className='text-theme'>Our In-House Algorithm</h3>
                      <p>At Read Riches, our company selection process is powered by a proprietary algorithm developed in-house.</p>
                    </div>
                  </div>
                </div>
                <div className='outer-box position-relative' style={{ borderTop: "none" }}>
                  <div className='dotted-circle stock-box1'>
                    <div className='small-cards'>
                      <img src={Gems} />
                      <h3 className='text-theme'>Uncovering Hidden Gems</h3>
                      <p>Going beyond the obvious, our algorithm uncovers companies flying under the radar but with huge gdivth potential.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
