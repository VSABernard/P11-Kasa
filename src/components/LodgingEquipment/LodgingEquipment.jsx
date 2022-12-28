import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../components/LodgingEquipment/LodgingEquipment.css"

library.add(fas)

const LodgingEquipment = ({ equipments }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className='equipment'>
            <div className='equipment-section' onClick={() => setIsActive(!isActive)}>
                <p className='equipment-title'>Équipements</p>
                <FontAwesomeIcon className='chevron-equipment' icon={`${isActive ? 'chevron-up' : 'chevron-down'}`} />
            </div>
            {isActive && <div className="equipment-content">{ equipments.map ((equipment) => (
                <li key={equipment}>{ equipment }</li>
            ))}
            </div>}
        </div>
    )
 }

 export default LodgingEquipment