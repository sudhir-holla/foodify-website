<script setup lang="ts">
import { filename } from 'pathe/utils'

withDefaults(defineProps<{
  testimonials: Object[]
  hideStory?: boolean
}>(), {
  hideStory: false,
})

const glob = import.meta.glob(['~/assets/images/testimonials/*.jpeg', '~/assets/images/quote.png'], { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default]),
)

provide('images', images)
</script>

<template>
  <UContainer>
    <h2 class="heading text-3xl lg:text-4xl text-center">
      See Real and Measurable <span class="highlight">Results</span>
    </h2>

    <div class="space-y-8 lg:space-y-16 mt-8">
      <BusinessTestimonial v-for="(testimonial, index) in testimonials" :testimonial="testimonial" :index="index" :hide-story="hideStory" />
    </div>
  </UContainer>
</template>

<style scoped>

</style>
