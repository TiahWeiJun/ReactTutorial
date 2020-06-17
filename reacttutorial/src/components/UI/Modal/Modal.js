import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop.js'


class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showModal !== this.props.showModal || nextProps.children !== this.props.children
    }

    render(){
        let css
        if (this.props.showModal){
            css = classes.Modal1
        }
        else{
            css = classes.Modal
        }
        return(
            <React.Fragment>
                <Backdrop clicked = {this.props.clickBackDrop} showModal = {this.props.showModal}/>
                <div className = {css}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
    
}

    


export default Modal