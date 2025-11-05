"use client"

import { useLanguage } from "@/lib/language-context"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LanguageSwitcher() {
  const { currentLanguage, setLanguage, languages } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">🌐</span>
      <Select
        value={currentLanguage.code}
        onValueChange={(code) => {
          const lang = languages.find((l) => l.code === code)
          if (lang) setLanguage(lang)
        }}
      >
        <SelectTrigger className="w-auto border-none bg-transparent focus:ring-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.nativeName} ({lang.name})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
