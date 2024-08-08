import React from "react";
import "./Portfolio.scss";

function Portfolio() {
    return (
        <>
            <div className="portfolio">
                <div className="container">
                    <div className="title">
                        <h2>portfolio</h2>
                    </div>

                    <div className="content">
                        {/* 1 */}
                        <div className="port">
                            <div className="info">
                                <h3>web design</h3>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="port">
                            <div className="info">
                                <h3>mobile design</h3>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="port">
                            <div className="info">
                                <h3>lgoo design</h3>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="port">
                            <div className="info">
                                <h3>web application development</h3>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="port">
                            <div className="info">
                                <h3>mobile application development</h3>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="port">
                            <div className="info">
                                <h3>PWA development</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
