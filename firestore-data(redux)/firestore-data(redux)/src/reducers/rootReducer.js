const initialState = {
    blogs: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "CREATE_BLOG":
            console.log('created blog', action.blog)
            return state

        case "GET_FROM_FIRESTORE":
            return {
                ...state,
                blogs: action.blogs
            }
            
        default: 
            return state
    }
}


export default rootReducer  