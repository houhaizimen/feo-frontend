import { useTranslation, getI18n } from 'react-i18next'
import { IMAGE_LAN_TYPE } from '@/language/config'

// current language
export const useLan = () => getI18n().language

// change title
export const useChangeTitle = () => {
  const { t } = useTranslation()
  document.title = t('title')
}

// current language image
export const useLanImage = () => {
  const lan: string = useLan()
  window.imgLang = IMAGE_LAN_TYPE[lan as keyof typeof IMAGE_LAN_TYPE]
}
