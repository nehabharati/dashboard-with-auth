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

    function handleSearch({ currentTarget = {} }) {
        const { value } = currentTarget;
        setQuery(value);
    }

    return (
        <div>
            <h2>Table depicting stats of different brands</h2>
            {/* A table which depicts all the brands of beer with search and sort functionality */}
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
                                <input
                                    type="text"
                                    value={query}
                                    onChange={handleSearch}
                                    placeholder="Search for a brand"
                                />
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
    )
}