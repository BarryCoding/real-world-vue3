import axios from 'axios'

const APIClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// Be careful about
// export {} and export default {}
export default {
  getEvents() {
    return APIClient.get('/events')
  },
  getEventById(id) {
    return APIClient.get('/events/' + id)
  }
}
