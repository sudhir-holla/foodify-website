<script setup lang="ts">
import { filename } from 'pathe/utils'

const glob = import.meta.glob('~/assets/images/past-campaigns/*.jpg', { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default]),
)

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const campaigns = [
  [
    // Row 1 - Reel 1
    { business: { name: '', instagram_handle: 'brittanyroseblog' }, image: 'brittanyroseblog', url: 'https://www.instagram.com/reel/Cxqw910pJCI/?igsh=a2NvZmR6YXN5Z3Uw' },
    // Row 3 - Reel 1
    { business: { name: '', instagram_handle: 'dallas_discovered' }, image: 'dallas_discovered-1', url: 'https://www.instagram.com/reel/Cy6K0dtO_yt/?igsh=MWd3emFrdXEydGlqMw==' },
  ],

  [
    // Row 2 - Reel 1
    { business: { name: '', instagram_handle: 'thedreamtacos.chetra' }, image: 'thedreamtacos.chetra', url: 'https://www.instagram.com/reel/C0p8JFVrKXF/?igsh=Ynd4ejQ0eTc2aGRo' },
  ],

  [
    // Row 1 - Reel 2
    { business: { name: '', instagram_handle: 'arwayemenicoffee' }, image: 'arwayemenicoffee', url: 'https://www.instagram.com/reel/C0j8XCQvFLi/?igsh=empocm80cmUzNnlm' },
    // Row 3 - Reel 2
    { business: { name: '', instagram_handle: 'dallas_discovered' }, image: 'dallas_discovered-2', url: 'https://www.instagram.com/reel/C0xP_azP6hJ/?igsh=cm40b2J6MWE1aWV2' },
  ],

  [
    // Row 2 - Reel 2
    { business: { name: '', instagram_handle: 'vilabrazil' }, image: 'vilabrazil', url: 'https://www.instagram.com/reel/CzXSuzNMEP6/?igsh=MWI1Z3N0MWRmb2Jnaw==' },
  ],

  [
    // Row 1 - Reel 3
    { business: { name: '', instagram_handle: 'explore.vina' }, image: 'explore.vina-1', url: 'https://www.instagram.com/reel/Csy6fTxOFi6/?igsh=MXN1YTI3eG5pNWptYw==' },
    // Row 3 - Reel 3
    { business: { name: '', instagram_handle: 'explore.vina' }, image: 'explore.vina-2', url: 'https://www.instagram.com/reel/CoTYufZuTQ9/?igsh=ZW9xZ3dqeHIyaDUx' },
  ],
]

const groups = computed(() => {
  if (isLargeScreen.value)
    return campaigns

  return campaigns.flat()
})
</script>

<template>
  <UContainer>
    <h1 class="heading text-3xl lg:text-4xl leading-snug lg:leading-tight text-center">
      Content designed to bring your restaurant <span class="highlight">instant traffic.</span>
    </h1>
  </UContainer>

  <ClientOnly>
    <UContainer v-if="isLargeScreen" class="flex items-center mt-8 lg:mt-16">
      <div v-for="(group, index) in groups" :key="index" class="lg:w-1/5 px-3">
        <NuxtLink v-for="campaign in group" :key="campaign.url" :to="campaign.url" target="_blank" rel="noopener noreferrer" class="transition-all duration-300 hover:scale-110 inline-block py-2">
          <UnLazyImage
            :src="images[`${campaign.image}`]"
            width="100%"
            class="rounded-xl"
          />
        </NuxtLink>
      </div>
    </UContainer>

    <UContainer v-else class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
      <div v-for="campaign in groups" :key="campaign.url" class="flex items-center justify-center">
        <NuxtLink :to="campaign.url" target="_blank" rel="noopener noreferrer" class="transition-all duration-300 hover:scale-105 inline-block">
          <UnLazyImage
            :src="images[`${campaign.image}`]"
            width="100%"
            class="rounded-xl"
          />
        </NuxtLink>
      </div>
    </UContainer>
  </ClientOnly>
</template>

<style scoped>

</style>
