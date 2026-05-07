import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sauna & Gym Glass Walls Atlanta, GA',
  description:
    'Custom glass sauna enclosures & home gym glass walls installed across Metro Atlanta. Floor-to-ceiling panels for wellness spaces. Veteran-owned. Free estimate.',
  alternates: {
    canonical: 'https://www.lejeuneshowerglass.com/sauna-gym',
  },
  openGraph: {
    title: 'Sauna & Gym Glass Walls Atlanta, GA | LeJeune Glass',
    description:
      'Custom glass sauna enclosures & home gym glass walls across Metro Atlanta. Veteran-owned. Free estimate.',
    url: 'https://www.lejeuneshowerglass.com/sauna-gym',
    siteName: 'LeJeune Glass',
    type: 'website',
  },
}

function SaunaGymStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Sauna & Gym Glass Wall Installation',
        description:
          'Custom glass sauna enclosures, home gym glass walls, and wellness space glass panels designed and installed across Metro Atlanta, Georgia.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'LeJeune Shower & Glass, LLC',
          url: 'https://www.lejeuneshowerglass.com',
          telephone: '(678) 549-2993',
          areaServed: 'Metro Atlanta, GA',
        },
        areaServed: 'Metro Atlanta, GA',
        serviceType: 'Glass Wall Installation',
        offers: {
          '@type': 'Offer',
          description: 'Free in-home estimate for custom glass sauna and gym enclosures',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.lejeuneshowerglass.com' },
          { '@type': 'ListItem', position: 2, name: 'Sauna & Gym', item: 'https://www.lejeuneshowerglass.com/sauna-gym' },
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

export default function SaunaGymPage() {
  const glassTypes = [
    {
      name: 'Sauna Enclosures',
      description:
        'Tempered glass walls and doors engineered for high-heat, high-humidity sauna environments. Maintain visibility and an open feel while keeping heat contained.',
    },
    {
      name: 'Home Gym Glass Walls',
      description:
        'Floor-to-ceiling glass panels that open up your home gym, maximize natural light, and create a studio-like training environment.',
    },
    {
      name: 'Steam Room Glass',
      description:
        'Sealed glass enclosures designed for steam rooms and wet saunas. Precision-fitted to maintain steam containment while keeping the space feeling expansive.',
    },
    {
      name: 'Wellness Space Partitions',
      description:
        'Glass dividers for yoga rooms, meditation spaces, massage rooms, and home spas. Define the space without closing it off.',
    },
  ]

  return (
    <>
      <SaunaGymStructuredData />

      <nav aria-label="Breadcrumb" style={{ padding: '1rem 2rem', fontSize: '0.75rem', color: 'rgba(242,241,237,0.4)', letterSpacing: '0.1em', background: '#0a0a0a' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 0.5rem' }}>&rsaquo;</span>
        <span style={{ color: 'rgba(242,241,237,0.7)' }}>Sauna &amp; Gym</span>
      </nav>

      <section style={{ background: '#0a0a0a', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(242,241,237,0.45)', marginBottom: '1.25rem' }}>
          LeJeune Glass — Metro Atlanta
        </p>

        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', lineHeight: 1.05, marginBottom: '1.5rem' }}>
          Sauna &amp; Gym<br />Glass Walls
        </h1>

        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'rgba(242,241,237,0.6)', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Floor-to-ceiling glass panels for saunas, home gyms, and wellness spaces — creating an open concept that maximizes light, space, and movement.
        </p>

        <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Get a Free Estimate
        </a>
      </section>

      <section style={{ background: '#F2F1ED', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '1.5rem' }}>
            Glass for Your Wellness Space
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Home wellness spaces are no longer an afterthought — they&apos;re a design priority. Whether you&apos;re
            building a sauna, converting a room into a home gym, or creating a dedicated wellness retreat,
            glass walls transform the experience. They keep the space feeling open, flood it with natural
            light, and turn a functional room into something worth showing off.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            LeJeune Glass installs custom glass enclosures and wall systems for saunas, steam rooms,
            home gyms, yoga studios, and wellness spaces across Metro Atlanta. We use tempered safety
            glass rated for the specific demands of each environment — including high-heat sauna
            applications and high-humidity steam rooms.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85 }}>
            Every installation is custom-measured and fabricated for your exact space. Hardware in all
            major finishes. One point of contact from estimate through installation. Veteran-owned,
            BBB A+ rated.
          </p>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', textAlign: 'center', marginBottom: '3rem' }}>
            What We Install
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {glassTypes.map((type) => (
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
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '2.5rem' }}>
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
            Sauna &amp; Gym Glass Installation Across Metro Atlanta
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'rgba(242,241,237,0.5)', lineHeight: 1.8 }}>
            We serve Atlanta, Marietta, Alpharetta, Roswell, Sandy Springs, Dunwoody, Smyrna, Kennesaw,
            Buckhead, Midtown, and surrounding communities throughout Metro Atlanta, Georgia.
            Not sure if we cover your area? <a href="/#contact" style={{ color: '#F2F1ED' }}>Contact us</a> and we&apos;ll confirm.
          </p>
        </div>
      </section>
    </>
  )
}
