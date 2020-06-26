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



class App extends React.Component {

  render(){
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path = '/' exact component={LandingPage} />
          <Route path = '/blogs' exact component={BlogListPage} />
          <Route path = '/blogs/:id' exact component={BlogDetailPage} />
          <Route path = '/create' exact component={createBlogPage} />
          <Route path = '/signIn' exact component={SignInPage} />
          <Route path = '/signUp' exact component={SignUpPage} />
        </Switch>
        <h1>Footer</h1>
      </div>
    );
  }
  }
  

export default(App)
