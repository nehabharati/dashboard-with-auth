import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faFileContract } from '@fortawesome/free-solid-svg-icons'
import FadeInSection from "./FadeInSection"
import { Link } from 'react-router-dom'

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
                        <img src={require("../images/dashboard.webp")} alt="Dashboard" className="hero-img" />
                    </div>
                </FadeInSection>
            </section>

            <FadeInSection>
                <div className="secondary-info">
                    <p>The dashboard depicts information about various beer brands. The different stats about the beer brands are
                    shown in a tabular format.
                    <p> The user can search for any brand. User can also search according to different
                    parameters shown in the table.</p>
                        <p>There's a sorting feature also available in the table.
                    There is also a graphical representation of various parameters taken for the top 5 beer brands</p>
                    </p>
                </div>
            </FadeInSection>
            <FadeInSection>
                <section className="features">
                    <div>
                        <img src={require("../images/image.webp")} alt="Features" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/">Read more &rarr;</Link>
                    </div>
                    <div>
                        <img src={require("../images/image.webp")} alt="Support" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/">Read more &rarr;</Link>
                    </div>
                    <div>
                        <img src={require("../images/image.webp")} alt="Support" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to="/">Read more &rarr;</Link>
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