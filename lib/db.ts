// Database utilities and types
export interface Crop {
  id: number
  name: string
  name_hi?: string
  name_mr?: string
  local_name?: string
  category: string
  category_hi?: string
  category_mr?: string
  season: string
  season_hi?: string
  season_mr?: string
  growing_period_days: number
}

export interface Market {
  id: number
  name: string
  name_hi?: string
  name_mr?: string
  district: string
  district_hi?: string
  district_mr?: string
  region: string
  region_hi?: string
  region_mr?: string
  latitude: number
  longitude: number
  apmc_code: string
}

export interface Price {
  id: number
  crop_id: number
  market_id: number
  price_per_quintal: number
  date: string
  source: string
}

export interface Article {
  id: number
  title: string
  title_hi?: string
  title_mr?: string
  category: string
  category_hi?: string
  category_mr?: string
  content: string
  content_hi?: string
  content_mr?: string
  author?: string
  source?: string
  published_date?: string
}

export interface RegionalStats {
  id: number
  district: string
  crop_id: number
  area_under_cultivation: number
  production_tonnes: number
  avg_yield_per_hectare: number
  year: number
}

// Sample data for development (until database is connected)
export const SAMPLE_DATA = {
  crops: [
    {
      id: 1,
      name: "Sugar Cane",
      name_hi: "जूटी काने",
      name_mr: "सुगर काने",
      category: "Cash Crop",
      category_hi: "नफ्तातील फसल",
      category_mr: "नफ्तातील फसल",
      season: "Year-round",
      season_hi: "साल कार्यात",
      season_mr: "साल कार्यात",
      growing_period_days: 360,
    },
    {
      id: 2,
      name: "Cotton",
      name_hi: "कॉटन",
      name_mr: "कॉटन",
      category: "Cash Crop",
      category_hi: "नफ्तातील फसल",
      category_mr: "नफ्तातील फसल",
      season: "Monsoon",
      season_hi: "मौसम",
      season_mr: "मौसम",
      growing_period_days: 180,
    },
    {
      id: 3,
      name: "Jowar",
      name_hi: "जोवर",
      name_mr: "जोवर",
      category: "Cereal",
      category_hi: "चारू",
      category_mr: "चारू",
      season: "Monsoon",
      season_hi: "मौसम",
      season_mr: "मौसम",
      growing_period_days: 120,
    },
    {
      id: 4,
      name: "Wheat",
      name_hi: "गेहूँ",
      name_mr: "गेहूँ",
      category: "Cereal",
      category_hi: "चारू",
      category_mr: "चारू",
      season: "Rabi",
      season_hi: "रवि",
      season_mr: "रवि",
      growing_period_days: 150,
    },
    {
      id: 5,
      name: "Onion",
      name_hi: "प्याज",
      name_mr: "प्याज",
      category: "Vegetable",
      category_hi: "सब्जी",
      category_mr: "सब्जी",
      season: "Rabi",
      season_hi: "रवि",
      season_mr: "रवि",
      growing_period_days: 180,
    },
  ],
  markets: [
    {
      id: 1,
      name: "Navi Mumbai Warehouse",
      name_hi: "नवी मुंबई व्हारेचा",
      name_mr: "नवी मुंबई व्हारेचा",
      district: "Raigad",
      district_hi: "रायगड",
      district_mr: "रायगड",
      region: "Western",
      region_hi: "पश्चिमी",
      region_mr: "पश्चिमी",
      latitude: 19.033,
      longitude: 73.0297,
      apmc_code: "NM001",
    },
    {
      id: 2,
      name: "Nashik Agricultural Market",
      name_hi: "नाशिक खानेवाडे चांगला बाजार",
      name_mr: "नाशिक खानेवाडे चांगला बाजार",
      district: "Nashik",
      district_hi: "नाशिक",
      district_mr: "नाशिक",
      region: "Northern",
      region_hi: "उत्तरी",
      region_mr: "उत्तरी",
      latitude: 19.9975,
      longitude: 73.7898,
      apmc_code: "NK001",
    },
    {
      id: 3,
      name: "Pune Agricultural Market",
      name_hi: "पुणे खानेवाडे चांगला बाजार",
      name_mr: "पुणे खानेवाडे चांगला बाजार",
      district: "Pune",
      district_hi: "पुणे",
      district_mr: "पुणे",
      region: "Pune Region",
      region_hi: "पुणे क्षेत्र",
      region_mr: "पुणे क्षेत्र",
      latitude: 18.5204,
      longitude: 73.8567,
      apmc_code: "PN001",
    },
  ],
}

export function getLocalizedField(obj: any, fieldName: string, language = "en"): string {
  if (language === "hi" && obj[`${fieldName}_hi`]) {
    return obj[`${fieldName}_hi`]
  }
  if (language === "mr" && obj[`${fieldName}_mr`]) {
    return obj[`${fieldName}_mr`]
  }
  return obj[fieldName] || ""
}
