// Mock historical price data
const priceHistory = {
  "Sugar Cane": [
    { date: "2025-10-01", price: 295 },
    { date: "2025-10-08", price: 298 },
    { date: "2025-10-15", price: 302 },
    { date: "2025-10-22", price: 305 },
    { date: "2025-10-29", price: 308 },
    { date: "2025-11-05", price: 305 },
  ],
  Cotton: [
    { date: "2025-10-01", price: 420 },
    { date: "2025-10-08", price: 430 },
    { date: "2025-10-15", price: 438 },
    { date: "2025-10-22", price: 445 },
    { date: "2025-10-29", price: 443 },
    { date: "2025-11-05", price: 445 },
  ],
  Jowar: [
    { date: "2025-10-01", price: 1850 },
    { date: "2025-10-08", price: 1880 },
    { date: "2025-10-15", price: 1900 },
    { date: "2025-10-22", price: 1920 },
    { date: "2025-10-29", price: 1918 },
    { date: "2025-11-05", price: 1920 },
  ],
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const crop = searchParams.get("crop") || "Sugar Cane"
    const language = searchParams.get("lang") || "en"

    const history = priceHistory[crop as keyof typeof priceHistory] || []

    return Response.json({
      crop,
      history,
      current: history[history.length - 1]?.price || 0,
      avg: Math.round(history.reduce((sum, p) => sum + p.price, 0) / history.length),
    })
  } catch (error) {
    return Response.json({ error: "Failed to fetch prices" }, { status: 500 })
  }
}
