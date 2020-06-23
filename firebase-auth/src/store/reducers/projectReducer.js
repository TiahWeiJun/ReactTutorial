const initialState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'help me find mario', content: 'blah blah blah'},
        {id: '3', title: 'help me find luigi', content: 'blah blah blah'},
    ]
}

const projectReducer = (state = initialState, action) =>{
    switch(action.type){
        case "CREATE_PROJECT":
            console.log(action.project)
        
    }
    return state
}

export default projectReducer