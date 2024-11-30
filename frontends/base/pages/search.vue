<script lang="ts" setup>
const { state, submit, processing } = useForm({
  image: null,
  text: null,
  type: null,
}, {
  refreshCsrfToken: true,
})

const products = ref([])

const getTypes = async (term) => {
  const { data } = await useGet('/product-types', { params: { term } })

  return data.value?.data
}

const search = async () => {
  const { data } = await usePost('/product-search-via-embeddings', {
    image: state.value.image,
    text: state.value.text,
    type: state.value.type?.slug,
  })

  if (data.value?.data)
    products.value = data.value.data
}
</script>

<template>
  <UContainer class="py-8">
    <h1 class="font-bold text-xl">
      Product Search
    </h1>

    <UForm :state="state" @submit="search">
      <UFormGroup>
        <ImageUploader v-model:image="state.image" />
      </UFormGroup>
      <UFormGroup label="Product type" name="type">
        <USelectMenu v-model="state.type" :searchable="getTypes" by="id" class="w-64" option-attribute="name" placeholder="Select product type" />
      </UFormGroup>
      <UFormGroup class="mt-4" label="Product description">
        <UTextarea v-model:text="state.text" placeholder="Describe features of the product" />
      </UFormGroup>
      <UButton :loading="processing" class="mt-4 font-bold" type="submit">
        Search
      </UButton>
    </UForm>

    <div>
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </UContainer>
</template>
