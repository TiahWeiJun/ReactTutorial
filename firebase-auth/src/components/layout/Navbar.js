import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLink from './SignedInLink.js'
import SignedOutLink from './SignedOutLink.js'

const Navbar = () => {
    return(
        <nav className = "nav-wrapper grey darken-3">
            <div className = 'container'>
            <Link to='/' className = "brand-logo">MarioPlan</Link>
            <SignedInLink/>
            <SignedOutLink/>
            </div>
        </nav>
    )
}

export default Navbar