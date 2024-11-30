import { defineStore } from 'pinia'

interface State { user?: UserProfile | null }

export const useUserProfileStore = defineStore('user-profile', {
  state: (): State => ({
    user: null,
  }),
  getters: {
    isLoggedIn: state => !!state.user,
  },
  actions: {
    save(user: UserProfile) {
      this.user = user
    },
    reset() {
      this.user = null
    },
  },
})
