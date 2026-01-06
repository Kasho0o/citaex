// apps/web/app/(marketing)/provincias/[slug]/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import StickyMobileCTA from '@/components/StickyMobileCTA';

// ============================================================================
// TYPES
// ============================================================================

interface OficinaData {
  name: string;
  address: string;
  phone?: string;
  hours?: string;
}

interface ProvinceData {
  name: string;
  community: string;
  oficinas: OficinaData[];
  tramites: string[];
  description: string;
  population: string;
  difficulty: 'Baja' | 'Media' | 'Alta' | 'Muy Alta';
  waitTime: string;
  tips: string[];
}

// ============================================================================
// COMPLETE DATA FOR ALL 52 SPANISH PROVINCES
// ============================================================================

const PROVINCE_DATA: Record<string, ProvinceData> = {
  // -------------------------------------------------------------------------
  // ANDALUCÍA (8 provinces)
  // -------------------------------------------------------------------------
  almeria: {
    name: 'Almería',
    community: 'Andalucía',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Almería',
        address: 'Plaza de la Constitución, s/n, 04001 Almería',
        phone: '950 75 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Almería',
        address: 'Calle Santos Zárate, 5, 04004 Almería',
        phone: '950 62 14 30',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Reagrupación Familiar'],
    description: 'Almería es una provincia con importante presencia de población extranjera, especialmente en zonas agrícolas. La demanda de citas de extranjería es moderada-alta durante todo el año.',
    population: '727.945',
    difficulty: 'Media',
    waitTime: '2-4 semanas',
    tips: [
      'La mejor hora para buscar citas es temprano por la mañana (6:00-8:00)',
      'Los lunes suelen liberarse más citas que otros días',
      'Prepara toda la documentación antes de solicitar la cita',
    ],
  },
  cadiz: {
    name: 'Cádiz',
    community: 'Andalucía',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Cádiz',
        address: 'Plaza de España, s/n, 11006 Cádiz',
        phone: '956 98 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Cádiz',
        address: 'Avenida de Andalucía, 2, 11008 Cádiz',
        phone: '956 29 35 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Oficina de Extranjería de Algeciras',
        address: 'Avenida Virgen del Carmen, s/n, 11201 Algeciras',
        phone: '956 98 92 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Jerez',
        address: 'Calle Nuño de Cañas, 1, 11402 Jerez de la Frontera',
        phone: '956 14 90 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Asilo', 'Protección Internacional', 'Arraigo'],
    description: 'Cádiz, puerta de entrada a Europa desde África, tiene alta actividad en trámites de asilo y protección internacional, además de los procedimientos habituales de extranjería.',
    population: '1.244.049',
    difficulty: 'Alta',
    waitTime: '3-6 semanas',
    tips: [
      'Algeciras tiene oficina propia para trámites de extranjería',
      'Los trámites de asilo se gestionan principalmente en Algeciras',
      'Jerez ofrece alternativa con menor demanda',
      'Revisa frecuentemente la disponibilidad por la demanda variable',
    ],
  },
  cordoba: {
    name: 'Córdoba',
    community: 'Andalucía',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Córdoba',
        address: 'Avenida de la República Argentina, 6, 14004 Córdoba',
        phone: '957 98 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Córdoba',
        address: 'Avenida del Doctor Fleming, 2, 14004 Córdoba',
        phone: '957 59 44 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'Córdoba presenta una demanda moderada de citas de extranjería, con picos estacionales relacionados con el sector agrícola.',
    population: '781.451',
    difficulty: 'Media',
    waitTime: '2-3 semanas',
    tips: [
      'La demanda es menor en verano',
      'Intenta solicitar cita a primera hora del día',
      'Los documentos en español agilizan el trámite',
    ],
  },
  granada: {
    name: 'Granada',
    community: 'Andalucía',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Granada',
        address: 'Plaza de los Campos, 6, 18009 Granada',
        phone: '958 02 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Granada',
        address: 'Calle Duquesa, 21, 18001 Granada',
        phone: '958 80 80 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Motril',
        address: 'Avenida de Salobreña, s/n, 18600 Motril',
        phone: '958 82 50 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Estancia por Estudios', 'Prácticas', 'Investigación'],
    description: 'Granada, con su importante comunidad universitaria internacional, tiene alta demanda de trámites de estancia por estudios y NIE para estudiantes.',
    population: '919.168',
    difficulty: 'Alta',
    waitTime: '3-5 semanas',
    tips: [
      'Mayor demanda al inicio del curso académico (septiembre-octubre)',
      'Los estudiantes pueden usar trámites específicos más ágiles',
      'Solicita la cita con mínimo 2 meses de antelación para estudios',
      'Motril puede tener mejor disponibilidad para la costa',
    ],
  },
  huelva: {
    name: 'Huelva',
    community: 'Andalucía',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Huelva',
        address: 'Avenida de Italia, 1, 21001 Huelva',
        phone: '959 75 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Huelva',
        address: 'Calle San José, 4, 21003 Huelva',
        phone: '959 24 98 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Trabajo', 'Temporeros', 'Arraigo'],
    description: 'Huelva tiene demanda estacional muy marcada por el sector agrícola, especialmente durante la campaña de la fresa y frutos rojos.',
    population: '524.278',
    difficulty: 'Media',
    waitTime: '2-4 semanas',
    tips: [
      'Alta demanda entre enero y junio (campaña agrícola)',
      'Menor presión en verano y otoño',
      'Los trámites de temporeros tienen procedimientos específicos',
    ],
  },
  jaen: {
    name: 'Jaén',
    community: 'Andalucía',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Jaén',
        address: 'Plaza de las Batallas, s/n, 23001 Jaén',
        phone: '953 99 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Jaén',
        address: 'Calle Arquitecto Berges, 15, 23007 Jaén',
        phone: '953 29 75 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Linares',
        address: 'Calle Doctor, 2, 23700 Linares',
        phone: '953 60 00 62',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'Jaén presenta demanda moderada de trámites de extranjería, con picos durante la campaña del olivar.',
    population: '631.381',
    difficulty: 'Baja',
    waitTime: '1-2 semanas',
    tips: [
      'Una de las provincias con mejor disponibilidad de citas en Andalucía',
      'Los trámites suelen ser más ágiles que en otras provincias',
      'Mayor demanda entre octubre y febrero (campaña aceituna)',
    ],
  },
  malaga: {
    name: 'Málaga',
    community: 'Andalucía',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Málaga',
        address: 'Avenida Manuel Agustín Heredia, 2, 29001 Málaga',
        phone: '952 98 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Málaga Centro',
        address: 'Plaza de la Marina, 1, 29001 Málaga',
        phone: '952 12 65 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Oficina de Extranjería de Marbella',
        address: 'Avenida Nabeul, s/n, 29601 Marbella',
        phone: '952 76 89 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Fuengirola',
        address: 'Calle Jacinto Benavente, 22, 29640 Fuengirola',
        phone: '952 46 11 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Torremolinos',
        address: 'Calle Rafael Quintana, 37, 29620 Torremolinos',
        phone: '952 38 60 99',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Vélez-Málaga',
        address: 'Calle Canalejas, 1, 29700 Vélez-Málaga',
        phone: '952 50 60 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Golden Visa', 'Residencia No Lucrativa', 'Nómada Digital', 'Reagrupación Familiar'],
    description: 'Málaga es una de las provincias con mayor demanda de citas de extranjería en España. La Costa del Sol atrae a residentes de toda Europa y el mundo, generando alta presión en los servicios de extranjería.',
    population: '1.685.920',
    difficulty: 'Muy Alta',
    waitTime: '4-8 semanas',
    tips: [
      'Marbella, Fuengirola y Torremolinos tienen oficinas propias con menor demanda',
      'Las citas para Golden Visa pueden tener plazos específicos',
      'Revisa disponibilidad a las 00:00, suelen liberarse citas',
      'Considera oficinas de la Costa del Sol oriental (Vélez-Málaga)',
    ],
  },
  sevilla: {
    name: 'Sevilla',
    community: 'Andalucía',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Sevilla',
        address: 'Plaza de España, Sector Sur, 41013 Sevilla',
        phone: '955 56 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Sevilla Centro (Gavidia)',
        address: 'Calle Plaza de la Gavidia, 1, 41001 Sevilla',
        phone: '954 28 93 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Sevilla Este',
        address: 'Avenida de las Ciencias, s/n, 41020 Sevilla',
        phone: '954 98 50 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Dos Hermanas',
        address: 'Avenida de España, 1, 41700 Dos Hermanas',
        phone: '954 72 46 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Asilo', 'Autorizaciones de Residencia', 'Reagrupación Familiar', 'Arraigo'],
    description: 'Sevilla, como capital de Andalucía, concentra gran parte de los trámites de extranjería de la región. La demanda es constantemente alta durante todo el año.',
    population: '1.942.155',
    difficulty: 'Muy Alta',
    waitTime: '4-6 semanas',
    tips: [
      'Existen múltiples oficinas, comprueba disponibilidad en todas',
      'La oficina de Sevilla Este puede tener mejor disponibilidad',
      'Dos Hermanas es alternativa con menor saturación',
      'Los trámites urgentes pueden acelerarse con justificación',
    ],
  },

  // -------------------------------------------------------------------------
  // ARAGÓN (3 provinces)
  // -------------------------------------------------------------------------
  huesca: {
    name: 'Huesca',
    community: 'Aragón',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Huesca',
        address: 'Plaza de Cervantes, 1, 22003 Huesca',
        phone: '974 29 31 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Huesca',
        address: 'Calle del Parque, 20, 22002 Huesca',
        phone: '974 22 12 50',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Huesca es una provincia con demanda moderada de trámites de extranjería, lo que permite conseguir citas con relativa facilidad.',
    population: '222.687',
    difficulty: 'Baja',
    waitTime: '1-2 semanas',
    tips: [
      'Una de las provincias con mejor disponibilidad en el norte',
      'Ideal para quienes necesitan cita urgente',
      'Menor demanda que Zaragoza',
    ],
  },
  teruel: {
    name: 'Teruel',
    community: 'Aragón',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Teruel',
        address: 'Plaza San Juan, 7, 44001 Teruel',
        phone: '978 64 11 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Teruel',
        address: 'Avenida de Sagunto, 9, 44002 Teruel',
        phone: '978 60 21 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Teruel, una de las provincias menos pobladas de España, ofrece excelente disponibilidad para citas de extranjería.',
    population: '134.176',
    difficulty: 'Baja',
    waitTime: '1 semana',
    tips: [
      'Provincia con muy buena disponibilidad de citas',
      'Ideal para trámites urgentes si estás cerca',
      'Los trámites suelen resolverse rápidamente',
    ],
  },
  zaragoza: {
    name: 'Zaragoza',
    community: 'Aragón',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Zaragoza',
        address: 'Paseo María Agustín, 36, 50004 Zaragoza',
        phone: '976 98 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Zaragoza Centro',
        address: 'Calle del General Mayandía, 5, 50004 Zaragoza',
        phone: '976 29 82 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Zaragoza Delicias',
        address: 'Calle de Daroca, 8, 50017 Zaragoza',
        phone: '976 79 59 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Zaragoza Actur',
        address: 'Calle María Zambrano, 31, 50018 Zaragoza',
        phone: '976 51 77 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Reagrupación Familiar', 'Arraigo', 'Estancia por Estudios'],
    description: 'Zaragoza, como principal ciudad de Aragón, concentra la mayor demanda de trámites de extranjería de la comunidad. Aun así, la disponibilidad es mejor que en las grandes capitales.',
    population: '972.528',
    difficulty: 'Media',
    waitTime: '2-4 semanas',
    tips: [
      'Hay varias oficinas, comprueba disponibilidad en todas',
      'La oficina de Delicias puede tener mejor disponibilidad',
      'Menor saturación que Barcelona o Madrid',
      'El barrio Actur tiene comisaría propia',
    ],
  },

  // -------------------------------------------------------------------------
  // PRINCIPADO DE ASTURIAS (1 province)
  // -------------------------------------------------------------------------
  asturias: {
    name: 'Asturias',
    community: 'Principado de Asturias',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Oviedo',
        address: 'Calle General Elorza, 35, 33001 Oviedo',
        phone: '985 98 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Oviedo',
        address: 'Calle General Yagüe, 7, 33004 Oviedo',
        phone: '985 10 93 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Gijón',
        address: 'Calle Menéndez Valdés, 2, 33201 Gijón',
        phone: '985 17 89 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Avilés',
        address: 'Calle La Cámara, 59, 33402 Avilés',
        phone: '985 54 04 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Estancia por Estudios'],
    description: 'Asturias presenta una demanda moderada de trámites de extranjería, con buena disponibilidad en la mayoría de procedimientos.',
    population: '1.011.792',
    difficulty: 'Media',
    waitTime: '2-3 semanas',
    tips: [
      'Gijón y Avilés tienen oficinas propias que pueden tener mejor disponibilidad',
      'Menor demanda que las grandes ciudades',
      'Los trámites de estudiantes son frecuentes por la universidad',
    ],
  },

  // -------------------------------------------------------------------------
  // ISLAS BALEARES (1 province)
  // -------------------------------------------------------------------------
  'islas-baleares': {
    name: 'Islas Baleares',
    community: 'Islas Baleares',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Palma de Mallorca',
        address: 'Calle Felicià Fuster, 7, 07006 Palma',
        phone: '971 98 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Palma Centro',
        address: 'Calle Simó Ballester, 8, 07011 Palma',
        phone: '971 22 53 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Palma Playa de Palma',
        address: 'Carrer de Marbella, 39, 07610 Palma',
        phone: '971 26 62 62',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Ibiza',
        address: 'Avenida de la Paz, s/n, 07800 Ibiza',
        phone: '971 39 84 31',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Manacor',
        address: 'Avinguda del Parc, s/n, 07500 Manacor',
        phone: '971 55 00 44',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Oficina de Extranjería de Menorca (Maó)',
        address: 'Plaça de la Biosfera, 5, 07703 Maó',
        phone: '971 36 39 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Residencia No Lucrativa', 'Nómada Digital', 'Autorizaciones de Trabajo', 'Golden Visa'],
    description: 'Las Islas Baleares tienen alta demanda de citas de extranjería debido al turismo y la importante comunidad de residentes europeos. La temporada alta turística aumenta la presión.',
    population: '1.173.008',
    difficulty: 'Alta',
    waitTime: '3-5 semanas',
    tips: [
      'Ibiza, Menorca y Manacor tienen oficinas con menor demanda que Palma',
      'En verano la disponibilidad es más limitada',
      'Muchos trámites de residencia no lucrativa y nómadas digitales',
      'Solicita cita con antelación si vienes en temporada alta',
    ],
  },

  // -------------------------------------------------------------------------
  // CANARIAS (2 provinces)
  // -------------------------------------------------------------------------
  'las-palmas': {
    name: 'Las Palmas',
    community: 'Canarias',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Las Palmas',
        address: 'Calle León y Castillo, 322, 35007 Las Palmas de Gran Canaria',
        phone: '928 99 91 00',
        hours: 'Lunes a Viernes: 8:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Las Palmas Centro',
        address: 'Calle Luis Doreste Silva, 64, 35004 Las Palmas de Gran Canaria',
        phone: '928 44 66 00',
        hours: 'Lunes a Viernes: 8:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Maspalomas',
        address: 'Avenida de Alejandro del Castillo, 24, 35100 Maspalomas',
        phone: '928 76 86 50',
        hours: 'Lunes a Viernes: 8:00 - 14:00',
      },
      {
        name: 'Oficina de Extranjería de Lanzarote',
        address: 'Calle León y Castillo, 15, 35500 Arrecife',
        phone: '928 81 57 00',
        hours: 'Lunes a Viernes: 8:00 - 14:00',
      },
      {
        name: 'Oficina de Extranjería de Fuerteventura',
        address: 'Calle Primero de Mayo, 47, 35600 Puerto del Rosario',
        phone: '928 85 04 00',
        hours: 'Lunes a Viernes: 8:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Asilo', 'Protección Internacional', 'Residencia No Lucrativa', 'Nómada Digital'],
    description: 'Las Palmas, con Gran Canaria, Lanzarote y Fuerteventura, tiene alta actividad migratoria. Destaca por los trámites de protección internacional y la comunidad de nómadas digitales.',
    population: '1.131.065',
    difficulty: 'Alta',
    waitTime: '3-5 semanas',
    tips: [
      'Lanzarote y Fuerteventura tienen oficinas con menor demanda',
      'Alta actividad en trámites de asilo',
      'Los nómadas digitales encuentran buena acogida',
      'Horarios: 1 hora menos que en la península',
    ],
  },
  'santa-cruz-de-tenerife': {
    name: 'Santa Cruz de Tenerife',
    community: 'Canarias',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Santa Cruz de Tenerife',
        address: 'Plaza de España, 1, 38003 Santa Cruz de Tenerife',
        phone: '922 99 91 00',
        hours: 'Lunes a Viernes: 8:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Santa Cruz de Tenerife',
        address: 'Avenida Tres de Mayo, 25, 38005 Santa Cruz de Tenerife',
        phone: '922 60 67 00',
        hours: 'Lunes a Viernes: 8:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Arona (Sur de Tenerife)',
        address: 'Calle La Marina, 6, 38640 Arona',
        phone: '922 79 79 79',
        hours: 'Lunes a Viernes: 8:00 - 14:00',
      },
      {
        name: 'Oficina de Extranjería de La Palma',
        address: 'Calle Álvarez de Abreu, 46, 38700 Santa Cruz de La Palma',
        phone: '922 41 11 00',
        hours: 'Lunes a Viernes: 8:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Asilo', 'Residencia No Lucrativa', 'Nómada Digital', 'Arraigo'],
    description: 'Santa Cruz de Tenerife, junto con La Palma, La Gomera y El Hierro, presenta demanda variada. Tenerife concentra la mayor actividad mientras las islas menores tienen mejor disponibilidad.',
    population: '1.044.887',
    difficulty: 'Media',
    waitTime: '2-4 semanas',
    tips: [
      'Las islas menores (La Palma, La Gomera, El Hierro) tienen mejor disponibilidad',
      'Tenerife Sur (Arona) puede tener menos demanda que la capital',
      'El turismo estacional afecta la disponibilidad',
      'Horarios: 1 hora menos que en la península',
    ],
  },

  // -------------------------------------------------------------------------
  // CANTABRIA (1 province)
  // -------------------------------------------------------------------------
  cantabria: {
    name: 'Cantabria',
    community: 'Cantabria',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Santander',
        address: 'Calle Calvo Sotelo, 19, 39002 Santander',
        phone: '942 99 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Santander',
        address: 'Calle Marqués de la Hermida, 29, 39009 Santander',
        phone: '942 32 95 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Torrelavega',
        address: 'Calle Mártires, 2, 39300 Torrelavega',
        phone: '942 80 08 33',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Estancia por Estudios'],
    description: 'Cantabria presenta demanda moderada de trámites de extranjería, con buena disponibilidad general.',
    population: '584.507',
    difficulty: 'Baja',
    waitTime: '1-2 semanas',
    tips: [
      'Buena disponibilidad de citas en general',
      'Torrelavega ofrece alternativa a Santander',
      'Demanda aumenta al inicio del curso académico',
      'Menos saturación que las grandes ciudades',
    ],
  },

  // -------------------------------------------------------------------------
  // CASTILLA-LA MANCHA (5 provinces)
  // -------------------------------------------------------------------------
  albacete: {
    name: 'Albacete',
    community: 'Castilla-La Mancha',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Albacete',
        address: 'Plaza del Altozano, 4, 02001 Albacete',
        phone: '967 59 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Albacete',
        address: 'Calle Arcángel San Gabriel, 11, 02003 Albacete',
        phone: '967 59 89 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'Albacete presenta demanda moderada con buena disponibilidad de citas durante la mayor parte del año.',
    population: '388.786',
    difficulty: 'Baja',
    waitTime: '1-2 semanas',
    tips: [
      'Buena disponibilidad de citas',
      'Menor presión que las capitales grandes',
      'Los trámites se resuelven con relativa agilidad',
    ],
  },
  'ciudad-real': {
    name: 'Ciudad Real',
    community: 'Castilla-La Mancha',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Ciudad Real',
        address: 'Calle Caballeros, 14, 13001 Ciudad Real',
        phone: '926 27 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Ciudad Real',
        address: 'Ronda de Granada, 6, 13003 Ciudad Real',
        phone: '926 22 41 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Puertollano',
        address: 'Paseo de San Gregorio, 74, 13500 Puertollano',
        phone: '926 42 61 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Ciudad Real ofrece excelente disponibilidad de citas de extranjería gracias a su menor demanda.',
    population: '495.045',
    difficulty: 'Baja',
    waitTime: '1 semana',
    tips: [
      'Muy buena disponibilidad de citas',
      'Puertollano ofrece alternativa con buena disponibilidad',
      'Ideal para trámites urgentes',
      'Trámites suelen ser ágiles',
    ],
  },
  cuenca: {
    name: 'Cuenca',
    community: 'Castilla-La Mancha',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Cuenca',
        address: 'Calle Fermín Caballero, 2, 16002 Cuenca',
        phone: '969 17 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Cuenca',
        address: 'Calle Fermín Caballero, 4, 16002 Cuenca',
        phone: '969 22 35 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Cuenca, provincia poco poblada, ofrece excelente disponibilidad para citas de extranjería.',
    population: '196.139',
    difficulty: 'Baja',
    waitTime: '1 semana',
    tips: [
      'Una de las provincias con mejor disponibilidad de España',
      'Ideal para quien necesita cita urgente',
      'Muy buena atención y trámites ágiles',
    ],
  },
  guadalajara: {
    name: 'Guadalajara',
    community: 'Castilla-La Mancha',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Guadalajara',
        address: 'Calle Teniente Figueroa, 10, 19001 Guadalajara',
        phone: '949 88 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Guadalajara',
        address: 'Avenida de Castilla, 1, 19002 Guadalajara',
        phone: '949 88 61 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'Guadalajara, cercana a Madrid, recibe parte de la presión de la capital pero mantiene mejor disponibilidad.',
    population: '261.995',
    difficulty: 'Media',
    waitTime: '2-3 semanas',
    tips: [
      'Alternativa a Madrid para residentes del corredor del Henares',
      'Mejor disponibilidad que en la capital',
      'Buena comunicación con Madrid por cercanías',
    ],
  },
  toledo: {
    name: 'Toledo',
    community: 'Castilla-La Mancha',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Toledo',
        address: 'Calle de la Plata, 16, 45001 Toledo',
        phone: '925 26 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Toledo',
        address: 'Avenida de la Reconquista, 36, 45005 Toledo',
        phone: '925 28 22 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Talavera de la Reina',
        address: 'Calle San Francisco, 16, 45600 Talavera de la Reina',
        phone: '925 80 09 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'Toledo ofrece buena disponibilidad de citas y es alternativa para residentes del sur de Madrid.',
    population: '703.772',
    difficulty: 'Media',
    waitTime: '2-3 semanas',
    tips: [
      'Talavera tiene oficina propia con buena disponibilidad',
      'Alternativa cercana para residentes del sur de Madrid',
      'Los trámites se resuelven con normalidad',
    ],
  },

  // -------------------------------------------------------------------------
  // CASTILLA Y LEÓN (9 provinces)
  // -------------------------------------------------------------------------
  avila: {
    name: 'Ávila',
    community: 'Castilla y León',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Ávila',
        address: 'Plaza de Santa Teresa, 2, 05001 Ávila',
        phone: '920 35 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Ávila',
        address: 'Calle Duque de Alba, 19, 05001 Ávila',
        phone: '920 22 22 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Ávila ofrece excelente disponibilidad de citas gracias a su baja demanda.',
    population: '157.664',
    difficulty: 'Baja',
    waitTime: '1 semana',
    tips: [
      'Provincia con muy buena disponibilidad',
      'Cercana a Madrid, buena alternativa',
      'Trámites ágiles y sin largas esperas',
    ],
  },
  burgos: {
    name: 'Burgos',
    community: 'Castilla y León',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Burgos',
        address: 'Avenida del Cid Campeador, 4, 09005 Burgos',
        phone: '947 28 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Burgos',
        address: 'Avenida de Castilla y León, 2, 09006 Burgos',
        phone: '947 28 88 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Miranda de Ebro',
        address: 'Calle Arenal, 2, 09200 Miranda de Ebro',
        phone: '947 32 31 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'Burgos presenta demanda moderada y buena disponibilidad de citas durante todo el año.',
    population: '357.070',
    difficulty: 'Baja',
    waitTime: '1-2 semanas',
    tips: [
      'Miranda de Ebro tiene comisaría propia',
      'Buena disponibilidad general',
      'Alternativa para el norte de Castilla',
    ],
  },
  leon: {
    name: 'León',
    community: 'Castilla y León',
    oficinas: [
      {
        name: 'Oficina de Extranjería de León',
        address: 'Plaza de San Marcos, 6, 24001 León',
        phone: '987 89 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - León',
        address: 'Calle Villa de Benavente, 4, 24004 León',
        phone: '987 21 81 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Ponferrada',
        address: 'Avenida de Valdés, 15, 24400 Ponferrada',
        phone: '987 40 07 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Estancia por Estudios'],
    description: 'León ofrece buena disponibilidad de citas con demanda moderada.',
    population: '456.439',
    difficulty: 'Baja',
    waitTime: '1-2 semanas',
    tips: [
      'Ponferrada tiene comisaría propia para El Bierzo',
      'Universidad genera demanda de estancias por estudios',
      'Buena disponibilidad general',
    ],
  },
  palencia: {
    name: 'Palencia',
    community: 'Castilla y León',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Palencia',
        address: 'Calle Mayor, 45, 34001 Palencia',
        phone: '979 70 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Palencia',
        address: 'Calle Colón, 5, 34002 Palencia',
        phone: '979 72 92 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Palencia, provincia poco poblada, ofrece excelente disponibilidad para citas de extranjería.',
    population: '160.321',
    difficulty: 'Baja',
    waitTime: '1 semana',
    tips: [
      'Una de las provincias con mejor disponibilidad',
      'Trámites muy ágiles',
      'Ideal para quienes necesitan cita urgente',
    ],
  },
  salamanca: {
    name: 'Salamanca',
    community: 'Castilla y León',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Salamanca',
        address: 'Plaza Mayor, 2, 37002 Salamanca',
        phone: '923 29 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Salamanca',
        address: 'Calle de la Compañía, 2, 37002 Salamanca',
        phone: '923 19 44 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Estancia por Estudios', 'Prácticas', 'Investigación'],
    description: 'Salamanca, ciudad universitaria por excelencia, tiene demanda especial de trámites para estudiantes internacionales.',
    population: '329.245',
    difficulty: 'Media',
    waitTime: '2-3 semanas',
    tips: [
      'Alta demanda al inicio del curso académico',
      'Muchos trámites de estudiantes y doctorandos',
      'Solicita cita con antelación en septiembre-octubre',
    ],
  },
  segovia: {
    name: 'Segovia',
    community: 'Castilla y León',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Segovia',
        address: 'Plaza de la Artillería, 1, 40001 Segovia',
        phone: '921 46 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Segovia',
        address: 'Calle de la Muerte y la Vida, 3, 40003 Segovia',
        phone: '921 43 12 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Segovia ofrece excelente disponibilidad de citas y es alternativa cercana a Madrid.',
    population: '153.342',
    difficulty: 'Baja',
    waitTime: '1 semana',
    tips: [
      'Alternativa muy cercana a Madrid (25 min en AVE)',
      'Excelente disponibilidad de citas',
      'Trámites ágiles',
    ],
  },
  soria: {
    name: 'Soria',
    community: 'Castilla y León',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Soria',
        address: 'Plaza de San Esteban, 1, 42002 Soria',
        phone: '975 22 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Soria',
        address: 'Calle Nicolás Rabal, 7, 42002 Soria',
        phone: '975 22 63 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Soria, la provincia menos poblada de España, ofrece la mejor disponibilidad para citas de extranjería.',
    population: '88.600',
    difficulty: 'Baja',
    waitTime: 'Inmediato - 1 semana',
    tips: [
      'La provincia con mejor disponibilidad de España',
      'Citas casi inmediatas en muchos casos',
      'Ideal para trámites muy urgentes',
    ],
  },
  valladolid: {
    name: 'Valladolid',
    community: 'Castilla y León',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Valladolid',
        address: 'Calle de Santiago, 17, 47001 Valladolid',
        phone: '983 41 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Valladolid Centro',
        address: 'Calle de Felipe II, 2, 47003 Valladolid',
        phone: '983 35 86 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Valladolid Delicias',
        address: 'Calle Cigüeña, 9, 47014 Valladolid',
        phone: '983 22 42 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Estancia por Estudios', 'Arraigo'],
    description: 'Valladolid, capital de Castilla y León, concentra mayor demanda pero mantiene buena disponibilidad.',
    population: '519.851',
    difficulty: 'Media',
    waitTime: '2-3 semanas',
    tips: [
      'Varias oficinas disponibles en la ciudad',
      'La oficina de Delicias puede tener mejor disponibilidad',
      'Universidad genera demanda de estudiantes',
    ],
  },
  zamora: {
    name: 'Zamora',
    community: 'Castilla y León',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Zamora',
        address: 'Plaza de la Constitución, 1, 49001 Zamora',
        phone: '980 55 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Zamora',
        address: 'Avenida Requejo, 8, 49012 Zamora',
        phone: '980 53 40 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Zamora ofrece excelente disponibilidad de citas gracias a su baja demanda.',
    population: '170.588',
    difficulty: 'Baja',
    waitTime: '1 semana',
    tips: [
      'Muy buena disponibilidad de citas',
      'Trámites ágiles',
      'Una de las mejores opciones en el noroeste',
    ],
  },

  // -------------------------------------------------------------------------
  // CATALUÑA (4 provinces)
  // -------------------------------------------------------------------------
  barcelona: {
    name: 'Barcelona',
    community: 'Cataluña',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Barcelona',
        address: 'Calle Bergara, 12, 08002 Barcelona',
        phone: '93 520 14 10',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Oficina de Extranjería de Barcelona - Zona Franca',
        address: 'Passeig de la Zona Franca, 46, 08038 Barcelona',
        phone: '93 520 15 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Barcelona Eixample',
        address: 'Carrer de Balmes, 192, 08006 Barcelona',
        phone: '93 290 32 46',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Badalona',
        address: 'Carrer del Doctor Bassols, 38, 08912 Badalona',
        phone: '93 497 24 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Hospitalet',
        address: 'Rambla Marina, 337, 08903 L\'Hospitalet',
        phone: '93 260 46 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Cornellà',
        address: 'Avinguda del Parc, 7, 08940 Cornellà de Llobregat',
        phone: '93 474 86 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Sabadell',
        address: 'Carrer de Tres Creus, 130, 08202 Sabadell',
        phone: '93 745 27 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Terrassa',
        address: 'Carrer de Sant Pau, 91, 08221 Terrassa',
        phone: '93 783 11 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Asilo', 'Golden Visa', 'Nómada Digital', 'Reagrupación Familiar', 'Arraigo', 'Autorizaciones de Trabajo'],
    description: 'Barcelona es la provincia con mayor demanda de citas de extranjería de España junto con Madrid. La saturación es extrema y conseguir cita puede ser muy difícil.',
    population: '5.743.402',
    difficulty: 'Muy Alta',
    waitTime: '6-12 semanas',
    tips: [
      'Revisa disponibilidad en municipios del área metropolitana',
      'Badalona, Hospitalet, Cornellà, Sabadell y Terrassa tienen oficinas propias',
      'Busca citas a las 00:00 cuando se liberan nuevas',
      'Considera provincias cercanas como Girona o Tarragona',
      'La oficina de Zona Franca a veces tiene mejor disponibilidad',
    ],
  },
  girona: {
    name: 'Girona',
    community: 'Cataluña',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Girona',
        address: 'Plaça Pompeu Fabra, 1, 17002 Girona',
        phone: '972 94 21 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Girona',
        address: 'Carrer Albareda, 3, 17001 Girona',
        phone: '972 20 24 32',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Figueres',
        address: 'Carrer Nou, 6, 17600 Figueres',
        phone: '972 50 04 77',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Lloret de Mar',
        address: 'Passeig Mossèn Jacint Verdaguer, 5, 17310 Lloret de Mar',
        phone: '972 36 58 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Residencia No Lucrativa', 'Autorizaciones de Residencia'],
    description: 'Girona presenta demanda alta debido al turismo de la Costa Brava, pero menor que Barcelona.',
    population: '781.788',
    difficulty: 'Alta',
    waitTime: '3-5 semanas',
    tips: [
      'Alternativa a Barcelona para residentes del norte de Cataluña',
      'Figueres y Lloret de Mar tienen oficinas propias',
      'La Costa Brava genera demanda estacional en verano',
    ],
  },
  lleida: {
    name: 'Lleida',
    community: 'Cataluña',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Lleida',
        address: 'Rambla de Ferran, 1, 25007 Lleida',
        phone: '973 70 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Lleida',
        address: 'Carrer Doctor Combelles, 10, 25003 Lleida',
        phone: '973 26 67 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Autorizaciones de Trabajo', 'Temporeros'],
    description: 'Lleida tiene demanda marcada por el sector agrícola, especialmente durante las campañas de fruta.',
    population: '440.915',
    difficulty: 'Media',
    waitTime: '2-4 semanas',
    tips: [
      'Alta demanda durante campañas agrícolas (verano)',
      'Mejor disponibilidad en invierno',
      'Buena alternativa a Barcelona',
    ],
  },
  tarragona: {
    name: 'Tarragona',
    community: 'Cataluña',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Tarragona',
        address: 'Carrer de Sant Francesc, 3, 43003 Tarragona',
        phone: '977 99 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Tarragona',
        address: 'Plaça Imperial Tarraco, 1, 43005 Tarragona',
        phone: '977 54 92 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Reus',
        address: 'Carrer de Sant Vicenç, 2, 43201 Reus',
        phone: '977 31 38 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Tortosa',
        address: 'Carrer de Montcada, 27, 43500 Tortosa',
        phone: '977 44 00 11',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'Tarragona presenta demanda moderada-alta y es buena alternativa a Barcelona.',
    population: '816.772',
    difficulty: 'Media',
    waitTime: '2-4 semanas',
    tips: [
      'Reus y Tortosa tienen oficinas propias',
      'Buena alternativa a Barcelona para el sur de Cataluña',
      'Port Aventura genera demanda estacional',
    ],
  },

  // -------------------------------------------------------------------------
  // COMUNIDAD VALENCIANA (3 provinces)
  // -------------------------------------------------------------------------
  alicante: {
    name: 'Alicante',
    community: 'Comunidad Valenciana',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Alicante',
        address: 'Calle Ebanistería, 4, 03008 Alicante',
        phone: '965 93 59 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Alicante Centro',
        address: 'Calle Médico Pascual Pérez, 33, 03001 Alicante',
        phone: '965 10 72 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Benidorm',
        address: 'Calle Tomás Ortuño, 61, 03501 Benidorm',
        phone: '965 85 08 50',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Torrevieja',
        address: 'Calle Patricio Pérez, 1, 03181 Torrevieja',
        phone: '965 92 08 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Elche',
        address: 'Calle Antonio Machado, 15, 03201 Elche',
        phone: '966 61 62 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Dénia',
        address: 'Calle Patricio Ferrándiz, 24, 03700 Dénia',
        phone: '965 78 07 81',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Residencia No Lucrativa', 'Golden Visa', 'Nómada Digital', 'Reagrupación Familiar'],
    description: 'Alicante tiene altísima demanda de citas de extranjería debido a la gran comunidad de residentes europeos en la Costa Blanca.',
    population: '1.881.762',
    difficulty: 'Muy Alta',
    waitTime: '4-8 semanas',
    tips: [
      'Benidorm, Torrevieja, Elche y Dénia tienen oficinas propias',
      'Las localidades costeras pueden tener mejor disponibilidad',
      'Alta presencia de ciudadanos británicos y del norte de Europa',
      'Revisa disponibilidad en varias oficinas',
    ],
  },
  castellon: {
    name: 'Castellón',
    community: 'Comunidad Valenciana',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Castellón',
        address: 'Plaza María Agustina, 6, 12003 Castellón de la Plana',
        phone: '964 35 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Castellón',
        address: 'Avenida del Doctor Clará, 19, 12002 Castellón de la Plana',
        phone: '964 72 29 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'Castellón presenta demanda moderada y es buena alternativa a Valencia.',
    population: '579.245',
    difficulty: 'Media',
    waitTime: '2-3 semanas',
    tips: [
      'Mejor disponibilidad que Valencia o Alicante',
      'Buena alternativa para residentes del norte de la Comunidad Valenciana',
      'Trámites se resuelven con relativa agilidad',
    ],
  },
  valencia: {
    name: 'Valencia',
    community: 'Comunidad Valenciana',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Valencia',
        address: 'Calle Mauricio Moro Pareto, s/n, 46014 Valencia',
        phone: '96 120 92 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Valencia Centro',
        address: 'Gran Vía de Fernando el Católico, 29, 46008 Valencia',
        phone: '96 395 32 48',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Valencia Zapadores',
        address: 'Avenida del Puerto, 289, 46024 Valencia',
        phone: '96 330 45 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Paterna',
        address: 'Calle San Juan de la Cruz, 8, 46980 Paterna',
        phone: '96 137 02 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Torrent',
        address: 'Avenida al Vedat, 88, 46900 Torrent',
        phone: '96 155 74 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Sagunto',
        address: 'Plaza Cronista Chabret, 18, 46500 Sagunto',
        phone: '96 266 00 11',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Asilo', 'Golden Visa', 'Nómada Digital', 'Reagrupación Familiar', 'Arraigo', 'Estancia por Estudios'],
    description: 'Valencia es una de las provincias con mayor demanda de citas de extranjería en España. La ciudad concentra gran actividad empresarial, universitaria y turística.',
    population: '2.591.875',
    difficulty: 'Muy Alta',
    waitTime: '4-6 semanas',
    tips: [
      'Existen múltiples oficinas, revisa disponibilidad en todas',
      'Paterna, Torrent y Sagunto pueden tener mejor disponibilidad',
      'La oficina de Zapadores gestiona muchos trámites',
      'Considera Castellón como alternativa cercana',
    ],
  },

  // -------------------------------------------------------------------------
  // EXTREMADURA (2 provinces)
  // -------------------------------------------------------------------------
  badajoz: {
    name: 'Badajoz',
    community: 'Extremadura',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Badajoz',
        address: 'Avenida de Huelva, 2, 06005 Badajoz',
        phone: '924 97 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Badajoz',
        address: 'Avenida de Colón, 6, 06005 Badajoz',
        phone: '924 20 90 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Mérida',
        address: 'Calle Almendralejo, 43, 06800 Mérida',
        phone: '924 00 49 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'Badajoz presenta demanda moderada y ofrece buena disponibilidad de citas.',
    population: '672.137',
    difficulty: 'Baja',
    waitTime: '1-2 semanas',
    tips: [
      'Mérida tiene comisaría propia',
      'Frontera con Portugal genera algunos trámites específicos',
      'Buena disponibilidad general',
    ],
  },
  caceres: {
    name: 'Cáceres',
    community: 'Extremadura',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Cáceres',
        address: 'Plaza Mayor, 1, 10003 Cáceres',
        phone: '927 62 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Cáceres',
        address: 'Avenida de España, 11, 10004 Cáceres',
        phone: '927 62 63 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Plasencia',
        address: 'Calle Sancho Polo, 2, 10600 Plasencia',
        phone: '927 42 20 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Cáceres ofrece excelente disponibilidad de citas de extranjería.',
    population: '391.850',
    difficulty: 'Baja',
    waitTime: '1 semana',
    tips: [
      'Plasencia tiene comisaría propia para el norte de la provincia',
      'Muy buena disponibilidad de citas',
      'Trámites ágiles',
    ],
  },

  // -------------------------------------------------------------------------
  // GALICIA (4 provinces)
  // -------------------------------------------------------------------------
  'a-coruna': {
    name: 'A Coruña',
    community: 'Galicia',
    oficinas: [
      {
        name: 'Oficina de Extranjería de A Coruña',
        address: 'Plaza de Pontevedra, 17, 15003 A Coruña',
        phone: '981 98 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - A Coruña',
        address: 'Calle Médico Devesa Núñez, 6, 15008 A Coruña',
        phone: '981 16 71 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Santiago de Compostela',
        address: 'Avenida de Rodrigo de Padrón, s/n, 15701 Santiago de Compostela',
        phone: '981 54 18 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Ferrol',
        address: 'Carretera de Castilla, 114, 15404 Ferrol',
        phone: '981 33 68 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Estancia por Estudios', 'Arraigo'],
    description: 'A Coruña presenta demanda moderada con buena disponibilidad de citas.',
    population: '1.121.815',
    difficulty: 'Media',
    waitTime: '2-3 semanas',
    tips: [
      'Santiago de Compostela tiene comisaría propia',
      'Ferrol ofrece alternativa para el norte de la provincia',
      'Demanda universitaria en Santiago',
    ],
  },
  lugo: {
    name: 'Lugo',
    community: 'Galicia',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Lugo',
        address: 'Ronda da Muralla, 58, 27001 Lugo',
        phone: '982 40 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Lugo',
        address: 'Ronda da Muralla, 70, 27001 Lugo',
        phone: '982 22 16 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Lugo ofrece excelente disponibilidad de citas gracias a su baja demanda.',
    population: '327.946',
    difficulty: 'Baja',
    waitTime: '1 semana',
    tips: [
      'Muy buena disponibilidad de citas',
      'Alternativa para el interior de Galicia',
      'Trámites ágiles',
    ],
  },
  ourense: {
    name: 'Ourense',
    community: 'Galicia',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Ourense',
        address: 'Rúa do Progreso, 30, 32003 Ourense',
        phone: '988 68 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Ourense',
        address: 'Rúa do Xardín do Posío, 1, 32004 Ourense',
        phone: '988 39 13 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Ourense ofrece excelente disponibilidad de citas de extranjería.',
    population: '306.650',
    difficulty: 'Baja',
    waitTime: '1 semana',
    tips: [
      'Una de las provincias con mejor disponibilidad de Galicia',
      'Trámites muy ágiles',
      'Buena opción para el sur de Galicia',
    ],
  },
  pontevedra: {
    name: 'Pontevedra',
    community: 'Galicia',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Pontevedra',
        address: 'Rúa Fernández Ladreda, 43, 36001 Pontevedra',
        phone: '986 80 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Pontevedra',
        address: 'Rúa de Joaquín Costa, 17, 36001 Pontevedra',
        phone: '986 85 38 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Vigo',
        address: 'Rúa Lalín, 3, 36209 Vigo',
        phone: '986 43 12 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'Pontevedra presenta demanda moderada con buena disponibilidad.',
    population: '945.408',
    difficulty: 'Media',
    waitTime: '2-3 semanas',
    tips: [
      'Vigo tiene comisaría propia con alta actividad',
      'La ciudad más poblada de Galicia genera más demanda',
      'Pontevedra capital puede tener mejor disponibilidad que Vigo',
    ],
  },

  // -------------------------------------------------------------------------
  // COMUNIDAD DE MADRID (1 province)
  // -------------------------------------------------------------------------
  madrid: {
    name: 'Madrid',
    community: 'Comunidad de Madrid',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Madrid - Aluche',
        address: 'Calle Silva, 1, 28013 Madrid',
        phone: '91 322 31 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Madrid Centro (Leganitos)',
        address: 'Calle de Leganitos, 19, 28013 Madrid',
        phone: '91 548 79 85',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Madrid Sur (Usera)',
        address: 'Avenida de Rafaela Ybarra, 42, 28026 Madrid',
        phone: '91 422 95 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Madrid Latina',
        address: 'Calle Vía Carpetana, 328, 28047 Madrid',
        phone: '91 322 51 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Alcalá de Henares',
        address: 'Calle Navarro y Ledesma, 2, 28802 Alcalá de Henares',
        phone: '91 880 63 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Alcobendas',
        address: 'Avenida de España, 40, 28100 Alcobendas',
        phone: '91 484 90 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Getafe',
        address: 'Calle Leganés, 23, 28901 Getafe',
        phone: '91 202 71 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Móstoles',
        address: 'Calle Pintor Velázquez, 20, 28935 Móstoles',
        phone: '91 664 70 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Leganés',
        address: 'Calle Gibraltar, 4, 28914 Leganés',
        phone: '91 248 51 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Fuenlabrada',
        address: 'Avenida de las Provincias, 23, 28941 Fuenlabrada',
        phone: '91 492 60 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Parla',
        address: 'Calle Real, 31, 28980 Parla',
        phone: '91 698 72 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Torrejón de Ardoz',
        address: 'Calle Primavera, 1, 28850 Torrejón de Ardoz',
        phone: '91 677 00 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Asilo', 'Golden Visa', 'Nómada Digital', 'Reagrupación Familiar', 'Arraigo', 'Autorizaciones de Trabajo', 'Estancia por Estudios', 'Carta de Invitación'],
    description: 'Madrid es junto con Barcelona la provincia con mayor demanda de citas de extranjería de España. La saturación es extrema y conseguir cita puede ser muy difícil.',
    population: '6.779.888',
    difficulty: 'Muy Alta',
    waitTime: '6-12 semanas',
    tips: [
      'Revisa disponibilidad en TODOS los municipios del área metropolitana',
      'Alcalá, Alcobendas, Getafe, Móstoles, Leganés, Fuenlabrada, Parla y Torrejón tienen oficinas propias',
      'Busca citas a las 00:00 cuando se liberan nuevas',
      'Considera provincias cercanas: Guadalajara, Toledo, Segovia, Ávila',
      'La oficina de Aluche es la principal pero muy saturada',
      'Los municipios del sur suelen tener algo mejor disponibilidad',
    ],
  },

  // -------------------------------------------------------------------------
  // REGIÓN DE MURCIA (1 province)
  // -------------------------------------------------------------------------
  murcia: {
    name: 'Murcia',
    community: 'Región de Murcia',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Murcia',
        address: 'Calle Enrique Villar, 13, 30008 Murcia',
        phone: '968 22 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Murcia Centro',
        address: 'Calle Ceballos, 6, 30003 Murcia',
        phone: '968 26 71 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Cartagena',
        address: 'Calle Jiménez de la Espada, 5, 30204 Cartagena',
        phone: '968 12 89 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Lorca',
        address: 'Avenida Juan Carlos I, 97, 30800 Lorca',
        phone: '968 46 71 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Molina de Segura',
        address: 'Calle Mayor, 52, 30500 Molina de Segura',
        phone: '968 64 32 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Autorizaciones de Trabajo', 'Arraigo', 'Reagrupación Familiar'],
    description: 'Murcia tiene alta demanda de citas de extranjería debido a la importante comunidad extranjera, especialmente en el sector agrícola y de servicios.',
    population: '1.518.486',
    difficulty: 'Alta',
    waitTime: '3-5 semanas',
    tips: [
      'Cartagena, Lorca y Molina de Segura tienen oficinas propias',
      'El sector agrícola genera demanda estacional',
      'Buena alternativa a Alicante para el sur',
      'Revisa disponibilidad en varias oficinas',
    ],
  },

  // -------------------------------------------------------------------------
  // COMUNIDAD FORAL DE NAVARRA (1 province)
  // -------------------------------------------------------------------------
  navarra: {
    name: 'Navarra',
    community: 'Comunidad Foral de Navarra',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Pamplona',
        address: 'Calle Tudela, 20, 31003 Pamplona',
        phone: '948 97 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Pamplona',
        address: 'Calle General Chinchilla, 3, 31002 Pamplona',
        phone: '948 22 46 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Tudela',
        address: 'Calle Herrerías, 12, 31500 Tudela',
        phone: '948 41 02 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'Navarra presenta demanda moderada con disponibilidad razonable de citas.',
    population: '661.197',
    difficulty: 'Media',
    waitTime: '2-3 semanas',
    tips: [
      'Tudela tiene comisaría propia para la Ribera',
      'Demanda del sector industrial y agrícola',
      'Buena disponibilidad comparada con grandes ciudades',
    ],
  },

  // -------------------------------------------------------------------------
  // PAÍS VASCO (3 provinces)
  // -------------------------------------------------------------------------
  alava: {
    name: 'Álava',
    community: 'País Vasco',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Vitoria-Gasteiz',
        address: 'Calle Olaguibel, 38, 01004 Vitoria-Gasteiz',
        phone: '945 75 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Vitoria-Gasteiz',
        address: 'Calle Olaguibel, 28, 01004 Vitoria-Gasteiz',
        phone: '945 23 21 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Álava ofrece buena disponibilidad de citas con demanda moderada.',
    population: '333.940',
    difficulty: 'Media',
    waitTime: '2-3 semanas',
    tips: [
      'Mejor disponibilidad que Vizcaya o Guipúzcoa',
      'Capital del País Vasco con buena organización',
      'Alternativa para residentes de otras provincias vascas',
    ],
  },
  guipuzcoa: {
    name: 'Guipúzcoa',
    community: 'País Vasco',
    oficinas: [
      {
        name: 'Oficina de Extranjería de San Sebastián',
        address: 'Calle Andia, 13, 20004 San Sebastián',
        phone: '943 98 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - San Sebastián',
        address: 'Calle Larramendi, 11, 20006 San Sebastián',
        phone: '943 45 49 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Irún',
        address: 'Calle Fueros, 4, 20302 Irún',
        phone: '943 63 73 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia'],
    description: 'Guipúzcoa presenta demanda moderada-alta con disponibilidad variable.',
    population: '727.121',
    difficulty: 'Media',
    waitTime: '2-4 semanas',
    tips: [
      'Irún tiene comisaría propia cerca de la frontera francesa',
      'Zona turística genera demanda estacional',
      'Buena organización de servicios',
    ],
  },
  vizcaya: {
    name: 'Vizcaya',
    community: 'País Vasco',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Bilbao',
        address: 'Gran Vía de Don Diego López de Haro, 11, 48001 Bilbao',
        phone: '94 479 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Bilbao Centro',
        address: 'Calle Gordóniz, 18, 48010 Bilbao',
        phone: '94 479 01 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Barakaldo',
        address: 'Calle Arteagabeitia, 50, 48901 Barakaldo',
        phone: '94 478 17 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo', 'Reagrupación Familiar'],
    description: 'Vizcaya, con Bilbao como principal ciudad del País Vasco, presenta demanda alta de trámites de extranjería.',
    population: '1.152.651',
    difficulty: 'Alta',
    waitTime: '3-5 semanas',
    tips: [
      'Barakaldo tiene comisaría propia para la margen izquierda',
      'Mayor demanda que Álava y Guipúzcoa',
      'Sector industrial genera demanda constante',
    ],
  },

  // -------------------------------------------------------------------------
  // LA RIOJA (1 province)
  // -------------------------------------------------------------------------
  'la-rioja': {
    name: 'La Rioja',
    community: 'La Rioja',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Logroño',
        address: 'Calle Villamediana, 17, 26003 Logroño',
        phone: '941 27 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Logroño',
        address: 'Calle Pérez Galdós, 28, 26002 Logroño',
        phone: '941 50 03 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Autorizaciones de Residencia', 'Arraigo'],
    description: 'La Rioja ofrece buena disponibilidad de citas con demanda moderada.',
    population: '319.914',
    difficulty: 'Baja',
    waitTime: '1-2 semanas',
    tips: [
      'Buena disponibilidad de citas',
      'Sector vitivinícola genera demanda estacional',
      'Trámites ágiles',
    ],
  },

  // -------------------------------------------------------------------------
  // CEUTA (1 city)
  // -------------------------------------------------------------------------
  ceuta: {
    name: 'Ceuta',
    community: 'Ciudad Autónoma de Ceuta',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Ceuta',
        address: 'Calle Padilla, s/n, 51001 Ceuta',
        phone: '956 52 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Ceuta',
        address: 'Avenida de África, 2, 51001 Ceuta',
        phone: '956 51 69 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Asilo', 'Protección Internacional'],
    description: 'Ceuta, ciudad autónoma en el norte de África, tiene características especiales para trámites de extranjería debido a su ubicación fronteriza.',
    population: '83.517',
    difficulty: 'Alta',
    waitTime: '3-5 semanas',
    tips: [
      'Situación especial por ser frontera terrestre con Marruecos',
      'Alta actividad en trámites de asilo y protección internacional',
      'Procedimientos específicos para la zona',
    ],
  },

  // -------------------------------------------------------------------------
  // MELILLA (1 city)
  // -------------------------------------------------------------------------
  melilla: {
    name: 'Melilla',
    community: 'Ciudad Autónoma de Melilla',
    oficinas: [
      {
        name: 'Oficina de Extranjería de Melilla',
        address: 'Calle General Marina, 1, 52001 Melilla',
        phone: '952 69 91 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
      {
        name: 'Comisaría de Policía Nacional - Melilla',
        address: 'Calle General Aizpuru, 10, 52001 Melilla',
        phone: '952 69 70 00',
        hours: 'Lunes a Viernes: 9:00 - 14:00',
      },
    ],
    tramites: ['NIE Inicial', 'Renovación NIE', 'TIE', 'Toma de Huellas', 'Asilo', 'Protección Internacional'],
    description: 'Melilla, ciudad autónoma en el norte de África, tiene características especiales para trámites de extranjería debido a su ubicación fronteriza.',
    population: '87.076',
    difficulty: 'Alta',
    waitTime: '3-5 semanas',
    tips: [
      'Situación especial por ser frontera terrestre con Marruecos',
      'Alta actividad en trámites de asilo y protección internacional',
      'Procedimientos específicos para la zona',
    ],
  },
};

// ============================================================================
// CONSTANTS
// ============================================================================

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_CHANNEL = 'https://whatsapp.com/channel/0029Vb6vC8KAYlUPnU8VcH2w';

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getWhatsAppLink(province: string): string {
  const message = encodeURIComponent(
    `Hola, necesito una cita de extranjería en ${province}. ¿Pueden ayudarme?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'Baja':
      return 'bg-green-100 text-green-800';
    case 'Media':
      return 'bg-yellow-100 text-yellow-800';
    case 'Alta':
      return 'bg-orange-100 text-orange-800';
    case 'Muy Alta':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

function getDifficultyIcon(difficulty: string): string {
  switch (difficulty) {
    case 'Baja':
      return '🟢';
    case 'Media':
      return '🟡';
    case 'Alta':
      return '🟠';
    case 'Muy Alta':
      return '🔴';
    default:
      return '⚪';
  }
}

// ============================================================================
// ICONS
// ============================================================================

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function LightBulbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );
}

// ============================================================================
// GENERATE STATIC PARAMS (Required for static export)
// ============================================================================

export function generateStaticParams() {
  return Object.keys(PROVINCE_DATA).map((slug) => ({
    slug,
  }));
}

// ============================================================================
// GENERATE METADATA
// ============================================================================

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const province = PROVINCE_DATA[slug];

  if (!province) {
    return {
      title: 'Provincia no encontrada | CitaEx',
      description: 'La provincia solicitada no existe.',
    };
  }

  const title = `Cita Extranjería ${province.name} 2025 - NIE, TIE, Huellas | CitaEx`;
  const description = `Consigue tu cita de extranjería en ${province.name}, ${province.community}. ${province.oficinas.length} oficinas disponibles. NIE, TIE, huellas y más trámites. Sin pago adelantado.`;

  return {
    title,
    description,
    keywords: [
      `cita extranjería ${province.name.toLowerCase()}`,
      `cita nie ${province.name.toLowerCase()}`,
      `oficina extranjería ${province.name.toLowerCase()}`,
      `cita huellas ${province.name.toLowerCase()}`,
      `cita tie ${province.name.toLowerCase()}`,
      `extranjería ${province.name.toLowerCase()}`,
      `renovar nie ${province.name.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://citaex.com/provincias/${slug}`,
      siteName: 'CitaEx',
      locale: 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Cita Extranjería ${province.name} | CitaEx`,
      description: `Consigue tu cita de extranjería en ${province.name}. Sin pago adelantado.`,
    },
    alternates: {
      canonical: `https://citaex.com/provincias/${slug}`,
    },
  };
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default async function ProvinciaPage({ params }: Props) {
  const { slug } = await params;
  const province = PROVINCE_DATA[slug];

  if (!province) {
    notFound();
  }

  const whatsappLink = getWhatsAppLink(province.name);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-12 sm:py-16 lg:py-20">
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
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-green-100">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <span className="mx-1">/</span>
              </li>
              <li>
                <Link href="/provincias" className="transition-colors hover:text-white">
                  Provincias
                </Link>
              </li>
              <li>
                <span className="mx-1">/</span>
              </li>
              <li>
                <span className="font-medium text-white">{province.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
                <MapPinIcon className="h-4 w-4" />
                {province.community}
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Cita Previa Extranjería en {province.name} 2025
              </h1>
              <p className="mt-4 text-lg text-green-100">{province.description}</p>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">{province.oficinas.length}</div>
                  <div className="text-sm text-green-200">Oficinas</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">{province.tramites.length}</div>
                  <div className="text-sm text-green-200">Trámites</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-lg font-bold text-white">{getDifficultyIcon(province.difficulty)}</div>
                  <div className="text-sm text-green-200">{province.difficulty}</div>
                </div>
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-lg font-bold text-white">{province.waitTime}</div>
                  <div className="text-sm text-green-200">Espera</div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircleIcon className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">¿Necesitas cita en {province.name}?</h2>
                <p className="mt-2 text-gray-600">Te ayudamos a conseguirla. Sin pago adelantado.</p>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  Solicitar por WhatsApp
                </a>
                <Link
                  href="/solicitar-cita"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-green-600 px-6 py-4 text-lg font-bold text-green-600 transition-all hover:bg-green-50"
                >
                  Solicitar Online
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>

              <p className="mt-4 text-center text-sm text-gray-500">
                💡 Paga solo después de verificar tu cita
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oficinas Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Oficinas de Extranjería en {province.name}
            </h2>
            <p className="mt-3 text-gray-600">
              {province.oficinas.length} oficina{province.oficinas.length > 1 ? 's' : ''} disponible
              {province.oficinas.length > 1 ? 's' : ''} para trámites de extranjería
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {province.oficinas.map((oficina, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-green-300 hover:shadow-md"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                    <BuildingIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{oficina.name}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                    <span className="text-gray-600">{oficina.address}</span>
                  </div>
                  {oficina.phone && (
                    <div className="flex items-center gap-3 text-sm">
                      <PhoneIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                      <a href={`tel:${oficina.phone}`} className="text-green-600 hover:underline">
                        {oficina.phone}
                      </a>
                    </div>
                  )}
                  {oficina.hours && (
                    <div className="flex items-center gap-3 text-sm">
                      <ClockIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                      <span className="text-gray-600">{oficina.hours}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trámites Section */}
      <section className="border-t border-gray-100 bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Trámites Disponibles en {province.name}</h2>
            <p className="mt-3 text-gray-600">Gestionamos citas para todos estos procedimientos de extranjería</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {province.tramites.map((tramite, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
              >
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="font-medium text-gray-900">{tramite}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              ¿No encuentras tu trámite?{' '}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 hover:underline">
                Consúltanos por WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Difficulty & Tips Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Difficulty Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 text-xl font-bold text-gray-900">Estado de Disponibilidad</h2>

              <div className="mb-6 flex items-center gap-4">
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-lg font-bold ${getDifficultyColor(province.difficulty)}`}
                >
                  {getDifficultyIcon(province.difficulty)} Dificultad {province.difficulty}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                  <span className="text-gray-600">Tiempo de espera estimado</span>
                  <span className="font-bold text-gray-900">{province.waitTime}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                  <span className="text-gray-600">Población</span>
                  <span className="font-bold text-gray-900">{province.population} hab.</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                  <span className="text-gray-600">Oficinas disponibles</span>
                  <span className="font-bold text-gray-900">{province.oficinas.length}</span>
                </div>
              </div>
            </div>

            {/* Tips Card */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                  <LightBulbIcon className="h-5 w-5 text-amber-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Consejos para {province.name}</h2>
              </div>

              <ul className="space-y-3">
                {province.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-amber-800">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-gray-100 bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">¿Cómo Funciona?</h2>
            <p className="mt-3 text-gray-600">Proceso simple para conseguir tu cita en {province.name}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Contáctanos',
                description: `Envíanos tu solicitud por WhatsApp o formulario indicando que necesitas cita en ${province.name}`,
                icon: '📱',
              },
              {
                step: '2',
                title: 'Confirma Datos',
                description: 'Facilítanos tu NIE/pasaporte y el trámite que necesitas realizar',
                icon: '📋',
              },
              {
                step: '3',
                title: 'Buscamos 24/7',
                description: 'Nuestro sistema monitorea la disponibilidad de citas continuamente',
                icon: '🔍',
              },
              {
                step: '4',
                title: 'Cita Confirmada',
                description: 'Te notificamos al instante. Solo pagas después de verificar la cita',
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

      {/* FAQ Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Preguntas Frecuentes sobre {province.name}</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: `¿Cuánto tiempo se tarda en conseguir cita en ${province.name}?`,
                answer: `El tiempo estimado para conseguir cita en ${province.name} es de ${province.waitTime}. La dificultad actual es "${province.difficulty}". Esto puede variar según la demanda y el tipo de trámite.`,
              },
              {
                question: `¿Qué oficinas de extranjería hay en ${province.name}?`,
                answer: `En ${province.name} hay ${province.oficinas.length} oficina${province.oficinas.length > 1 ? 's' : ''} de extranjería: ${province.oficinas.map((o) => o.name).join(', ')}.`,
              },
              {
                question: `¿Cuánto cuesta el servicio de cita en ${province.name}?`,
                answer: `El precio depende del tipo de trámite. Lo importante es que no cobramos nada por adelantado. Solo pagas después de verificar que tienes tu cita confirmada en ${province.name}.`,
              },
              {
                question: `¿Puedo conseguir cita para cualquier trámite en ${province.name}?`,
                answer: `Sí, gestionamos citas para todos los trámites de extranjería en ${province.name}: ${province.tramites.join(', ')}, y más.`,
              },
              {
                question: '¿El servicio es legal?',
                answer: 'Sí, nuestro servicio es completamente legal. Actuamos como intermediarios para ayudarte a encontrar citas disponibles en el sistema oficial de cita previa del Ministerio.',
              },
            ].map((faq, index) => (
              <details key={index} className="group rounded-xl border border-gray-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                  {faq.question}
                  <ChevronDownIcon className="h-5 w-5 flex-shrink-0 text-gray-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="border-t border-gray-100 px-5 py-4 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Provinces */}
      <section className="border-t border-gray-100 bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-gray-900">Otras Provincias en {province.community}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(PROVINCE_DATA)
              .filter(([key, p]) => p.community === province.community && key !== slug)
              .map(([key, p]) => (
                <Link
                  key={key}
                  href={`/provincias/${key}`}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-green-300 hover:bg-green-50 hover:text-green-700"
                >
                  {p.name}
                </Link>
              ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/provincias"
              className="inline-flex items-center gap-2 font-medium text-green-600 hover:text-green-700"
            >
              Ver todas las provincias
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            ¿Listo para conseguir tu cita en {province.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
            Deja de perder tiempo intentando conseguir cita. Nosotros la buscamos por ti las 24 horas del día.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink}
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
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 text-sm text-green-200 sm:flex-row">
            <span className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5" />
              Sin pago adelantado
            </span>
            <span className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5" />
              Monitoreo 24/7
            </span>
            <span className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5" />
              Todas las oficinas de {province.name}
            </span>
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
            name: `Cita Extranjería ${province.name} 2025 - NIE, TIE, Huellas`,
            description: `Consigue tu cita de extranjería en ${province.name}, ${province.community}. ${province.oficinas.length} oficinas disponibles.`,
            url: `https://citaex.com/provincias/${slug}`,
            provider: {
              '@type': 'Organization',
              name: 'CitaEx',
              url: 'https://citaex.com',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: province.name,
              containedIn: {
                '@type': 'Country',
                name: 'España',
              },
            },
            serviceType: 'Appointment Booking Service',
          }),
        }}
      />

      {/* Local Business Structured Data for each office */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            province.oficinas.map((oficina) => ({
              '@context': 'https://schema.org',
              '@type': 'GovernmentOffice',
              name: oficina.name,
              address: {
                '@type': 'PostalAddress',
                streetAddress: oficina.address,
                addressLocality: province.name,
                addressCountry: 'ES',
              },
              telephone: oficina.phone,
              openingHours: oficina.hours,
            }))
          ),
        }}
      />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA provinceName={province.name} />
    </main>
  );
}
