import axios from 'axios'


const instance = axios.create({
   baseURL: 'https://react-burge-b855c.firebaseio.com/'
})

export default instance