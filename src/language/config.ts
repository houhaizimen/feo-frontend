import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translation_en from './en.json'
import translation_ja from './ja.json'

export enum IMAGE_LAN_TYPE {
  en = '',
  ja = '-ja'
}

const resources = {
en: {
  translation: translation_en
},
ja: {
  translation: translation_ja
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
