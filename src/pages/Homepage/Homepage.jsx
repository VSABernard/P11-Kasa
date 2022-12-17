import React, { useEffect } from "react"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import LodgingList from "../../components/LodgingList/LodgingList"
import Footer from "../../components/Footer/Footer"
import "../Homepage/Homepage.css"


const Homepage = () => {
    useEffect(() => {
    window.scrollTo(0,0)                /* On load, the page is displayed at its top */
    })

    return (
        <div className="home">
            <div>
                <Header />
                <Banner 
                    slogan1="Chez vous,"
                    slogan2=" partout et ailleurs" 
                    background="background-slogan-homepage" />                        
            </div>

            <main className="main-homepage">
                <LodgingList />
            </main>

            <Footer /> 
        </div>
    )
}

export default Homepage