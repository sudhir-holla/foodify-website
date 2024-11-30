<script setup lang="ts">
const loadBookingModal = inject('loadBookingModal')
</script>

<template>
  <UContainer class="flex flex-col-reverse lg:flex-row">
    <div class="lg:w-1/2 z-20 mt-24 md:mt-32 lg:mt-0">
      <p class="font-bold text-xl text-indigo-500 text-center lg:text-left">
        Reach new audiences
      </p>
      <h1 class="heading text-3xl lg:leading-[4rem] text-center lg:text-6xl lg:text-left mt-4">
        Boost restaurant traffic with <span class="highlight">local food influencers</span>
      </h1>

      <p class="text-center text-slate-700 lg:text-lg lg:text-left px-8 lg:px-0 mt-4">
        Restaurant marketing reimagined for the social media age.
      </p>

      <div class="flex flex-col lg:flex-row items-center mt-12">
        <PrimaryButton class="w-56" block @click="loadBookingModal">
          Schedule a consultation
        </PrimaryButton>
      </div>
    </div>
    <div class="lg:w-1/2 lg:flex justify-center items-center mt-16 lg:mt-0">
      <PromotionalVideo />
    </div>
  </UContainer>
</template>

<style scoped>

</style>
