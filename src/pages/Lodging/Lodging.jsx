import React, { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header"
import Carousel from "../../components/Carousel/Carousel";

const Lodging = () => {
    useEffect(() => {
        window.scrollTo(0,0)                /* On load, the page is displayed at its top */
        })
    
        const {id} = useParams()            /* Retrieve username frim URL */
        const location = useLocation()      /* This hook returns the current location object */ 
        const housing = location.state
        console.log (housing)

    return (
        <div className="lodging">
            <Header />
            <p>blabla {id}</p>
            <Carousel pictures= {housing.pictures}/>
        </div>
        
    )
}

export default Lodging