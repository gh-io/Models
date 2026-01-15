import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({});
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash-preview-tts",
  contents: [{ parts: [{ text: 'Say cheerfully: Have a wonderful day!' }] }],
  config: {
    responseModalities: [Modality.AUDIO], // Must be an array with a single `Modality.AUDIO` element.
    speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Kore' },
        },
    },
  },
});
const outputAudioContext = new (window.AudioContext ||
  window.webkitAudioContext)({sampleRate: 24000});
const outputNode = outputAudioContext.createGain();
const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
const audioBuffer = await decodeAudioData(
  decode(base64EncodedAudioString),
  outputAudioContext,
  24000,
  1,
);
const source = outputAudioContext.createBufferSource();
source.buffer = audioBuffer;
source.connect(outputNode);
source.start();
