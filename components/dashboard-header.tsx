"use client"

import { useLanguage } from "@/lib/language-context"
import LanguageSwitcher from "@/components/language-switcher"

export default function DashboardHeader() {
  const { t } = useLanguage()

  return (
    <header className="border-b border-border bg-card">
      <div className="px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-accent">{t("header.title")}</h1>
            <p className="text-muted-foreground mt-1">{t("header.subtitle")}</p>
          </div>
          <div className="text-right space-y-4">
            <LanguageSwitcher />
            <div>
              <p className="text-sm text-muted-foreground">{t("header.location")}</p>
              <p className="text-sm font-medium text-foreground">{t("header.lastUpdated")}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
