// apps/web/app/(marketing)/provincias/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cita Extranjería por Provincias - Todas las Oficinas de España | CitaEx',
  description:
    'Encuentra cita de extranjería en tu provincia. Servicios en las 52 provincias de España: NIE, TIE, huellas, renovaciones. Sin pago adelantado - Paga después de verificar tu cita.',
  keywords: [
    'cita extranjería provincias',
    'oficina extranjería españa',
    'cita nie provincia',
    'extranjería todas provincias',
    'cita previa extranjería españa',
    'oficinas extranjería españa',
  ],
  openGraph: {
    title: 'Cita Extranjería por Provincias - Todas las Oficinas de España | CitaEx',
    description:
      'Encuentra cita de extranjería en tu provincia. Servicios en las 52 provincias de España. Sin pago adelantado.',
    url: 'https://citaex.com/provincias',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cita Extranjería por Provincias | CitaEx',
    description: 'Encuentra cita de extranjería en las 52 provincias de España. Sin pago adelantado.',
  },
  alternates: {
    canonical: 'https://citaex.com/provincias',
  },
};

interface Provincia {
  name: string;
  slug: string;
  destacada?: boolean;
}

interface ProvinciasData {
  [key: string]: Provincia[];
}

const PROVINCIAS: ProvinciasData = {
  Andalucía: [
    { name: 'Almería', slug: 'almeria' },
    { name: 'Cádiz', slug: 'cadiz' },
    { name: 'Córdoba', slug: 'cordoba' },
    { name: 'Granada', slug: 'granada' },
    { name: 'Huelva', slug: 'huelva' },
    { name: 'Jaén', slug: 'jaen' },
    { name: 'Málaga', slug: 'malaga', destacada: true },
    { name: 'Sevilla', slug: 'sevilla', destacada: true },
  ],
  Aragón: [
    { name: 'Huesca', slug: 'huesca' },
    { name: 'Teruel', slug: 'teruel' },
    { name: 'Zaragoza', slug: 'zaragoza', destacada: true },
  ],
  'Principado de Asturias': [{ name: 'Asturias', slug: 'asturias' }],
  'Islas Baleares': [{ name: 'Islas Baleares', slug: 'islas-baleares', destacada: true }],
  Canarias: [
    { name: 'Las Palmas', slug: 'las-palmas', destacada: true },
    { name: 'Santa Cruz de Tenerife', slug: 'santa-cruz-de-tenerife' },
  ],
  Cantabria: [{ name: 'Cantabria', slug: 'cantabria' }],
  'Castilla-La Mancha': [
    { name: 'Albacete', slug: 'albacete' },
    { name: 'Ciudad Real', slug: 'ciudad-real' },
    { name: 'Cuenca', slug: 'cuenca' },
    { name: 'Guadalajara', slug: 'guadalajara' },
    { name: 'Toledo', slug: 'toledo' },
  ],
  'Castilla y León': [
    { name: 'Ávila', slug: 'avila' },
    { name: 'Burgos', slug: 'burgos' },
    { name: 'León', slug: 'leon' },
    { name: 'Palencia', slug: 'palencia' },
    { name: 'Salamanca', slug: 'salamanca' },
    { name: 'Segovia', slug: 'segovia' },
    { name: 'Soria', slug: 'soria' },
    { name: 'Valladolid', slug: 'valladolid' },
    { name: 'Zamora', slug: 'zamora' },
  ],
  Cataluña: [
    { name: 'Barcelona', slug: 'barcelona', destacada: true },
    { name: 'Girona', slug: 'girona' },
    { name: 'Lleida', slug: 'lleida' },
    { name: 'Tarragona', slug: 'tarragona' },
  ],
  'Comunidad Valenciana': [
    { name: 'Alicante', slug: 'alicante', destacada: true },
    { name: 'Castellón', slug: 'castellon' },
    { name: 'Valencia', slug: 'valencia', destacada: true },
  ],
  Extremadura: [
    { name: 'Badajoz', slug: 'badajoz' },
    { name: 'Cáceres', slug: 'caceres' },
  ],
  Galicia: [
    { name: 'A Coruña', slug: 'a-coruna' },
    { name: 'Lugo', slug: 'lugo' },
    { name: 'Ourense', slug: 'ourense' },
    { name: 'Pontevedra', slug: 'pontevedra' },
  ],
  'Comunidad de Madrid': [{ name: 'Madrid', slug: 'madrid', destacada: true }],
  'Región de Murcia': [{ name: 'Murcia', slug: 'murcia', destacada: true }],
  'Comunidad Foral de Navarra': [{ name: 'Navarra', slug: 'navarra' }],
  'País Vasco': [
    { name: 'Álava', slug: 'alava' },
    { name: 'Guipúzcoa', slug: 'guipuzcoa' },
    { name: 'Vizcaya', slug: 'vizcaya' },
  ],
  'La Rioja': [{ name: 'La Rioja', slug: 'la-rioja' }],
  'Ciudad Autónoma de Ceuta': [{ name: 'Ceuta', slug: 'ceuta' }],
  'Ciudad Autónoma de Melilla': [{ name: 'Melilla', slug: 'melilla' }],
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito una cita de extranjería en mi provincia. ¿Pueden ayudarme?')}`;

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ProvinceCard({ provincia, community }: { provincia: Provincia; community: string }) {
  return (
    <Link
      href={`/provincias/${provincia.slug}`}
      className="group relative block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
    >
      {provincia.destacada && (
        <div className="absolute -top-2 -right-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
            <StarIcon className="h-3 w-3" />
            Popular
          </span>
        </div>
      )}
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 transition-colors group-hover:bg-green-100">
          <MapPinIcon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-gray-900 transition-colors group-hover:text-green-600">{provincia.name}</h3>
          <p className="mt-0.5 truncate text-sm text-gray-500">{community}</p>
        </div>
        <svg
          className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

function CommunitySection({ name, provincias }: { name: string; provincias: Provincia[] }) {
  return (
    <div className="mb-10">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-sm font-bold text-white">
          {provincias.length}
        </span>
        {name}
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {provincias.map((provincia) => (
          <ProvinceCard key={provincia.slug} provincia={provincia} community={name} />
        ))}
      </div>
    </div>
  );
}

export default function ProvinciasPage() {
  // Calculate total provinces
  const totalProvinces = Object.values(PROVINCIAS).reduce((acc, provincias) => acc + provincias.length, 0);

  // Get highlighted provinces
  const destacadas = Object.entries(PROVINCIAS).flatMap(([community, provincias]) =>
    provincias.filter((p) => p.destacada).map((p) => ({ ...p, community }))
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-16 sm:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="mb-6 flex justify-center" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-green-100">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <span className="font-medium text-white">Provincias</span>
                </li>
              </ol>
            </nav>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Cita Extranjería por Provincias
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100 sm:text-xl">
              Servicio de búsqueda de citas en las{' '}
              <span className="font-bold text-white">{totalProvinces} provincias de España</span>. Encuentra tu oficina
              de extranjería y consigue tu cita.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">{totalProvinces}</div>
                <div className="text-sm text-green-200">Provincias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">{Object.keys(PROVINCIAS).length}</div>
                <div className="text-sm text-green-200">CC.AA.</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">24/7</div>
                <div className="text-sm text-green-200">Monitoreo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">0€</div>
                <div className="text-sm text-green-200">Adelanto</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 py-4 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{totalProvinces} provincias</span> disponibles en{' '}
              <span className="font-semibold text-gray-900">{Object.keys(PROVINCIAS).length}</span> comunidades
              autónomas
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-green-700"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Consultar Disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* Highlighted Provinces */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-amber-50 to-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900">
              <StarIcon className="h-6 w-6 text-amber-500" />
              Provincias Más Solicitadas
            </h2>
            <p className="mt-2 text-gray-600">Las provincias con mayor demanda de citas de extranjería</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destacadas.map((provincia) => (
              <Link
                key={provincia.slug}
                href={`/provincias/${provincia.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-white/10" />
                <div className="relative">
                  <div className="mb-3 inline-flex rounded-lg bg-white/20 p-2">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{provincia.name}</h3>
                  <p className="mt-1 text-sm text-green-100">{provincia.community}</p>
                  <div className="mt-4 flex items-center text-sm font-medium">
                    Ver oficinas
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Provinces by Community */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Todas las Provincias por Comunidad Autónoma</h2>
            <p className="mt-3 text-gray-600">Selecciona tu provincia para ver las oficinas de extranjería disponibles</p>
          </div>

          {Object.entries(PROVINCIAS).map(([community, provincias]) => (
            <CommunitySection key={community} name={community} provincias={provincias} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-gray-100 bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">¿Cómo Funciona Nuestro Servicio?</h2>
            <p className="mt-3 text-gray-600">Proceso simple y transparente para conseguir tu cita</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Selecciona Provincia',
                description: 'Elige tu provincia y el trámite que necesitas realizar',
                icon: '📍',
              },
              {
                step: '2',
                title: 'Envía tu Solicitud',
                description: 'Facilítanos tus datos a través de WhatsApp o el formulario',
                icon: '📝',
              },
              {
                step: '3',
                title: 'Buscamos 24/7',
                description: 'Nuestro sistema monitorea la disponibilidad continuamente',
                icon: '🔍',
              },
              {
                step: '4',
                title: 'Confirma y Paga',
                description: 'Solo pagas después de verificar tu cita confirmada',
                icon: '✅',
              },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl bg-white p-6 shadow-sm">
                <div className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div className="mb-4 pt-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">¿Por Qué Elegir CitaEx?</h2>
            <p className="mt-3 text-gray-600">Ventajas de nuestro servicio de búsqueda de citas</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Sin Pago Adelantado',
                description: 'No cobramos nada hasta que verifiques tu cita. Cero riesgo para ti.',
                icon: '💰',
              },
              {
                title: 'Cobertura Nacional',
                description: 'Servicio disponible en las 52 provincias de España.',
                icon: '🇪🇸',
              },
              {
                title: 'Monitoreo 24/7',
                description: 'Nuestro sistema busca citas disponibles las 24 horas del día.',
                icon: '⏰',
              },
              {
                title: 'Todos los Trámites',
                description: 'NIE, TIE, huellas, renovaciones, asilo y más procedimientos.',
                icon: '📋',
              },
              {
                title: 'Soporte por WhatsApp',
                description: 'Atención directa y personalizada a través de WhatsApp.',
                icon: '💬',
              },
              {
                title: 'Confirmación Inmediata',
                description: 'Te notificamos al instante cuando encontramos tu cita.',
                icon: '🔔',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            ¿Necesitas una Cita de Extranjería?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
            No pierdas más tiempo intentando conseguir cita. Nosotros la buscamos por ti mientras tú continúas con tu
            vida.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-700 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl sm:w-auto"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Contactar por WhatsApp
            </a>
            <Link
              href="/solicitar-cita"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              Solicitar Cita Online
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-green-200">
            <CheckCircleIcon className="h-5 w-5" />
            Sin pago por adelantado - Pague después de verificar su cita
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Preguntas Frecuentes</h2>
            <p className="mt-3 text-gray-600">Resolvemos tus dudas sobre nuestro servicio</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: '¿En qué provincias ofrecen servicio?',
                answer:
                  'Ofrecemos servicio en las 52 provincias de España, incluyendo Ceuta y Melilla. Cubrimos todas las oficinas de extranjería y comisarías de la Policía Nacional que gestionan trámites de extranjería.',
              },
              {
                question: '¿Cuánto cuesta el servicio?',
                answer:
                  'El precio varía según la provincia y el tipo de trámite. Lo más importante: no cobramos nada por adelantado. Solo pagas después de verificar que tienes tu cita confirmada.',
              },
              {
                question: '¿Cuánto tiempo tardan en conseguir la cita?',
                answer:
                  'Depende de la disponibilidad en cada provincia. En algunas zonas puede ser en días, en otras puede tardar más. Te informamos del tiempo estimado antes de comenzar.',
              },
              {
                question: '¿Es legal este servicio?',
                answer:
                  'Sí, nuestro servicio es completamente legal. Actuamos como intermediarios para ayudarte a encontrar citas disponibles en el sistema oficial de cita previa.',
              },
              {
                question: '¿Qué trámites pueden gestionar?',
                answer:
                  'Gestionamos todos los trámites de extranjería: NIE inicial, renovación de NIE, TIE (tarjeta de identidad de extranjero), toma de huellas, asilo, autorizaciones de residencia y trabajo, entre otros.',
              },
            ].map((faq, index) => (
              <details key={index} className="group rounded-xl border border-gray-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                  {faq.question}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="border-t border-gray-100 px-5 py-4 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Cita Extranjería por Provincias - Todas las Oficinas de España',
            description:
              'Encuentra cita de extranjería en tu provincia. Servicios en las 52 provincias de España.',
            url: 'https://citaex.com/provincias',
            provider: {
              '@type': 'Organization',
              name: 'CitaEx',
              url: 'https://citaex.com',
            },
            areaServed: {
              '@type': 'Country',
              name: 'España',
            },
            serviceType: 'Appointment Booking Service',
          }),
        }}
      />
    </main>
  );
}
