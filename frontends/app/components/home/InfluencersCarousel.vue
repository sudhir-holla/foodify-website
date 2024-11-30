<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import { filename } from 'pathe/utils'

const glob = import.meta.glob('~/assets/images/influencers/*.png', { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default]),
)

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const influencers = ref([
  { name: 'Dallas Hidden Gems', image: 'dallas-hidden-gems', followers: '25.1k' },
  { name: 'Dallas Discovered', image: 'dallas-discovered', followers: '554k' },
  { name: 'Eat In Dallas', image: 'eat-in-dallas', followers: '209k' },
  { name: 'Date Night Dallas', image: 'date-night-dallas', followers: '67k' },
  { name: 'Explore Vina', image: 'explore-vina', followers: '79k' },
  { name: 'Dallasites 101', image: 'dallasites-101', followers: '621k' },
  { name: 'Dallastx Foodies', image: 'dallastx-foodies', followers: '75k' },
  { name: 'Dallas Hot Spots', image: 'dallas-hot-spots', followers: '192k' },
  { name: 'Brittany Rose Blog', image: 'brittany-rose-blog', followers: '190k' },
  { name: 'Dubbs Grubs', image: 'dubbs-grubs', followers: '177k' },
  { name: 'Dallas Love List', image: 'dallas-love-list', followers: '890k' },
])
</script>

<template>
  <UContainer>
    <div class="bg-white rounded-[4rem] py-8 lg:py-16 shadow-xl px-8">
      <h2 class="heading text-lg md:text-xl lg:text-2xl text-center">
        Get matched with local, trusted food influencers, who can <span class="highlight">viralize your business</span>.
      </h2>

      <Swiper
        :modules="[Autoplay, Navigation]"
        :slides-per-view="isLargeScreen ? 5 : 3"
        navigation
        :speed="3000"
        loop
        :autoplay="{
          pauseOnMouseEnter: true
        }"
        free-mode
        class="mt-8 lg:mt-16"
      >
        <SwiperSlide v-for="influencer in influencers" :key="influencer.name">
          <div class="flex flex-col justify-center items-center px-4">
            <UnLazyImage
              :src="images[`${influencer.image}`]"
              class="object-contain rounded-lg"
              width="180"
              height="180"
            />
            <div class="mt-4 text-center">
              <span class="block text-slate-600 font-medium lg:text-xl">{{ influencer.followers }} <span class="block lg:inline">followers</span></span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </UContainer>
</template>

<style scoped>

</style>
