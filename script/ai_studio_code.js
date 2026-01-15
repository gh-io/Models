import {GoogleGenAI, LiveServerMessage, Modality} from '@google/genai';

let currentInputTranscription = '';
let currentOutputTranscription = '';
const transcriptionHistory = [];
const sessionPromise = ai.live.connect({
  model: 'gemini-2.5-flash-native-audio-preview-12-2025',
  callbacks: {
    onopen: () => {
      console.debug('opened');
    },
    onmessage: async (message: LiveServerMessage) => {
      if (message.serverContent?.outputTranscription) {
        const text = message.serverContent.outputTranscription.text;
        currentOutputTranscription += text;
      } else if (message.serverContent?.inputTranscription) {
        const text = message.serverContent.inputTranscription.text;
        currentInputTranscription += text;
      }
      // A turn includes a user input and a model output.
      if (message.serverContent?.turnComplete) {
        // You can also stream the transcription text as it arrives (before `turnComplete`)
        // to provide a smoother user experience.
        const fullInputTranscription = currentInputTranscription;
        const fullOutputTranscription = currentOutputTranscription;
        console.debug('user input: ', fullInputTranscription);
        console.debug('model output: ', fullOutputTranscription);
        transcriptionHistory.push(fullInputTranscription);
        transcriptionHistory.push(fullOutputTranscription);
        // IMPORTANT: If you store the transcription in a mutable reference (like React's `useRef`),
        // copy its value to a local variable before clearing it to avoid issues with asynchronous updates.
        currentInputTranscription = '';
        currentOutputTranscription = '';
      }
      // IMPORTANT: You must still handle the audio output.
      const base64EncodedAudioString =
        message.serverContent?.modelTurn?.parts[0]?.inlineData.data;
      if (base64EncodedAudioString) {
        /* ... process the audio output (see Session Setup example) ... */
      }
    },
    onerror: (e: ErrorEvent) => {
      console.debug('got error');
    },
    onclose: (e: CloseEvent) => {
      console.debug('closed');
    },
  },
  config: {
    responseModalities: [Modality.AUDIO], // Must be an array with a single `Modality.AUDIO` element.
    outputAudioTranscription: {}, // Enable transcription for model output audio.
    inputAudioTranscription: {}, // Enable transcription for user input audio.
  },
});
