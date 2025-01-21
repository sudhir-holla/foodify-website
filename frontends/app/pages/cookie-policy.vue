<script setup lang="ts">
useHead({
  title: "Cookie Policy - FoodiFy",
  meta: [
    {
      name: "description",
      content: "Learn about how FoodiFy uses cookies and similar technologies.",
    },
  ],
});
</script>

<template>
  <div class="py-12 sm:py-16">
    <UContainer>
      <div class="mx-auto max-w-3xl">
        <h1 class="mb-8 text-4xl font-bold tracking-tight">Cookie Policy</h1>

        <div class="max-w-none prose prose-slate">
          <p class="text-lg">
            Last updated: {{ new Date().toLocaleDateString() }}
          </p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you
            visit our website. They help us provide you with a better experience
            by remembering your preferences, analyzing how you use our site, and
            helping with our marketing efforts.
          </p>

          <h2>How we use cookies</h2>
          <p>We use cookies for several purposes:</p>
          <ul>
            <li>
              <strong>Essential cookies:</strong> Required for the website to
              function properly
            </li>
            <li>
              <strong>Functional cookies:</strong> Remember your preferences and
              settings
            </li>
            <li>
              <strong>Analytics cookies:</strong> Help us understand how
              visitors use our site
            </li>
            <li>
              <strong>Marketing cookies:</strong> Used to deliver relevant
              advertisements
            </li>
          </ul>

          <h2>Your cookie choices</h2>
          <p>
            Most web browsers allow you to control cookies through their
            settings. You can:
          </p>
          <ul>
            <li>Delete all cookies from your browser</li>
            <li>Block cookies from being set</li>
            <li>Allow only certain types of cookies</li>
          </ul>

          <h2>Updates to this policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will
            be posted on this page with an updated revision date.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us
            through our support channels.
          </p>
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
.prose ul {
  @apply list-disc pl-6 mb-4;
}
</style>
