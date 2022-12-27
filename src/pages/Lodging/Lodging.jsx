import React, { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import Header from "../../components/Header/Header"
import Carousel from "../../components/Carousel/Carousel"
import LodgingHeader from "../../components/LodgingHeader/LodgingHeader"
import Error404 from "../Error404/Error404"

const Lodging = () => {
    
    
    const {id} = useParams()            /* Retrieve username from URL */
    const location = useLocation()      /* This hook returns the current location object */ 
    const housing = location.state
    console.log (housing)

    const [data, setData] = useState({
        equipments: [],
        host: { name: "", picture: "" },
        pictures: [],
        tags: [],
    })

    useEffect(() => {
        window.scrollTo(0,0)                /* On load, the page is displayed at its top */
        
        const fetchData = async () => {                             /* Fetch mock data */
            const data = await fetch ("../../data/housings.json")
            const json = await data.json()

            const lodgingData = json.find( (item) => item.id === id)    /* Use "find" méthode to collect only lodging data */
            lodgingData ? setData(lodgingData) : setData(null)
        }
        fetchData()
    }, [id])

    return data !== null ? (
        <div className="lodging">
            <Header />
            <main className="main-lodging">
                <Carousel pictures= {housing.pictures}/>                
                <div className="presentation-lodging">
                    <LodgingHeader data={ data } />
                </div>
            </main>
            
        </div>
        
    ) : (
        <Error404 />
    )
}

export default Lodging