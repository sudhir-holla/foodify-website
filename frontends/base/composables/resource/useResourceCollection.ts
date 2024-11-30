export default function (url: string, options: ResourceCollectionOptions = {}) {
  const page = ref(options?.params?.page || 1)
  const filters = ref(options?.filters)

  const { data: _data, error, pending, refresh, status } = useGet(url, {
    params: {
      ...options?.params,
      page,
    },
    filters: filters.value,
  })

  const data = computed(() => _data.value?.data)
  const meta = computed(() => _data.value?.meta)

  const hasNextPage = computed(
    () => (meta.value || false) && page.value < meta.value.last_page,
  )

  const hasPrevPage = computed(
    () => (meta.value || false) && meta.value.last_page > 1 && page.value > 1,
  )

  const next = () => {
    if (!hasNextPage.value || pending.value)
      return

    page.value++
  }

  const prev = () => {
    if (!hasPrevPage.value || pending.value)
      return

    page.value--
  }

  watch(
    filters,
    () => page.value = 1,
    { deep: true },
  )

  return {
    data,
    meta,
    error,
    filters,
    status,
    pending,
    refresh,
    next,
    prev,
    hasNextPage,
    hasPrevPage,
  }
}
