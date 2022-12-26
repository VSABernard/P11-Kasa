import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Carousel = ({pictures}) => {
    const [index, setIndex] = useState(0)
    const [currentImage, setImage] = useState(pictures[0])

    const length = pictures.length
    console.log (pictures)
    console.log(pictures[0])
    console.log (length)

    const handlePrevious = () => {
        let newIndex = index - 1
        newIndex = newIndex < 0 ? length - 1 : newIndex
        setIndex(newIndex)
        setImage(pictures[newIndex])
    }

    const handleNext = () => {
        let newIndex = index + 1
        newIndex = newIndex >= length ? 0 : newIndex
        setIndex(newIndex)
        setImage(pictures[newIndex])
    }

    return (
    <div className="carousel">
        <img src={currentImage}></img>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <p>{index}</p>
    </div>
    )
}

export default Carousel