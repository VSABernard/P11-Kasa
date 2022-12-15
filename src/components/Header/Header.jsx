import React from 'react'
import Navigation from '../Navigation/Navigation'
import logo from '../../assets/logo.png'
import "../Header/Header.css"

const Header = () => {
    return <header className='kasa-header'>
        <picture>
            <img src={logo} alt='logo-Kasa' className='kasa-logo'/>        
        </picture>
        <Navigation />
    </header>
}

export default Header