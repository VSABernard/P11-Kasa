import React from "react";
// import { NavLink } from "react-router-dom";
import "../style/LodgingList.css"
import housings from "../data/housings.json"

function LodgingList () {
   
   console.log(housings)
    return (
        
        <ul className="lodgingList-card" >
            { housings.map((housing) => (
                <li key={housing.id} className="lodging-item">
                    <img className="lodging-image" src={ housing.cover } alt={`${housing.title} cover`} />
                    <h3 className="lodging-title">{ housing.title }</h3>
                
                    {/* <NavLink to={"/Lodging" + id}>
                        <h3> {title} </h3>
                        <picture>
                            <img src={cover} alt={title}></img>                        
                        </picture>
                    </NavLink> */}
                </li>                
            ))}
        </ul>
    )
}

export default LodgingList