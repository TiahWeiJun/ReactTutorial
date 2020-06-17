import React from 'react'
import classes from './Order.module.css'

const Order = (props) => {
    const ingredients = []
    for (let ing in props.ingredients){
        ingredients.push(
            {
                name: ing,
                amount: props.ingredients[ing]
            }

        )
    }

    const ingredient = ingredients.map(ig => {
        return <span>{ig.name}: {ig.amount}</span>
    })

    return(
        <div className = {classes.Order}>
            <p>Ingredients: {ingredient} </p>
            <p>Price: SGD{props.price.toFixed(2)}</p>
        </div>
    )
}

export default Order    