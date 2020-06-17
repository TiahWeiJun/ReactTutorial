import * as actionTypes from '../store/actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case(actionTypes.STORE_RESULT):
            return {...state,
                    results: state.results.concat([{id: new Date(), value: action.result}])}
            break
        case(actionTypes.DELETE_RESULT):
            const updateArray = state.results.filter(result => {return result.id !== action.elementId} )
            return {...state,
                    results: updateArray}
            break
    }
    return state
}

export default reducer