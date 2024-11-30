export default function (url: string, options: ResourceCollectionOptions = {}): ResourceCollectionResponse<any> {
  const { data: _data, error, pending, refresh, status } = useGet(url, options)

  const data = computed(() => _data.value?.data)

  return {
    data,
    error,
    status,
    pending,
    refresh,
  }
}
