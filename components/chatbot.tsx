"use client"

import { GoogleGenerativeAI } from "@google/generative-ai"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ChatbotDirectStreaming() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // 🧠 Initialize Gemini SDK
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!)

  // 🧩 Define a system prompt (AI personality/instructions)
  const systemPrompt = `
You are GramVikasAI, a helpful and data-driven insights assistant for rural development.
You analyze data, answer questions about agriculture, markets, education, and government programs.
Keep your answers short, factual, and friendly.
If unsure, say "I don’t have enough data for that yet."
dont add ** for formatting or for boldness
`

  const handleSend = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!input.trim()) return

  const userInput = input
  setInput("")
  setMessages((prev) => [...prev, "🧑 " + userInput, "🤖 "])
  setIsLoading(true)

  try {
    const systemPrompt = `
You are GramVikasAI, a helpful assistant that gives insights about rural development, agriculture, and markets.
Be concise, factual, and friendly.
`
    const fullPrompt = `${systemPrompt}\n\nUser: ${userInput}`

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: fullPrompt }),
    })

    const data = await res.json()
    if (data.reply) {
      setMessages((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = "🤖 " + data.reply
        return updated
      })
    } else {
      setMessages((prev) => [...prev, "❌ Error generating reply"])
    }
  } catch (err) {
    console.error(err)
    setMessages((prev) => [...prev, "❌ Failed to connect to Gemini"])
  } finally {
    setIsLoading(false)
  }
}


  return (
    <Card className="p-6 space-y-4">
      <div className="h-[400px] overflow-y-auto border rounded-md p-4 bg-card">
        {messages.map((m, i) => (
          <p key={i} className="mb-2 whitespace-pre-wrap">
            {m}
          </p>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about market trends..."
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Thinking..." : "Send"}
        </Button>
      </form>
    </Card>
  )
}