import { createContext } from 'react'

export const LANGUAGES = ['hy', 'ru']
export const DEFAULT_LANGUAGE = 'hy'
export const STORAGE_KEY = 'cookbox-lang'

export const LanguageContext = createContext(null)
