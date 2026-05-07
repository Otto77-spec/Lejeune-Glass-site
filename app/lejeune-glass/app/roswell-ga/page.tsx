import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frameless Glass Showers & Railings Roswell, GA',
  description:
    'Custom frameless glass shower enclosures, glass railings, wine rooms & architectural glass installed in Roswell, GA. Veteran-owned. BBB A+ rated. Free estimate.',
  alternates: {
    canonical: 'https://www.lejeuneshowerglass.com/roswell-ga',
  },
  openGraph: {
    title: 'Frameless Glass Showers & Railings Roswell, GA | LeJeune Glass',
    description:
      'Custom frameless glass installations in Roswell, GA. Showers, railings, wine rooms & more. Free estimate.',
    url: 'https://www.lejeuneshowerglass.com/roswell-ga',
    siteName: 'LeJeune Glass',
    type: 'website',
  },
}

function LocationStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.lejeuneshowerglass.com/#business',
        name: 'LeJeune Shower & Glass, LLC',
        url: 'https://www.lejeuneshowerglass.com',
        telephone: '(678) 549-2993',
        areaServed: {
          '@type': 'City',
          name: 'Roswell',
          containedInPlace: { '@type': 'State', name: 'Georgia' },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.lejeuneshowerglass.com' },
          { '@type': 'ListItem', position: 2, name: 'Roswell, GA', item: 'https://www.lejeuneshowerglass.com/roswell-ga' },
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

export default function RoswellPage() {
  const services = [
    { name: 'Custom Shower Enclosures', href: '/showers', description: 'Frameless and semi-frameless shower doors in every configuration — 90°, neo-angle, barn door, inline, and more.' },
    { name: 'Glass Railings', href: '/railings', description: 'Stair railings, balcony railings, and interior glass panels that open up your space and flood it with light.' },
    { name: 'Wine Room Enclosures', href: '/wine-rooms', description: 'Custom glass wine cellars and display rooms — floor-to-ceiling panels, under-stair builds, and glass doors.' },
    { name: 'Sauna & Gym Glass', href: '/sauna-gym', description: 'Glass walls for saunas, steam rooms, home gyms, and wellness spaces engineered for high-heat environments.' },
    { name: 'Commercial Glass', href: '/commercial', description: 'Office partitions, conference rooms, storefronts, and architectural glass for Roswell businesses.' },
  ]

  return (
    <>
      <LocationStructuredData />

      <nav aria-label="Breadcrumb" style={{ padding: '1rem 2rem', fontSize: '0.75rem', color: 'rgba(242,241,237,0.4)', letterSpacing: '0.1em', background: '#0a0a0a' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 0.5rem' }}>&rsaquo;</span>
        <span style={{ color: 'rgba(242,241,237,0.7)' }}>Roswell, GA</span>
      </nav>

      <section style={{ background: '#0a0a0a', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(242,241,237,0.45)', marginBottom: '1.25rem' }}>
          LeJeune Glass — Serving Roswell
        </p>

        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', lineHeight: 1.05, marginBottom: '1.5rem' }}>
          Frameless Glass<br />Roswell, GA
        </h1>

        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'rgba(242,241,237,0.6)', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Custom frameless glass showers, railings, wine rooms, and architectural glass — designed and installed for Roswell homeowners and businesses.
        </p>

        <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Get a Free Estimate
        </a>
      </section>

      <section style={{ background: '#F2F1ED', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '1.5rem' }}>
            Roswell&apos;s Custom Glass Installer
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Roswell blends historic charm with modern luxury — and the homes here reflect both.
            From renovations along Canton Street and the Historic District to new builds in
            neighborhoods like Brookfield West, Horseshoe Bend, and Rivermoore Park, LeJeune Glass
            has been the go-to custom glass installer for Roswell homeowners who want frameless
            shower enclosures, glass railings, wine rooms, and architectural glass that matches
            the quality of their home.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            We work with homeowners, custom builders, and designers throughout Roswell and
            North Fulton. Every installation is precision-measured and handled by our own team —
            no subcontractors, no handoffs.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85 }}>
            Veteran-owned, BBB Accredited (A+ rated), with over 500 completed projects across
            Metro Atlanta. One point of contact from your free estimate through final installation.
          </p>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', textAlign: 'center', marginBottom: '3rem' }}>
            Services in Roswell
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {services.map((s) => (
              <a key={s.name} href={s.href} style={{ padding: '1.75rem', border: '1px solid rgba(242,241,237,0.1)', textDecoration: 'none' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.3rem', fontWeight: 300, color: '#F2F1ED', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                  {s.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(242,241,237,0.55)', lineHeight: 1.75 }}>
                  {s.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#F2F1ED', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '2.5rem' }}>
            Why Roswell Chooses LeJeune
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { stat: '500+', label: 'Projects Completed' },
              { stat: '5★', label: 'Google Rating' },
              { stat: 'BBB A+', label: 'Accredited Business' },
              { stat: 'Veteran', label: 'Owned & Operated' },
            ].map((item) => (
              <div key={item.stat}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.5rem', fontWeight: 300, color: '#0a0a0a', letterSpacing: '0.05em' }}>{item.stat}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginTop: '0.25rem' }}>{item.label}</div>
              </div>
            ))}
          </div>

          <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid #0a0a0a', color: '#0a0a0a', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Request Your Free Estimate
          </a>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', padding: '3.5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', marginBottom: '1rem' }}>
            Neighborhoods We Serve in Roswell
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'rgba(242,241,237,0.5)', lineHeight: 1.8 }}>
            Historic Roswell, Canton Street, Brookfield West, Horseshoe Bend, Rivermoore Park,
            Martin Landing, Willeo, Holcomb Bridge corridor, and all surrounding Roswell neighborhoods.
            We also serve nearby <a href="/alpharetta-ga" style={{ color: '#F2F1ED' }}>Alpharetta</a>,{' '}
            <a href="/marietta-ga" style={{ color: '#F2F1ED' }}>Marietta</a>,{' '}
            <a href="/sandy-springs-ga" style={{ color: '#F2F1ED' }}>Sandy Springs</a>,
            and all of Metro Atlanta.
          </p>
        </div>
      </section>
    </>
  )
}
