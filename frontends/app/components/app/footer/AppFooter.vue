<script setup lang="ts">
import AppFooterColumns from "~/components/app/footer/AppFooterColumns.vue";

const links = [
  {
    label: "Links",
    children: [
      {
        label: "Home",
        to: "/",
      },
      {
        label: "Why Influencers?",
        to: "/why-influencers",
      },
      {
        label: "Pricing",
        to: "/pricing",
      },
      {
        label: "See How It Works",
        to: "/how-it-works",
      },
      {
        label: "For Creators",
        to: "/for-creators",
      },
      {
        label: "Contact Us",
        to: "/contact",
      },
    ],
  },
  {
    label: "Legal",
    children: [
      {
        label: "Terms & Conditions",
        to: "/terms",
      },
      {
        label: "Privacy Policy",
        to: "/privacy-policy",
      },
      {
        label: "Cookie Policy",
        to: "/cookie-policy",
      },
      {
        label: "Fullfillment Policy",
        to: "/fullfillment-policy",
      },
    ],
  },
];
</script>

<template>
  <footer>
    <UContainer class="py-8 lg:py-12">
      <AppFooterColumns :links="links" />
    </UContainer>

    <UContainer class="py-8 lg:py-4 lg:flex lg:items-center lg:justify-between">
      <div
        class="flex gap-x-1.5 justify-center items-center lg:flex-1 lg:justify-end lg:order-3"
      >
        <UButton
          icon="i-simple-icons-instagram"
          color="gray"
          variant="ghost"
          rel="noreferrer noopener"
          to="https://www.instagram.com/foodify_influencers?igsh=bHZ0MWMxMXJqNzQ3&utm_source=website"
          target="_blank"
        />
        <UButton
          icon="i-simple-icons-tiktok"
          color="gray"
          variant="ghost"
          rel="noreferrer noopener"
          to="https://www.tiktok.com/@foodify_us?_t=8jEm0U7Lcy2&_r=1"
          target="_blank"
        />
        <UButton
          icon="i-simple-icons-linkedin"
          color="gray"
          variant="ghost"
          rel="noreferrer noopener"
          to="https://www.linkedin.com/company/foodify-app/"
          target="_blank"
        />
      </div>
      <div class="flex justify-center items-center mt-3 lg:mt-0 lg:order-2">
        <span class="text-sm text-slate-600">
          Copyright © {{ new Date().getFullYear() }} FoodiFy. All rights
          reserved.
        </span>
      </div>
    </UContainer>
  </footer>
</template>
