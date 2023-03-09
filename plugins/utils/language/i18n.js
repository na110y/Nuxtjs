import Vue from 'vue'
// eslint-disable-next-line import/default
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  const i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.json'),
      fr: require('~/locales/fr.json')
    }
  })

  app.i18n = i18n
}
