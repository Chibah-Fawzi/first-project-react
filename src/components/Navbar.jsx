import React from 'react'
import '../App.css'

export default function Navbar() {
    return (
        <nav>
            <h2>Zugat</h2>
            <div className='nav-links'>
                <a href="">New In</a>
                <a href="">Shop</a>
                <a href="">Blog</a>
                <a href="">About</a>
            </div>
            <a href="">Cart</a>
        </nav>
    )
}
