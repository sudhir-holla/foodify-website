<script setup lang="ts">
useHead({
  title: "Contact Us - FoodiFy",
  meta: [
    { name: "description", content: "Get in touch with the FoodiFy team." },
  ],
});
</script>

<template>
  <div class="py-12 sm:py-16">
    <UContainer>
      <div class="mx-auto max-w-3xl">
        <h1 class="mb-8 text-4xl font-bold tracking-tight">Contact Us</h1>

        <div class="max-w-none prose prose-slate">
          <p class="mb-8 text-lg">
            Have questions or need assistance? We're here to help! Get in touch
            with our team using the contact information below.
          </p>

          <div class="p-8 mb-8 bg-gray-50 rounded-lg">
            <h2 class="mb-4 text-2xl font-semibold">Email Us</h2>
            <p class="mb-2">For general inquiries:</p>
            <a
              href="mailto:contact@foodifyapp.com"
              class="text-primary-600 hover:text-primary-700"
            >
              contact@foodifyapp.com
            </a>
          </div>

          <div class="p-8 bg-gray-50 rounded-lg">
            <h2 class="mb-4 text-2xl font-semibold">Response Time</h2>
            <p>
              We strive to respond to all inquiries within 24-48 hours during
              business days. For urgent matters, please include "URGENT" in your
              email subject line.
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.prose h2 {
  @apply text-2xl font-semibold mt-8 mb-4;
}
.prose p {
  @apply mb-4;
}
</style>
