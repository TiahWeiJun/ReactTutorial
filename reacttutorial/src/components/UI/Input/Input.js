import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null
    switch(props.elementType){
        case('input'):
            inputElement = <input className = {classes.InputElement} {...props.elementConfig} value = {props.value}  onChange = {props.changed}/>
            break
        case('textarea'):
            inputElement = <textarea className = {classes.InputElement} {...props.elementConfig} value = {props.value} onChange = {props.changed}/>
            break
        case('select'):
            inputElement = (
                <select className = {classes.InputElement} value = {props.value}>
                    {props.elementConfig.options.map(option => {
                        return <option key={option.value} value={option.value} onChange = {props.changed}>{option.displayValue}</option>
                    })}
                </select>
            ) 
            break

        default:
            inputElement = <input className = {classes.InputElement} onChange = {props.changed} {...props.elementConfig} value = {props.value} />
    }

    return(
        <div className = {classes.Input}>
            <label className = {classes.Label}>{props.label}</label>
            {inputElement}   
        </div>
    )
}

export default Input