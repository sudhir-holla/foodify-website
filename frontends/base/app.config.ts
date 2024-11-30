export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'slate',

    button: {
      base: 'transition-all duration-300',
      default: {
        loadingIcon: 'i-heroicons-arrow-path-20-solid',
      },
    },

    formGroup: {
      label: {
        base: 'text-slate-500 text-sm',
      },
    },

    breadcrumb: {
      base: 'text-slate-600 font-normal',
      active: 'font-semibold',
      divider: {
        base: 'text-slate-300',
      },
    },
  },
})
