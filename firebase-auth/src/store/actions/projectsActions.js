export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFireStore}) => {
        const firestore = getFireStore()
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date()

        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project: project})
        })
        
    }   
}