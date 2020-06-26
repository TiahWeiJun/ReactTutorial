import {auth} from '../config/firebaseconfig.js'

export const Signin = (info) => {
    return (dispatch) => {
        auth.signInWithEmailAndPassword(info.email, info.password).then(user => {
            if (user.user.emailVerified){
                dispatch({type: "SIGN_IN_SUCCESS", user:user, redirect:"/blogs"})
            }
            else{
                dispatch({type: "SIGN_IN_FAILURE", error: 'Please verify your email'})
            }
    }).catch(err => {
        dispatch({type: "SIGN_IN_FAILURE", error: err.message})
    })
}
}

export const Signout = () => {
    return (dispatch) => {
        auth.signOut().then(() => {
            console.log("signout")
            dispatch({type: "SIGN_OUT_SUCCESS", redirect: null})
        })
            
    }
}

export const Signup = (info) => {
    return (dispatch) => {
        auth.createUserWithEmailAndPassword(info.email, info.password).then(dataBeforeEmail => {
            auth.onAuthStateChanged(user => {
              console.log(user)
              user.sendEmailVerification();
            });
          }).then(() => {
              dispatch({type: "SIGN_UP_SUCCESS", alert: "Your account has been created and we have sent you a verification link! Please check your email and verify!", redirect:"/signIn"})
          })
          .catch(err => {
            dispatch({type: "SIGN_UP_FAILURE", error: err.message})
        })
    }
}














