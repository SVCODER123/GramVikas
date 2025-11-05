"use client"

import { useLanguage } from "@/lib/language-context"

export default function MapView() {
  const { t } = useLanguage()

  const regions = [
    { name: "Pune", crops: "Sugar Cane, Jowar", avgPrice: 2850, icon: "📍" },
    { name: "Nashik", crops: "Grapes, Onion", avgPrice: 3100, icon: "📍" },
    { name: "Kolhapur", crops: "Sugar Cane", avgPrice: 2750, icon: "📍" },
    { name: "Aurangabad", crops: "Cotton, Jowar", avgPrice: 2600, icon: "📍" },
    { name: "Sangli", crops: "Onion, Sugar Cane", avgPrice: 2900, icon: "📍" },
    { name: "Solapur", crops: "Cotton, Jowar", avgPrice: 2700, icon: "📍" },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-6 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-2">{t("mapView.title")}</h2>
        <p className="text-muted-foreground mb-6">{t("mapView.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((region) => (
            <div
              key={region.name}
              className="bg-secondary rounded-lg p-4 border border-border hover:border-accent transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{region.icon}</span>
                <div>
                  <h3 className="font-bold text-foreground">{region.name}</h3>
                  <p className="text-xs text-muted-foreground">{region.crops}</p>
                </div>
              </div>
              <div className="bg-card rounded p-3">
                <p className="text-xs text-muted-foreground">{t("mapView.avgMarketPrice")}</p>
                <p className="text-lg font-bold text-accent">₹{region.avgPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">{t("mapView.topProducingRegions")}</h3>
          <div className="space-y-2">
            {["Pune", "Nashik", "Sangli"].map((region) => (
              <div key={region} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{region}</span>
                <div className="w-24 bg-secondary rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: `${Math.random() * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">{t("mapView.priceComparison")}</h3>
          <div className="space-y-2">
            {["High: Nashik", "Medium: Pune", "Low: Aurangabad"].map((item) => (
              <div key={item} className="text-sm">
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">{t("mapView.regionalInsights")}</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Nashik leads in price points for premium crops like grapes and onions, while Aurangabad offers competitive
            rates for bulk commodities.
          </p>
        </div>
      </div>
    </div>
  )
}
