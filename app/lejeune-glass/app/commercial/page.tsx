import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Glass Installation Atlanta, GA',
  description:
    'Commercial glass partitions, storefronts, office glass walls & architectural glass installed across Metro Atlanta. Veteran-owned. BBB A+ rated. Free estimate.',
  alternates: {
    canonical: 'https://www.lejeuneshowerglass.com/commercial',
  },
  openGraph: {
    title: 'Commercial Glass Installation Atlanta, GA | LeJeune Glass',
    description:
      'Commercial glass partitions, storefronts, office walls & architectural glass across Metro Atlanta. Free estimate.',
    url: 'https://www.lejeuneshowerglass.com/commercial',
    siteName: 'LeJeune Glass',
    type: 'website',
    images: [
      {
        url: 'https://www.lejeuneshowerglass.com/images/projects/office-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Commercial glass partition installation by LeJeune Glass, Metro Atlanta',
      },
    ],
  },
}

function CommercialStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Commercial Glass Installation',
        description:
          'Commercial glass partitions, office glass walls, storefront glass, conference room enclosures, and architectural glass systems installed across Metro Atlanta, Georgia.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'LeJeune Shower & Glass, LLC',
          url: 'https://www.lejeuneshowerglass.com',
          telephone: '(678) 549-2993',
          areaServed: 'Metro Atlanta, GA',
        },
        areaServed: 'Metro Atlanta, GA',
        serviceType: 'Commercial Glass Installation',
        offers: {
          '@type': 'Offer',
          description: 'Free estimate for commercial glass installation projects',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.lejeuneshowerglass.com' },
          { '@type': 'ListItem', position: 2, name: 'Commercial Glass', item: 'https://www.lejeuneshowerglass.com/commercial' },
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

export default function CommercialPage() {
  const commercialTypes = [
    {
      name: 'Office Partitions',
      description:
        'Frameless glass walls and dividers that create private offices and meeting spaces without sacrificing the open, collaborative feel of your workspace.',
    },
    {
      name: 'Conference Rooms',
      description:
        'Floor-to-ceiling glass conference room enclosures with frameless doors. Sound-dampening options available for executive and client-facing spaces.',
    },
    {
      name: 'Storefront Glass',
      description:
        'Custom glass storefronts and entryways for retail, hospitality, and commercial buildings. Designed to maximize visibility and curb appeal.',
    },
    {
      name: 'Multi-Family & Hospitality',
      description:
        'Shower enclosures, railings, and glass features for apartment buildings, condominiums, hotels, and hospitality venues at commercial scale.',
    },
  ]

  const galleryImages = [
    { src: '/images/projects/office-1.jpg', alt: 'Frameless glass office partition — commercial installation Atlanta' },
    { src: '/images/projects/office-2.jpg', alt: 'Commercial glass facade installation — Atlanta business' },
    { src: '/images/projects/office-3.jpg', alt: 'Open-plan frameless glass room divider — commercial space Metro Atlanta' },
  ]

  return (
    <>
      <CommercialStructuredData />

      <nav aria-label="Breadcrumb" style={{ padding: '1rem 2rem', fontSize: '0.75rem', color: 'rgba(242,241,237,0.4)', letterSpacing: '0.1em', background: '#0a0a0a' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 0.5rem' }}>&rsaquo;</span>
        <span style={{ color: 'rgba(242,241,237,0.7)' }}>Commercial Glass</span>
      </nav>

      <section style={{ background: '#0a0a0a', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(242,241,237,0.45)', marginBottom: '1.25rem' }}>
          LeJeune Glass — Metro Atlanta
        </p>

        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', lineHeight: 1.05, marginBottom: '1.5rem' }}>
          Commercial<br />Glass Installation
        </h1>

        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'rgba(242,241,237,0.6)', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Office partitions, storefronts, conference rooms, and architectural glass — commercial-scale projects with residential-level precision.
        </p>

        <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Get a Free Estimate
        </a>
      </section>

      <section style={{ background: '#F2F1ED', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '1.5rem' }}>
            Commercial Glass for Metro Atlanta
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            The same precision and craftsmanship we bring to residential projects translates directly
            to commercial work. LeJeune Glass installs glass partitions, storefronts, conference room
            enclosures, and architectural glass features for offices, retail spaces, hospitality venues,
            and multi-family developments across Metro Atlanta.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            We work directly with general contractors, architects, interior designers, and property
            managers. Whether it&apos;s a single conference room enclosure or a full-floor office buildout
            with dozens of glass partitions, we handle measurement, fabrication, and installation
            with the same single-point-of-contact approach that sets us apart on the residential side.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85 }}>
            Veteran-owned, BBB Accredited (A+ rated), fully licensed and insured. We meet commercial
            timelines and coordinate with your project schedule.
          </p>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', textAlign: 'center', marginBottom: '3rem' }}>
            Commercial Applications
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {commercialTypes.map((type) => (
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
            Recent Commercial Projects
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
            <a href="/gallery#commercial" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '1px solid rgba(10,10,10,0.3)', paddingBottom: '2px' }}>
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
            Commercial projects deserve the same craftsmanship as custom residential work. We bring
            that standard to every commercial installation — on schedule and on spec.
          </p>

          <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Request Your Free Estimate
          </a>
        </div>
      </section>

      <section style={{ background: '#F2F1ED', padding: '3.5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '1rem' }}>
            Commercial Glass Installation Across Metro Atlanta
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
