import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faCheckCircle, faHandPointer } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <div>
            <section>
                <h2>Build your own dashboard</h2>
                <img src={require("../images/dashboard.svg")} alt="Dashboard" style={{ width: "400px" }} />
            </section>

            <section>
                <div>
                    <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: "2.5rem", color: "#333" }} />
                    <p>Descriptive</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: "2.5rem", color: "#333" }} />
                    <p>Accurate</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHandPointer} style={{ fontSize: "2.5rem", color: "#333" }} />
                    <p>Interactive</p>
                </div>
            </section>
        </div>
    )
}