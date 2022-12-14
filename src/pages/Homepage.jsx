import React, { useEffect } from "react"
import Header from "../components/Header"
import Slogan from "../components/Slogan"

const Homepage = () => {
    useEffect(() => {
    window.scrollTo(0,0)                /* On load, the page is displayed at its top */
    })

    return (
        <div className="home">
            <div>
                <Header />
                <Slogan 
                    slogan1="Chez vous,"
                    slogan2=" partout et ailleurs" 
                    background="background-slogan-homepage" />
                        
            </div>
        </div>
    )
}

export default Homepage