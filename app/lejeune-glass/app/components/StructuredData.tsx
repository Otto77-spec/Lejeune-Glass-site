export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.lejeuneshowerglass.com/#business",
        "name": "LeJeune Shower & Glass, LLC",
        "alternateName": "LeJeune Glass",
        "description": "Premium custom frameless glass shower enclosures, glass railings, wine rooms, and architectural glass installations across Metro Atlanta. Veteran-owned and operated.",
        "url": "https://www.lejeuneshowerglass.com",
        "logo": "https://www.lejeuneshowerglass.com/images/lejeune-logo.png",
        "image": "https://www.lejeuneshowerglass.com/images/og-hero.jpg",
        "telephone": "(678) 549-2993",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Atlanta",
          "addressRegion": "GA",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 33.749,
          "longitude": -84.388
        },
        "areaServed": [
          "Atlanta, GA", "Marietta, GA", "Alpharetta, GA",
          "Roswell, GA", "Sandy Springs, GA", "Buckhead, GA",
          "Smyrna, GA", "Kennesaw, GA", "Metro Atlanta"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Cash, Credit Card, Check",
        "hasCredential": "BBB Accredited Business A+ Rating",
        "sameAs": [
          "https://www.instagram.com/lejeuneshowerglass",
          "https://www.facebook.com/lejeuneshowerglass"
        ]
      },
      {
        "@type": "Service",
        "name": "Custom Frameless Shower Enclosures",
        "description": "Custom-designed and installed frameless and semi-frameless glass shower enclosures for Metro Atlanta homes and businesses.",
        "provider": { "@id": "https://www.lejeuneshowerglass.com/#business" },
        "areaServed": "Metro Atlanta, GA",
        "serviceType": "Glass Installation"
      },
      {
        "@type": "Service",
        "name": "Glass Railing Installation",
        "description": "Custom frameless glass stair railings, balcony railings, and interior glass panels for residential and commercial properties in Metro Atlanta.",
        "provider": { "@id": "https://www.lejeuneshowerglass.com/#business" },
        "areaServed": "Metro Atlanta, GA",
        "serviceType": "Glass Installation"
      },
      {
        "@type": "Service",
        "name": "Custom Wine Room Glass Enclosures",
        "description": "Luxury frameless glass wine room and display enclosures designed and installed for Metro Atlanta homes.",
        "provider": { "@id": "https://www.lejeuneshowerglass.com/#business" },
        "areaServed": "Metro Atlanta, GA",
        "serviceType": "Glass Installation"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
