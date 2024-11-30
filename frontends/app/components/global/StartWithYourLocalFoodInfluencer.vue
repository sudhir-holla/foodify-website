<script setup lang="ts">
import startWithInfluencer from '~/assets/images/how-it-works/start-with-your-first-local-food-influencer.png'
</script>

<template>
  <section class="bg-indigo-200 py-16">
    <UContainer class="flex flex-col-reverse lg:flex-row items-center justify-center">
      <div class="lg:w-1/2 flex-shrink-0">
        <h2 class="font-bold text-3xl">
          Start with your first local food influencer.
        </h2>
        <ul class="leading-loose mt-6">
          <li class="flex items-baseline space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" class="text-indigo-500 flex-shrink-0"><path fill="currentColor" d="m243.33 90.91l-128.41 128.4a16 16 0 0 1-22.63 0l-71.62-72a16 16 0 0 1 0-22.61l24-24a16 16 0 0 1 22.57-.06l36.64 35.27l.11.11l92.73-91.37a16 16 0 0 1 22.58 0l24 23.56a16 16 0 0 1 .03 22.7" /></svg>
            <span>Use social media to reach millions of local customers</span>
          </li>
          <li class="flex items-baseline space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" class="text-indigo-500 flex-shrink-0"><path fill="currentColor" d="m243.33 90.91l-128.41 128.4a16 16 0 0 1-22.63 0l-71.62-72a16 16 0 0 1 0-22.61l24-24a16 16 0 0 1 22.57-.06l36.64 35.27l.11.11l92.73-91.37a16 16 0 0 1 22.58 0l24 23.56a16 16 0 0 1 .03 22.7" /></svg>
            <span>Attract locals who don’t know about your restaurant</span>
          </li>
          <li class="flex items-baseline space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" class="text-indigo-500 flex-shrink-0"><path fill="currentColor" d="m243.33 90.91l-128.41 128.4a16 16 0 0 1-22.63 0l-71.62-72a16 16 0 0 1 0-22.61l24-24a16 16 0 0 1 22.57-.06l36.64 35.27l.11.11l92.73-91.37a16 16 0 0 1 22.58 0l24 23.56a16 16 0 0 1 .03 22.7" /></svg>
            <span>Boost Traffic by an average 150%</span>
          </li>
          <li class="flex items-baseline space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" class="text-indigo-500 flex-shrink-0"><path fill="currentColor" d="m243.33 90.91l-128.41 128.4a16 16 0 0 1-22.63 0l-71.62-72a16 16 0 0 1 0-22.61l24-24a16 16 0 0 1 22.57-.06l36.64 35.27l.11.11l92.73-91.37a16 16 0 0 1 22.58 0l24 23.56a16 16 0 0 1 .03 22.7" /></svg>
            <span>No hassle - we do everything for you.</span>
          </li>
        </ul>

        <div>
          <BookDemo class="mt-8" />
        </div>
      </div>

      <div class="lg:w-1/2 flex-shrink-0 flex justify-center">
        <UnLazyImage :src="startWithInfluencer" class="w-[75%] sm:w-[50%] lg:w-auto lg:-mr-16" />
      </div>
    </UContainer>
  </section>
</template>

<style scoped>

</style>
