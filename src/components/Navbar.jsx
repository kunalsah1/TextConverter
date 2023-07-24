import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg  bg-dark`}>
            <a className="navbar-brand" href="#">Text Converter</a>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
                    </li>

                </ul>


            </div>
        </nav>
    )
}

export default Navbar
