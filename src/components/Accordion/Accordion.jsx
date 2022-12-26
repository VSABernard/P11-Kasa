import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Accordion/Accordion.css"

library.add(fas)

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-section" onClick={() => setIsActive(!isActive)}>
        <div className='accordion-title'>{title}</div>
        <FontAwesomeIcon className='chevron' icon={`${isActive  ? 'chevron-up' : 'chevron-down'}`} />
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  )
}

export default Accordion