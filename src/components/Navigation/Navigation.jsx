import React from "react"
import { NavLink } from "react-router-dom"
import "../Navigation/Navigation.css"

const Navigation = () => {
    return (
        <nav className="nav">
            <NavLink to="/" className={(nav) => nav.isActive ? "nav_item--active" : "nav_item--inactive"} >
                Accueil
            </NavLink>
             <NavLink to="/about" className={(nav) => nav.isActive ? "nav_item--active" : "nav_item--inactive"} >
                A Propos
            </NavLink>
        </nav>
    )
}

export default Navigation