import React from 'react'
import classes from './OrderSummary.module.css'
import Button from '../../UI/Button/Button.js'

class OrderSummary extends React.Component {

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(ing => {
            if (this.props.ingredients[ing] !== 0){
                return <li key={ing}>{ing}: {this.props.ingredients[ing]}</li>
            }
        })

        return(
            <React.Fragment>
                <h3>Your Order</h3>
                <p>Delicious Burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: ${this.props.price.toFixed(2)}</p>
                <p>Continue to Check Out?</p>
                <Button clicked = {this.props.continue} btnType="Success">Continue</Button>
                <Button clicked = {this.props.cancel} btnType="Danger">Cancel</Button>
            </React.Fragment>
        )
    }
    
}

export default OrderSummary