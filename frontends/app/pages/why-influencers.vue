<script setup lang="ts">
import heroGraphic from '~/assets/images/why-influencers/why-influencer-hero-graphic.png'

const testimonials = [
  {
    text: 'We saw a 160% increase in monthly sales from just the first influencer’s video. We’ve never seen sales increase this much in such a short time span. They do not exaggerate the impact of this influencer thing.',
    author: { name: 'Tracy Dowd', image: 'tracy-dowd' },
    business: { name: 'Piefalootin', location: 'Garland, TX' },
    metrics: { increaseInSales: '160%', impressions: '2.6M', views: '377K' },
  },
  {
    text: 'People are driving more than 2 hours because they saw us on social media. This whole influencer thing pays off tremendously in sales. Really.',
    author: { name: 'Alex Ponce', image: 'alex-ponce' },
    business: { name: 'La Michoacana Premium', location: 'Arlington, TX' },
    metrics: { increaseInSales: '120%', impressions: '1.3M', views: '188K' },
  },
]

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
    <UContainer class="py-32">
      <h1 class="heading leading-snug text-3xl md:text-4xl lg:text-5xl text-center">
        We Turn Views into Customers
      </h1>

      <div class="flex flex-col items-center lg:items-start lg:flex-row mt-12">
        <div class=" md:w-1/2">
          <UnLazyImage
            :src="heroGraphic"
            class=""
          />
        </div>

        <div class="lg:w-1/2 flex justify-center">
          <div class="w-[90%] lg:w-[75%] text-center lg:text-left space-y-16 lg:mt-8">
            <div>
              <span class="block text-indigo-500 text-5xl font-bold">81%</span>
              <p class="mt-4">
                of consumers say that they visit restaurants based on what influencers post.
              </p>
            </div>

            <div>
              <span class="block text-indigo-500 text-5xl font-bold">18x</span>
              <p class="mt-4">
                the ROI of influencer marketing compared to traditional marketing methods.
              </p>
            </div>

            <div>
              <span class="block text-indigo-500 text-5xl font-bold">150%</span>
              <p class="mt-4">
                average lift in sales that our clients see after enlisting Foodify’s help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <ShowcasePastCampaigns />

    <TestimonialsSection class="mt-24" :testimonials="testimonials" hide-story />

    <StartWithYourLocalFoodInfluencer class="mt-16" />
  </div>
</template>

<style scoped>

</style>
