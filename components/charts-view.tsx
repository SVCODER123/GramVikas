"use client"

import { useLanguage } from "@/lib/language-context"

export default function ChartsView() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-6 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-6">{t("charts.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-secondary rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">{t("charts.sugarCanePrice")}</p>
            <p className="text-3xl font-bold text-accent">₹305</p>
            <p className="text-xs text-muted-foreground mt-2">↑ 8.9% from previous quarter</p>
          </div>

          <div className="bg-secondary rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">{t("charts.cottonTrend")}</p>
            <p className="text-3xl font-bold text-accent">₹445</p>
            <p className="text-xs text-muted-foreground mt-2">→ Stable price range</p>
          </div>

          <div className="bg-secondary rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">{t("charts.jowarRate")}</p>
            <p className="text-3xl font-bold text-accent">₹1,920</p>
            <p className="text-xs text-muted-foreground mt-2">↑ 3.2% from last month</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg p-6 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-4">{t("charts.priceAnalysis")}</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
            <div>
              <p className="font-medium text-foreground">Nashik Agricultural Market</p>
              <p className="text-sm text-muted-foreground">Northern Maharashtra</p>
            </div>
            <p className="text-lg font-bold text-accent">₹310/quintal</p>
          </div>

          <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
            <div>
              <p className="font-medium text-foreground">Navi Mumbai Warehouse</p>
              <p className="text-sm text-muted-foreground">Western Maharashtra</p>
            </div>
            <p className="text-lg font-bold text-accent">₹305/quintal</p>
          </div>

          <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
            <div>
              <p className="font-medium text-foreground">Pune Agricultural Market</p>
              <p className="text-sm text-muted-foreground">Pune Region</p>
            </div>
            <p className="text-lg font-bold text-accent">₹308/quintal</p>
          </div>

          <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
            <div>
              <p className="font-medium text-foreground">Aurangabad APM</p>
              <p className="text-sm text-muted-foreground">Marathwada Region</p>
            </div>
            <p className="text-lg font-bold text-accent">₹440/quintal</p>
          </div>

          <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
            <div>
              <p className="font-medium text-foreground">Latur Market</p>
              <p className="text-sm text-muted-foreground">Marathwada Region</p>
            </div>
            <p className="text-lg font-bold text-accent">₹1,920/quintal</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg p-6 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-4">{t("charts.marketSummary")}</h2>
        <div className="space-y-4 text-sm">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{t("charts.currentStatus")}:</span> Agricultural commodities
            in Maharashtra are showing stable to slightly upward price trends. Sugar cane prices are trading above the
            6-month average, indicating strong market sentiment.
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{t("charts.regionalVariations")}:</span> Northern and Western
            regions show higher prices due to better market infrastructure and proximity to major consumption centers.
            Marathwada region shows competitive pricing.
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{t("charts.recommendations")}:</span> Farmers with sugar cane
            and cotton should consider selling in the current market window. Monitor jowar prices for optimal selling
            time.
          </p>
        </div>
      </div>
    </div>
  )
}
