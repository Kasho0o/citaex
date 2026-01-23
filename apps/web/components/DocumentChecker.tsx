"use client";

import { useState, useCallback } from "react";

interface Document {
  id: string;
  name: string;
  size: number;
  type: string;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  whatsapp: boolean;
}

interface ChecklistItem {
  id: string;
  name: string;
  required: boolean;
  status: "ok" | "warning" | "missing";
  note: string;
}

interface Results {
  score: number;
  checklist: ChecklistItem[];
  recommendations: string[];
  warnings?: string[];
}

const procedures = [
  { id: "huellas", name: "Toma de Huellas (TIE)", icon: "FP" },
  { id: "nie", name: "Asignacion NIE", icon: "ID" },
  { id: "arraigo-social", name: "Arraigo Social", icon: "AS" },
  { id: "arraigo-familiar", name: "Arraigo Familiar", icon: "AF" },
  { id: "arraigo-laboral", name: "Arraigo Laboral", icon: "AL" },
  { id: "renovacion", name: "Renovacion TIE/NIE", icon: "RN" },
  { id: "asilo", name: "Solicitud de Asilo", icon: "PI" },
  { id: "nacionalidad", name: "Nacionalidad Espanola", icon: "ES" },
  { id: "residencia-ue", name: "Residencia Familiar UE", icon: "UE" },
];

const provinces = [
  "Madrid", "Barcelona", "Valencia", "Sevilla", "Malaga", "Murcia",
  "Alicante", "Zaragoza", "Bilbao", "Las Palmas", "Tenerife", "Granada",
  "Almeria", "Cadiz", "Cordoba", "Girona", "Tarragona", "Otras"
];

export default function DocumentChecker() {
  const [step, setStep] = useState(1);
  const [procedure, setProcedure] = useState("");
  const [province, setProvince] = useState("");
  const [documents, setDocuments] = useState<Document[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", email: "", phone: "", whatsapp: true });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<Results | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = [...e.dataTransfer.files];
    handleFiles(files);
  }, []);

  const handleFiles = (files: File[]) => {
    const newDocs = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setDocuments((prev) => [...prev, ...newDocs]);
  };

  const removeDocument = (id: string) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
  };

  const analyzeDocuments = async () => {
    setIsAnalyzing(true);
    setError("");

    try {
      const response = await fetch("/api/verificar-documentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ procedure, province, documents, userInfo }),
      });

      if (!response.ok) {
        throw new Error("Error al analizar documentos");
      }

      const data = await response.json();
      setResults(data);
      setStep(5);
    } catch (err) {
      setError("Hubo un error al analizar. Por favor intenta de nuevo.");
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const goBack = (targetStep: number) => {
    setStep(targetStep);
  };

  const selectProcedure = (procId: string) => {
    setProcedure(procId);
    setStep(2);
  };

  const selectProvince = (prov: string) => {
    setProvince(prov);
    setStep(3);
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Que tramite necesitas hacer?</h2>
      <p className="text-gray-600">Selecciona tu tramite para verificar los documentos necesarios</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {procedures.map((proc) => (
          <button
            key={proc.id}
            onClick={() => selectProcedure(proc.id)}
            className={`p-4 rounded-xl border-2 text-left transition-all hover:border-red-600 hover:bg-red-50 ${
              procedure === proc.id ? "border-red-600 bg-red-50" : "border-gray-200"
            }`}
          >
            <span className="inline-block w-8 h-8 bg-red-100 text-red-600 rounded-full text-xs font-bold leading-8 text-center">{proc.icon}</span>
            <div className="font-medium text-gray-800 mt-1">{proc.name}</div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <button onClick={() => goBack(1)} className="text-red-600 hover:underline">
        Cambiar tramite
      </button>
      <h2 className="text-xl font-bold text-gray-800">En que provincia tienes la cita?</h2>
      <div className="grid grid-cols-3 gap-2">
        {provinces.map((prov) => (
          <button
            key={prov}
            onClick={() => selectProvince(prov)}
            className={`p-3 rounded-lg border-2 text-center transition-all hover:border-red-600 ${
              province === prov ? "border-red-600 bg-red-50" : "border-gray-200"
            }`}
          >
            {prov}
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <button onClick={() => goBack(2)} className="text-red-600 hover:underline">
        Cambiar provincia
      </button>
      <h2 className="text-xl font-bold text-gray-800">Sube tus documentos</h2>
      <p className="text-gray-600">Sube fotos o PDFs de tus documentos. Nuestro AI los analizara.</p>
      
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
          dragActive ? "border-red-600 bg-red-50" : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <div className="text-4xl mb-2">+</div>
        <p className="font-medium text-gray-700">Arrastra tus documentos aqui</p>
        <p className="text-gray-500 text-sm mt-1">o</p>
        <label className="mt-2 inline-block">
          <span className="bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-700 transition-colors">
            Seleccionar archivos
          </span>
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
            onChange={(e) => e.target.files && handleFiles([...e.target.files])}
          />
        </label>
        <p className="text-gray-400 text-xs mt-3">PDF, JPG, PNG - Maximo 10MB por archivo</p>
      </div>

      {documents.length > 0 && (
        <div className="space-y-2">
          <p className="font-medium text-gray-700">{documents.length} documento(s):</p>
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700 text-sm truncate max-w-[200px]">{doc.name}</span>
              <button onClick={() => removeDocument(doc.id)} className="text-red-500 hover:text-red-700 ml-2">X</button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setStep(4)}
        className="w-full py-3 rounded-xl font-medium bg-red-600 text-white hover:bg-red-700 transition-all"
      >
        Continuar
      </button>
      <p className="text-center text-gray-400 text-xs">Tus documentos se procesan de forma segura</p>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-4">
      <button onClick={() => goBack(3)} className="text-red-600 hover:underline">
        Volver
      </button>
      <h2 className="text-xl font-bold text-gray-800">Tus datos de contacto</h2>
      <p className="text-gray-600">Para enviarte el informe y poder ayudarte si lo necesitas</p>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
          <input
            type="text"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            placeholder="Tu nombre"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            placeholder="tu@email.com"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp *</label>
          <input
            type="tel"
            value={userInfo.phone}
            onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
            placeholder="+34 600 000 000"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={userInfo.whatsapp}
            onChange={(e) => setUserInfo({ ...userInfo, whatsapp: e.target.checked })}
            className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
          />
          <span className="text-gray-600 text-sm">Quiero recibir alertas de citas GRATIS por WhatsApp</span>
        </label>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        onClick={analyzeDocuments}
        disabled={!userInfo.name || !userInfo.email || !userInfo.phone || isAnalyzing}
        className={`w-full py-3 rounded-xl font-medium transition-all ${
          userInfo.name && userInfo.email && userInfo.phone && !isAnalyzing
            ? "bg-red-600 text-white hover:bg-red-700"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {isAnalyzing ? "Analizando..." : "Analizar mis documentos GRATIS"}
      </button>
    </div>
  );

  const renderStep5 = () => {
    if (isAnalyzing) {
      return (
        <div className="text-center py-12">
          <div className="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Analizando tus documentos...</h2>
          <p className="text-gray-600">Nuestro AI esta revisando cada documento</p>
        </div>
      );
    }

    if (!results) return null;

    const scoreColor = results.score >= 80 ? "green" : results.score >= 50 ? "yellow" : "red";
    const scoreBg = scoreColor === "green" ? "bg-green-50 border-green-200" : scoreColor === "yellow" ? "bg-yellow-50 border-yellow-200" : "bg-red-50 border-red-200";
    const scoreText = scoreColor === "green" ? "text-green-600" : scoreColor === "yellow" ? "text-yellow-600" : "text-red-600";
    const scoreMessage = results.score >= 80 ? "Casi listo para tu cita!" : results.score >= 50 ? "Revisa los documentos marcados" : "Te faltan documentos importantes";

    return (
      <div className="space-y-6">
        <div className={`p-6 rounded-xl text-center border-2 ${scoreBg}`}>
          <div className={`text-5xl font-bold ${scoreText}`}>
            {results.score}%
          </div>
          <div className="text-gray-600 mt-1">Documentacion preparada</div>
          <div className={`mt-2 font-medium ${scoreText}`}>
            {scoreMessage}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <h3 className="font-bold text-gray-800">Checklist de Documentos</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {results.checklist.map((item, i) => {
              const itemColor = item.status === "ok" ? "green" : item.status === "warning" ? "yellow" : "red";
              const itemBg = itemColor === "green" ? "bg-green-100 text-green-600" : itemColor === "yellow" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600";
              const itemText = itemColor === "green" ? "text-green-600" : itemColor === "yellow" ? "text-yellow-600" : "text-red-600";
              const itemIcon = item.status === "ok" ? "OK" : item.status === "warning" ? "!" : "X";
              
              return (
                <div key={i} className="p-4 flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${itemBg}`}>
                    {itemIcon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      {item.required && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Obligatorio</span>
                      )}
                    </div>
                    <p className={`text-sm mt-0.5 ${itemText}`}>
                      {item.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {results.recommendations && results.recommendations.length > 0 && (
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">Recomendaciones</h3>
            <ul className="space-y-1">
              {results.recommendations.map((rec, i) => (
                <li key={i} className="text-blue-700 text-sm">- {rec}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-red-600 rounded-xl p-6 text-white">
          <h3 className="font-bold text-xl mb-2">Necesitas la cita?</h3>
          <p className="text-red-100 mb-4">
            Buscamos tu cita 24/7. Solo pagas si la conseguimos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/923221430630?text=Hola,%20acabo%20de%20usar%20el%20verificador%20y%20necesito%20ayuda%20con%20mi%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium text-center hover:bg-red-50 transition-colors"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="https://t.me/extranjeria_citaex"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-red-800 transition-colors"
            >
              Alertas GRATIS Telegram
            </a>
          </div>
        </div>

        <button
          onClick={() => { setStep(1); setDocuments([]); setResults(null); }}
          className="w-full py-3 border-2 border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50"
        >
          Nueva verificacion
        </button>
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      default: return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
          100% GRATIS
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Verificador de Documentos
        </h1>
        <p className="text-gray-600">
          Comprueba si tienes todos los documentos antes de tu cita
        </p>
      </div>

      {step < 5 && (
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Paso {step} de 4</span>
            <span>{Math.round((step / 4) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-600 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        {renderCurrentStep()}
      </div>

      <div className="mt-6 flex justify-center gap-4 text-xs text-gray-500">
        <span>Datos seguros</span>
        <span>Analisis AI</span>
        <span>Servidor Espana</span>
      </div>
    </div>
  );
}
