import router from '@/router'
const mutations = {
  fetchUser (state, payload) {
    state.user = payload
    console.log(state.user)
    if (state.user.role === 'admin') {
      router.push('admin')
    } else {
      router.push('home')
    }
  },
  emptyUser (state) {
    state.user = {
      token: null,
      role: null
    }
  }
}

export default mutations
