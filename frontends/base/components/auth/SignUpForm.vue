<script lang="ts" setup>
const { setUser } = useAuth()
const router = useRouter()

const { state, form, submit, processing } = useForm({
  name: null,
  email: null,
  password: null,
  password_confirmation: null,
}, {
  refreshCsrfToken: true,
})

const login = async () => {
  const { error } = await submit('POST', '/auth/register', { baseURL: '' }, {
    name: 'sign-up',
    messages: {
      422: {
        title: 'Registration failed!',
        description: 'Please check your details and try again.',
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
        Create Your Account
      </h1>
      <!--      <div class="text-center text-sm text-gray-600 mt-2 px-8">-->
      <!--        <p>-->
      <!--          Create an account to access a vast collection of products-->
      <!--          from the best manufacturers across the world.-->
      <!--        </p>-->
      <!--        <p>Sign up now to start exploring!</p>-->
      <!--      </div>-->
    </template>

    <UForm ref="form" :state="state" @submit="login">
      <UFormGroup label="Name" name="name" size="xl">
        <UInput v-model="state.name" icon="i-heroicons-user" placeholder="Your full name" />
      </UFormGroup>
      <UFormGroup class="mt-4" label="Email" name="email" size="xl">
        <UInput v-model="state.email" icon="i-heroicons-envelope" placeholder="you@example.com" />
      </UFormGroup>
      <UFormGroup class="mt-4" label="Password" name="password" size="xl">
        <UInput v-model="state.password" icon="i-heroicons-key" placeholder="- - - - - -" type="password" />
      </UFormGroup>
      <UFormGroup class="mt-4" label="Confirm Password" name="password_confirmation" size="xl">
        <UInput v-model="state.password_confirmation" icon="i-heroicons-key" placeholder="- - - - - -" type="password" />
      </UFormGroup>

      <UButton :loading="processing" block class="mt-8 font-bold" size="xl" type="submit">
        Login
      </UButton>
    </UForm>

    <div class="mt-4 text-center text-sm text-gray-600">
      By creating an account you agree to our
      <ULink class="text-gray-600 font-bold hover:text-gray-900 transition-all duration-300" to="/terms">
        Terms
      </ULink>
      and
      <ULink class="text-gray-600 font-bold hover:text-gray-900 transition-all duration-300" to="/privacy-policy">
        Privacy Policy
      </ULink>
    </div>
  </UCard>
</template>
