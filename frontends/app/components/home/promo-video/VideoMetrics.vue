<script setup lang="ts">
defineProps<{
  icon?: string
  text?: string
  iconStyles?: string
}>()
</script>

<template>
  <div class="bg-gray-700 shadow-lg text-white text-sm lg:text-base rounded-full px-2 py-1 lg:px-4 lg:py-2 font-bold flex justify-center items-center space-x-2">
    <UIcon :name="icon" class="h-8 w-8" :class="iconStyles" />
    <span>{{ text }}</span>
  </div>
</template>

<style scoped>

</style>
