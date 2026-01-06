import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Guías y Consejos de Extranjería | CitaEx",
  description: "Guías completas sobre NIE, TIE, arraigo, asilo y todos los trámites de extranjería en España. Consejos de expertos actualizados 2025.",
  keywords: ["blog extranjería", "guías extranjería", "consejos NIE", "cita extranjería", "trámites España"],
};

const blogPosts = [
  {
    slug: "como-conseguir-cita-extranjeria-2025",
    title: "Cómo Conseguir Cita de Extranjería en 2025",
    excerpt: "Guía completa con todos los trucos y consejos probados para conseguir tu cita previa de extranjería.",
    category: "Consejos",
    readTime: "8 min",
    date: "30 Dic 2024",
    image: "📅",
  },
  {
    slug: "que-es-nie-como-solicitar",
    title: "¿Qué es el NIE? Guía Completa",
    excerpt: "Todo sobre el NIE en España: qué es, quién lo necesita, documentos requeridos y cómo solicitarlo.",
    category: "NIE",
    readTime: "10 min",
    date: "30 Dic 2024",
    image: "🆔",
  },
  {
    slug: "renovar-tie-guia-completa",
    title: "Renovar TIE: Guía Completa 2025",
    excerpt: "Guía completa para renovar tu TIE. Requisitos, documentos, plazos, tasas y proceso paso a paso.",
    category: "TIE",
    readTime: "15 min",
    date: "31 Dic 2024",
    image: "💳",
  },
  {
    slug: "arraigo-social-requisitos-2025",
    title: "Arraigo Social en España 2025: Requisitos",
    excerpt: "Guía completa del arraigo social. Requisitos actualizados, documentos y proceso de solicitud.",
    category: "Arraigo",
    readTime: "12 min",
    date: "30 Dic 2024",
    image: "📋",
  },
  {
    slug: "cita-toma-huellas-extranjeria",
    title: "Cita para Toma de Huellas Extranjería",
    excerpt: "Todo sobre la cita de toma de huellas. Qué llevar, cómo prepararte y consejos importantes.",
    category: "TIE",
    readTime: "6 min",
    date: "30 Dic 2024",
    image: "👆",
  },
  {
    slug: "carta-invitacion-espana",
    title: "Carta de Invitación para España",
    excerpt: "Requisitos, documentos y proceso completo para solicitar una carta de invitación.",
    category: "Consejos",
    readTime: "7 min",
    date: "30 Dic 2024",
    image: "✉️",
  },
  {
    slug: "asilo-espana-proteccion-internacional",
    title: "Cómo Solicitar Asilo en España 2025",
    excerpt: "Guía completa para solicitar asilo y protección internacional. Requisitos, proceso y derechos.",
    category: "Asilo",
    readTime: "11 min",
    date: "30 Dic 2024",
    image: "🛡️",
  },
  {
    slug: "reagrupacion-familiar-espana",
    title: "Reagrupación Familiar en España",
    excerpt: "Cómo traer a tu familia a España. Requisitos económicos, documentos y proceso completo.",
    category: "Reagrupación",
    readTime: "10 min",
    date: "30 Dic 2024",
    image: "👨‍👩‍👧‍👦",
  },
  {
    slug: "provincias-mas-facil-cita-extranjeria",
    title: "Provincias Más Fáciles para Conseguir Cita",
    excerpt: "Descubre en qué provincias de España es más fácil conseguir cita de extranjería.",
    category: "Consejos",
    readTime: "8 min",
    date: "30 Dic 2024",
    image: "🗺️",
  },
  {
    slug: "errores-comunes-cita-extranjeria",
    title: "10 Errores que Debes Evitar al Pedir Cita",
    excerpt: "Evita estos errores comunes al solicitar tu cita de extranjería. Consejos de expertos.",
    category: "Consejos",
    readTime: "7 min",
    date: "30 Dic 2024",
    image: "⚠️",
  },
];

const categories = ["Todos", "Consejos", "NIE", "TIE", "Arraigo", "Asilo", "Reagrupación"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Blog de Extranjería
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Guías completas, consejos de expertos y toda la información que necesitas sobre trámites de extranjería en España
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                category === "Todos"
                  ? "bg-[#C60B1E] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              {/* Image */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#C60B1E]/10 to-[#FFC400]/10 text-6xl">
                {post.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-[#004A8F]/10 px-3 py-1 text-xs font-semibold text-[#004A8F]">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime} lectura</span>
                </div>

                <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-[#C60B1E]">
                  {post.title}
                </h2>

                <p className="mb-4 text-sm text-gray-600">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="text-sm font-semibold text-[#C60B1E] group-hover:underline">
                    Leer más →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#C60B1E] to-[#A00919] p-8 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            ¿Necesitas Ayuda con tu Trámite?
          </h2>
          <p className="mb-6 text-lg">
            Deja que nuestro equipo se encargue de conseguir tu cita de extranjería
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/solicitar-cita"
              className="rounded-lg bg-white px-8 py-3 font-bold text-[#C60B1E] transition-all hover:bg-gray-100"
            >
              Solicitar Cita Ahora
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb6vC8KAYlUPnU8VcH2w"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-white px-8 py-3 font-bold text-white transition-all hover:bg-white hover:text-[#C60B1E]"
            >
              🔔 Canal WhatsApp Gratis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
