import React, { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import Header from "../../components/Header/Header"
import Carousel from "../../components/Carousel/Carousel"
import LodgingHeader from "../../components/LodgingHeader/LodgingHeader"
import Rating from "../../components/Rating/Rating"
import LodgingHost from "../../components/LodgingHost/LogdingHost"
import "../../pages/Lodging/Lodging.css"
import LodgingDescription from "../../components/LodgingDescription/LodgingDescription"
import LodgingEquipment from "../../components/LodgingEquipment/LodgingEquipment"
import Footer from "../../components/Footer/Footer"
import Error404 from "../Error404/Error404"

const Lodging = () => {    
    useEffect(() => {
        window.scrollTo(0,0)                                         /* On load, the page is displayed at its top */  
    })

    const {id} = useParams()                                        /* Retrieve username from URL */
    const location = useLocation()                                  /* This hook returns the current location object */ 
    const housing = location.state
    console.log ("housing : " + housing)    

    if(housing != null ) { return (
        <div className='lodging'>
            <Header />
            <div className='main-lodging'>
                <Carousel pictures= { housing.pictures }/> 
                <div className='head-lodging'>  
                    <LodgingHeader housing={ housing } />
                    <div className='rate-host'>  
                        <LodgingHost host={ housing.host}/>                   
                        <Rating rating={ housing.rating } /> 
                    </div>                         
                </div>      
                <div className='infos'>
                    <LodgingDescription description={ housing.description } />
                    <LodgingEquipment equipments= { housing.equipments } />
                </div>                 
            </div>  
            <Footer />   
        </div>        
    )} else {
    return (<Error404 />)
    }
}

export default Lodging