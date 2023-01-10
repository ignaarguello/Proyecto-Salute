import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Layout(props) {
    return (
        <div id='Layout'>
            <Navbar />
            <div id='contenido'>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
