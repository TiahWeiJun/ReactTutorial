import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Signup} from '../reduceractions/authactions.js'

class SignUpPage extends React.Component{

    state = {
        firstName: '',
        lastName: '',
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
        const signUpInfo = {email: this.state.email,
                            password: this.state.password,
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            initials: this.state.firstName[0] + this.state.lastName[0]}
        this.props.Signup(signUpInfo)
        
    }

    render(){
        if (this.props.signUpRedirect) {
            return <Redirect to={this.props.signUpRedirect} exact />;
          }

        let errormsg = null
        if (this.props.error) {
            errormsg = this.props.error
        }
        return(
            <div>
                
                <form onSubmit = {this.handleSubmit}>
                    <h3>Sign Up</h3>

                    <div style = {{marginBottom: "40px"}}>
                        <label>First Name</label>
                        <input type="text" name="firstName" placeholder="First Name" onChange = {this.handleOnChange}/>
                    </div>

                    <div style = {{marginBottom: "40px"}}>
                        <label>Last Name</label>
                        <input type="text" name="lastName" placeholder="Last name" onChange = {this.handleOnChange}/>
                    </div>


                    <div style = {{marginBottom: "40px"}}>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" onChange = {this.handleOnChange}/>
                    </div>

                    <div style = {{marginBottom: "40px"}}>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" onChange = {this.handleOnChange}/>
                    </div>

                    <div>
                        <button type="submit" value="submit">Sign Up</button>
                    </div>
                    
                    <p style={{color: 'red'}}>{errormsg}</p>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signUpRedirect: state.auth.signUpRedirect,
        error: state.auth.error,
        alert: state.auth.alert
    }
}

const mapDispatchToProps = dispatch => {
    return{
        Signup: (info) => {return dispatch(Signup(info))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)