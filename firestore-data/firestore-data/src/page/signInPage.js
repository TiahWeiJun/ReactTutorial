import React from 'react'
import {connect} from 'react-redux'
import{Signin} from '../reduceractions/authactions.js'
import {Redirect} from 'react-router-dom'

class SignInPage extends React.Component{

    state = {
        email: '',
        password: '',
    }

    handleOnChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const signInInfo = {email: this.state.email, 
                            password: this.state.password}
        this.props.Signin(signInInfo)
        
        
    }

    render(){
        if (this.props.signInRedirect) {
            return <Redirect to={this.props.signInRedirect} exact />;
          }

        let errormsg = null
        if (this.props.error){
            errormsg = this.props.error
        }
        return(
            <div>
                {this.props.alert ? <div>{this.props.alert}</div> : null}

                <form onSubmit = {this.handleSubmit}>
                    <h3>Log In</h3>

                    <div style = {{marginBottom: "40px"}}>
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" onChange = {this.handleOnChange}/>
                    </div>

                    <div style = {{marginBottom: "40px"}}>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" onChange = {this.handleOnChange}/>
                    </div>

                    <div>
                        <button type="submit" value="submit">Log In</button>
                    </div>
                    
                    <p style ={{color: 'red'}}>{errormsg}</p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signInRedirect: state.auth.signInRedirect,
        error: state.auth.error,
        alert: state.auth.alert
    }
}

const mapDispatchToProps = dispatch => {
    return{
        Signin: (info) => {return dispatch(Signin(info))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage)