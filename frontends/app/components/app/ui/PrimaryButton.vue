<script setup lang="ts">
defineProps<{
  to?: string
}>()
</script>

<template>
  <UButton color="indigo" variant="solid" class="text-white font-bold rounded-md px-4 py-3 tracking-wider" padded>
    <slot />
  </UButton>
</template>

<style scoped>

</style>
