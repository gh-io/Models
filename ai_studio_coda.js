import { GoogleGenAI } from "@google/genai";
 
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash-image',
  contents: {
    parts: [
      {
        inlineData: {
          data: base64ImageData, // base64 encoded string
          mimeType: mimeType, // IANA standard MIME type
        },
      },
      {
        text: 'can you add a llama next to the image',
      },
    ],
  },
});
for (const part of response.candidates[0].content.parts) {
  // Find the image part, do not assume it is the first part.
  if (part.inlineData) {
    const base64EncodeString: string = part.inlineData.data;
    const imageUrl = `data:image/png;base64,${base64EncodeString}`;
  } else if (part.text) {
    console.log(part.text);
  }
}
