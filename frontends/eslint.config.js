import antfu, { stylistic } from '@antfu/eslint-config'

const stylisticConfig = await stylistic()
stylisticConfig[0].rules['antfu/top-level-function'] = 'off'

export default antfu({
  stylistic: false,
}, {
  ...stylisticConfig[0],
})
