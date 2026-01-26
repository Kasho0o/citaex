export async function onRequestPost(context) {
  const PERPLEXITY_API_KEY = context.env.PERPLEXITY_API_KEY;
  
  const corsHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  
  try {
    const body = await context.request.json();
    const { procedure, province, documents, userInfo } = body;

    if (!procedure || !province || !userInfo?.name || !userInfo?.email || !userInfo?.phone) {
      return new Response(JSON.stringify({ error: "Faltan campos obligatorios" }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const documentRequirements = {
      huellas: [
        { id: "resolucion", name: "Resolución favorable", required: true },
        { id: "pasaporte", name: "Pasaporte vigente", required: true },
        { id: "ex17", name: "Formulario EX-17 rellenado", required: true },
        { id: "tasa790", name: "Tasa 790-012 pagada", required: true },
        { id: "foto", name: "Fotografía tamaño carnet", required: true },
      ],
      nie: [
        { id: "pasaporte", name: "Pasaporte vigente", required: true },
        { id: "ex15", name: "Formulario EX-15 rellenado", required: true },
        { id: "empadronamiento", name: "Certificado de empadronamiento", required: true },
      ],
      "arraigo-social": [
        { id: "pasaporte", name: "Pasaporte vigente", required: true },
        { id: "empadronamiento", name: "Empadronamiento 3 años", required: true },
        { id: "contrato", name: "Contrato de trabajo", required: true },
      ],
    };

    const requirements = documentRequirements[procedure] || documentRequirements["huellas"];
    const documentNames = documents?.map(d => d.name).join(", ") || "No documents";

    let aiAnalysis = null;

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
              { role: "system", content: "Eres experto en extranjería España. Responde en JSON." },
              { role: "user", content: `Analiza documentos para ${procedure}: ${documentNames}. Responde JSON: {checklist:[{id,name,required,status,note}],score:0-100,recommendations:[],warnings:[]}` }
            ],
            max_tokens: 1000,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const content = data.choices?.[0]?.message?.content || "";
          const jsonMatch = content.match(/\{[\s\S]*\}/);
          if (jsonMatch) aiAnalysis = JSON.parse(jsonMatch[0]);
        }
      } catch (e) {
        console.error("AI error:", e);
      }
    }

    if (!aiAnalysis) {
      const checklist = requirements.map(req => ({
        ...req,
        status: documents?.some(d => d.name.toLowerCase().includes(req.id)) ? "ok" : "missing",
        note: "Verificar manualmente"
      }));
      const score = Math.round((checklist.filter(c => c.status === "ok").length / checklist.length) * 100);
      aiAnalysis = {
        checklist,
        score,
        recommendations: ["Lleva originales y copias", "Llega 15 min antes"],
        warnings: score < 50 ? ["Faltan documentos importantes"] : []
      };
    }

    console.log("Lead:", userInfo.name, userInfo.email, procedure, province);

    return new Response(JSON.stringify({ success: true, ...aiAnalysis, procedure, province }), {
      headers: corsHeaders
    });

  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Error al procesar" }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
