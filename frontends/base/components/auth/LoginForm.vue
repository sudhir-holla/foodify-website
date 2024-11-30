<script lang="ts" setup>
const { setUser } = useAuth()
const router = useRouter()

const { state, submit, processing } = useForm({
  email: null,
  password: null,
}, {
  refreshCsrfToken: true,
})

const login = async () => {
  const { error } = await submit('POST', '/auth/login', { baseURL: '' }, {
    name: 'login',
    messages: {
      422: {
        title: 'Login Failed!',
        description: 'These credentials do not match our records. Try again.',
        icon: 'i-heroicons-information-circle',
      },
    },
  })

  if (!error) {
    await setUser()
    await router.push('/')
  }
}
</script>

<template>
  <UCard class="w-[32rem] shadow-2xl mt-16" :ui="{'header': {'base': 'bg-gradient-to-b from-slate-100 to-slate-50'}}">
    <template #header>
      <h1 class="text-center font-bold text-xl">
        Login to Your Account
      </h1>
      <!--      <p class="text-center text-sm text-gray-600 mt-2 px-8">-->
      <!--        Explore a wide variety of unique and creative products sourced from top manufacturers around the globe.-->
      <!--      </p>-->
    </template>
    <UForm :state="state" @submit="login">
      <UFormGroup label="Email" size="xl">
        <UInput v-model="state.email" icon="i-heroicons-envelope" placeholder="you@example.com" />
      </UFormGroup>
      <UFormGroup class="mt-4" label="Password" size="xl">
        <UInput v-model="state.password" icon="i-heroicons-key" placeholder="**********" type="password" />

        <template #hint>
          <ULink class="text-sm text-slate-500 hover:text-blue-500 transition-all duration-300" to="/forgot-password">
            Forgot your password?
          </ULink>
        </template>
      </UFormGroup>

      <UButton :loading="processing" block class="mt-8 font-bold" size="xl" type="submit">
        <span v-if="!processing">Login</span>
      </UButton>
    </UForm>
  </UCard>
</template>
