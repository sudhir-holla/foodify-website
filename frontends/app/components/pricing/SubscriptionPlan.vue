<script setup lang="ts">
const props = defineProps<{
  plan: object
}>()

const openPaymentPage = () => {
  window.open(props.plan.link, '_blank', 'rel=noopener noreferrer')
}
</script>

<template>
  <div class="flex flex-col justify-between bg-white rounded-lg shadow-lg p-6" :class="{ 'ring-2 ring-indigo-500': plan?.highlight}">
    <div>
      <div class="">
        <div class="flex justify-between">
          <div class="font-medium text-xl">
            {{ plan.name }}
          </div>
          <div v-if="plan?.highlight">
            <span class="text-indigo-600 bg-indigo-50 px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">Most popular</span>
          </div>
        </div>
        <div class="mt-2">
          <span class="font-bold text-3xl">${{ plan.price }}</span><span class="text-slate-600">/month</span>
        </div>
      </div>
      <div class="mt-8">
        <ul class="space-y-4 text-sm">
          <li v-for="feature in plan.features" :key="feature" class="flex items-baseline space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" class="text-indigo-500 flex-shrink-0"><path fill="currentColor" d="m243.33 90.91l-128.41 128.4a16 16 0 0 1-22.63 0l-71.62-72a16 16 0 0 1 0-22.61l24-24a16 16 0 0 1 22.57-.06l36.64 35.27l.11.11l92.73-91.37a16 16 0 0 1 22.58 0l24 23.56a16 16 0 0 1 .03 22.7" /></svg>
            <span class="text-slate-600">{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <PrimaryButton block class="mt-8" @click="openPaymentPage">
        Choose Plan
      </PrimaryButton>
    </div>
  </div>
</template>

<style scoped>

</style>
