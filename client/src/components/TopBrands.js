import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import "chart.js";
import { getBarData, getBarOptions, getPieData, getPieOptions, getDoughnutData, getDoughnutOptions } from "../utils/graphData"
import axios from 'axios';

export default function TopBrands() {
    const [beerDetails, setBeerDetails] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [pieLabel, setPieLabel] = useState([])
    const [doughnutLabel, setDoughnutLabel] = useState([])
    const [hops, setHops] = useState([])

    let { beerId } = useParams();

    useEffect(() => {
        //Get specific beer data and use the api to display charts 
        axios.get(`https://api.punkapi.com/v2/beers/${beerId}`)
            .then(res => res.json())
            .then(data => data.map(property => {
                setBeerDetails(beerDetails.splice(0, beerDetails.length))
                setPieLabel(pieLabel.splice(0, beerDetails.length))
                setIngredients(beerDetails.splice(0, beerDetails.length))
                setDoughnutLabel(doughnutLabel.splice(0, doughnutLabel.length))
                setHops(hops.splice(0, hops.length))

                setBeerDetails(beerDetails.concat([property.volume.value, property.method.mash_temp[0].temp.value, property.method.fermentation.temp.value, property.attenuation_level]))
                setPieLabel(property.ingredients.malt.map(ingredient => ingredient.name))
                setIngredients(property.ingredients.malt.map(ingredient => ingredient.amount.value))
                setDoughnutLabel(property.ingredients.hops.map(hop => `${hop.name}(${hop.attribute})`))
                setHops(property.ingredients.hops.map(hop => hop.amount.value))
            }))
    }, [beerId])

    let barData = getBarData(beerDetails)
    let barOptions = getBarOptions()
    let pieData = getPieData(pieLabel, ingredients)
    let pieOptions = getPieOptions()
    let doughnutData = getDoughnutData(doughnutLabel, hops)
    let doughnutOptions = getDoughnutOptions()

    // 3 different charts depicting information about top 5 beer brands
    return (
        <div className="bar-chart">
            <Bar data={barData} options={barOptions} />
            <Pie data={pieData} options={pieOptions} />
            <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
    )
}