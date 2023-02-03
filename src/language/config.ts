import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translation_en from './en.json'
import translation_jp from './jp.json'

const resources = {
en: {
  translation: translation_en
},
jp: {
  translation: translation_jp
}
}

void i18n.use(initReactI18next).init({
resources,
lng: 'en',
interpolation: {
  escapeValue: false
}
})
export default i18n
