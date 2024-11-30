<script setup lang="ts">
</script>

<template>
  <section class="bg-indigo-200 py-16">
    <UContainer class="flex flex-col lg:flex-row items-center justify-center">
      <div class="lg:w-1/2 flex-shrink-0">
        <h2 class="font-bold text-3xl">
          Start with your first local restaurant collaboration.
        </h2>
        <ul class="leading-loose mt-6">
          <li class="flex items-baseline space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" class="text-indigo-500 flex-shrink-0"><path fill="currentColor" d="m243.33 90.91l-128.41 128.4a16 16 0 0 1-22.63 0l-71.62-72a16 16 0 0 1 0-22.61l24-24a16 16 0 0 1 22.57-.06l36.64 35.27l.11.11l92.73-91.37a16 16 0 0 1 22.58 0l24 23.56a16 16 0 0 1 .03 22.7" /></svg>
            <span>High-quality, reputable restaurants</span>
          </li>
          <li class="flex items-baseline space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" class="text-indigo-500 flex-shrink-0"><path fill="currentColor" d="m243.33 90.91l-128.41 128.4a16 16 0 0 1-22.63 0l-71.62-72a16 16 0 0 1 0-22.61l24-24a16 16 0 0 1 22.57-.06l36.64 35.27l.11.11l92.73-91.37a16 16 0 0 1 22.58 0l24 23.56a16 16 0 0 1 .03 22.7" /></svg>
            <span>Consistent stream of collaboration opportunities</span>
          </li>
          <li class="flex items-baseline space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" class="text-indigo-500 flex-shrink-0"><path fill="currentColor" d="m243.33 90.91l-128.41 128.4a16 16 0 0 1-22.63 0l-71.62-72a16 16 0 0 1 0-22.61l24-24a16 16 0 0 1 22.57-.06l36.64 35.27l.11.11l92.73-91.37a16 16 0 0 1 22.58 0l24 23.56a16 16 0 0 1 .03 22.7" /></svg>
            <span>No back-and-forth with the business</span>
          </li>
          <li class="flex items-baseline space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" class="text-indigo-500 flex-shrink-0"><path fill="currentColor" d="m243.33 90.91l-128.41 128.4a16 16 0 0 1-22.63 0l-71.62-72a16 16 0 0 1 0-22.61l24-24a16 16 0 0 1 22.57-.06l36.64 35.27l.11.11l92.73-91.37a16 16 0 0 1 22.58 0l24 23.56a16 16 0 0 1 .03 22.7" /></svg>
            <span>Know what you’ll get. Collaboration compensation is set ahead of time.</span>
          </li>
          <li class="flex items-baseline space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" class="text-indigo-500 flex-shrink-0"><path fill="currentColor" d="m243.33 90.91l-128.41 128.4a16 16 0 0 1-22.63 0l-71.62-72a16 16 0 0 1 0-22.61l24-24a16 16 0 0 1 22.57-.06l36.64 35.27l.11.11l92.73-91.37a16 16 0 0 1 22.58 0l24 23.56a16 16 0 0 1 .03 22.7" /></svg>
            <span>No hassle - we do the sourcing, booking, and scheduling for you.</span>
          </li>
        </ul>
      </div>

      <div class="lg:w-1/2 flex-shrink-0 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <UForm class="w-full lg:w-[32rem] space-y-4 bg-white p-8 rounded-lg shadow-lg">
          <UFormGroup>
            <UInput size="xl" placeholder="Full Name" />
          </UFormGroup>

          <UFormGroup>
            <UInput size="xl" placeholder="Email" />
          </UFormGroup>

          <div class="flex justify-between space-x-8">
            <UFormGroup class="flex-1">
              <UInput size="xl" placeholder="Phone Number" />
            </UFormGroup>

            <UFormGroup class="flex-1">
              <UInput size="xl" placeholder="City" />
            </UFormGroup>
          </div>

          <UFormGroup>
            <UInput size="xl" placeholder="Instagram profile link" />
          </UFormGroup>

          <UFormGroup>
            <UInput size="xl" placeholder="TikTok profile link" />
          </UFormGroup>

          <PrimaryButton block>
            Join FoodiFy
          </PrimaryButton>

          <p class="text-slate-500 text-sm text-center">
            By clicking, you certify that you've agreed to our
            <ULink to="/terms" target="_blank">
              <span class="underline">terms of use</span>
            </ULink>.
          </p>
        </UForm>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>

</style>
