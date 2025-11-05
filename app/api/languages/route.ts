export async function GET() {
  const languages = [
    {
      code: "en",
      name: "English",
      nativeName: "English",
      direction: "ltr",
    },
    {
      code: "hi",
      name: "Hindi",
      nativeName: "हिंदी",
      direction: "ltr",
    },
    {
      code: "mr",
      name: "Marathi",
      nativeName: "मराठी",
      direction: "ltr",
    },
  ]

  return Response.json(languages)
}
