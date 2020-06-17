import React from 'react';
import Burger from '../../Burger/Burger.js'
import BuildControl from '../../Burger/BuildControl/BuildControl.js'
import Modal from '../../UI/Modal/Modal.js'
import OrderSummary from '../../Burger/OrderSummary/OrderSummary.js'
import axios from '../../../axios-orders'
import Spinner from '../../UI/Spinner/Spinner.js'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends React.Component{
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        showModal: false,
        loading: false
    }

    componentDidMount () {
        axios.get('ingredients.json').then(response => {
            this.setState({
                ingredients: response.data
            })
        }).catch(error => {})
        
    }

    checkOutHandler = () => {
        this.setState({
            showModal: true
        })
            
    }

    cancelModal = () => {
        this.setState({
            showModal: false
        })
    }

    purchaseContinueHandler = () => {
        const queryParams = []
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice)
        const queryString = queryParams.join('&')

        this.props.history.push({
            pathname: '/checkout',
            search: "?" + queryString
            

        })

    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, next) => {
            return sum + next}, 0)
        
        this.setState({
            purchasable: sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        let updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount

        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseState(updatedIngredients)
    }
    
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount > 0){
            const updatedCount = oldCount - 1
            let updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount

            const priceAddition = INGREDIENT_PRICES[type]
            const oldPrice = this.state.totalPrice
            const newPrice = oldPrice - priceAddition
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice
            })
            this.updatePurchaseState(updatedIngredients)

        }
        

    }

    render() {
        let orderSummary

        let burger = <Spinner />

        if (this.state.ingredients){
            burger = (
                <React.Fragment>
                    <Burger ingredients = {this.state.ingredients}/>
                    <BuildControl 
                        price = {this.state.totalPrice} 
                        ingredientAdded={this.addIngredientHandler} 
                        ingredientRemoved={this.removeIngredientHandler}
                        purchase = {this.state.purchasable}
                        checkOut = {this.checkOutHandler}/>
                </React.Fragment>
            )
            orderSummary = (
                <OrderSummary cancel = {this.cancelModal}
                              continue = {this.purchaseContinueHandler}
                              price = {this.state.totalPrice}  
                              ingredients = {this.state.ingredients}/>
                              )
            if (this.state.loading){
                orderSummary = <Spinner />
            }
            
        }
        return(
            <React.Fragment>
                <Modal showModal = {this.state.showModal}
                        clickBackDrop = {this.cancelModal}>
                   {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        )
    }
}
export default BurgerBuilder