import { useUserProfileStore } from '~/store/user-profile'

export default function () {
  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig()
  const { user } = useUserProfileStore()

  let redirect = false
  let external = true
  let path = ''
  // eslint-disable-next-line node/prefer-global/process
  const host = process.server
    ? nuxtApp.ssrContext?.event.node.req.headers.host
    : window?.location?.host

  const domains = [
    { type: 'customer', host: config.public.customerDomain },
    { type: 'admin', host: config.public.adminDomain },
  ]

  const domain = domains.find(_domain => _domain.host === host)

  if (!user || !domain) {
    return {
      redirect: false,
      path: '',
      external: false,
    }
  }

  if (domain && domain.type !== user.type) {
    redirect = true
    const newDomain = domains.find(_domain => _domain.type === user.type)

    if (newDomain) {
      path = `//${newDomain.host}`
    }
    else {
      path = '/account-setup-pending'
      redirect = false
      external = false
    }
  }

  return {
    redirect,
    external,
    path,
  }
}
