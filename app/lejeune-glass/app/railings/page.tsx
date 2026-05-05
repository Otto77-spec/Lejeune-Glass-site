import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glass Railing Installation Atlanta, GA | LeJeune Glass',
  description:
    'Custom frameless glass stair railings, balcony railings & interior glass panels installed across Metro Atlanta. Residential & commercial. Veteran-owned. Free estimate.',
  alternates: {
    canonical: 'https://www.lejeuneshowerglass.com/railings',
  },
  openGraph: {
    title: 'Glass Railing Installation Atlanta, GA | LeJeune Glass',
    description:
      'Custom frameless glass railings for stairs, balconies & interiors across Metro Atlanta. Veteran-owned, BBB A+ rated. Free estimate.',
    url: 'https://www.lejeuneshowerglass.com/railings',
    siteName: 'LeJeune Glass',
    type: 'website',
    images: [
      {
        url: 'https://www.lejeuneshowerglass.com/images/projects/railings/railings-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom frameless glass stair railing installation by LeJeune Glass, Metro Atlanta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glass Railing Installation Atlanta | LeJeune Glass',
    description: 'Custom frameless glass railings for stairs, balconies & interiors. Metro Atlanta. Free estimate.',
    images: ['https://www.lejeuneshowerglass.com/images/projects/railings/railings-1.jpg'],
  },
}

function RailingsStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Glass Railing Installation',
        description:
          'Custom frameless glass stair railings, balcony railings, interior hallway glass panels, and commercial railing systems designed and installed across Metro Atlanta, Georgia.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'LeJeune Shower & Glass, LLC',
          url: 'https://www.lejeuneshowerglass.com',
          telephone: '(678) 549-2993',
          areaServed: 'Metro Atlanta, GA',
        },
        areaServed: 'Metro Atlanta, GA',
        serviceType: 'Glass Railing Installation',
        offers: {
          '@type': 'Offer',
          description: 'Free in-home estimate for custom glass railing installation',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            description: 'Custom quote based on scope — free estimate provided',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.lejeuneshowerglass.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Glass Railings',
            item: 'https://www.lejeuneshowerglass.com/railings',
          },
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

export default function RailingsPage() {
  const railingTypes = [
    {
      name: 'Stair Railings',
      description:
        'Frameless glass panels that open up your staircase and flood the space with light. Available in post-mounted or standoff configurations, finished to match your existing hardware.',
    },
    {
      name: 'Balcony & Deck Railings',
      description:
        'Preserve your view and meet building code. Our balcony railing systems use tempered safety glass rated for outdoor exposure, custom-fitted to your deck dimensions.',
    },
    {
      name: 'Interior Hallway Panels',
      description:
        'Glass panel partitions and open-concept dividers that define space without closing it off. Ideal for mezzanines, lofts, and open floor plans.',
    },
    {
      name: 'Commercial Railing Systems',
      description:
        'Office buildings, retail spaces, hospitality venues, and multi-family developments. We handle commercial-scale projects with the same precision as residential work.',
    },
  ]

  const galleryImages = [
    { src: '/images/projects/railings/railings-1.jpg', alt: 'Custom frameless glass stair railing — Atlanta residential project' },
    { src: '/images/projects/railings/railings-2.jpg', alt: 'Interior glass hallway railing with brushed nickel hardware — Metro Atlanta' },
    { src: '/images/projects/railings/railings-3.jpg', alt: 'Open staircase frameless glass panel railing installation, Atlanta GA' },
    { src: '/images/projects/railings/railings-4.jpg', alt: 'Floor-to-ceiling glass railing system — Marietta, GA residence' },
    { src: '/images/projects/railings/railings-5.jpg', alt: 'Balcony glass railing installation — residential project Metro Atlanta' },
    { src: '/images/projects/railings/railings-6.jpg', alt: 'Custom glass stair railing with matte black hardware — Atlanta home' },
  ]

  return (
    <>
      <RailingsStructuredData />

      <nav aria-label="Breadcrumb" style={{ padding: '1rem 2rem', fontSize: '0.75rem', color: 'rgba(242,241,237,0.4)', letterSpacing: '0.1em', background: '#0a0a0a' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 0.5rem' }}>&rsaquo;</span>
        <span style={{ color: 'rgba(242,241,237,0.7)' }}>Glass Railings</span>
      </nav>

      <section style={{ background: '#0a0a0a', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(242,241,237,0.45)', marginBottom: '1.25rem' }}>
          LeJeune Glass — Metro Atlanta
        </p>

        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', lineHeight: 1.05, marginBottom: '1.5rem' }}>
          Glass Railing<br />Installation
        </h1>

        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'rgba(242,241,237,0.6)', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Custom frameless glass railings for staircases, balconies, and interior spaces
          across Metro Atlanta — designed to open your space, not define its limits.
        </p>

        <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Get a Free Estimate
        </a>
      </section>

      <section style={{ background: '#F2F1ED', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '1.5rem' }}>
            Atlanta&apos;s Custom Glass Railing Installer
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            A staircase is the spine of a home. A glass railing transforms it from a structural requirement
            into a design statement — one that lets light move freely through your space and keeps sightlines
            clear from floor to ceiling. LeJeune Glass specializes in custom frameless glass railing
            installation across Metro Atlanta, from Buckhead townhomes to Alpharetta new builds to
            Marietta renovation projects.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Every railing system we install is custom-measured and fabricated for your exact opening.
            We work in tempered safety glass — 3/8&quot; or 1/2&quot; thick depending on application — and carry
            hardware in every major finish: brushed nickel, matte black, polished chrome, oil-rubbed bronze,
            and satin gold. Post-mounted, standoff, and channel-mounted configurations are all available.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.85, marginBottom: '0' }}>
            As a veteran-owned, BBB Accredited (A+ rated) company with over 500 completed projects across
            Metro Atlanta, we bring the same standard of precision to every railing installation —
            residential or commercial. One point of contact from design through installation.
            No subcontractors. No surprises.
          </p>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', padding: '5rem 5vw' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', textAlign: 'center', marginBottom: '3rem' }}>
            Railing Systems We Install
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {railingTypes.map((type) => (
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
            Recent Railing Projects
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid rgba(10,10,10,0.12)', marginBottom: '2.5rem', width: '48px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {galleryImages.map((img) => (
              <div key={img.src} style={{ overflow: 'hidden' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="/gallery#railings" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '1px solid rgba(10,10,10,0.3)', paddingBottom: '2px' }}>
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
            We don&apos;t hand your project off to a subcontractor after the sale. LeJeune is your single point
            of contact from the first measurement to the final installation — a craftsman&apos;s standard applied
            to every panel, every hinge, every inch of your railing system.
          </p>

          <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Request Your Free Estimate
          </a>
        </div>
      </section>

      <section style={{ background: '#F2F1ED', padding: '3.5rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', marginBottom: '1rem' }}>
            Glass Railing Installation Across Metro Atlanta
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
