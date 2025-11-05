"use client"

import { useLanguage } from "@/lib/language-context"

interface NavigationTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  const { t } = useLanguage()

  const tabs = [
    { id: "overview", labelKey: "navigation.overview", icon: "📊" },
    { id: "charts", labelKey: "navigation.charts", icon: "📈" },
    { id: "pricing", labelKey: "navigation.pricing", icon: "💰" },
    { id: "map", labelKey: "navigation.map", icon: "🗺️" },
    { id: "knowledge", labelKey: "navigation.knowledge", icon: "📚" },
    { id: "chatbot", labelKey: "navigation.chatbot", icon: "🤖" },
  ]

  return (
    <div className="flex overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
            activeTab === tab.id
              ? "border-accent text-accent"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <span className="mr-2">{tab.icon}</span>
          {t(tab.labelKey)}
        </button>
      ))}
    </div>
  )
}
