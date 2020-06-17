import React from 'react'
import classes from './BuildControl.module.css'
import Controls from './Controls.js'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const BuildControl = (props) => {
    return (
        <div className = {classes.BuildControl}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <Controls 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added = {() => props.ingredientAdded(ctrl.type)}
                    removed = {() => props.ingredientRemoved(ctrl.type)}
                        />
            })}
            <button 
            className = {classes.OrderButton} 
            disabled = {!props.purchase}
            onClick = {props.checkOut}>ORDER NOW</button>
        </div>
        
    )
}

export default BuildControl