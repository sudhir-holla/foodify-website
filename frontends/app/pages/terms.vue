<script setup lang="ts">
useHead({
  title: "Terms and Conditions - FoodiFy",
  meta: [
    {
      name: "description",
      content:
        "Read FoodiFy's terms and conditions for using our platform and services.",
    },
  ],
});
</script>

<template>
  <div class="py-12 sm:py-16">
    <UContainer>
      <div class="mx-auto max-w-3xl">
        <h1 class="mb-8 text-4xl font-bold tracking-tight">
          Terms and Conditions
        </h1>

        <div class="max-w-none prose prose-slate">
          <p class="mb-8 text-lg">
            Welcome to Foodify! These Terms and Conditions ("Terms") govern your
            use of the Foodify platform and services. By accessing or using our
            services, you agree to be bound by these Terms. If you do not agree
            to these Terms, you may not use our services.
          </p>

          <h2>1. Definitions</h2>
          <ul>
            <li>
              <strong>"Foodify"</strong> refers to the platform, including its
              website and associated services.
            </li>
            <li>
              <strong>"User"</strong> refers to any individual or business
              accessing Foodify's services, including restaurant owners and
              influencers.
            </li>
            <li>
              <strong>"Content"</strong> refers to any text, images, videos, or
              other material shared through the platform.
            </li>
          </ul>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old to use Foodify. By using our
            platform, you confirm that you meet this requirement.
          </p>

          <h2>3. Account Registration</h2>
          <ul>
            <li>
              Users must provide accurate and complete information when creating
              an account.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              login credentials and for all activities that occur under your
              account.
            </li>
            <li>
              Foodify reserves the right to suspend or terminate accounts that
              violate these Terms.
            </li>
          </ul>

          <h2>4. Services</h2>
          <p>
            Foodify connects restaurants with influencers to facilitate
            marketing campaigns. By using our services:
          </p>
          <ul>
            <li>
              Restaurants agree to host influencers as outlined in their
              campaign agreements.
            </li>
            <li>
              Influencers agree to create and post content as agreed upon.
            </li>
            <li>
              Foodify acts as an intermediary but is not liable for the content
              or outcomes of campaigns.
            </li>
          </ul>

          <h2>5. Payments and Fees</h2>
          <ul>
            <li>
              Restaurants agree to the monthly pricing plan selected during
              onboarding.
            </li>
            <li>
              Payments are automatically billed monthly unless canceled in
              accordance with our cancellation policy.
            </li>
            <li>
              Influencers will receive payment as outlined in their campaign
              agreement.
            </li>
            <li>
              All fees are non-refundable unless explicitly stated otherwise.
            </li>
          </ul>

          <h2>6. User Obligations</h2>
          <h3>Restaurants:</h3>
          <ul>
            <li>Provide accurate business details during onboarding.</li>
            <li>Ensure a positive experience for influencers during visits.</li>
            <li>
              Acknowledge that Foodify does not guarantee specific results.
            </li>
          </ul>

          <h3>Influencers:</h3>
          <ul>
            <li>Post authentic, high-quality content.</li>
            <li>
              Disclose paid collaborations in accordance with FTC guidelines.
            </li>
            <li>Honor all agreements made through Foodify.</li>
          </ul>

          <h2>7. Intellectual Property</h2>
          <ul>
            <li>Users retain ownership of the content they create.</li>
            <li>
              By using Foodify, you grant us a non-exclusive, royalty-free
              license to use content for promotional purposes.
            </li>
          </ul>

          <h2>8. Prohibited Activities</h2>
          <p>Users may not:</p>
          <ul>
            <li>Use Foodify for unlawful or fraudulent purposes.</li>
            <li>Post misleading or defamatory content.</li>
            <li>Violate any local, state, or federal laws.</li>
          </ul>

          <h2>9. Termination</h2>
          <p>
            Foodify reserves the right to suspend or terminate access to the
            platform for violations of these Terms or for any reason at our
            discretion.
          </p>

          <h2>10. Disclaimers</h2>
          <ul>
            <li>
              Foodify does not guarantee specific outcomes from campaigns.
            </li>
            <li>
              Services are provided "as is" without warranties of any kind.
            </li>
            <li>Foodify is not responsible for any disputes between users.</li>
          </ul>

          <h2>11. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Foodify shall not be liable
            for any indirect, incidental, or consequential damages arising from
            the use of our services.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            Foodify may update these Terms from time to time. Changes will be
            posted on the website, and continued use of the platform constitutes
            acceptance of updated Terms.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of Texas, without regard to its conflict of
            law provisions.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>Email: foodify.us@gmail.com</p>

          <div class="mt-8">
            <p>
              By using Foodify, you acknowledge that you have read and agreed to
              these Terms and Conditions.
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
.prose h3 {
  @apply text-xl font-semibold mt-6 mb-3;
}
.prose p {
  @apply mb-4;
}
.prose ul {
  @apply list-disc pl-6 mb-4;
}
</style>
