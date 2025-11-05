"use client"

import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import { getLocalizedField } from "@/lib/db"

const articles = [
  {
    id: 1,
    title: "Government Schemes for Farmers",
    title_hi: "किसानों के लिए सरकारी योजनाएं",
    title_mr: "शेतकऱ्यांसाठी सरकारी योजना",
    category: "Government Support",
    category_hi: "सरकारी समर्थन",
    category_mr: "सरकारी समर्थन",
    excerpt:
      "Maharashtra government provides various schemes including PM Kisan, Pradhan Mantri Fasal Bima Yojani, and state-specific assistance programs.",
    excerpt_hi:
      "महाराष्ट्र सरकार विभिन्न योजनाएं प्रदान करती है जिनमें पीएम किसान, प्रधानमंत्री फसल बीमा योजना और राज्य-विशिष्ट सहायता कार्यक्रम शामिल हैं।",
    excerpt_mr:
      "महाराष्ट्र शासन विविध योजना प्रदान करते आहे ज्यामध्ये पीएम किसान, प्रधानमंत्री फसल बीमा योजना आणि राज्य-विशिष्ट सहायता कार्यक्रम समाविष्ट आहेत।",
    readTime: "10 min",
  },
  {
    id: 2,
    title: "Sustainable Agriculture Practices",
    title_hi: "टिकाऊ कृषि प्रथाएं",
    title_mr: "शाश्वत शेतीचे पद्धती",
    category: "Best Practices",
    category_hi: "सर्वोत्तम प्रथाएं",
    category_mr: "सर्वोत्तम पद्धती",
    excerpt:
      "Learn how to implement organic farming, soil conservation, and water management techniques to improve crop yields.",
    excerpt_hi: "जैविक खेती, मिट्टी संरक्षण और जल प्रबंधन तकनीकों को लागू करके फसल की पैदावार बढ़ाना सीखें।",
    excerpt_mr: "जैविक शेती, जमिनीचे संरक्षण आणि जल व्यवस्थापन तंत्र लागू करून पिकांची उत्पादकता वाढवा.",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "Market Price Analysis Guide",
    title_hi: "बाजार मूल्य विश्लेषण गाइड",
    title_mr: "बाजार मूल्य विश्लेषण मार्गदर्शक",
    category: "Market Trends",
    category_hi: "बाजार प्रवृत्तियां",
    category_mr: "बाजार ट्रेंड",
    excerpt:
      "Understanding Agmarknet data and price trends can help farmers make informed decisions about when to sell their produce.",
    excerpt_hi: "Agmarknet डेटा और मूल्य प्रवृत्तियों को समझने से किसानों को यह तय करने में मदद मिल सकती है कि अपनी उपज कब बेचें।",
    excerpt_mr: "Agmarknet डेटा आणि मूल्य प्रवृत्तीचे समज शेतकऱ्यांना त्यांची उत्पादने कधी विकायची हे ठरविण्यात मदद करू शकते.",
    readTime: "9 min",
  },
  {
    id: 4,
    title: "Crop Rotation Strategies",
    title_hi: "फसल चक्र रणनीतियां",
    title_mr: "पीक रोटेशन धोरणे",
    category: "Best Practices",
    category_hi: "सर्वोत्तम प्रथाएं",
    category_mr: "सर्वोत्तम पद्धती",
    excerpt:
      "Proper crop rotation improves soil health and reduces pest problems. Follow the recommended rotation patterns for Maharashtra.",
    excerpt_hi:
      "उचित फसल चक्र मिट्टी के स्वास्थ्य में सुधार करता है और कीट समस्याओं को कम करता है। महाराष्ट्र के लिए अनुशंसित रोटेशन पैटर्न का पालन करें।",
    excerpt_mr:
      "योग्य पीक चक्र जमिनीचे आरोग्य सुधारते आणि कीट समस्या कमी करते. महाराष्ट्रासाठी शिफारस केलेल्या रोटेशन पॅटर्न अनुसरण करा.",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Water Management in Agriculture",
    title_hi: "कृषि में जल प्रबंधन",
    title_mr: "शेतीमध्ये जल व्यवस्थापन",
    category: "Resource Management",
    category_hi: "संसाधन प्रबंधन",
    category_mr: "संसाधन व्यवस्थापन",
    excerpt:
      "Efficient water usage through drip irrigation and rainwater harvesting can significantly increase profitability.",
    excerpt_hi: "ड्रिप सिंचाई और वर्षा जल संचयन के माध्यम से कुशल जल उपयोग लाभप्रदता में उल्लेखनीय वृद्धि कर सकता है।",
    excerpt_mr: "ड्रिप सिंचन आणि वर्षाजल संचयन द्वारे कार्यक्षम जल वापरणे लाभजनकता मोठ्या प्रमाणात वाढवू शकते.",
    readTime: "8 min",
  },
  {
    id: 6,
    title: "Pest Management Handbook",
    title_hi: "कीट प्रबंधन हैंडबुक",
    title_mr: "कीट व्यवस्थापन हँडबुक",
    category: "Pest Control",
    category_hi: "कीट नियंत्रण",
    category_mr: "कीट नियंत्रण",
    excerpt: "Integrated pest management (IPM) techniques help reduce chemical usage while maintaining crop health.",
    excerpt_hi: "एकीकृत कीट प्रबंधन (IPM) तकनीकें रसायनों के उपयोग को कम करने में मदद करती हैं जबकि फसल स्वास्थ्य बनाए रखते हैं।",
    excerpt_mr: "एकात्मिक कीट व्यवस्थापन (IPM) तंत्र रासायनिक वापरणे कमी करण्यात मदद करते आणि पीक आरोग्य राखतात.",
    readTime: "9 min",
  },
]

const categories = [
  "All",
  "Best Practices",
  "Government Support",
  "Market Trends",
  "Pest Control",
  "Resource Management",
]

export default function KnowledgeBase() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles =
    selectedCategory === "All" ? articles : articles.filter((a) => a.category === selectedCategory)

  const getArticleTitle = (article: any) => {
    return getLocalizedField(article, "title", language)
  }

  const getArticleExcerpt = (article: any) => {
    return getLocalizedField(article, "excerpt", language)
  }

  const getArticleCategory = (article: any) => {
    return getLocalizedField(article, "category", language)
  }

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-6 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t("knowledgeBase.title")}</h2>
        <p className="text-muted-foreground mb-6">{t("knowledgeBase.subtitle")}</p>

        <div className="flex gap-2 mb-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-accent text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-border"
              }`}
            >
              {category === "All" ? t("knowledgeBase.allCategories") : category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-colors cursor-pointer"
          >
            <div className="mb-3">
              <span className="inline-block bg-secondary text-foreground text-xs px-2 py-1 rounded">
                {getArticleCategory(article)}
              </span>
            </div>
            <h3 className="font-bold text-foreground mb-2 text-lg">{getArticleTitle(article)}</h3>
            <p className="text-sm text-muted-foreground mb-4">{getArticleExcerpt(article)}</p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{article.readTime} read</span>
              <span className="text-accent font-medium">{t("knowledgeBase.readMore")} →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
