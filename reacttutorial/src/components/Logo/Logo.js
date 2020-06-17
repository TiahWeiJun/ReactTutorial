import React from 'react'
import BurgerLogo from '../../assets/images/BurgerLogo.png'
import classes from './Logo.module.css'

const Logo = (props) => {
    return(
        <div className = {classes.Logo} style = {{height: props.height}}>
            <img src={BurgerLogo} alt="Burger Logo"/>
        </div>
    )
}

export default Logo