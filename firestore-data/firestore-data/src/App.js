import React from 'react';
import './App.css';
import BlogListPage from './page/blogListpage.js'
import {Switch, Route} from 'react-router-dom'
import BlogDetailPage from './page/blogDetailPage.js'
import createBlogPage from './page/createBlogPage.js'
import Navbar from './navbar/navbar.js'
import LandingPage from './page/LandingPage.js'
import SignInPage from './page/signInPage.js'
import SignUpPage from './page/signUpPage.js'
import {auth} from './config/firebaseconfig.js'
import {connect} from 'react-redux'
import {SetUser} from './reduceractions/authactions.js'
import {Redirect} from 'react-router-dom'



class App extends React.Component {
  
  state = {
    isLoading: true
  }

  componentDidMount(){
    this.authListener()
    
  }
  
  authListener(){
    auth.onAuthStateChanged((user) =>{
        this.props.SetUser(user)
        this.setState({
          isLoading: false
        })
      }
    )
  }
  
  render(){
    if (this.state.isLoading){
      return <p>...loading</p>
    }
    else{
      let routes
      if (this.props.user) {
        routes = (
          <Switch>
            <Route path = '/blogs' exact component={BlogListPage} />
            <Route path = '/blogs/:id' exact component={BlogDetailPage} />
            <Route path = '/create' exact component={createBlogPage} />
            <Redirect to = '/blogs' />
          </Switch>
        )
      }
      else{
        routes = (
          <Switch>
            <Route path = '/' exact component={LandingPage} />
            <Route path = '/signIn' exact component={SignInPage} />
            <Route path = '/signUp' exact component={SignUpPage} />
            <Redirect to = '/signIn' />
          </Switch>
        )
      }

      return (
        <div>
          <Navbar />
          {routes}
          <h1>Footer</h1>
        </div>
    );
  }
}
  }

  const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
    }
}
  
  const mapDispatchToProps = dispatch => {
    return{
        SetUser: (user) => {return dispatch(SetUser(user))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
