import { useCallback, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LANGUAGE, LANGUAGES, LanguageContext, STORAGE_KEY } from './context'
import { translations } from './translations'

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE
  } catch {
    return DEFAULT_LANGUAGE
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // storage blocked (private mode) — the choice just won't persist
    }
  }, [])

  const value = useMemo(() => {
    const dict = translations[lang]
    return {
      lang,
      setLang,
      // UI string by key, falls back to Armenian, then to the key itself
      t: (key) => dict[key] ?? translations[DEFAULT_LANGUAGE][key] ?? key,
      // content object shaped { hy, ru } → string in the current language
      pick: (text) => (text ? text[lang] || text[DEFAULT_LANGUAGE] || '' : ''),
    }
  }, [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
