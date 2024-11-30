import type { FormError } from '#ui/types'
import type { UseFetchOptions } from '#app'
import type { Notification } from '~/composables/useRequestNotification'

interface FormOptions {
  refreshCsrfToken?: boolean
}

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface Response {
  data?: any
  error?: any
}

export default function (data: object, _options: FormOptions = {}) {
  const state = ref(data)
  const processing = ref(false)
  const form = ref()

  const { setCsrfToken } = useAuth()
  const requestNotification = useRequestNotification()

  const validate = (): FormError[] => {
    return []
  }

  const submit = async (method: RequestMethod, url: string, options: UseFetchOptions<any> = {}, notification: Notification = { name: 'form' }): Promise<Response> => {
    if (processing.value)
      return Promise.resolve({ data: null, error: null })

    processing.value = true
    form.value?.clear()

    if (_options.refreshCsrfToken)
      await setCsrfToken()

    const { data, error } = await useRequest(url, {
      ...options,
      method,
      body: { ...state.value },
    })

    if (error.value) {
      requestNotification.handle(error.value.statusCode, notification)

      if (error.value.statusCode === 422) {
        const errors = error.value?.data?.errors

        form.value.setErrors(Object.keys(errors).map(key => ({ path: key, message: errors[key][0] })))
      }
    }

    processing.value = false

    return { data: data.value?.data, error: error.value }
  }

  return { state, form, validate, submit, processing }
}
