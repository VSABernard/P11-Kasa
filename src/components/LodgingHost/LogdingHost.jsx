import React from "react"
import "../../components/LodgingHost/LodgingHost.css"

const LodgingHost = ({host}) => {
    return (
        <div className='host'>   
            <p className='host-name'>{host.name}</p>
            <img src={host.picture} alt='logo' />
            
        </div> 
      )
}

export default LodgingHost