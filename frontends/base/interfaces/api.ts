export interface ApiResponseMeta {
  current_page: number
  from: number
  links: Array<object>
  last_page: number
  path: string
  per_page: number
  to: number
  total: number
}

export interface ApiResponseData<TData> {
  data: Ref<TData>
  meta: Ref<ApiResponseMeta>
}
