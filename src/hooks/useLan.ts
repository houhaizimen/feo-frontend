import { useTranslation, getI18n } from 'react-i18next'

// current language
export const useLan = () => getI18n().language

// change title
export const useChangeTitle = () => {
  const { t } = useTranslation()
  document.title = t('title')
}
