import React from "react"
import emptyStar from "../../assets/emptyStar.svg"
import fullStar from "../../assets/fullStar.svg"
import "../Rating/Rating.css"

function Rate ({ rating }) {
    const ratingMax = 5
    const starFull = <img src ={ fullStar } alt='Full star' />
    const starEmpty = <img src ={ emptyStar } alt='Empty star' />

    const starsArray = []
    for (let i = 0; i < ratingMax; i ++) {
        i < rating ? starsArray.push(starFull) : starsArray.push(starEmpty)
    }

    return (
        <ul className="starRate">
            {starsArray.map((star, index) => (
                <li key={index}>{star}</li>
            ))}
        </ul>
    )
}

export default Rate