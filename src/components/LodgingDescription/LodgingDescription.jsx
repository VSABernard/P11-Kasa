import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../components/LodgingDescription/LodgingDescription.css"

library.add(fas)

const LodgingDescription = ({ description }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className='description'>
            <div className='description-section' onClick={() => setIsActive(!isActive)}>
                <p className='description-title'>Description</p>
                <FontAwesomeIcon className='chevron-description' icon={`${isActive ? 'chevron-up' : 'chevron-down'}`} />
            </div>
            {isActive && <div className="description-content">{ description }</div>}
        </div>
    )
 }

 export default LodgingDescription