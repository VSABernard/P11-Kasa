import React from "react";
import { Link } from "react-router-dom";
import "../LodgingList/LodgingList.css"
import housings from "../../data/housings.json"

function LodgingList () {
   
   console.log(housings)
    return (        
        <ul className="lodgingList-card" >
            { housings.map((housing) => (
                <li key={housing.id} className="lodging-item">
                    <Link to={`/Lodging/${housing.id}`} state={ housing } >
                        <img className="lodging-image" src={ housing.cover } alt={`${housing.title} cover`} />
                        <h3 className="lodging-title">{ housing.title }</h3>
                    </Link>
                    
                </li>                
            ))}
        </ul>
    )
}

export default LodgingList