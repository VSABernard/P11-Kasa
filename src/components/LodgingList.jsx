import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Lodging.css"

const LodgingList = () => {
    const [data, setData] = useState([])            // Hook state to update and use data

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("../data/housings.json")
            const json = await data.json()
            setData(json)
        }
        fetchData()
    }, [])

    return [
        <ul className="lodgingList-home">
            {data.map((item, index) => (            // Map array data to display the list of lodgings which are in location
                <li className="lodgingList-card" key={item.id + "-lodging- + index"}>
                    {/* Link to lodging's page */ }
                    <NavLink to={"/lodging" + item.id}>
                        <h3> {item.title} </h3>
                        <picture>
                            <img src={item.cover} alt={item.title}>
                            </img>                        
                        </picture>
                    </NavLink>      
                </li>
            ))}
        </ul>
    ]
}

export default LodgingList