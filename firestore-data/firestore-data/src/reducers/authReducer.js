const initialState = {
    currentUser: null,
    signInRedirect: null,
    signUpRedirect: null,
    error: null,
    alert: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case "SIGN_IN_SUCCESS":
            return {
                ...state,
                currentUser: action.user,
                signInRedirect: action.redirect
            }

        case "SIGN_IN_FAILURE":
            return {
                ...state,
                error: action.error
            }
        

        case "SIGN_UP_SUCCESS":
            return {
                ...state,
                signUpRedirect: action.redirect,
                alert: action.alert,
                
            }

        case "SIGN_UP_FAILURE":
            return {
                ...state,
                error: action.error
            }

        case "SIGN_OUT_SUCCESS":
            return {
                ...state,
                currentUser: null,
                signInRedirect: action.redirect
            }


        default:
            return state
    }
}

export default authReducer