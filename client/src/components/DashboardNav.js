import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import Beer from "./TopBrands"
import Table from "./AllBrands"

export default function DashboardNav() {
    const [brands, setBrands] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(data => {
                setBrands(data.map(i => i.name).slice(0, 5))
            })
    }, [])

    const handleClick = (i) => setIndex(i)

    return (
        <div className="dashboard">
            <Table />
            <h2>Data of top 5 brands of beers</h2>

            {/* Navbar depicting 5 top brands of beer */}
            <nav>
                <ul>
                    {brands.map((beer, i) => (
                        <li key={i} className="brands" style={{ backgroundColor: index === i ? "#c4f0ff" : "white", padding: "0.5em", borderRadius: "5px" }}>
                            <Link to={`/dashboard/${i + 1}`} onClick={() => handleClick(i)}>{beer}</Link>
                        </li>
                    ))}
                </ul>

                <Route path={`/dashboard/:beerId`} render={() => <Beer beer={brands} />} />
            </nav>
        </div>
    )
}