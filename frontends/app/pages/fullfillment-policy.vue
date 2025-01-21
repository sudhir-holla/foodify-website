<script setup lang="ts">
useHead({
  title: "Fulfillment Policy - FoodiFy",
  meta: [
    {
      name: "description",
      content:
        "Learn about FoodiFy's fulfillment, refund, delivery, return, and cancellation policies.",
    },
  ],
});
</script>

<template>
  <div class="py-12 sm:py-16">
    <UContainer>
      <div class="mx-auto max-w-3xl">
        <h1 class="mb-8 text-4xl font-bold tracking-tight">
          Fulfillment Policy
        </h1>

        <div class="max-w-none prose prose-slate">
          <p class="mb-8 text-lg">
            We at Foodify are committed to providing transparent and
            customer-friendly fulfillment policies to ensure a seamless
            experience for our restaurant partners and their customers.
          </p>

          <h2>Refund Policy</h2>
          <ul>
            <li>
              Refunds are issued only under specific circumstances, such as a
              service not being delivered due to errors on our part (e.g.,
              influencer visit not completed as scheduled).
            </li>
            <li>
              To request a refund, please email us at foodify.us@gmail.com with
              your business name, the scheduled influencer date, and the reason
              for the request.
            </li>
          </ul>

          <h2>Delivery Policy</h2>
          <ul>
            <li>
              Foodify delivers its services by coordinating monthly influencer
              visits to your restaurant.
            </li>
            <li>
              You will be notified in advance with details about the influencer,
              including their social media reach and influencer fit.
            </li>
            <li>
              Delivery of the influencer's content (posts, videos, etc.) will
              typically occur by the end of the month of their visit.
            </li>
            <li>
              Any delays due to unforeseen circumstances will be communicated
              promptly.
            </li>
          </ul>

          <h2>Return Policy</h2>
          <ul>
            <li>
              Foodify does not deal in physical goods. However, if you are
              dissatisfied with the influencer's performance or believe there
              was a misalignment in the target audience, we will review your
              case.
            </li>
            <li>
              Submit any concerns to foodify.us@gmail.com within 14 days of the
              influencer's posting date, including detailed feedback and metrics
              you've tracked.
            </li>
          </ul>

          <h2>Cancellation Policy</h2>
          <ul>
            <li>
              You may cancel/pause your subscription at any time. However,
              cancellations must be requested by the 1st of the month preceding
              the month of cancellation to avoid charges for that month.
            </li>
            <li>To cancel, email us at foodify.us@gmail.com.</li>
            <li>
              Upon cancellation, your subscription will remain active until the
              end of the current billing cycle, after which services will cease.
            </li>
          </ul>

          <div class="mt-8">
            <p>
              By using Foodify, you agree to these fulfillment policies, which
              are designed to ensure fairness and accountability for all parties
              involved. Should you have any questions or require clarification,
              do not hesitate to reach out to our team.
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
.prose ul {
  @apply list-disc pl-6 mb-4;
}
</style>
