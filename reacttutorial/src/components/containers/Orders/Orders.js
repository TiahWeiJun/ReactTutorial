import React from 'react'
import Order from './Order/Order.js'
import axios from '../../../axios-orders.js'

class Orders extends React.Component{

    state = {
        orders: [],
        loading: true
    }

    componentDidMount(){
        axios.get('/orders.json')
              .then(res => {
                
                const fetchedOrders = []
                for (let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key,
                    })
                }
                console.log(fetchedOrders)
                this.setState({
                    loading: false,
                    orders: fetchedOrders
                })
              })
              .catch(err => {
                this.setState({
                    loading: false,
                }) 
              })
    }

    render(){
        return(
            <div>
                {this.state.orders.map(order => {
                   return <Order key={order.id}
                                 ingredients = {order.ingredients}
                                 price = {+order.price} />
                })}
            </div>
        
        )
    }
}

export default Orders