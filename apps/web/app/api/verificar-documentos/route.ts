import { NextRequest, NextResponse } from "next/server";

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

const documentRequirements: Record<string, { id: string; name: string; required: boolean }[]> = {
  huellas: [
    { id: "resolucion", name: "Resolución favorable", required: true },
    { id: "pasaporte", name: "Pasaporte vigente", required: true },
    { id: "ex17", name: "Formulario EX-17 rellenado", required: true },
    { id: "tasa790", name: "Tasa 790-012 pagada", required: true },
    { id: "foto", name: "Fotografía tamaño carnet", required: true },
    { id: "empadronamiento", name: "Certificado de empadronamiento", required: false },
  ],
  nie: [
    { id: "pasaporte", name: "Pasaporte vigente", required: true },
    { id: "ex15", name: "Formulario EX-15 rellenado", required: true },
    { id: "justificacion", name: "Justificación económica o laboral", required: true },
    { id: "empadronamiento", name: "Certificado de empadronamiento", required: true },
    { id: "foto", name: "Fotografía tamaño carnet", required: true },
    { id: "tasa790", name: "Tasa 790-012", required: true },
  ],
  "arraigo-social": [
    { id: "pasaporte", name: "Pasaporte vigente", required: true },
    { id: "empadronamiento", name: "Empadronamiento 3 años continuos", required: true },
    { id: "contrato", name: "Contrato de trabajo", required: true },
    { id: "antecedentes", name: "Certificado antecedentes penales", required: true },
    { id: "informe", name: "Informe de arraigo social", required: true },
    { id: "ex10", name: "Formulario EX-10", required: true },
    { id: "tasa790", name: "Tasa 790-052", required: true },
  ],
  "arraigo-familiar": [
    { id: "pasaporte", name: "Pasaporte vigente", required: true },
    { id: "empadronamiento", name: "Empadronamiento 2 años", required: true },
    { id: "vinculo", name: "Certificado de vínculo familiar", required: true },
    { id: "nie-familiar", name: "NIE/DNI del familiar español o UE", required: true },
    { id: "antecedentes", name: "Certificado antecedentes penales", required: true },
    { id: "ex10", name: "Formulario EX-10", required: true },
  ],
  "arraigo-laboral": [
    { id: "pasaporte", name: "Pasaporte vigente", required: true },
    { id: "empadronamiento", name: "Empadronamiento 2 años", required: true },
    { id: "vida-laboral", name: "Vida laboral o contratos", required: true },
    { id: "antecedentes", name: "Certificado antecedentes penales", required: true },
    { id: "ex10", name: "Formulario EX-10", required: true },
  ],
  renovacion: [
    { id: "pasaporte", name: "Pasaporte vigente", required: true },
    { id: "tie-anterior", name: "TIE anterior (o denuncia si perdido)", required: true },
    { id: "ex17", name: "Formulario EX-17", required: true },
    { id: "empadronamiento", name: "Certificado de empadronamiento", required: true },
    { id: "tasa790", name: "Tasa 790-012", required: true },
    { id: "foto", name: "Fotografía tamaño carnet", required: true },
    { id: "justificacion", name: "Justificación continuidad (contrato, etc.)", required: true },
  ],
  asilo: [
    { id: "pasaporte", name: "Pasaporte o documento de viaje", required: false },
    { id: "solicitud", name: "Solicitud de protección internacional", required: true },
    { id: "foto", name: "Fotografías tamaño carnet (3)", required: true },
    { id: "relato", name: "Relato de persecución", required: true },
    { id: "pruebas", name: "Pruebas o documentos de apoyo", required: false },
  ],
  nacionalidad: [
    { id: "pasaporte", name: "Pasaporte vigente", required: true },
    { id: "nie-tie", name: "NIE/TIE vigente", required: true },
    { id: "empadronamiento", name: "Certificado empadronamiento histórico", required: true },
    { id: "antecedentes-esp", name: "Antecedentes penales España", required: true },
    { id: "antecedentes-pais", name: "Antecedentes penales país origen", required: true },
    { id: "nacimiento", name: "Certificado de nacimiento", required: true },
    { id: "dele", name: "Diploma DELE o CCSE", required: true },
  ],
  "residencia-ue": [
    { id: "pasaporte", name: "Pasaporte vigente", required: true },
    { id: "vinculo", name: "Certificado vínculo con ciudadano UE", required: true },
    { id: "nie-ue", name: "NIE del familiar ciudadano UE", required: true },
    { id: "empadronamiento", name: "Empadronamiento conjunto", required: true },
    { id: "ex19", name: "Formulario EX-19", required: true },
    { id: "foto", name: "Fotografía tamaño carnet", required: true },
  ],
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { procedure, province, documents, userInfo } = body;

    if (!procedure || !province || !userInfo?.name || !userInfo?.email || !userInfo?.phone) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const requirements = documentRequirements[procedure] || documentRequirements["huellas"];
    
    // Build context for AI analysis
    const documentNames = documents?.map((d: { name: string }) => d.name).join(", ") || "No se subieron documentos";
    
    const prompt = `Eres un experto en trámites de extranjería en España. Un usuario necesita hacer el trámite "${procedure}" en la provincia de ${province}.

Ha subido los siguientes documentos: ${documentNames}

Los documentos requeridos para este trámite son:
${requirements.map(r => `- ${r.name} (${r.required ? "OBLIGATORIO" : "Opcional"})`).join("\n")}

Analiza si el usuario parece tener los documentos necesarios basándote en los nombres de archivo.
Responde SOLO en formato JSON con esta estructura exacta:
{
  "checklist": [
    {"id": "id_documento", "name": "nombre", "required": true/false, "status": "ok/warning/missing", "note": "explicación breve"}
  ],
  "score": 0-100,
  "recommendations": ["recomendación 1", "recomendación 2"],
  "warnings": ["advertencia importante si hay"]
}`;

    let aiAnalysis;
    
    if (PERPLEXITY_API_KEY) {
      try {
        const response = await fetch("https://api.perplexity.ai/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${PERPLEXITY_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.1-sonar-small-128k-online",
            messages: [
              {
                role: "system",
                content: "Eres un asistente experto en trámites de extranjería en España. Responde siempre en JSON válido."
              },
              { role: "user", content: prompt }
            ],
            max_tokens: 1000,
            temperature: 0.2,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const content = data.choices?.[0]?.message?.content || "";
          // Extract JSON from response
          const jsonMatch = content.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            aiAnalysis = JSON.parse(jsonMatch[0]);
          }
        }
      } catch (aiError) {
        console.error("AI analysis error:", aiError);
      }
    }

    // Fallback analysis if AI fails
    if (!aiAnalysis) {
      const checklist = requirements.map((req) => {
        const found = documents?.some((doc: { name: string }) =>
          doc.name.toLowerCase().includes(req.id.toLowerCase()) ||
          doc.name.toLowerCase().includes(req.name.split(" ")[0].toLowerCase())
        );
        return {
          ...req,
          status: found ? "ok" : "missing",
          note: found ? "Documento detectado" : "No detectado - revisa que lo tengas",
        };
      });

      const okCount = checklist.filter((c) => c.status === "ok").length;
      const score = Math.round((okCount / checklist.length) * 100);

      aiAnalysis = {
        checklist,
        score,
        recommendations: [
          "Lleva siempre originales Y copias de todos los documentos",
          "Llega 15 minutos antes de tu cita",
          "Verifica que tu pasaporte tenga al menos 6 meses de validez",
        ],
        warnings: score < 50 ? ["Te faltan documentos importantes. Completa tu documentación antes de ir a la cita."] : [],
      };
    }

    // Here you would save the lead to your database
    // await saveLeadToDatabase({ ...userInfo, procedure, province, score: aiAnalysis.score });

    console.log("Lead captured:", { 
      name: userInfo.name, 
      email: userInfo.email, 
      phone: userInfo.phone,
      procedure, 
      province,
      score: aiAnalysis.score 
    });

    return NextResponse.json({
      success: true,
      ...aiAnalysis,
      procedure,
      province,
    });

  } catch (error) {
    console.error("Error in document verification:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
