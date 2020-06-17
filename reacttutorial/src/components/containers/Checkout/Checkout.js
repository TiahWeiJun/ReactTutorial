import React from 'react'
import CheckoutSummary from '../../Order/CheckoutSummary/CheckoutSummary.js'
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData.js'



class Checkout extends React.Component{
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1,
        },
        totalPrice: 0
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search)
        console.log(query.entries())
        const ingredients = {}
        let price
        for (let param of query.entries()) {
            if (param[0] === 'price'){
                price = param[1]
            }
            else{
                ingredients[param[0]] = +param[1]
            }
            
        }
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        })
    }
    
    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                                 cancel = {this.checkoutCancelHandler}
                                 continue = {this.checkoutContinueHandler}/>
                <Route path={this.props.match.url + '/contact-data'} exact render = {() => {
                    return <ContactData ingredients = {this.state.ingredients} price = {this.state.totalPrice}/>
                }}/>
            </div>
        )
    }
}

export default Checkout