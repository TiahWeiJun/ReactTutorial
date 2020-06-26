import { db } from "../config/firebaseconfig"


export const createBlog = (blog) => {
    return (dispatch) => {
        db.collection('blogs').add(blog).then(() => {
            dispatch({type: "CREATE_BLOG", blog: blog})
        })
        
    }
}

export const getFromFirestore = () => {
    return (dispatch) => {
        let blogs = []
        db.collection('blogs').orderBy("created", 'desc').onSnapshot(snapshot => {
            snapshot.forEach(doc => {
              let newdoc = {
                ...doc.data(),
                id: doc.id
              }
              blogs.push(newdoc)
            })
          })
        dispatch({type: "GET_FROM_FIRESTORE", blogs: blogs})
        
    }
}

