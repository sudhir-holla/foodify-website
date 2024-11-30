<script setup lang="ts">
const loadBookingModal = inject('loadBookingModal')
</script>

<template>
  <PrimaryButton class="px-8" @click="loadBookingModal">
    <slot>Book A Demo</slot>
  </PrimaryButton>
</template>

<style scoped>

</style>
