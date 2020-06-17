import React from 'react'
import Burger from '../../Burger/Burger.js'
import Button from '../../UI/Button/Button.js'
import classes from './CheckoutSummary.module.css'

const CheckoutSummary = (props) => {
    return (
        <div className = {classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style = {{width: '100%', margin: 'auto'}}>
                <Burger ingredients = {props.ingredients}/>
                <Button btnType = "Danger" clicked={props.cancel}>Cancel</Button>
                <Button btnType = "Success" clicked={props.continue}>Continue</Button>
                
            </div>
        </div>
    )
}

export default CheckoutSummary