import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../componet/Navbar/Navbar'
import Footer from './../componet/Footer/Footer'
export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
