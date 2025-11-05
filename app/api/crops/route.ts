import { SAMPLE_DATA, getLocalizedField } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const language = searchParams.get("lang") || "en"

    const crops = SAMPLE_DATA.crops.map((crop) => ({
      ...crop,
      name: getLocalizedField(crop, "name", language),
      category: getLocalizedField(crop, "category", language),
      season: getLocalizedField(crop, "season", language),
    }))

    return Response.json(crops)
  } catch (error) {
    return Response.json({ error: "Failed to fetch crops" }, { status: 500 })
  }
}
