import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {Signout} from '../reduceractions/authactions.js'
import {withRouter} from 'react-router-dom'

class Navbar extends React.Component {

    handleSignOut = (e) => {
        this.props.Signout()
        this.props.history.replace('/')
        
    }

    render(){
        console.log(this.props.user)
        let nav
        if (!this.props.user){
            nav = (
                <div>
                    <ul style ={{display: 'flex', justifyContent: 'center'}}>
                        <li style = {{margin: '0 10px'}}><NavLink to='/'>Home</NavLink></li>
                        <li style = {{margin: '0 10px'}}><NavLink to='/signIn'>Log In</NavLink></li>
                        <li style = {{margin: '0 10px'}}><NavLink to='/signUp'>SignUp</NavLink></li>
                    </ul>
                </div>
            )
        }
        else {
            nav = (
                <nav>
                    <ul style ={{display: 'flex', justifyContent: 'center'}}>
                        <li style = {{margin: '0 10px'}}><NavLink to='/blogs'>Home</NavLink></li>
                        <li style = {{margin: '0 10px'}}><NavLink to='/create'>Create Blog</NavLink></li>
                        <li style = {{margin: '0 10px'}}><NavLink to='/blogs'>Profile</NavLink></li>
                        <li style = {{margin: '0 10px'}}><button onClick = {this.handleSignOut}>Sign Out</button></li>
                        
                    </ul>
                </nav>
            )
        }
        return(
            nav
        )
    }
}
    


const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Signout: () => {return dispatch(Signout())

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))