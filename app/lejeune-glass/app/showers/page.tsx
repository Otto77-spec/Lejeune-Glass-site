import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Frameless Shower Doors Atlanta, GA',
  description:
    'Premium frameless & semi-frameless shower enclosures custom-built for Metro Atlanta homes. 90°, neo-angle, barn door, inline & more. Veteran-owned. Free estimate.',
  alternates: {
    canonical: 'https://www.lejeuneshowerglass.com/showers',
  },
  openGraph: {
    title: 'Custom Frameless Shower Doors Atlanta, GA | LeJeune Glass',
    description:
      'Premium frameless & semi-frameless shower enclosures custom-built for Metro Atlanta homes. Veteran-owned, BBB A+ rated. Free estimate.',
    url: 'https://www.lejeuneshowerglass.com/showers',
    siteName: 'LeJeune Glass',
    type: 'website',
    images: [
      {
        url: 'https://www.lejeuneshowerglass.com/images/projects/shower-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom frameless glass shower enclosure installation by LeJeune Glass, Metro Atlanta',
      },
    ],
  },
}

function ShowersStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Custom Frameless Shower Enclosures',
        description:
          'Custom-designed and installed frameless and semi-frameless glass shower enclosures for Metro Atlanta homes and businesses. 90°, neo-angle, barn door, inline, and specialty configurations.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'LeJeune Shower & Glass, LLC',
          url: 'https://www.lejeuneshowerglass.com',
          telephone: '(678) 549-2993',
          areaServed: 'Metro Atlanta, GA',
        },
        areaServed: 'Metro Atlanta, GA',
        serviceType: 'Frameless Shower Installation',
        offers: {
          '@type': 'Offer',
          description: 'Free in-home estimate for custom shower enclosure installation',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.lejeuneshowerglass.com' },
          { '@type': 'ListItem', position: 2, name: 'Custom Showers', item: 'https://www.lejeuneshowerglass.com/showers' },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function ShowersPage() {
  const showerTypes = [
    {
      name: '90° Enclosures',
      description:
        'The most popular configuration for standard tub-to-shower conversions and corner showers. Clean lines, minimal hardware, maximum impact.',
    },
    {
      name: 'Neo-Angle Showers',
      description:
        'Designed for corner installations with angled glass panels. Ideal for smaller bathrooms where you want a frameless look without sacrificing floor space.',
    },
    {
      name: 'Barn Door Showers',
      description:
        'Sliding glass panels on exposed track hardware. A bold, modern statement piece that works beautifully in wide shower openings.',
    },
    {
      name: 'Inline Showers',
      description:
        'Panel-and-door configurations that run along a single wall. Perfect for walk-in showers, alcove installations, and open bathroom layouts.',
    },
    {
      name: 'Semi-Frameless',
      description:
        'Partial metal channels along select edges provide additional support at a lower price point while still delivering a clean, modern aesthetic.',
    },
  ]

  const galleryImages = [
    { src: '/images/projects/shower-1.jpg', alt: 'Frameless zero-edge glass shower enclosure installed in Atlanta-area home' },
    { src: '/images/projects/shower-2.jpg', alt: 'Custom spa-style corner frameless glass shower — Metro Atlanta residence' },
    { src: '/images/projects/shower-3.jpg', alt: 'Open walk-in frameless glass shower installation, Atlanta GA' },
  ]

  return (
    <>
      <ShowersStructuredData />

      <nav aria-label="Breadcrumb" style={{ padding: '1rem 2rem', fontSize: '0.75rem', color: 'rgba(242,241,237,0.4)', letterSpacing: '0.1em', background: '#0a0a0a' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 0.5rem' }}>&rsaquo;</span>
        <span style={{ color: 'rgba(242,241,237,0.7)' }}>Custom Showers</span>
      </nav>

      <section style={{ background: '#0a0a0a', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(242,241,237,0.45)', marginBottom: '1.25rem' }}>
          LeJeune Glass — Metro Atlanta
        </p>

        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', lineHeight: 1.05, marginBottom: '1.5rem' }}>
          Custom Frameless<br />Shower Doors
        </h1>

        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'rgba(242,241,237,0.6)', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Every shape, every style — precision-measured, custom-fabricated, and installed by our own team across Metro Atlanta.
        </p>

        <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Get a Free Estimate
        </a>
      </section>

      <section style={{ background: '#F2F1ED', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '1.5rem' }}>
            Atlanta&apos;s Custom Shower Glass Installer
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            A frameless shower enclosure is the single most impactful upgrade you can make to a bathroom.
            It opens the space, floods it with light, and turns a functional room into something that feels
            designed. LeJeune Glass has installed over 500 custom shower enclosures across Metro Atlanta —
            from Buckhead master baths to Alpharetta new construction to Marietta renovations.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Every enclosure we build starts with a precision field measurement. We work in 3/8&quot; and 1/2&quot;
            tempered safety glass and carry hardware in every major finish: brushed nickel, matte black,
            polished chrome, oil-rubbed bronze, and satin gold. Whether you need a simple single door or
            a multi-panel walk-in with fixed panels and a transom, we design and install it ourselves —
            no subcontractors, no middlemen.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85 }}>
            As a veteran-owned, BBB Accredited (A+ rated) company, we bring a craftsman&apos;s standard to
            every project. One point of contact from your free estimate through final installation.
          </p>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', textAlign: 'center', marginBottom: '3rem' }}>
            Shower Styles We Install
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {showerTypes.map((type) => (
              <div key={type.name} style={{ padding: '1.75rem', border: '1px solid rgba(242,241,237,0.1)' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.3rem', fontWeight: 300, color: '#F2F1ED', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                  {type.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(242,241,237,0.55)', lineHeight: 1.75 }}>
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#F2F1ED', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '0.75rem' }}>
            Recent Shower Projects
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid rgba(10,10,10,0.12)', marginBottom: '2.5rem', width: '48px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {galleryImages.map((img) => (
              <div key={img.src} style={{ overflow: 'hidden' }}>
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="/gallery#showers" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '1px solid rgba(10,10,10,0.3)', paddingBottom: '2px' }}>
              View Full Gallery &rarr;
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', marginBottom: '2.5rem' }}>
            Why Atlanta Chooses LeJeune
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { stat: '500+', label: 'Projects Completed' },
              { stat: '5★', label: 'Google Rating' },
              { stat: 'BBB A+', label: 'Accredited Business' },
              { stat: 'Veteran', label: 'Owned & Operated' },
            ].map((item) => (
              <div key={item.stat}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.5rem', fontWeight: 300, color: '#F2F1ED', letterSpacing: '0.05em' }}>{item.stat}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,241,237,0.4)', marginTop: '0.25rem' }}>{item.label}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '0.9rem', color: 'rgba(242,241,237,0.55)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            From the first measurement to the final installation, your project is handled by our own team —
            never subcontracted, never compromised. That&apos;s the LeJeune standard.
          </p>

          <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Request Your Free Estimate
          </a>
        </div>
      </section>

      <section style={{ background: '#F2F1ED', padding: '3.5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '1rem' }}>
            Frameless Shower Installation Across Metro Atlanta
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.8 }}>
            We serve Atlanta, Marietta, Alpharetta, Roswell, Sandy Springs, Dunwoody, Smyrna, Kennesaw,
            Buckhead, Midtown, and surrounding communities throughout Metro Atlanta, Georgia.
            Not sure if we cover your area? <a href="/#contact" style={{ color: '#0a0a0a' }}>Contact us</a> and we&apos;ll confirm.
          </p>
        </div>
      </section>
    </>
  )
}
