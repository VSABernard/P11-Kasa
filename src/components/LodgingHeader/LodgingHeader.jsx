import React from 'react'
import "../LodgingHeader/LodgingHeader.css"

const LodgingHeader = ({ housing }) => {
    return (
        <div className='lodging-header'>
            <div className='lodging-title'>
                <h1 className='lodging-h1'> {housing.title} </h1>
                <h2 className='lodging-h2'> {housing.location} </h2>
            </div>
            <ul className='lodging-tags'>
                { housing.tags.map ((tag, index) => (
                    <li key= { housing.id + "-" + tag + "-" + index }> {tag} </li>
                ))}
            </ul>
        </div>
    )
}

export default LodgingHeader