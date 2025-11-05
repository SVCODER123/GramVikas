import { SAMPLE_DATA } from "@/lib/db"

export async function GET() {
  try {
    return Response.json(SAMPLE_DATA.markets)
  } catch (error) {
    return Response.json({ error: "Failed to fetch markets" }, { status: 500 })
  }
}
