import { useLanguage } from '../i18n/useLanguage'
import './LanguageSwitcher.css'

const OPTIONS = [
  { code: 'hy', label: 'Հայ' },
  { code: 'ru', label: 'Рус' },
]

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang-switcher" role="group" aria-label={t('lang.label')}>
      {OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          lang={option.code}
          className="lang-switcher__btn"
          aria-pressed={lang === option.code}
          onClick={() => setLang(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
