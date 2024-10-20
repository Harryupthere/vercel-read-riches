import React, { useEffect, useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import SearchImg from "../../components/img/search.svg";
import DownArrow from "../../components/img/down.svg"
import PurpleArrow  from "../../components/img/arrow-purple.svg"
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
//import yahooFinance from 'yahoo-finance2'; // Correct import

// Updated data structure with multiple categories per month
const allData = [
    { date: "Jan", sales: 4000, revenue: 2400, profit: 2400, loss: 2300, other: 1400,other2:1700 },
    { date: "Feb", sales: 3000, revenue: 1398, profit: 2210, loss: 2300, other: 1400,other2:1700 },
    { date: "Mar", sales: 2000, revenue: 9800, profit: 2290, loss: 2300, other: 1400,other2:1700 },
    { date: "Apr", sales: 2780, revenue: 3908, profit: 2000, loss: 2300, other: 1400,other2:1700 },
    { date: "May", sales: 1890, revenue: 4800, profit: 2181, loss: 2300, other: 1400,other2:1700 },
    { date: "Jun", sales: 2390, revenue: 3800, profit: 2500, loss: 2300, other: 1400,other2:1700 },
    { date: "Jul", sales: 3490, revenue: 4300, profit: 2100, loss: 2300, other: 1400,other2:1700 },
    { date: "Aug", sales: 3000, revenue: 2400, profit: 2400, loss: 2300, other: 1400,other2:1700 },
    { date: "Sep", sales: 2800, revenue: 1398, profit: 2210, loss: 2300, other: 1400,other2:1700 },
    { date: "Oct", sales: 2000, revenue: 9800, profit: 2290, loss: 2300, other: 1400,other2:1700 },
    { date: "Nov", sales: 2780, revenue: 3908, profit: 2000, loss: 2300, other: 1400,other2:1700 },
    { date: "Dec", sales: 1890, revenue: 4800, profit: 2181, loss: 2300, other: 1400,other2:1700 }
];

const PriceChart = () => {
    const [months, setMonths] = useState(12);

    const getFilteredData = (months) => {
        const endMonthIndex = allData.length - 1;
        const startMonthIndex = Math.max(0, endMonthIndex - months + 1);
        return allData.slice(startMonthIndex, endMonthIndex + 1);
    };

    const filteredData = getFilteredData(months);

    // useEffect(() => {
    //     const fetchFinanceData = async () => {
    //       try {
    //         const results = await yahooFinance.search('AAPL');
    //         console.log(results);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    
    //     fetchFinanceData(); // Call the async function
    //   }, []);
   
    return (
        <>
            <div id="list-item-2">
                <div className="data-heading d-flex justify-content-between mb-4 mt-5">
                    <h2>Price Chart</h2>
                    {/* <h3 className="appendix">Appendix <i class="arrow"></i></h3> */}
                </div>
                <Row>
                    <Col md={12}>
                        <div className="mt-4">
                            <div className="d-flex justify-content-between ms-5 mb-2">
                                {/* <h3 className="ps-3 graph-title">Title</h3>
                                <Form.Group controlId="selectMonths" className="select-months">
                                    <img src={DownArrow} style={{position:"absolute",right:"10px",top:"50%"}}/>
                                    <Form.Control
                                        as="select"
                                        value={months}
                                        onChange={(e) => setMonths(parseInt(e.target.value))}
                                    >
                                        <option value={3}>3 Months</option>
                                        <option value={6}>6 Months</option>
                                        <option value={9}>9 Months</option>
                                        <option value={12}>12 Months</option>
                                    </Form.Control>
                                </Form.Group> */}
                            </div>
                            {/* <BarChart
                                width={1150}
                                height={400}
                                style={{height:"100%",width:"100%"}}
                                data={filteredData}
                             
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                 <Legend /> 
                                <Bar dataKey="sales" fill="#ffc658" name="Sales" />
                                <Bar dataKey="revenue" fill="#ffc658" name="Revenue" />
                                <Bar dataKey="profit" fill="#ffc658" name="Profit" />
                                <Bar dataKey="Loss" fill="#ffc658" name="Profit" />
                                <Bar dataKey="other" fill="#ffc658" name="other" />
                                <Bar dataKey="other2" fill="#ffc658" name="other2" />
                            </BarChart> */}
                            <TradingViewEmbed
                                widgetType={widgetType.ADVANCED_CHART}
                                widgetConfig={{
                                    interval: "1D",
                                    colorTheme: "dark",
                                    symbol: `DIAMINESQ`,  //BPCL, Reliance industries
                                    height: "500px",
                                    width: "100%",
                                    locale: "en",
                                }}
                            />
                        </div>
                        {/* <div className="chart-base d-flex justify-content-between ms-5 mb-2">
                            <h3 className="ps-3 graph-title">$20 678.89 <span>-1.5%</span><img src={PurpleArrow} className="mx-1"/></h3 >
                            <span  className="d-flex"><div className="yellow-dot me-2"></div>Product</span>
                        </div> */}
                    </Col>
                </Row>
                <section>
                    <div className="color-section">
                        <div className="dark-bg">
                            <div className="light-bg">
                                <div className="why">
                                    <div className="d-flex align-items-center mb-3">
                                        <img src={SearchImg} alt="search" />
                                        <h2>WHY?</h2>
                                    </div>
                                    <h3>Tata lost its shares</h3>
                                    <p>
                                        Tata Motors thrives on a multi-pronged approach. They invest heavily in R&D to deliver innovative vehicles across a diverse product portfolio, from cars and trucks to electric options. This innovation is backed by strong manufacturing practices and a global sales network. Their focus on sustainability attracts environmentally conscious customers, while their commitment to social responsibility strengthens stakeholder relationships.
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

export default PriceChart;
