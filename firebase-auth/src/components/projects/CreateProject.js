import React from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectsActions.js'

class CreateProject extends React.Component{

    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
    }

    render(){
        return(
            <div className = 'container'>
                <form onSubmit = {this.handleSubmit} className = "white">
                    <h5 className = "grey-text text-darken-3">Create Form!</h5>
                    
                    <div className = 'input-field'>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>

                    <div className = 'input-field'>
                        <label htmlFor="content">Project Content</label>
                        <textarea type="text" className = "materialize-textarea" id="content" onChange={this.handleChange}/>
                    </div>

                    <div className = 'input-field'>
                        <button className = "btn pink lighten-1 z-depth-0">Submit</button>
                    </div>
                </form>
            </div>
        )
            
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => {return dispatch(createProject(project))}
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)