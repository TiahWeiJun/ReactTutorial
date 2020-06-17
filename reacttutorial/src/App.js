import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout.js'
import Checkout from './components/containers/Checkout/Checkout.js'
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder.js'
import {Route} from 'react-router-dom'
import Orders from './components/containers/Orders/Orders.js'



class App extends React.Component{
  render(){
    return(
      <div>
        <Layout>
          <Route path="/" exact component = {BurgerBuilder} />
          <Route path="/checkout" component = {Checkout} />
          <Route path='/orders' exact component = {Orders} />        
        </Layout>
      </div>
    )
  }
  
}
export default App