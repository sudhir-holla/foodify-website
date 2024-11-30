<script setup lang="ts">
const testimonials = [
  {
    text: 'Over 3 months, we went from seating 25 tables per night to 230 tables. 95% of our sales now come from social media. It’s crazy.',
    author: { name: 'Gabriel De Sa', image: 'gabriel' },
    business: { name: 'Casa Pollastro', location: 'Addison, TX' },
    metrics: { increaseInSales: '920%', impressions: '9.6M', views: '1.4M' },
    story: {
      intro: {
        heading: 'Meet Gabriel',
        text: 'January of 2023 is when Gabriel opened Casa Pollastro, his first Brazilian restaurant in Addison, TX. When he first enlisted our help, Gabriel was seating an average of 25 tables per night. But the entrepreneur wanted to fill his dining room. “We were giving away free food to every fourth person to try to get more people in, ” Gabriel remembers. “But still, we needed more people to come through the door. ”',
      },
      collab: {
        text: 'In August of 2023, Gabriel found FoodiFy. The next few months, we matched Gabriel with 6 local Dallas influencers who each created a unique social media post featuring Gabriel’s $35 four-course special.',
        image: 'gabriel-foodify-collab',
      },
      result: {
        heading: '3 Months Later...',
        text: 'Over the course of a few months, the influencers’ videos reached 400k, 900k, and 1.8M views, respectively. Gabriel’s restaurant is now a viral Dallas sensation, seating an average of 230 tables per night. Reservations now book out days in advance and 95% of Casa Pollastro’s sales come from social media.',
        image: 'gabriel-foodify-results',
      },
    },
  },
  {
    text: 'Influencers are the ones that made my bakery viral. They’re the reason I was able to move from my stand at the farmer’s market to a permanent location in Dallas.',
    author: { name: 'Laura Gomez', image: 'laura' },
    business: { name: 'La 57', location: 'Dallas, TX' },
    metrics: { increaseInSales: '540%', impressions: '15.2M', views: '2.2M' },
    story: {
      intro: {
        heading: 'Meet Laura',
        text: 'In 2022, La 57--the brainchild of Laura Macarena Gomez--opened at the Dallas Farmers Market, specializing in gourmet baked goods and croissants. But, like all small businesses, La 57 faced hurdles. Not many knew about the spot, and days of zero customers were common. “There were days we would see nobody, ” Laura remembers. “I was honestly scared we’d close down soon.”',
      },
      collab: {
        text: 'That month, Vina—a Dallas influencer—visited the stand on her own goodwill and shared an 8-second Instagram reel with her followers, showcasing Laura’s croissants.',
        image: 'laura-foodify-collab',
      },
      result: {
        heading: 'Just 72 hours later...',
        text: 'In less than 72 hours, that humble Instagram reel reached over 2.2 million views, spreading Laura\'s talent far and wide. The result was nothing short of extraordinary. Lines began forming outside the farmer’s market booth as early as 8 A.M, filled with people wanting to experience the magic of La 57\'s viral croissants. In fact, the video brought so many people that Laura was able to move from the Farmers Market her own permanent storefront in downtown Dallas. And it’s no surprise that the lines remain long.',
        image: 'laura-foodify-results',
      },

    },
  },
  {
    text: 'We’re getting so many customers from these posts. People are driving from all over the place, just to try our tacos now. We love working with these influencers.',
    author: { name: 'Rafael & Kristie', image: 'rafael-and-kristie' },
    business: { name: 'Casa Del Bro', location: 'Frisco, TX' },
    metrics: { increaseInSales: '120%', impressions: '3.7M', views: '540K' },
    story: {
      intro: {
        heading: 'Meet Rafael & Kristie',
        text: 'September of 2023 is when we onboarded Rafael and Kirstie Alvarez, who own Casa Del Bro, an ice-cream and taco shop in Frisco, TX. Although Casa Del Bro has been open since 2019, the couple was seeking a creative way to reach a larger Dallas audience. That’s when they enlisted FoodiFy’s help.',
      },
      collab: {
        text: 'We ran with Casa Del Bro’s Mexi-Cali concept, and matched him with 6 different influencers over the next few months, who highlighted the local taco-and- ice-cream spot via Instagram and TikTok.',
        image: 'rafael-and-kristie-foodify-collab',
      },
      result: {
        heading: 'The Results...',
        text: 'The results were nothing short of extraordinary. Over the course of 3 videos and 3.7M total video impressions, Casa Del Bro achieved a 120% increase in sales and was able to revamp its winter menu to adjust to increased customer demand. While keeping its old audience, the locally owned spot has achieved its goal of reaching a new Dallas clientele.',
        image: 'rafael-and-kristie-foodify-results',
      },

    },
  },
]

useHead({
  title: 'Learn how FoodiFy works - FoodiFy',
  meta: [
    { name: 'description', content: 'Restaurant marketing redefined for the social media age.' },
  ],
})

useSharedSeoData()
</script>

<template>
  <div>
    <HeroSection class="pt-24 pb-16 md:pt-32 pb-24 lg:pt-36 lg:pb-30" />

    <InfluencersCarousel />

    <TestimonialsSection class="mt-16" :testimonials="testimonials" />

    <StartWithYourLocalFoodInfluencer class="mt-16" />
  </div>
</template>

<style scoped>

</style>
