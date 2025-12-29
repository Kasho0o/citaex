import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const aiRouter = new Hono();

const chatSchema = z.object({
  message: z.string().min(1, "El mensaje no puede estar vacío"),
  conversationHistory: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      })
    )
    .optional(),
});

const analyzeSchema = z.object({
  procedureType: z.string(),
  userSituation: z.string(),
  additionalContext: z.string().optional(),
});

// Chat with AI assistant (using Gemini for quick responses)
aiRouter.post("/chat", zValidator("json", chatSchema), async (c) => {
  const { message, conversationHistory } = c.req.valid("json");

  // TODO: Integrate with @repo/ai package
  // const response = await chatWithGemini(message, conversationHistory);

  return c.json({
    response: "Esta es una respuesta de ejemplo del asistente IA.",
    timestamp: new Date().toISOString(),
  });
});

// Analyze complex situation (using Claude for detailed analysis)
aiRouter.post("/analyze", zValidator("json", analyzeSchema), async (c) => {
  const { procedureType, userSituation, additionalContext } =
    c.req.valid("json");

  // TODO: Integrate with @repo/ai package
  // const response = await analyzeComplexSituation(procedureType, userSituation, additionalContext);

  return c.json({
    analysis: "Este es un análisis de ejemplo de la situación.",
    timestamp: new Date().toISOString(),
  });
});

// Get documentation for a procedure
aiRouter.get("/docs/:procedureType", async (c) => {
  const procedureType = c.req.param("procedureType");

  return c.json({
    procedureType,
    documentation: "Documentación de ejemplo para el trámite.",
    requirements: ["Documento 1", "Documento 2", "Documento 3"],
  });
});
