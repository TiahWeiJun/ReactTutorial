import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions.js'

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onMinusCounter}  />
                <hr />
                <button onClick = {() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.results.map((result) => {
                        return <li key = {result.id} onClick = {() => this.props.onDeleteResult(result.id)}>Result: {result.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => {return dispatch({type: actionTypes.INCREMENT})},
        onDecrementCounter: () => {return dispatch({type: actionTypes.DECREMENT})},
        onAddCounter: () => {return dispatch({type: actionTypes.ADD, value: 5})},
        onMinusCounter: () => {return dispatch({type: actionTypes.MINUS, value: 5 })},
        onStoreResult: (result) => {return dispatch({type: actionTypes.STORE_RESULT, result: result})}, 
        onDeleteResult: (id) => {return dispatch({type: actionTypes.DELETE_RESULT, elementId: id})},      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

