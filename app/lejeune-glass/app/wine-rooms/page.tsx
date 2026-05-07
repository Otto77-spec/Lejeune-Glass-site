import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Wine Room Glass Enclosures Atlanta',
  description:
    'Luxury glass wine room & display enclosures designed and installed across Metro Atlanta. Transform your space with custom frameless glass. Veteran-owned. Free estimate.',
  alternates: {
    canonical: 'https://www.lejeuneshowerglass.com/wine-rooms',
  },
  openGraph: {
    title: 'Custom Wine Room Glass Enclosures Atlanta | LeJeune Glass',
    description:
      'Luxury frameless glass wine room enclosures designed and installed across Metro Atlanta. Free estimate.',
    url: 'https://www.lejeuneshowerglass.com/wine-rooms',
    siteName: 'LeJeune Glass',
    type: 'website',
    images: [
      {
        url: 'https://www.lejeuneshowerglass.com/images/projects/wine-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom frameless glass wine room enclosure by LeJeune Glass, Metro Atlanta',
      },
    ],
  },
}

function WineRoomsStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Custom Wine Room Glass Enclosures',
        description:
          'Luxury frameless glass wine room enclosures, wine cellar walls, and display rooms designed and installed across Metro Atlanta, Georgia.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'LeJeune Shower & Glass, LLC',
          url: 'https://www.lejeuneshowerglass.com',
          telephone: '(678) 549-2993',
          areaServed: 'Metro Atlanta, GA',
        },
        areaServed: 'Metro Atlanta, GA',
        serviceType: 'Glass Wine Room Installation',
        offers: {
          '@type': 'Offer',
          description: 'Free in-home estimate for custom glass wine room enclosures',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.lejeuneshowerglass.com' },
          { '@type': 'ListItem', position: 2, name: 'Wine Rooms', item: 'https://www.lejeuneshowerglass.com/wine-rooms' },
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

export default function WineRoomsPage() {
  const wineRoomTypes = [
    {
      name: 'Full Glass Wine Cellars',
      description:
        'Floor-to-ceiling frameless glass walls that transform a dedicated room into a show-stopping wine cellar. Climate-compatible glass systems that work with your cooling unit.',
    },
    {
      name: 'Under-Stair Wine Rooms',
      description:
        'Custom glass enclosures that turn unused space beneath your staircase into an elegant wine display. One of the most popular configurations we install.',
    },
    {
      name: 'Display Rooms & Cases',
      description:
        'Not just for wine — custom glass enclosures for spirits collections, memorabilia, retail displays, and anything worth showcasing behind precision-fitted glass.',
    },
    {
      name: 'Glass Doors & Entryways',
      description:
        'Frameless glass doors for existing wine rooms or cellars. Single doors, French door pairs, and sliding configurations available in all hardware finishes.',
    },
  ]

  const galleryImages = [
    { src: '/images/projects/wine-1.jpg', alt: 'Custom glass wine room enclosure with climate control — Atlanta residence' },
    { src: '/images/projects/wine-2.jpg', alt: 'Floor-to-ceiling glass wine display room — luxury home Metro Atlanta' },
    { src: '/images/projects/wine-3.jpg', alt: 'Custom frameless glass wine cellar installation — Atlanta area' },
  ]

  return (
    <>
      <WineRoomsStructuredData />

      <nav aria-label="Breadcrumb" style={{ padding: '1rem 2rem', fontSize: '0.75rem', color: 'rgba(242,241,237,0.4)', letterSpacing: '0.1em', background: '#0a0a0a' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 0.5rem' }}>&rsaquo;</span>
        <span style={{ color: 'rgba(242,241,237,0.7)' }}>Wine Rooms</span>
      </nav>

      <section style={{ background: '#0a0a0a', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(242,241,237,0.45)', marginBottom: '1.25rem' }}>
          LeJeune Glass — Metro Atlanta
        </p>

        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', lineHeight: 1.05, marginBottom: '1.5rem' }}>
          Glass Wine Room<br />Enclosures
        </h1>

        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'rgba(242,241,237,0.6)', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Showcase your collection in a custom frameless glass enclosure — fully designed, fully precise, fully show-stopping.
        </p>

        <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Get a Free Estimate
        </a>
      </section>

      <section style={{ background: '#F2F1ED', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '1.5rem' }}>
            Atlanta&apos;s Custom Glass Wine Room Builder
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            A wine collection deserves more than a closet with a cooling unit. A glass wine room turns your
            collection into a centerpiece — visible from your living space, dining room, or entertainment area,
            while maintaining the precise climate control your wines need. LeJeune Glass designs and installs
            custom frameless glass wine enclosures across Metro Atlanta.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Every wine room we build is custom-measured for your space. We work with your contractor, designer,
            or cooling system installer to ensure perfect integration. Our glass systems are engineered to work
            alongside standard wine cellar cooling units — maintaining the seal your collection needs while
            giving you the visibility you want.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85 }}>
            From a compact under-stair display to a full walk-in cellar with floor-to-ceiling glass walls,
            we handle every configuration. Tempered safety glass in 3/8&quot; or 1/2&quot; thickness, with hardware
            in brushed nickel, matte black, polished chrome, oil-rubbed bronze, or satin gold.
          </p>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', textAlign: 'center', marginBottom: '3rem' }}>
            Wine Room Configurations
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {wineRoomTypes.map((type) => (
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
            Recent Wine Room Projects
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
            <a href="/gallery#wine-rooms" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '1px solid rgba(10,10,10,0.3)', paddingBottom: '2px' }}>
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
            Your wine room is a statement piece — it deserves the same precision and care as every other
            project we take on. One point of contact, no subcontractors, no compromises.
          </p>

          <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Request Your Free Estimate
          </a>
        </div>
      </section>

      <section style={{ background: '#F2F1ED', padding: '3.5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '1rem' }}>
            Glass Wine Room Installation Across Metro Atlanta
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
