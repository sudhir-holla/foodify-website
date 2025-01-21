<script setup lang="ts">
useHead({
  title: "Privacy Policy - FoodiFy",
  meta: [
    {
      name: "description",
      content:
        "Learn about how FoodiFy collects, uses, and protects your personal information.",
    },
  ],
});
</script>

<template>
  <div class="py-12 sm:py-16">
    <UContainer>
      <div class="mx-auto max-w-3xl">
        <h1 class="mb-8 text-4xl font-bold tracking-tight">Privacy Policy</h1>

        <div class="max-w-none prose prose-slate">
          <p class="mb-8 text-lg">
            Foodify ("we," "us," or "our") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our platform and
            services. By using Foodify, you agree to the practices described in
            this policy.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>a. Information You Provide:</h3>
          <ul>
            <li>
              <strong>Account Information:</strong> When you sign up, we collect
              your name, email address, phone number, and business details (if
              applicable).
            </li>
            <li>
              <strong>Payment Information:</strong> Payment details provided for
              billing purposes are securely processed by our third-party payment
              processors.
            </li>
            <li>
              <strong>Content:</strong> Any media, text, or other materials you
              upload to the platform.
            </li>
          </ul>

          <h3>b. Automatically Collected Information:</h3>
          <ul>
            <li>
              <strong>Usage Data:</strong> We collect data about your
              interactions with our platform, such as pages viewed, features
              used, and session duration.
            </li>
            <li>
              <strong>Device Information:</strong> This includes your device's
              IP address, browser type, operating system, and unique device
              identifiers.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar tracking
              technologies to enhance your experience.
            </li>
          </ul>

          <h3>c. Information from Third Parties:</h3>
          <ul>
            <li>
              We may receive information from third-party services, such as
              social media platforms, if you link your accounts to Foodify.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information collected to:</p>
          <ul>
            <li>Provide and manage our services.</li>
            <li>Process payments and manage subscriptions.</li>
            <li>
              Communicate with you, including responding to inquiries and
              providing updates.
            </li>
            <li>Improve and personalize your experience on our platform.</li>
            <li>
              Monitor usage trends and analyze data to enhance our services.
            </li>
            <li>Ensure compliance with legal obligations.</li>
          </ul>

          <h2>3. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. However, we may share your
            information with:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third-party vendors who assist
              in operating our platform, processing payments, or analyzing data.
            </li>
            <li>
              <strong>Business Partners:</strong> Influencers or businesses
              involved in campaigns, as necessary to fulfill agreements.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required to comply with
              legal obligations or enforce our Terms and Conditions.
            </li>
            <li>
              <strong>Successors:</strong> In the event of a merger,
              acquisition, or sale of Foodify, your information may be
              transferred to the new entity.
            </li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to
            safeguard your information. While we strive to protect your data, no
            method of transmission over the internet or electronic storage is
            completely secure.
          </p>

          <h2>5. Your Choices</h2>
          <ul>
            <li>
              <strong>Access and Update:</strong> You can access and update your
              account information at any time.
            </li>
            <li>
              <strong>Opt-Out:</strong> You may opt out of receiving promotional
              communications by following the instructions in the communication
              or contacting us directly.
            </li>
            <li>
              <strong>Cookies:</strong> You can manage your cookie preferences
              through your browser settings.
            </li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to provide our
            services and fulfill the purposes outlined in this policy, unless a
            longer retention period is required by law.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            Foodify is not intended for individuals under the age of 18. We do
            not knowingly collect personal information from children. If we
            learn that a child has provided us with personal data, we will
            delete it.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on our website with the updated "Last Modified" date.
            Continued use of our platform constitutes your acceptance of any
            changes.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at:
          </p>
          <p>Email: foodify.us@gmail.com</p>

          <div class="mt-8">
            <p>
              By using Foodify, you acknowledge that you have read and
              understood this Privacy Policy.
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
