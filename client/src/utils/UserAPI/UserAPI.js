import axios from 'axios'

const UserAPI = {
  register: async function (user) {
    await axios.post('/api/user/register', user)
    return true
  },
  login: async function (user) {
    const { data: token } = await axios.post('/api/user/login', user)
    return token
  },
  getUser: async function () {
    const { data: user } = await axios.get('/api/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    return user
  }
}

export default UserAPI
