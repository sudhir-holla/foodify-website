<script setup lang="ts">
useHead({
  script: [{ src: 'https://assets.calendly.com/assets/external/widget.js', async: true, type: 'text/javascript' }],
})

const isBookingModalVisible = ref(false)

const loadBookingModal = () => {
  isBookingModalVisible.value = true

  nextTick(() => {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/foodify-us/30min',
      parentElement: document.getElementById('calendly-inline-widget'),
      prefill: {},
      utm: {},
    })
  })
}

provide('loadBookingModal', loadBookingModal)
</script>

<template>
  <div class="bg-gradient-to-b from-white to-indigo-100 text-slate-800 antialiased font-sans">
    <TopNavbar />

    <main class="min-h-[calc(100vh-var(--header-height))]">
      <slot />
    </main>

    <AppFooter />

    <UModal v-model="isBookingModalVisible">
      <div>
        <div id="calendly-inline-widget" style="height:700px;" />
      </div>
    </UModal>
  </div>
</template>
