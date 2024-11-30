<script setup lang="ts">
withDefaults(defineProps<{
  links?: []
}>(), {
  links: () => [],
})

</script>

<template>
  <div class="xl:grid xl:grid-cols-3 xl:gap-8">
    <div class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2">
      <div v-for="(link, index) in links" :key="index">
        <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">
          {{ link.label }}
        </h3>

        <ul role="list" class="mt-6 space-y-4">
          <li v-for="(subLink, subIndex) of link.children" :key="subIndex">
            <ULink
              :to="subLink.to"
              class="text-sm relative"
              active-class="text-gray-900 dark:text-white font-medium"
              inactive-class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              @click="subLink.click"
            >
              {{ subLink.label }}

              <UIcon v-if="subLink.target === '_blank'" name="i-heroicons-arrow-top-right-on-square" class="w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500" />
            </ULink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
