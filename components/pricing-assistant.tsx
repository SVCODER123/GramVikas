"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

interface PriceData {
  current: number
  avg: number
  min: number
  max: number
  recommendation: string
}

interface HistoryPoint {
  date: string
  price: number
}

interface Crop {
  id: number
  name: string
  category: string
}

const staticPricingData: Record<string, PriceData> = {
  "Sugar Cane": { current: 305, avg: 290, min: 280, max: 320, recommendation: "Good time to sell" },
  गन्ना: { current: 305, avg: 290, min: 280, max: 320, recommendation: "बेचने का अच्छा समय" },
  उसळ: { current: 305, avg: 290, min: 280, max: 320, recommendation: "विक्रय करण्याचा चांगला वेळ" },
  Cotton: { current: 445, avg: 430, min: 415, max: 460, recommendation: "Hold and monitor" },
  कपास: { current: 445, avg: 430, min: 415, max: 460, recommendation: "प्रतीक्षा करें और निगरानी करें" },
  कापूस: { current: 445, avg: 430, min: 415, max: 460, recommendation: "प्रतीक्षा करा आणि निरीक्षण करा" },
  Jowar: { current: 1920, avg: 1850, min: 1800, max: 2000, recommendation: "Consider selling" },
  ज्वार: { current: 1920, avg: 1850, min: 1800, max: 2000, recommendation: "बेचने पर विचार करें" },
  ज्वारी: { current: 1920, avg: 1850, min: 1800, max: 2000, recommendation: "विक्रयवर विचार करा" },
  Wheat: { current: 2100, avg: 2050, min: 2000, max: 2200, recommendation: "Favorable prices" },
  गेहूं: { current: 2100, avg: 2050, min: 2000, max: 2200, recommendation: "अनुकूल कीमतें" },
  गहू: { current: 2100, avg: 2050, min: 2000, max: 2200, recommendation: "अनुकूल किंमती" },
  Onion: { current: 1850, avg: 1800, min: 1700, max: 1950, recommendation: "Good time to sell" },
  कांदा: { current: 1850, avg: 1800, min: 1700, max: 1950, recommendation: "बेचने का अच्छा समय" },
}

export default function PricingAssistant() {
  const { currentLanguage } = useLanguage()
  const [crops, setCrops] = useState<Crop[]>([])
  const [selectedCrop, setSelectedCrop] = useState("Sugar Cane")
  const [priceHistory, setPriceHistory] = useState<HistoryPoint[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await fetch(`/api/crops?lang=${currentLanguage.code}`)
        if (res.ok) {
          const data = await res.json()
          setCrops(data)
          setSelectedCrop(data[0]?.name || "Sugar Cane")
        }
      } catch (error) {
        console.error("Failed to fetch crops:", error)
      }
    }

    fetchCrops()
  }, [currentLanguage])

  const crop = staticPricingData[selectedCrop as keyof typeof staticPricingData] || staticPricingData["Sugar Cane"]

  useEffect(() => {
    const fetchPriceHistory = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/prices?crop=${encodeURIComponent(selectedCrop)}&lang=${currentLanguage.code}`)
        if (res.ok) {
          const data = await res.json()
          setPriceHistory(data.history || [])
        }
      } catch (error) {
        console.error("Failed to fetch price history:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPriceHistory()
  }, [selectedCrop, currentLanguage])

  const getLabel = (en: string, hi: string, mr: string) => {
    if (currentLanguage.code === "hi") return hi
    if (currentLanguage.code === "mr") return mr
    return en
  }

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-6 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {getLabel("Pricing Assistant", "मूल्य सहायक", "किंमत सहायक")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              {getLabel("Select Crop", "फसल चुनें", "पीक निवडा")}
            </label>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-2 text-foreground"
            >
              {crops.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <div className="w-full bg-accent text-primary-foreground rounded-lg p-4">
              <p className="text-sm text-opacity-80">{getLabel("AI Recommendation", "एआई सिफारिश", "एआই शिफारस")}</p>
              <p className="text-lg font-bold">{crop.recommendation}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <p className="text-xs text-muted-foreground uppercase mb-1">
            {getLabel("Current Price", "वर्तमान मूल्य", "वर्तमान किंमत")}
          </p>
          <p className="text-2xl font-bold text-accent">₹{crop.current}</p>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <p className="text-xs text-muted-foreground uppercase mb-1">
            {getLabel("Average Price", "औसत मूल्य", "सरासरी किंमत")}
          </p>
          <p className="text-2xl font-bold text-foreground">₹{crop.avg}</p>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <p className="text-xs text-muted-foreground uppercase mb-1">
            {getLabel("Min Price", "न्यूनतम मूल्य", "किमान किंमत")}
          </p>
          <p className="text-2xl font-bold text-destructive">₹{crop.min}</p>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <p className="text-xs text-muted-foreground uppercase mb-1">
            {getLabel("Max Price", "अधिकतम मूल्य", "कमाल किंमत")}
          </p>
          <p className="text-2xl font-bold text-accent">₹{crop.max}</p>
        </div>
      </div>

      {priceHistory.length > 0 && (
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">
            {getLabel("Price History", "मूल्य इतिहास", "किंमत इतिहास")}
          </h3>
          <div className="space-y-2 text-sm">
            {priceHistory.map((point, idx) => (
              <div key={idx} className="flex justify-between items-center pb-2 border-b border-border last:border-0">
                <span className="text-muted-foreground">{point.date}</span>
                <span className="font-medium text-foreground">₹{point.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-bold text-foreground mb-4">
          {getLabel(
            `Market Analysis for ${selectedCrop}`,
            `${selectedCrop} के लिए बाजार विश्लेषण`,
            `${selectedCrop} साठी बाजार विश्लेषण`,
          )}
        </h3>
        <div className="space-y-3 text-sm">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">
              {getLabel("Current Status:", "वर्तमान स्थिति:", "वर्तमान स्थिती:")}
            </span>{" "}
            {getLabel(
              `The price of ${selectedCrop} is at ₹${crop.current}, which is ${crop.current > crop.avg ? "above" : "below"} the 6-month average of ₹${crop.avg}.`,
              `${selectedCrop} की कीमत ₹${crop.current} है, जो 6 महीने के औसत ₹${crop.avg} से ${crop.current > crop.avg ? "ऊपर" : "नीचे"} है।`,
              `${selectedCrop} ची किंमत ₹${crop.current} आहे, जी 6 महिन्यांच्या सरासरी ₹${crop.avg} पेक्षा ${crop.current > crop.avg ? "वर" : "खाली"} आहे।`,
            )}
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{getLabel("Price Range:", "मूल्य सीमा:", "किंमत श्रेणी:")}</span>{" "}
            {getLabel(
              `The commodity has ranged between ₹${crop.min} (minimum) and ₹${crop.max} (maximum) in recent months.`,
              `वस्तु हाल ही के महीनों में ₹${crop.min} (न्यूनतम) और ₹${crop.max} (अधिकतम) के बीच रही है।`,
              `वस्तू अलिकडील महिन्यांमध्ये ₹${crop.min} (किमान) आणि ₹${crop.max} (कमाल) मध्ये असली आहे।`,
            )}
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{getLabel("Recommendation:", "सिफारिश:", "शिफारस:")}</span>{" "}
            {crop.recommendation}
          </p>
        </div>
      </div>
    </div>
  )
}
