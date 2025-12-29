import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GOOGLE_AI_API_KEY) {
  throw new Error("GOOGLE_AI_API_KEY environment variable is not set");
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

// System prompt for the Cita Extranjería assistant
const SYSTEM_PROMPT = `Eres un asistente experto en trámites de extranjería en España.
Tu objetivo es ayudar a las personas a entender y completar sus trámites de inmigración.

Información que manejas:
- Tipos de citas: NIE, TIE, Renovaciones, Autorizaciones de Regreso, Certificados UE
- Documentación necesaria para cada trámite
- Procedimientos y requisitos
- Oficinas de extranjería en España
- Plazos y tiempos de espera

Instrucciones:
- Responde siempre en español de forma clara y concisa
- Si no estás seguro de algo, indícalo claramente
- Proporciona información práctica y útil
- Sé empático, muchos usuarios están estresados por el proceso
- Si la pregunta no está relacionada con extranjería, indica amablemente que solo puedes ayudar con temas de inmigración`;

export async function chatWithGemini(
  message: string,
  conversationHistory?: Array<{ role: "user" | "model"; parts: string }>
) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: SYSTEM_PROMPT,
    });

    const chat = model.startChat({
      history: conversationHistory || [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return {
      text: response.text(),
      success: true,
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Lo siento, hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.",
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function analyzeDocumentation(
  procedureType: string,
  userSituation: string
) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
    });

    const prompt = `Como experto en extranjería española, analiza la siguiente situación:

Tipo de trámite: ${procedureType}
Situación del usuario: ${userSituation}

Proporciona:
1. Lista de documentos necesarios
2. Pasos a seguir
3. Consejos importantes
4. Posibles problemas a evitar

Responde de forma estructurada y clara.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    return {
      text: response.text(),
      success: true,
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Lo siento, hubo un error al analizar la documentación.",
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
