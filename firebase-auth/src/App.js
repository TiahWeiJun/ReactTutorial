import React from 'react';
import './App.css';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey: "AIzaSyAFHBVgbALu90ERoSEx0CyOHibjpBPglZw",
  authDomain: "fir-auth-7f927.firebaseapp.com"
})

class App extends React.Component{
  state = {
    isSignedIn: false
  }

  uiConfig = {
    signInFLow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user
      })
    })
  }

  

  render(){
    let body
    if (this.state.isSignedIn) {
      body = (
        <div>
          <p>Welcome {firebase.auth().currentUser.displayName}</p>
          <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
        </div>
        
      )
      }
    else{
      body = (
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      )
    }


    return(
      body
    )
}
}
export default App;
