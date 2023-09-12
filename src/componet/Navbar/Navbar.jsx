import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top py-4">
                <div className="container">
                    <Link className="navbar-brand text-white text-uppercase fw-bolder fs-2" to="">START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white text-uppercase rounded-2 fw-bold mt-3 mt-md-0 px-2" to="about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text-uppercase fw-bold rounded-2 mt-3 mt-md-0 px-2" to="por">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text-uppercase fw-bold rounded-2 mt-3 mt-md-0 px-2" to="contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
