import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo.js'
import NavigationItems from '../NavigationItems/NavigationItems.js'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle.js'

const Toolbar = (props) => {
    return(
        <header className = {classes.Toolbar}>
            <SideDrawerToggle clicked = {props.drawerToggle}/>
            <Logo height = '80%' />
            <nav>
                <NavigationItems /> 
            </nav>
             
        </header>
    )
}

export default Toolbar