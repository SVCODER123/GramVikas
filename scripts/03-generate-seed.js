// Alternative Node.js script to generate seed data as JSON
// Use this if you prefer a JSON database or need to import to various databases

const seedData = {
  crops: [
    {
      id: 1,
      name: "Sugar Cane",
      local_name: "गन्ना",
      category: "Cash Crop",
      season: "Year-round",
      growing_period_days: 360,
    },
    { id: 2, name: "Cotton", local_name: "कपास", category: "Cash Crop", season: "Monsoon", growing_period_days: 180 },
    { id: 3, name: "Jowar", local_name: "ज्वार", category: "Cereal", season: "Monsoon", growing_period_days: 120 },
    { id: 4, name: "Wheat", local_name: "गेहूं", category: "Cereal", season: "Rabi", growing_period_days: 150 },
    { id: 5, name: "Onion", local_name: "कांदा", category: "Vegetable", season: "Rabi", growing_period_days: 180 },
    { id: 6, name: "Turmeric", local_name: "हळद", category: "Spice", season: "Kharif", growing_period_days: 210 },
    {
      id: 7,
      name: "Soybean",
      local_name: "सोयाबीन",
      category: "Oil Seed",
      season: "Monsoon",
      growing_period_days: 120,
    },
    {
      id: 8,
      name: "Groundnut",
      local_name: "मूंगफळी",
      category: "Oil Seed",
      season: "Monsoon",
      growing_period_days: 140,
    },
    { id: 9, name: "Tomato", local_name: "टोमॅटो", category: "Vegetable", season: "Rabi", growing_period_days: 90 },
    { id: 10, name: "Chilli", local_name: "मिरची", category: "Spice", season: "Kharif", growing_period_days: 180 },
  ],

  markets: [
    {
      id: 1,
      name: "Navi Mumbai Warehouse",
      district: "Raigad",
      region: "Western",
      latitude: 19.033,
      longitude: 73.0297,
      apmc_code: "NM001",
    },
    {
      id: 2,
      name: "Nashik Agricultural Market",
      district: "Nashik",
      region: "Northern",
      latitude: 19.9975,
      longitude: 73.7898,
      apmc_code: "NK001",
    },
    {
      id: 3,
      name: "Indore APM",
      district: "Indore",
      region: "Central",
      latitude: 22.7196,
      longitude: 75.8577,
      apmc_code: "IN001",
    },
    {
      id: 4,
      name: "Pune Agricultural Market",
      district: "Pune",
      region: "Pune Region",
      latitude: 18.5204,
      longitude: 73.8567,
      apmc_code: "PN001",
    },
    {
      id: 5,
      name: "Aurangabad APM",
      district: "Aurangabad",
      region: "Marathwada",
      latitude: 19.8762,
      longitude: 75.3433,
      apmc_code: "AB001",
    },
  ],

  prices: [
    { crop_id: 1, market_id: 1, price_per_quintal: 305, date: "2025-11-05", source: "Agmarknet" },
    { crop_id: 1, market_id: 2, price_per_quintal: 310, date: "2025-11-05", source: "Agmarknet" },
    { crop_id: 2, market_id: 1, price_per_quintal: 445, date: "2025-11-05", source: "Agmarknet" },
    { crop_id: 3, market_id: 5, price_per_quintal: 1920, date: "2025-11-05", source: "Agmarknet" },
    { crop_id: 4, market_id: 4, price_per_quintal: 2100, date: "2025-11-05", source: "Agmarknet" },
    { crop_id: 5, market_id: 2, price_per_quintal: 1850, date: "2025-11-05", source: "Agmarknet" },
  ],

  articles: [
    {
      title: "Government Schemes for Farmers",
      category: "Government Support",
      content:
        "Maharashtra government provides various schemes including PM Kisan, Pradhan Mantri Fasal Bima Yojana, and state-specific assistance programs.",
      author: "NABARD",
      source: "Government of Maharashtra",
      published_date: "2025-09-15",
    },
    {
      title: "Sustainable Agriculture Practices",
      category: "Best Practices",
      content:
        "Learn how to implement organic farming, soil conservation, and water management techniques to improve crop yields.",
      author: "Agricultural Expert",
      source: "Indian Agricultural Research Institute",
      published_date: "2025-10-01",
    },
    {
      title: "Market Price Analysis Guide",
      category: "Market Trends",
      content:
        "Understanding Agmarknet data and price trends can help farmers make informed decisions about when to sell their produce.",
      author: "Market Analyst",
      source: "Agmarknet",
      published_date: "2025-08-20",
    },
  ],
}

console.log(JSON.stringify(seedData, null, 2))
