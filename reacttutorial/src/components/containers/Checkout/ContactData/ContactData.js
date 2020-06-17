import React from 'react'
import Button from '../../../UI/Button/Button.js'
import classes from './ContactData.module.css'
import axios from '../../../../axios-orders.js'
import {withRouter} from 'react-router-dom'
import Input from '../../../UI/Input/Input.js'

class ContactData extends React.Component{
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZipCode'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{value: 'fastest', displayValue: 'Fastest'},
                              {value: 'cheapest', displayValue: 'Cheapest'} ]
                    
                },
                value: ''
            }
        },
        
        loading: false
    }

    orderHandler = () =>{
        this.setState({loading: true})
        const formData = {}
        for (let data in this.state.orderForm){
            formData[data] = this.state.orderForm[data].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        axios.post('/orders.json', order).then(response => {
            this.setState({loading: false})
            this.props.history.replace('/')
        }).catch(error => {
            this.setState({loading: false})
        })
        
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {...this.state.orderForm}
        const updatedFormElement = {...updatedOrderForm[inputIdentifier]}
        updatedFormElement.value = event.target.value
        updatedOrderForm[inputIdentifier] = updatedFormElement
        this.setState({
            orderForm: updatedOrderForm
        })
    }

    render(){
        const formElementsArray = []
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form>
                {formElementsArray.map(formElement => {
                    return (<Input elementType = {formElement.config.elementType} 
                                   elementConfig = {formElement.config.elementConfig}
                                   value = {formElement.config.value}
                                   key = {formElement.id}
                                   changed = {(event) => this.inputChangedHandler(event, formElement.id)}/>)
                })}
                <Button btnType="Success" clicked = {this.orderHandler}>Order now</Button>
            </form>
        )
        return(
            <div className = {classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default withRouter(ContactData)