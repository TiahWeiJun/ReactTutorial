import * as actionTypes from '../store/actions'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case(actionTypes.INCREMENT):
            return {... state,
                    counter: state.counter + 1}
            break
        case(actionTypes.DECREMENT):
            return {... state,
                    counter: state.counter - 1}
            break
        case(actionTypes.ADD):
            return {... state,
                    counter: state.counter + action.value}
            break
        case(actionTypes.MINUS):
            return {... state,
                    counter: state.counter - action.value}
            break
    }
    return state
}

export default reducer