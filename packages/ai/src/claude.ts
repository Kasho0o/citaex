import Anthropic from "@anthropic-ai/sdk";

if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error("ANTHROPIC_API_KEY environment variable is not set");
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

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

export async function chatWithClaude(
  message: string,
  conversationHistory?: Array<{ role: "user" | "assistant"; content: string }>
) {
  try {
    const messages: Anthropic.MessageParam[] = [
      ...(conversationHistory || []),
      { role: "user", content: message },
    ];

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages,
    });

    const textContent = response.content.find((c) => c.type === "text");

    return {
      text: textContent?.type === "text" ? textContent.text : "",
      success: true,
    };
  } catch (error) {
    console.error("Claude API Error:", error);
    return {
      text: "Lo siento, hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.",
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function analyzeComplexSituation(
  procedureType: string,
  userSituation: string,
  additionalContext?: string
) {
  try {
    const prompt = `Como experto en extranjería española, analiza la siguiente situación compleja:

Tipo de trámite: ${procedureType}
Situación del usuario: ${userSituation}
${additionalContext ? `Contexto adicional: ${additionalContext}` : ""}

Proporciona un análisis detallado que incluya:
1. Evaluación de la situación
2. Documentos necesarios
3. Pasos específicos a seguir
4. Posibles complicaciones y cómo evitarlas
5. Alternativas si corresponde
6. Estimación de plazos

Responde de forma estructurada, clara y completa.`;

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: prompt }],
    });

    const textContent = response.content.find((c) => c.type === "text");

    return {
      text: textContent?.type === "text" ? textContent.text : "",
      success: true,
    };
  } catch (error) {
    console.error("Claude API Error:", error);
    return {
      text: "Lo siento, hubo un error al analizar la situación.",
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
