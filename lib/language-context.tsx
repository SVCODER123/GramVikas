"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface Language {
  code: string
  name: string
  nativeName: string
  direction: "ltr" | "rtl"
}

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (language: Language) => void
  languages: Language[]
  t: (key: string, defaultValue?: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const DEFAULT_LANGUAGE: Language = {
  code: "en",
  name: "English",
  nativeName: "English",
  direction: "ltr",
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguageState] = useState<Language>(DEFAULT_LANGUAGE)
  const [languages, setLanguages] = useState<Language[]>([])
  const [translations, setTranslations] = useState<Record<string, any>>({})

  useEffect(() => {
    // Load languages from API
    fetch("/api/languages")
      .then((res) => res.json())
      .then((data) => {
        setLanguages(data)
      })
      .catch((err) => console.error("Failed to load languages:", err))

    // Load saved language preference
    const saved = localStorage.getItem("gramvikas-language")
    if (saved) {
      try {
        const lang = JSON.parse(saved)
        setCurrentLanguageState(lang)
        loadTranslations(lang.code)
      } catch (e) {
        loadTranslations(DEFAULT_LANGUAGE.code)
      }
    } else {
      loadTranslations(DEFAULT_LANGUAGE.code)
    }
  }, [])

  async function loadTranslations(langCode: string) {
    try {
      const res = await fetch(`/locales/${langCode}.json`)
      const data = await res.json()
      setTranslations(data)
    } catch (err) {
      console.error(`Failed to load translations for ${langCode}:`, err)
      // Fallback to English
      if (langCode !== "en") {
        loadTranslations("en")
      }
    }
  }

  function setLanguage(language: Language) {
    setCurrentLanguageState(language)
    localStorage.setItem("gramvikas-language", JSON.stringify(language))
    loadTranslations(language.code)
    document.documentElement.lang = language.code
    document.documentElement.dir = language.direction
  }

  function t(key: string, defaultValue?: string): string {
    const keys = key.split(".")
    let value: any = translations

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return defaultValue || key
      }
    }

    return typeof value === "string" ? value : defaultValue || key
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, languages, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
