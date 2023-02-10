import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token')
  }),
  getters: {
    getToken: (state) => state.token,
    isAuthentificated: (state) => state.token != null
  },
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
    },
    removeToken() {
      this.token = null
      localStorage.removeItem('token')
    }
  },
})
