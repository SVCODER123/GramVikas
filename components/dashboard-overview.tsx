"use client"

import { useLanguage } from "@/lib/language-context"
import { useState, useEffect } from "react"
import StatCard from "./stat-card"

interface Crop {
  id: number
  name: string
  category: string
}

export default function DashboardOverview() {
  const { currentLanguage, t } = useLanguage()
  const [crops, setCrops] = useState<Crop[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/crops?lang=${currentLanguage.code}`)
        if (res.ok) {
          const data = await res.json()
          setCrops(data.slice(0, 5))
        }
      } catch (error) {
        console.error("Failed to fetch crops:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCrops()
  }, [currentLanguage])

  const stats = [
    {
      label: t("overview.activeMarkets"),
      value: "12,543",
      change: "+5.2%",
    },
    {
      label: t("overview.marketTrends"),
      value: "847",
      change: "+12.1%",
    },
    {
      label: t("overview.avgPrice"),
      value: "2,156",
      change: "+3.8%",
    },
    {
      label: t("overview.trending"),
      value: "342",
      change: "+7.4%",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 border border-border">
          <h2 className="text-xl font-bold text-foreground mb-4">{t("overview.topCrops")}</h2>
          <div className="space-y-3">
            {crops.map((crop) => (
              <div key={crop.id} className="flex items-center justify-between">
                <span className="text-muted-foreground">{crop.name}</span>
                <div className="w-32 bg-secondary rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: `${Math.random() * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h2 className="text-xl font-bold text-foreground mb-4">{t("overview.marketTrends")}</h2>
          <div className="space-y-3">
            {crops.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <span className="text-muted-foreground">{item.name}</span>
                <span className={Math.random() > 0.5 ? "text-accent" : "text-destructive"}>
                  {Math.random() > 0.5 ? "↑" : "↓"} {Math.round(Math.random() * 10)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
