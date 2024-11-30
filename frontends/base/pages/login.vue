<script lang="ts"  setup>
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <UContainer class="min-h-screen flex items-center justify-center">
    <div class="flex flex-col items-center">
      <AppLogo class="h-12" />

      <LoginForm />

      <div class="text-center mt-8">
        <span class="text-gray-600">Don't have an account?</span> <ULink class="font-bold text-primary" to="/sign-up">
          Sign Up
        </ULink>
      </div>
    </div>
  </UContainer>
</template>
