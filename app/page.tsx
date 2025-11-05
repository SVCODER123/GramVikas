"use client"

import { useState } from "react"
import DashboardHeader from "@/components/dashboard-header"
import NavigationTabs from "@/components/navigation-tabs"
import DashboardOverview from "@/components/dashboard-overview"
import ChartsView from "@/components/charts-view"
import PricingAssistant from "@/components/pricing-assistant"
import MapView from "@/components/map-view"
import KnowledgeBase from "@/components/knowledge-base"
import Chatbot from "@/components/chatbot"

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview")

  const renderContent = () => {
    switch (activeTab) {
      case "charts":
        return <ChartsView />
      case "pricing":
        return <PricingAssistant />
      case "map":
        return <MapView />
      case "knowledge":
        return <KnowledgeBase />
      case "chatbot":
        return <Chatbot />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <DashboardHeader />
      <div className="border-b border-border">
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="p-6 lg:p-8">{renderContent()}</div>
    </main>
  )
}
