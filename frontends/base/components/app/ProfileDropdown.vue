<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import type { UserProfile } from '~/interfaces/user'

defineProps<{
  links: Array<Array<object>>
}>()

const { user }: { user: UserProfile } = storeToRefs(useUserProfileStore())
</script>

<template>
  <UDropdown v-if="user" :items="links">
    <UAvatar :alt="user.name" />

    <template #account>
      <div class="text-left leading-normal cursor-default">
        <div class="font-bold text-gray-900">
          {{ user.name }}
        </div>
        <div class="line-clamp-1 text-xs">
          {{ user.email }}
        </div>
      </div>
    </template>
  </UDropdown>
</template>
