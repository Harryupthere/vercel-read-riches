import React, { useEffect, useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import SearchImg from "../../components/img/search.svg";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

const PriceChart = ({loading}) => {
    if (loading) {
        return <div>Loading...</div>;
    }

   
    return (
        <>
            <div>
                <div className="data-heading d-flex justify-content-between mb-4 mt-5">
                    <h2>Price Chart</h2>
                </div>
                <Row>
                    <Col md={12}>
                        <div className="mt-4">
                            <div className="d-flex justify-content-between ms-5 mb-2">

                            </div>
                           
                            <TradingViewEmbed
                                widgetType={widgetType.ADVANCED_CHART}
                                widgetConfig={{
                                    interval: "1D",
                                    colorTheme: "light",
                                    symbol: `DIAMINESQ`,  //BPCL, Reliance industries
                                    height: "500px",
                                    width: "100%",
                                    locale: "en",
                                }}
                            />
                        </div>
                       
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
