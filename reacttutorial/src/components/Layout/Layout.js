import React from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js'


class Layout extends React.Component{
    state = {
        showSideDrawer: false
    }

    closeSideDrawer = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    openSideDrawer = () => {
        this.setState({
            showSideDrawer: true
        })
    }

    render(){
        return(
            <React.Fragment>
                <Toolbar drawerToggle = {this.openSideDrawer}/>
                <SideDrawer showDrawer = {this.state.showSideDrawer} 
                            hideSideDrawer = {this.closeSideDrawer}/>
                <main className = {classes.mainContent} >
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}



export default Layout