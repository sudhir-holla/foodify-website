import { useUserProfileStore } from '~/store/user-profile'

export default function () {
  const userProfile = useUserProfileStore()
  const router = useRouter()

  const setCsrfToken = () => useGet('/sanctum/csrf-cookie', { baseURL: '', lazy: false })

  const setUser = async () => {
    const { data } = await useGet('/me')

    if (data.value)
      userProfile.save(data.value.data)
  }

  const resetSession = async () => {
    userProfile.reset()
    await router.push('/login')
  }

  const logout = async () => {
    const { error } = await usePost('/auth/logout', null, { baseURL: '' })

    if (error.value)
      return

    await resetSession()
  }

  return {
    setUser,
    logout,
    setCsrfToken,
    resetSession,
    isLoggedIn: computed(() => userProfile.isLoggedIn),
    user: computed(() => userProfile.user),
  }
}
