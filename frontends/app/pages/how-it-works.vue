<script setup lang="ts">
import stepOneGraphic from '~/assets/images/how-it-works/step-1-tell-us-about-your-audience.png'
import stepTwoGraphic from '~/assets/images/how-it-works/step-2-influencer-matchmaking.png'
import stepThreeGraphic from '~/assets/images/how-it-works/step-3-influencer-posts.png'
import stepFourGraphic from '~/assets/images/how-it-works/step-4-grow-sales.png'
import StartWithYourLocalFoodInfluencer from '~/components/global/StartWithYourLocalFoodInfluencer.vue'

const title = ref('Learn how FoodiFy works - FoodiFy')

useHead({
  title,
  meta: [
    { name: 'description', content: 'Restaurant marketing redefined for the social media age.' },
  ],
})

useSharedSeoData({
  title,
})
</script>

<template>
  <div>
    <h1 class="heading text-3xl md:text-4xl lg:text-5xl mt-32 text-center">
      Here's how <span class="highlight">it works</span>
    </h1>

    <section class="py-8 px-8 md:px-32 lg:px-0 mt-8">
      <UContainer class="flex flex-col items-center lg:space-x-8 lg:flex-row">
        <div class="lg:w-1/2 flex-shrink-0 flex items-center justify-center">
          <UnLazyImage :src="stepOneGraphic" />
        </div>
        <div class="lg:w-1/2 flex-shrink-0">
          <h2 class="text-2xl lg:text-3xl font-bold mt-2">
            1. Tell us about your audience
          </h2>
          <p class="text-slate-500 text-lg lg:text-xl leading-relaxed mt-4 font-medium">
            We send you an online form to learn all the information we need about your business. We want to know everything about your preferred audience: age, location, gender food interests, and any other unique things you think will help us get the word out.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="py-8 px-8 md:px-32 lg:px-0">
      <UContainer class="flex flex-col items-center lg:space-x-8 flex-col-reverse lg:flex-row">
        <div class="lg:w-1/2 flex-shrink-0">
          <h2 class="text-2xl lg:text-3xl font-bold mt-2">
            2. Influencer matching
          </h2>
          <p class="text-slate-500 lg:text-xl leading-relaxed mt-4 font-medium">
            We’ll match you strategically with one influencer in our group every month and send you a calendar invite for the influencer to come in and do all the content shooting. All you have to do is accept the calendar invite and host the influencer.
          </p>
        </div>
        <div class="lg:w-1/2 flex-shrink-0 flex items-center justify-center">
          <UnLazyImage :src="stepTwoGraphic" />
        </div>
      </UContainer>
    </section>

    <section class="py-8 px-8 md:px-32 lg:px-0">
      <UContainer class="flex flex-col items-center lg:space-x-8 lg:flex-row">
        <div class="lg:w-1/2 flex-shrink-0 flex items-center justify-center">
          <UnLazyImage :src="stepThreeGraphic" />
        </div>
        <div class="lg:w-1/2 flex-shrink-0">
          <h2 class="text-2xl lg:text-3xl font-bold mt-2">
            3. Influencer posts about your restaurant
          </h2>
          <p class="text-slate-500 lg:text-xl leading-relaxed mt-4 font-medium">
            The influencer will promote you on their social media pages, and you’ll be invited as a collaborator so that you can watch the content and track new customer engagement yourself.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="py-8 px-8 md:px-32 lg:px-0">
      <UContainer class="flex flex-col items-center lg:space-x-8 flex-col-reverse lg:flex-row">
        <div class="lg:w-1/2 flex-shrink-0">
          <h2 class="text-2xl lg:text-3xl font-bold mt-2">
            4. Watch sales grow
          </h2>
          <p class="text-slate-500 lg:text-xl leading-relaxed mt-4 font-medium">
            That’s all. Watch diners come in from the video the very next day. You’ll be surprised at how quickly views turn into customers.
          </p>
        </div>
        <div class="lg:w-1/2 flex-shrink-0 flex items-center justify-center">
          <UnLazyImage :src="stepFourGraphic" />
        </div>
      </UContainer>
    </section>

    <StartWithYourLocalFoodInfluencer />
  </div>
</template>

<style scoped>
</style>
