import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="content">
                        <div className="title">
                            <h4>git in touch</h4>

                            <ul>
                                <li>
                                    {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <a href="#">ms12@gmail.com</a>
                                </li>

                                <li>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <a href="#">01200112233</a>
                                </li>
                            </ul>
                        </div>

                        <div className="btn">
                            <a href="#">contact me</a>
                        </div>

                        <div className="social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <FontAwesomeIcon icon={faTwitter} />
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        {/* <FontAwesomeIcon icon={faTwitter} /> */}
                                        {/* <FontAwesomeIcon icon={faTwitter} /> */}
                                    </a>
                                </li>
                            </ul>

                            <p>copyright 2024 MS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
