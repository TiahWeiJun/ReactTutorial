import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.js'
import Dashboard from './components/dashboard/Dashboard.js'
import {Switch, Route} from 'react-router-dom'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn.js'
import SignUp from './components/auth/SignUp.js'
import CreateProject from './components/projects/CreateProject'


class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route path = '/' exact component={Dashboard} />
          <Route path = "/projects/:id" component={ProjectDetails} />
          <Route path = "/signin" component={SignIn} />
          <Route path = "/signup" component={SignUp} />
          <Route path = "/create" component={CreateProject} />
        </Switch>
      </div>
    )
  }
}

export default App;
