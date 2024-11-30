<script setup lang="ts">
import stepOneGraphic from '~/assets/images/for-creators/step-1-give-us-your-info.png'
import stepTwoGraphic from '~/assets/images/for-creators/step-2-opportunities-to-your-inbox.png'
import stepThreeGraphic from '~/assets/images/for-creators/step-3-get-confirmed-for-a-visit.png'
import stepFourGraphic from '~/assets/images/for-creators/step-4-automated-payment.png'
import StartFirstLocalRestaurantCollaboration from '~/components/for-creators/StartFirstLocalRestaurantCollaboration.vue'

const title = ref('Start with your first local restaurant collaboration - FoodiFy')

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
      Hundreds of Collaborations, <span class="highlight"> at your Fingertips</span>
    </h1>

    <section class="py-8 px-8 md:px-32 lg:px-0 mt-8">
      <UContainer class="flex flex-col items-center lg:space-x-8 lg:flex-row">
        <div class="lg:w-1/2 flex-shrink-0 flex items-center justify-center">
          <UnLazyImage :src="stepOneGraphic" />
        </div>
        <div class="lg:w-1/2 flex-shrink-0">
          <h2 class="text-2xl lg:text-3xl font-bold mt-2">
            1. Give us your info
          </h2>
          <p class="text-slate-500 text-lg lg:text-xl leading-relaxed mt-4 font-medium">
            We’ll get your information—contact info, social media handles, location, follower demographics, etc. and store it in our city-specific databases.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="py-8 px-8 md:px-32 lg:px-0">
      <UContainer class="flex flex-col items-center lg:space-x-8 flex-col-reverse lg:flex-row">
        <div class="lg:w-1/2 flex-shrink-0">
          <h2 class="text-2xl lg:text-3xl font-bold mt-2">
            2. Opportunities to your inbox
          </h2>
          <p class="text-slate-500 lg:text-xl leading-relaxed mt-4 font-medium">
            You’ll be the first to know when a local restaurant is looking for a paid influencer collaboration. Receive invites straight to your inbox, and respond with dates/times you’re available for a visit, as well as your asking price for the collaboration.
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
            3. Get confirmed for a visit
          </h2>
          <p class="text-slate-500 lg:text-xl leading-relaxed mt-4 font-medium">
            If the restaurant’s budget can match your asking price, we’ll send you a calendar invite for the visit. Simply visit, film, and get treated to some free food.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="py-8 px-8 md:px-32 lg:px-0">
      <UContainer class="flex flex-col items-center lg:space-x-8 flex-col-reverse lg:flex-row">
        <div class="lg:w-1/2 flex-shrink-0">
          <h2 class="text-2xl lg:text-3xl font-bold mt-2">
            4. Automated Payment
          </h2>
          <p class="text-slate-500 lg:text-xl leading-relaxed mt-4 font-medium">
            Once you post, we’ll automatically send you payment within a few days. And we’ll keep sending you more collaboration opportunities in your area.
          </p>
        </div>
        <div class="lg:w-1/2 flex-shrink-0 flex items-center justify-center">
          <UnLazyImage :src="stepFourGraphic" />
        </div>
      </UContainer>
    </section>

    <StartFirstLocalRestaurantCollaboration />
  </div>
</template>

<style scoped>
</style>
