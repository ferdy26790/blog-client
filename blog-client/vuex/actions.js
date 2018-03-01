import axios from 'axios'
import router from '../src/router'
const http = axios.create({
  baseURL: 'http://35.227.111.213:3002'
})
const actions = {
  login ({commit}, payload) {
    http.post('api/login', {
      email: payload.email,
      password: payload.password
    })
      .then((response) => {
        // console.log(response.data.role)
        // localStorage.setItem('token', response.data.token)
        let payload = {}
        payload.role = response.data.role
        payload.token = response.data.token
        if (payload.role === 'admin') {
          router.push('/admin')
        } else {
          router.push('/home')
        }
        localStorage.setItem('token', response.data.token)
        commit('fetchUser', payload)
      }).catch((err) => {
        console.error(err)
      })
  }
}

export default actions
