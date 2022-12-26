import React, { useEffect } from "react"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Accordion from "../../components/Accordion/Accordion"
import accordionData from "../../data/accordionData.json"
import "../../pages/About/About.css"
import Footer from "../../components/Footer/Footer"


const About = () => {
    useEffect(() => {
    window.scrollTo(0,0)                /* On load, the page is displayed at its top */
    })

    return (
        <div className="about">
            <div>
                <Header />                    
                <Banner background="background-about-d" />   
            </div>
            <div className="accordion-block">
                {accordionData.map(({ title, content }) => (
                <Accordion key={title} title={title} content={content} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default About
