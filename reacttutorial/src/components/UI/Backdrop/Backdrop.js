import React from 'react'
import classes from './Backdrop.module.css'


const Backdrop = (props) => {
    let css
    if (props.showModal){
        css = classes.Backdrop
}
    else{
        css = null
    }


    return (
        <div className = {css} onClick = {props.clicked}></div>
    )

}

export default Backdrop