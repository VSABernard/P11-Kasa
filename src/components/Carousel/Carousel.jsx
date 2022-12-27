import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Carousel/Carousel.css"

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
        <img className='carousel-image' src={ currentImage } alt= { `${currentImage.title} cover` }></img>
        <div className='chevron'>
            <FontAwesomeIcon className='previous' icon= {'chevron-left'} onClick={handlePrevious} />
            <FontAwesomeIcon className='next' icon= {'chevron-right'} onClick={handleNext} />
        </div>
        <p>{index}</p>
    </div>
    )
}

export default Carousel
