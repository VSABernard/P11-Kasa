import React, { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import Header from "../../components/Header/Header"
import Carousel from "../../components/Carousel/Carousel"
import LodgingHeader from "../../components/LodgingHeader/LodgingHeader"
import Rating from "../../components/Rating/Rating"

const Lodging = () => {    
    useEffect(() => {
        window.scrollTo(0,0)                                            /* On load, the page is displayed at its top */  
    })

    const {id} = useParams()            /* Retrieve username from URL */
    const location = useLocation()      /* This hook returns the current location object */ 
    const housing = location.state
    console.log (housing)    

    return (
        <div className="lodging">
            <Header />
            <div className="main-lodging">
                <Carousel pictures= { housing.pictures }/>   
                <div className="head-lodging"> 
                    <LodgingHeader housing={ housing } />
                    
                </div>   
            </div>
        </div>
        
    ) 
}

export default Lodging