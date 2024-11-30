import qs from 'qs'
import type { UseFetchOptions } from '#app'

const request = (url: string, options: UseFetchOptions<any> = {}) => {
  const nuxtApp = useNuxtApp()
  const protocol = process.client ? window.location.protocol : `https:`
  const hostname = process.client ? window.location.hostname : 'nginx'

  const _options: UseFetchOptions<any> = {
    baseURL: `${protocol}//${hostname}/api`,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Credentials': 'true',
      'X-XSRF-TOKEN': String(useCookie('XSRF-TOKEN').value),
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(process.server ? { 'X-Forwarded-Host': nuxtApp.ssrContext?.event.node.req.headers.host } : {}),
    },
    ...options,
    onRequest(context): Promise<void> | void {
      context.request = `${context.request}?${qs.stringify({ filter: options.filters })}`
    },
  }

  return useFetch(url, _options)
}

export default request

export function useGet(url: string, options = {}) {
  return request(url, { ...options, method: 'GET' })
}

export function usePost(url: string, body = null, options = {}) {
  return request(url, { ...options, body, method: 'POST' })
}

export function usePatch(url: string, body = null, options = {}) {
  return request(url, { ...options, body, method: 'PATCH' })
}

export function useDelete(url: string, body = null, options = {}) {
  return request(url, { ...options, body, method: 'DELETE' })
}
