import React, { useState } from "react";
import "./Skills.scss";

function Skills() {
    const [html, setHtml] = useState("100");
    const [css, setCss] = useState("90");
    const [js, setJs] = useState("80");
    const [python, setPyhton] = useState("70");
    const [react, setReact] = useState("60");
    const [scss, setScss] = useState("50");
    console.log(setHtml, setCss, setJs, setScss, setReact, setPyhton);

    return (
        <>
            <div className="skills">
                <div className="container">
                    <div className="title">
                        <h2>Skills</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Est nobis voluptates iusto eius numquam
                            ratione consectetur dolor ducimus? A optio eum qui
                            laudantium beatae, esse inventore nobis, odit
                            temporibus molestias fugiat eveniet doloremque odio
                            dolorum totam officiis, tenetur nihil? Quidem?
                        </p>
                    </div>

                    <div className="content">
                        <div className="list">
                            <ul>
                                <li>
                                    <a href="#foucs" className="active">
                                        my foucs
                                    </a>
                                </li>

                                <li>
                                    <a href="#ui">ui/ux design</a>
                                </li>

                                <li>
                                    <a href="#responsive">responsive design</a>
                                </li>

                                <li>
                                    <a href="#web">web design</a>
                                </li>

                                <li>
                                    <a href="#mobile">mobile app design</a>
                                </li>
                            </ul>
                        </div>
                        {/* 111 - 19777 */}

                        <div className="skill-list">
                            {/* html */}
                            <div className="skill">
                                <p>HTML5</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `${html}%`,
                                            opacity: html,
                                            // backgroundColor: html,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* css */}
                            <div className="skill">
                                <p>css</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `${css}%`,
                                            opacity: `0.${css}`,
                                            // backgroundColor: css,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* js */}
                            <div className="skill">
                                <p>JS</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `${js}%`,
                                            opacity: `0.${js}`,
                                            // backgroundColor: js,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* python */}
                            <div className="skill">
                                <p>python</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `${python}%`,
                                            opacity: `0.${python}`,
                                            // backgroundColor: pyhton,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* React */}
                            <div className="skill">
                                <p>React</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `${react}%`,
                                            opacity: `0.${react}`,
                                            // backgroundColor: react,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* Scss */}
                            <div className="skill">
                                <p>Scss</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: `${scss}%`,
                                            opacity: `0.${scss}`,
                                            // backgroundColor: scss,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
