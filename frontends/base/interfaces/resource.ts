export interface ResourceCollectionResponse<TData> {
  data: ComputedRef<Array<TData>>
  meta: Ref<ApiResponseMeta>
  error: Ref<any | null>
  pending: Ref<boolean>
  next: Function
  prev: Function
  hasPrevPage: ComputedRef<boolean>
  hasNextPage: ComputedRef<boolean>
}

export interface ResourceCollectionOptions {
  filters?: object
  params?: object
}
