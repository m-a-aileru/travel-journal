import React from "react"
import { GoGlobe } from "react-icons/go"

function Header() {
    return (
        <header>
            <div className="header--icon"><GoGlobe /></div>
            <h4 className="header--text">my travel journal.</h4>
        </header>
    )
}

export default Header