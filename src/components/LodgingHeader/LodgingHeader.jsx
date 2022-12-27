import React from 'react'
import "../LodgingHeader/LodgingHeader.css"

const LodgingHeader = ({ data }) => {
    return (
        <header className='lodging-header'>
            <div className='lodging-title'>
                <h1> {data.title} </h1>
                <h2> {data.location} </h2>
            </div>
            <ul className='lodging-tags'>
                { data.tags.map ((tag, index) => (
                    <li key= { data.id + "-" + tag + "-" + index }> {tag} </li>
                ))}
            </ul>
        </header>
    )
}

export default LodgingHeader