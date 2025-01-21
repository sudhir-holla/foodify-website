<script setup lang="ts">
import stepOneGraphic from "~/assets/images/how-it-works/step-1-tell-us-about-your-audience.png";
import stepTwoGraphic from "~/assets/images/how-it-works/step-2-influencer-matchmaking.png";
import stepThreeGraphic from "~/assets/images/how-it-works/start-with-your-first-local-food-influencer.png";
import stepFourGraphic from "~/assets/images/how-it-works/step-3-influencer-posts.png";
import stepFiveGraphic from "~/assets/images/how-it-works/step-4-grow-sales.png";
import StartWithYourLocalFoodInfluencer from "~/components/global/StartWithYourLocalFoodInfluencer.vue";

const title = ref("Learn how FoodiFy works - FoodiFy");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: "Restaurant marketing redefined for the social media age.",
    },
  ],
});

useSharedSeoData({
  title,
});
</script>

<template>
  <div>
    <h1 class="mt-32 text-3xl text-center heading md:text-4xl lg:text-5xl">
      Here's how <span class="highlight">it works</span>
    </h1>

    <section class="px-8 py-8 mt-8 md:px-32 lg:px-0">
      <UContainer class="flex flex-col items-center lg:space-x-8 lg:flex-row">
        <div class="flex flex-shrink-0 justify-center items-center lg:w-1/2">
          <UnLazyImage :src="stepOneGraphic" />
        </div>
        <div class="flex-shrink-0 lg:w-1/2">
          <h2 class="mt-2 text-2xl font-bold lg:text-3xl">
            1. Tell us about your audience
          </h2>
          <p
            class="mt-4 text-lg font-medium leading-relaxed text-slate-500 lg:text-xl"
          >
            We send you an online form to learn all the information we need
            about your business. We want to know everything about your preferred
            audience: age, location, gender food interests, and any other unique
            things you think will help us get the word out.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="px-8 py-8 md:px-32 lg:px-0">
      <UContainer
        class="flex flex-col flex-col-reverse items-center lg:space-x-8 lg:flex-row"
      >
        <div class="flex-shrink-0 lg:w-1/2">
          <h2 class="mt-2 text-2xl font-bold lg:text-3xl">
            2. We pitch for you
          </h2>
          <p class="mt-4 font-medium leading-relaxed text-slate-500 lg:text-xl">
            We'll take care of pitching influencers in your locality that best
            fit your restaurant and target audience.
          </p>
        </div>
        <div class="flex flex-shrink-0 justify-center items-center lg:w-1/2">
          <UnLazyImage :src="stepTwoGraphic" />
        </div>
      </UContainer>
    </section>

    <section class="px-8 py-8 md:px-32 lg:px-0">
      <UContainer class="flex flex-col items-center lg:space-x-8 lg:flex-row">
        <div class="flex flex-shrink-0 justify-center items-center lg:w-1/2">
          <UnLazyImage :src="stepThreeGraphic" />
        </div>
        <div class="flex-shrink-0 lg:w-1/2">
          <h2 class="mt-2 text-2xl font-bold lg:text-3xl">
            3. Monthly influencer matches
          </h2>
          <p class="mt-4 font-medium leading-relaxed text-slate-500 lg:text-xl">
            We intentionally find you a unique influencer match each month, so
            you reach a completely new audience every time. All you have to do
            is accept the calendar invite and host the influencer.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="px-8 py-8 md:px-32 lg:px-0">
      <UContainer
        class="flex flex-col flex-col-reverse items-center lg:space-x-8 lg:flex-row"
      >
        <div class="flex-shrink-0 lg:w-1/2">
          <h2 class="mt-2 text-2xl font-bold lg:text-3xl">
            4. Influencer posts about your restaurant
          </h2>
          <p class="mt-4 font-medium leading-relaxed text-slate-500 lg:text-xl">
            The influencer will promote you on their social media pages, and
            you'll be invited as a collaborator so that you can watch the
            content and track new customer engagement yourself.
          </p>
        </div>
        <div class="flex flex-shrink-0 justify-center items-center lg:w-1/2">
          <UnLazyImage :src="stepFourGraphic" />
        </div>
      </UContainer>
    </section>

    <section class="px-8 py-8 md:px-32 lg:px-0">
      <UContainer class="flex flex-col items-center lg:space-x-8 lg:flex-row">
        <div class="flex flex-shrink-0 justify-center items-center lg:w-1/2">
          <UnLazyImage :src="stepFiveGraphic" />
        </div>
        <div class="flex-shrink-0 lg:w-1/2">
          <h2 class="mt-2 text-2xl font-bold lg:text-3xl">
            5. Watch sales grow
          </h2>
          <p class="mt-4 font-medium leading-relaxed text-slate-500 lg:text-xl">
            That's all. Watch diners come in from the video the very next day.
            And we'll help you track new sales so you can confirm the ROI
            yourself.
          </p>
        </div>
      </UContainer>
    </section>

    <StartWithYourLocalFoodInfluencer />
  </div>
</template>

<style scoped></style>
