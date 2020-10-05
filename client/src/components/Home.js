import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faFileContract } from '@fortawesome/free-solid-svg-icons'
import FadeInSection from "./FadeInSection"

export default function Home() {
    return (
        <div>
            <FadeInSection>
                <section className="hero">
                    <div className="icons">
                        <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: "2.5rem", color: "#bbb", textAlign: "left", marginRight: "1em" }} />
                        <FontAwesomeIcon icon={faFileContract} style={{ fontSize: "2.5rem", color: "#bbb", textAlign: "left", marginRight: "1em" }} />
                    </div>
                    <h2>Build your own dashboard</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam mollis orci</p>
                </section>
            </FadeInSection>

            <section className="mid-section">
                <FadeInSection>
                    <div>
                        <img src={require("../images/dashboard_1.png")} alt="Dashboard" className="hero-img" />
                    </div>
                </FadeInSection>
            </section>

            <FadeInSection>
                <div className="secondary-info">
                    <div>
                        <img src={require("../images/graph.svg")} alt="Graph" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </FadeInSection>
            <FadeInSection>
                <section className="features">
                    <div>
                        <img src={require("../images/image.png")} alt="Features" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="!#">Read more &rarr;</a>
                    </div>
                    <div>
                        <img src={require("../images/image.png")} alt="Support" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="!#">Read more &rarr;</a>
                    </div>
                    <div>
                        <img src={require("../images/image.png")} alt="Support" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="!#">Read more &rarr;</a>
                    </div>
                </section>
            </FadeInSection>

            <footer className="home-footer">
                <div>
                    <p>
                        This dashboard is in association with <a href="https://punkapi.com/documentation/"> Punk API</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}