import logo from '~/assets/images/logo/foodify-logo-black.png'
import icon from '~/assets/images/logo/foodify-icon-black.png'

export default function (options = {}) {
  const title = options?.title ?? 'Boost restaurant traffic with local food influencers - FoodiFy'
  const description = options?.description ?? 'Restaurant marketing redefined for the social media age.'

  const domain = 'https://foodifyapp.com'
  const route = useRoute()

  let url = `${domain}${route.path}`

  if (route.path === '/')
    url = domain

  return useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: logo,
    icon,
    lang: 'en',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: icon,
    twitterCard: 'summary',
    ogUrl: url,
  })
}
