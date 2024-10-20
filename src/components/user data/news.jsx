import React, { useState } from "react";
import Info from "../../components/img/info.svg"
const News = () => {

    return (
        <>
            <div id="list-item-4">
                <div className="data-heading">
                    <h2>News <img src={Info} alt="info" className="ms-2 info-icon"/></h2>
                    <div className="rule" style={{ width: "90px" }}></div>
                </div>
                <div className="news-data mt-4">
                    <div className="news-items">
                        <h2>1</h2>
                        <div className="item-content">
                            <h3>Electric Vehicle Manufacturer Zooms After Positive Battery Production Update</h3>
                            <p>Investors are flocking to electric vehicle (EV) company XYZ Motors after they announced a significant breakthrough in battery production efficiency. The news sent their stock price soaring by 15% in pre-market trading, indicating a wave of optimism about the company's future and the EV market in general.</p>
                        </div>
                    </div>
                    <div className="news-items">
                        <h2>1</h2>
                        <div className="item-content">
                            <h3>Electric Vehicle Manufacturer Zooms After Positive Battery Production Update</h3>
                            <p>Investors are flocking to electric vehicle (EV) company XYZ Motors after they announced a significant breakthrough in battery production efficiency. The news sent their stock price soaring by 15% in pre-market trading, indicating a wave of optimism about the company's future and the EV market in general.</p>
                        </div>
                    </div>
                    <div className="news-items">
                        <h2>1</h2>
                        <div className="item-content">
                            <h3>Electric Vehicle Manufacturer Zooms After Positive Battery Production Update</h3>
                            <p>Investors are flocking to electric vehicle (EV) company XYZ Motors after they announced a significant breakthrough in battery production efficiency. The news sent their stock price soaring by 15% in pre-market trading, indicating a wave of optimism about the company's future and the EV market in general.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
