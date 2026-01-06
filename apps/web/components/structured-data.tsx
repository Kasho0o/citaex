export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CitaEx - Cita Extranjería",
    "image": "https://micitaextranjeria.com/logo.png",
    "url": "https://micitaextranjeria.com",
    "telephone": "+923221430630",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES",
      "addressLocality": "España"
    },
    "description": "Plataforma inteligente para conseguir citas de extranjería en España. Monitoreo automático 24/7, alertas instantáneas por WhatsApp y soporte con IA.",
    "sameAs": [
      "https://wa.me/923221430630"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2543"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Immigration Services",
    "provider": {
      "@type": "Organization",
      "name": "CitaEx - Cita Extranjería"
    },
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Extranjería",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cita Previa Extranjería",
            "description": "Monitoreo automático para conseguir citas de extranjería"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Toma de Huellas",
            "description": "Gestión de citas para toma de huellas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Renovación NIE/TIE",
            "description": "Asistencia para renovar documentos de identidad y residencia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Asilo y Protección Internacional",
            "description": "Asesoramiento para solicitudes de asilo"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arraigo Social",
            "description": "Gestión de solicitudes de arraigo"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nacionalidad Española",
            "description": "Asistencia para obtener la nacionalidad española"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estudiantes Extranjeros",
            "description": "Servicios para estudiantes internacionales"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CitaEx - Cita Extranjería",
    "url": "https://micitaextranjeria.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://micitaextranjeria.com/buscar?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
