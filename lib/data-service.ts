// Client-side data fetching service
import type { Crop, Market, Article } from "./db"

export const dataService = {
  async getCrops(): Promise<Crop[]> {
    const res = await fetch("/api/crops")
    if (!res.ok) throw new Error("Failed to fetch crops")
    return res.json()
  },

  async getPrices(crop: string) {
    const res = await fetch(`/api/prices?crop=${encodeURIComponent(crop)}`)
    if (!res.ok) throw new Error("Failed to fetch prices")
    return res.json()
  },

  async getMarkets(): Promise<Market[]> {
    const res = await fetch("/api/markets")
    if (!res.ok) throw new Error("Failed to fetch markets")
    return res.json()
  },

  // Sample articles (static for MVP)
  getArticles(): Article[] {
    return [
      {
        id: 1,
        title: "Government Schemes for Farmers",
        category: "Government Support",
        content:
          "Maharashtra government provides various schemes including PM Kisan, Pradhan Mantri Fasal Bima Yojana, and state-specific assistance programs.",
        author: "NABARD",
        source: "Government of Maharashtra",
        published_date: "2025-09-15",
      },
      {
        id: 2,
        title: "Sustainable Agriculture Practices",
        category: "Best Practices",
        content:
          "Learn how to implement organic farming, soil conservation, and water management techniques to improve crop yields.",
        author: "Agricultural Expert",
        source: "Indian Agricultural Research Institute",
        published_date: "2025-10-01",
      },
      {
        id: 3,
        title: "Market Price Analysis Guide",
        category: "Market Trends",
        content:
          "Understanding Agmarknet data and price trends can help farmers make informed decisions about when to sell their produce.",
        author: "Market Analyst",
        source: "Agmarknet",
        published_date: "2025-08-20",
      },
      {
        id: 4,
        title: "Crop Rotation Strategies",
        category: "Best Practices",
        content:
          "Proper crop rotation improves soil health and reduces pest problems. Follow the recommended rotation patterns for Maharashtra.",
        author: "Agricultural Scientist",
        source: "ICAR",
        published_date: "2025-07-10",
      },
      {
        id: 5,
        title: "Water Management in Agriculture",
        category: "Resource Management",
        content:
          "Efficient water usage through drip irrigation and rainwater harvesting can significantly increase profitability.",
        author: "Water Expert",
        source: "Central Water Commission",
        published_date: "2025-06-25",
      },
    ]
  },
}
