import {auth, db} from '../config/firebaseconfig.js'

export const Signin = (info) => {
    return (dispatch) => {
        auth.setPersistence("local").then(() => {
            auth.signInWithEmailAndPassword(info.email, info.password).then(user => {
                dispatch({type: "SIGN_IN_SUCCESS", user:user, redirect:"/blogs"}) 
        }).catch(err => {
            dispatch({type: "SIGN_IN_FAILURE", error: err.message})
        })
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
        auth.createUserWithEmailAndPassword(info.email, info.password).then((user) => {
            return db.collection('users').doc(user.user.uid).set({
                firstName: info.firstName,
                lastName: info.lastName,
                initials: info.initials,
            })
          }).then(() => {
            dispatch({type: "SIGN_UP_SUCCESS" , redirect:"/blogs"})
        }).catch(err => {
            dispatch({type: "SIGN_UP_FAILURE", error: err.message})
        })
          
    }
}

export const SetUser = (user) => {
    return (dispatch) => {
        dispatch({type: "SET_USER", user: user})
    }
}













