<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <UContainer class="min-h-screen flex items-center justify-center">
    <div class="flex flex-col items-center">
      <AppLogo class="h-12" />

      <SignUpForm />

      <div class="text-center mt-12">
        <span class="text-gray-600">Already have an account?</span> <ULink class="font-bold text-primary" to="/login">
          Login
        </ULink>
      </div>
    </div>
  </UContainer>
</template>
