import React, { useState, useEffect } from 'react'
import useSortableData from "../hooks/useSortableData";
import Fuse from 'fuse.js'

export default function AllBrands() {
    const [beerData, setBeerData] = useState([])
    const { items, requestSort, sortConfig } = useSortableData(beerData);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(data => {
                setBeerData(data)
            })
    }, [])

    // Used for sorting
    const getClassNamesFor = (name) => {
        if (!sortConfig) { return; }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    // Search functionality using fuse.js using the 'keys' 
    const fuse = new Fuse(beerData, {
        keys: ["name", "first_brewed", "ph", "abv", "ibu", "target_fg", "target_og", "ebc", "srm"],
        includeScore: true,
        threshold: 0.05,
    });

    const results = fuse.search(query);
    const beerResults = query ? results.map((result) => result.item) : items

    const handleSearch = ({ currentTarget = {} }) => {
        const { value } = currentTarget;
        setQuery(value);
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
        if (e.target.value < 2013) {
            setQuery(e.target.value)
        }
    }

    return (
        <div>
            <h2>Table depicting stats of different brands</h2>

            {/* A table which depicts all the brands of beer with search and sort functionality */}
            <div style={{ overflowX: "auto" }}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort("name")}
                                    className={getClassNamesFor("name")}
                                    id="field"
                                >
                                    <span className="name">Name</span>{" "}
                                    <span className="arrows"> &#x2195;</span>
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort("first_brewed")}
                                    className={getClassNamesFor("first_brewed")}
                                    id="field"
                                >
                                    <span className="name">First brewed</span>
                                    <span className="arrows"> &#x2195;</span>
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort("abv")}
                                    className={getClassNamesFor("abv")}
                                    id="field"
                                >
                                    <span className="name">ABV</span>
                                    <span className="arrows"> &#x2195;</span>
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort("ph")}
                                    className={getClassNamesFor("ph")}
                                    id="field"
                                >
                                    <span className="name">pH</span>
                                    <span className="arrows"> &#x2195;</span>
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort("ibu")}
                                    className={getClassNamesFor("ibu")}
                                    id="field"
                                >
                                    <span className="name">IBU</span>
                                    <span className="arrows"> &#x2195;</span>
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort("target_fg")}
                                    className={getClassNamesFor("target_fg")}
                                    id="field"
                                >
                                    <span className="name">Target FG</span>
                                    <span className="arrows"> &#x2195;</span>
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort("target_og")}
                                    className={getClassNamesFor("target_og")}
                                    id="field"
                                >
                                    <span className="name">Target OG</span>
                                    <span className="arrows"> &#x2195;</span>
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort("ebc")}
                                    className={getClassNamesFor("ebc")}
                                    id="field"
                                >
                                    <span className="name">EBC</span>
                                    <span className="arrows"> &#x2195;</span>
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort("srm")}
                                    className={getClassNamesFor("srm")}
                                    id="field"
                                >
                                    <span className="name">SRM</span>
                                    <span className="arrows"> &#x2195;</span>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    {beerResults ? (
                        <tbody>
                            <tr>
                                <td colSpan={9} style={{ backgroundColor: "#eee" }}>
                                    <div>
                                        <input
                                            type="text"
                                            // value={query}
                                            onChange={handleSearch}
                                            placeholder="Search for a brand"
                                        />
                                        <span>
                                            <label htmlFor="date">Pick a year</label>
                                            <select name="date" id="date" onChange={handleChange}
                                            // value={selectValue}
                                            >
                                                <option value="">Select</option>
                                                <option value="2015">2015</option>
                                                <option value="2014">2014</option>
                                                <option value="2013">2013</option>
                                                <option value="2012">2012</option>
                                                <option value="2011">2011</option>
                                                <option value="2010">2010</option>
                                                <option value="2009">2009</option>
                                                <option value="2008">2008</option>
                                                <option value="2007">2007</option>
                                            </select>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            {beerResults.map((beer) => (
                                <tr key={beer.id}>
                                    <td>{beer.name}</td>
                                    <td>{beer.first_brewed}</td>
                                    <td>{beer.abv}%</td>
                                    <td>{beer.ph}</td>
                                    <td>{beer.ibu}</td>
                                    <td>{beer.target_fg}</td>
                                    <td>{beer.target_og}</td>
                                    <td>{beer.ebc}</td>
                                    <td>{beer.srm}</td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                            <tbody>
                                {items.map((beer) => (
                                    <tr key={beer.id}>
                                        <td>{beer.name}</td>
                                        <td>{beer.first_brewed}</td>
                                        <td>{beer.abv}%</td>
                                        <td>{beer.ph}</td>
                                        <td>{beer.ibu}</td>
                                        <td>{beer.target_fg}</td>
                                        <td>{beer.target_og}</td>
                                        <td>{beer.ebc}</td>
                                        <td>{beer.srm}</td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                </table>
            </div>
        </div>
    )
}