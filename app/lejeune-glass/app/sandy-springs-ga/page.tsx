import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frameless Glass Showers & Railings Sandy Springs, GA',
  description:
    'Custom frameless glass shower enclosures, glass railings, wine rooms & architectural glass installed in Sandy Springs, GA. Veteran-owned. BBB A+ rated. Free estimate.',
  alternates: {
    canonical: 'https://www.lejeuneshowerglass.com/sandy-springs-ga',
  },
  openGraph: {
    title: 'Frameless Glass Showers & Railings Sandy Springs, GA | LeJeune Glass',
    description:
      'Custom frameless glass installations in Sandy Springs, GA. Showers, railings, wine rooms & more. Free estimate.',
    url: 'https://www.lejeuneshowerglass.com/sandy-springs-ga',
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
          name: 'Sandy Springs',
          containedInPlace: { '@type': 'State', name: 'Georgia' },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.lejeuneshowerglass.com' },
          { '@type': 'ListItem', position: 2, name: 'Sandy Springs, GA', item: 'https://www.lejeuneshowerglass.com/sandy-springs-ga' },
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

export default function SandySpringsPage() {
  const services = [
    { name: 'Custom Shower Enclosures', href: '/showers', description: 'Frameless and semi-frameless shower doors in every configuration — 90°, neo-angle, barn door, inline, and more.' },
    { name: 'Glass Railings', href: '/railings', description: 'Stair railings, balcony railings, and interior glass panels that open up your space and flood it with light.' },
    { name: 'Wine Room Enclosures', href: '/wine-rooms', description: 'Custom glass wine cellars and display rooms — floor-to-ceiling panels, under-stair builds, and glass doors.' },
    { name: 'Sauna & Gym Glass', href: '/sauna-gym', description: 'Glass walls for saunas, steam rooms, home gyms, and wellness spaces engineered for high-heat environments.' },
    { name: 'Commercial Glass', href: '/commercial', description: 'Office partitions, conference rooms, storefronts, and architectural glass for Sandy Springs businesses.' },
  ]

  return (
    <>
      <LocationStructuredData />

      <nav aria-label="Breadcrumb" style={{ padding: '1rem 2rem', fontSize: '0.75rem', color: 'rgba(242,241,237,0.4)', letterSpacing: '0.1em', background: '#0a0a0a' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 0.5rem' }}>&rsaquo;</span>
        <span style={{ color: 'rgba(242,241,237,0.7)' }}>Sandy Springs, GA</span>
      </nav>

      <section style={{ background: '#0a0a0a', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(242,241,237,0.45)', marginBottom: '1.25rem' }}>
          LeJeune Glass — Serving Sandy Springs
        </p>

        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', lineHeight: 1.05, marginBottom: '1.5rem' }}>
          Frameless Glass<br />Sandy Springs, GA
        </h1>

        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'rgba(242,241,237,0.6)', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Custom frameless glass showers, railings, wine rooms, and architectural glass — designed and installed for Sandy Springs homeowners and businesses.
        </p>

        <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Get a Free Estimate
        </a>
      </section>

      <section style={{ background: '#F2F1ED', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '1.5rem' }}>
            Sandy Springs&apos; Custom Glass Installer
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Sandy Springs sits at the intersection of luxury living and urban convenience — and the
            homes here demand finishes to match. From the estates along Riverside Drive and Powers
            Ferry to modern condominiums in the City Springs district, LeJeune Glass has been
            installing custom frameless glass throughout Sandy Springs. Shower enclosures, glass
            stair railings, wine rooms, and commercial glass — all precision-measured and installed
            by our own team.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            We work with homeowners, builders, designers, and property managers across Sandy Springs
            and the surrounding Perimeter area. Whether it&apos;s a master bath renovation in Spalding
            Drive or a commercial office buildout near Perimeter Mall, we bring the same standard
            of craftsmanship to every project.
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
            Services in Sandy Springs
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
            Why Sandy Springs Chooses LeJeune
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
            Neighborhoods We Serve in Sandy Springs
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'rgba(242,241,237,0.5)', lineHeight: 1.8 }}>
            Riverside, Powers Ferry, Spalding Drive, City Springs, Perimeter,
            Mount Vernon, Dunwoody border, Hammond Drive, and all surrounding Sandy Springs neighborhoods.
            We also serve nearby <a href="/roswell-ga" style={{ color: '#F2F1ED' }}>Roswell</a>,{' '}
            <a href="/marietta-ga" style={{ color: '#F2F1ED' }}>Marietta</a>,{' '}
            <a href="/alpharetta-ga" style={{ color: '#F2F1ED' }}>Alpharetta</a>,
            and all of Metro Atlanta.
          </p>
        </div>
      </section>
    </>
  )
}
