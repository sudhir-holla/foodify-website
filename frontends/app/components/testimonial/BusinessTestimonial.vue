<script setup lang="ts">
withDefaults(defineProps<{
  testimonial: object
  index?: number
  hideStory?: boolean
}>(), {
  hideStory: false,
})

const images = inject('images')
const isStoryVisible = ref(false)

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <div class="flex bg-white rounded-xl text-center overflow-hidden" :class="{'flex-row-reverse': index % 2 === 1}">
    <div class="lg:w-2/3 flex flex-col items-center justify-center py-16 lg:py-8">
      <div class="w-[75%] relative">
        <ClientOnly>
          <UnLazyImage
            :src="`${images.quote}`"
            :width="isLargeScreen ? 50 : 25"
            :height="isLargeScreen ? 50 : 25"
            class="absolute top-0 left-0 -mt-6 -ml-6 lg:-mt-12 lg:-ml-12"
          />
        </ClientOnly>
        <p class="text-lg lg:text-2xl font-medium text-slate-800 leading-relaxed">
          {{ testimonial.text }}
        </p>
        <p class="text-sm lg:text-base text-slate-500 mt-4">
          - {{ testimonial.author.name }}, Owner of {{ testimonial.business.name }} in {{ testimonial.business.location }}
        </p>
      </div>

      <div class="flex flex-col lg:flex-row justify-center space-y-8 lg:space-x-12 lg:space-y-0 mt-8">
        <div>
          <div class="text-3xl font-bold text-indigo-600">
            {{ testimonial.metrics.impressions }}
          </div>
          <div class="tracking-wide mt-2">
            Impressions
          </div>
        </div>
        <div>
          <div class="text-3xl font-bold text-indigo-600">
            {{ testimonial.metrics.views }}
          </div>
          <div class="tracking-wide mt-2">
            Views
          </div>
        </div>
        <div>
          <div class="text-3xl font-bold text-indigo-600">
            {{ testimonial.metrics.increaseInSales }}
          </div>
          <div class="tracking-wide mt-2">
            Increase in Sales
          </div>
        </div>
      </div>

      <SecondaryButton v-if="!hideStory" class="mt-8" @click="isStoryVisible = true">
        Learn More
      </SecondaryButton>

      <UModal v-if="!hideStory" v-model="isStoryVisible" :ui="{ width: 'lg:max-w-[60%]' }">
        <div id="business-story" class="py-12 space-y-12">
          <div class="flex justify-between items-center pb-8 px-8 md:px-16 border-b">
            <h4 class="font-bold text-xl text-slate-800 tracking-wide">
              {{ testimonial.author.name }}'s Story
            </h4>
            <UButton icon="i-heroicons-x-mark" variant="ghost" color="gray" size="xl" @click="isStoryVisible = false" />
          </div>
          <div class="flex flex-col-reverse lg:flex-row items-center px-8 md:px-16 lg:space-x-16">
            <div class="lg:w-2/3 mt-8 lg:mt-0">
              <h3 class="text-center lg:text-left text-2xl text-indigo-500">
                {{ testimonial.story.intro.heading }}
              </h3>
              <p class="mt-4 text-slate-600 leading-relaxed">
                {{ testimonial.story.intro.text }}
              </p>
            </div>
            <div class="lg:w-1/3">
              <UnLazyImage
                class="rounded-lg"
                :src="`${images[testimonial.author.image]}`"
                width="100%"
                height="400px"
              />
            </div>
          </div>

          <div class="flex flex-col-reverse lg:flex-row items-center px-8 md:px-16 lg:space-x-16">
            <div class="lg:w-2/3 mt-8 lg:mt-0">
              <h3 class="text-center lg:text-left text-2xl text-indigo-500">
                Enter influencers
              </h3>
              <p class="mt-4 text-slate-600 leading-relaxed">
                {{ testimonial.story.collab.text }}
              </p>
            </div>
            <div class="lg:w-1/3">
              <UnLazyImage
                class="rounded-lg"
                :src="`${images[testimonial.story.collab.image]}`"
                width="100%"
                height="400px"
              />
            </div>
          </div>

          <div class="flex flex-col-reverse lg:flex-row items-center px-8 md:px-16 lg:space-x-16">
            <div class="lg:w-2/3 mt-8 lg:mt-0">
              <h3 class="text-center lg:text-left text-2xl text-indigo-500">
                {{ testimonial.story.result.heading }}
              </h3>
              <p class="mt-4 text-slate-600 leading-relaxed">
                {{ testimonial.story.result.text }}
              </p>
            </div>
            <div class="lg:w-1/3">
              <UnLazyImage
                class="rounded-lg"
                :src="`${images[testimonial.story.result.image]}`"
                width="100%"
                height="400px"
              />
            </div>
          </div>
        </div>
      </UModal>
    </div>
    <div class="lg:w-1/3 hidden lg:block min-h-[500px]">
      <UnLazyImage
        :src="images[`${testimonial.author.image}`]"
        class="object-cover h-full"
        width="100%"
        height="auto"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
