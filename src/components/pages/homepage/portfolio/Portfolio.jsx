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
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div className="info">
                                <h3>web design</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="port">
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div className="info">
                                <h3>mobile design</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="port">
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div className="info">
                                <h3>lgoo design</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="port">
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div className="info">
                                <h3>web application development</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="port">
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div className="info">
                                <h3>mobile application development</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="port">
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div className="info">
                                <h3>PWA development</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
