import React, { useEffect, useState, useRef } from 'react';
import '../components/css/StockView.css';
import Header from './header';
import { Container, Row, Col } from 'react-bootstrap';
import Read from "../components/img/readCompany.svg";
import Spoting from "../components/img/icon/spoting.svg";
import Inhouse from "../components/img/icon/inhouse.svg";
import Gems from "../components/img/icon/gems.svg";
import Footer from './Footer';

export default function StockView() {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Sorting state
  const [sortedData, setSortedData] = useState([]);
  const [tickerList, setTickerList] = useState([{
    "symbols": [
      {
        "proName": "FOREXCOM:SPXUSD",
        "title": "S&P 500 Index"
      },
      {
        "proName": "FOREXCOM:NSXUSD",
        "title": "US 100 Cash CFD"
      },
      {
        "proName": "FX_IDC:EURUSD",
        "title": "EUR to USD"
      },
      {
        "proName": "BITSTAMP:BTCUSD",
        "title": "Bitcoin"
      },
      {
        "proName": "BITSTAMP:ETHUSD",
        "title": "Ethereum"
      }
    ],
    "isTransparent": false,
    "showSymbolLogo": true,
    "colorTheme": "light",
    "locale": "in"
  }])

  useEffect(() => {
    getStockData();
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure script is added only once
    if (tickerList.length > 0) {
      if (containerRef.current && containerRef.current.childElementCount === 0) {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
        script.async = true;
        script.innerHTML = JSON.stringify(tickerList);

        containerRef.current.appendChild(script);
      }
    }

  }, [tickerList]);


  return (
    <>
      <Header />
      <div className='stock-line'>
        <div className='stockLine-data'>
          <div className="tradingview-widget-container">
            <div id="tradingview-ticker" className="tradingview-widget-container__widget" ref={containerRef}></div>
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Container>

          <h2 className='main-heading text-theme text-center'>
            Stock <b>Comparison</b>
          </h2>
          <div className='table-container mb-5'>
            <table className='theme-table mt-md-5 w-100'>
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>
                    Company Name
                    <span
                      onClick={sortByCompanyName}
                      style={{ cursor: 'pointer', marginLeft: '10px' }}>
                      {sortOrder === 'asc' ? '↑' : '↓'} {/* Sorting icon */}
                    </span>
                  </th>
                  {/* <th>Company Name</th> */}
                  <th>Release Date</th>
                  <th>Intrinsic Value()</th>
                  <th>Price on Release Date()</th>
                  <th>Current Market Price()</th>
                  <th>Entry Date</th>
                  <th>Today's Date</th>
                  <th>Total Invested Time (In Months)</th>
                  <th>CAGR (%)</th>
                </tr>
              </thead>
              {sortedData.length > 0 ? (
                <tbody>
                  {sortedData.map((item, index) => (
                    <tr key={index}>
                      {/* <td>{index + 1}</td> */}
                      <td>{item["Company Name"]}</td>
                      <td>{item["Symbol"]}</td>
                      <td>{item["Stock Price"]}</td>
                      <td>{parseFloat(item["Daily Price Change % "] * 100).toFixed(4)}</td>
                      <td>{item["Stock PE"]}</td>
                      <td>{item["52 Week L"]}</td>
                      <td>{item["52 Week H"]}</td>
                      <td>{parseFloat(item["Volume % "] * 100).toFixed(4)}</td>
                      <td>{item["Intrinsic Value "]}</td>
                      <td>{item["Volume"]}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <p>No Data found</p>
              )}
            </table>
          </div>
          {/* How Read Riches Selects Companies Section */}
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
                <div className='outer-box position-relative' style={{borderTop:"none"}}>
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
                    <div className='small-cards'>
                      <img src={Inhouse} />
                      <h3 className='text-theme'>Our In-House Algorithm</h3>
                      <p>At Read Riches, our company selection process is powered by a proprietary algorithm developed in-house.</p>
                    </div>
                  </div>
                </div>
                <div className='outer-box position-relative' style={{borderTop:"none"}}>
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
