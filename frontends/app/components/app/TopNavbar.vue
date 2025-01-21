<script setup lang="ts">
const links = [
  { label: "Why Influencers?", to: "/why-influencers" },
  { label: "Pricing", to: "/pricing" },
  { label: "How it Works", to: "/how-it-works" },
  { label: "For Creators", to: "/for-creators" },
  { label: "Contact Us", to: "/contact" },
];

const isMenuVisible = ref(false);
</script>

<template>
  <div class="fixed top-0 w-full bg-white z-50">
    <UContainer class="py-4">
      <nav class="flex justify-between items-center">
        <div class="lg:flex items-center">
          <AppLogo class="h-8" />

          <ul
            class="hidden lg:flex font-medium text-sm tracking-wider space-x-8 ml-16"
          >
            <li v-for="link in links" :key="link.label">
              <ULink
                :to="link.to"
                class="hover:text-indigo-500 transition-all duration-300"
              >
                {{ link.label }}
              </ULink>
            </li>
          </ul>
        </div>
        <div class="flex items-center space-x-4">
          <BookDemo class="hidden sm:inline-block">
            Schedule a consultation
          </BookDemo>

          <SecondaryButton to="/login" class="hidden lg:inline-block">
            Login
          </SecondaryButton>

          <UPopover
            :open="isMenuVisible"
            :popper="{
              placement: 'bottom-end',
              width: 300,
              offsetDistance: 24,
            }"
          >
            <UButton
              icon="i-heroicons-bars-3-solid"
              color="black"
              variant="ghost"
              size="xl"
              class="lg:hidden"
              @click="isMenuVisible = true"
            />

            <template #panel>
              <div class="bg-white">
                <ul class="font-bold text-slate-600 space-y-4 py-8">
                  <li v-for="link in links" :key="link.label" class="px-8">
                    <ULink
                      :to="link.to"
                      class="hover:text-indigo-500 transition-all duration-300"
                      @click="isMenuVisible = false"
                    >
                      {{ link.label }}
                    </ULink>
                  </li>
                </ul>
                <div
                  class="border-t py-8 flex flex-col justify-center items-center w-[94vw]"
                >
                  <div class="sm:hidden">
                    <BookDemo class="w-42"> Schedule a consultation </BookDemo>
                  </div>
                  <div class="mt-8 sm:mt-0">
                    <SecondaryButton to="/login" variant="ghost" block>
                      Login
                    </SecondaryButton>
                  </div>
                </div>
              </div>
            </template>
          </UPopover>
        </div>
      </nav>
    </UContainer>
  </div>
</template>

<style scoped></style>
