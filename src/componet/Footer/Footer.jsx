import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <footer className='text-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 p-5">
                            <div className='footer-box'>
                                <h3 className='text-white'>LOCATION</h3>
                                <p className='text-white'>2215 John Daniel Drive</p>
                                <p className='text-white'>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-5">
                            <div className='footer-box text-center'>
                                <h3 className='text-white'>AROUND THE WEB</h3>
                                <div className="social d-flex justify-content-center">
                                    <div className="icon ms-2">
                                        <i className="fa-brands text-white fa-facebook"></i>
                                    </div>
                                    <div className="icon ms-2">
                                        <i className="fa-brands text-white fa-twitter"></i>
                                    </div>
                                    <div className="icon ms-2">
                                        <i className="fa-brands text-white fa-linkedin-in"></i>
                                    </div>
                                    <div className="icon ms-2">
                                        <i className="fa-solid text-white fa-globe"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-5">
                            <div className='footer-box'>
                                <h3 className='text-white'>ABOUT FREELANCER</h3>
                                <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright pb-1'>
                    <p className='text-white py-3'>Copyright © Your Website 2021</p>
                </div>
            </footer>
        </>
    )
}
