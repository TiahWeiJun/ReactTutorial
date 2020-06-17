import React from 'react'
import Logo from '../../Logo/Logo.js'
import NavigationItems from '../NavigationItems/NavigationItems.js'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop.js'

const SideDrawer = (props) => {
    let child
    if (props.showDrawer) {
        child =(
            <React.Fragment>
                <Backdrop showModal clicked = {props.hideSideDrawer}/>
                <div className = {classes.SideDrawer}>
                    <Logo height = '10%' />
                    <NavigationItems />
                </div>
            </React.Fragment>
        )
    }
    else{
        child = null
    }

    return (
        child
    )
}

export default SideDrawer