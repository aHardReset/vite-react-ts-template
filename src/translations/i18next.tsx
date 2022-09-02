import AppText from './AppText'
import i18next from 'i18next'

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'es',
  resources: {
    es: {
      App: AppText.es,
    },
    en: {
      App: AppText.en,
    },
  },
})

export default i18next
